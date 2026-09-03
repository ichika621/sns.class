/* =========================================================================
   Quiz module — supports mcq / truefalse / goodng question types
   ========================================================================= */
(function(){
  "use strict";

  function mount(rootEl, questions, UI, headingText){
    if(!rootEl) return;
    var i = 0, score = 0, answered = false;
    var heading = headingText || UI.sectionQuizHeading;

    function render(){
      if(i >= questions.length){ renderResult(); return; }
      var q = questions[i];
      var dots = questions.map(function(_,idx){
        var cls = idx<i ? "done" : (idx===i ? "current" : "");
        return '<div class="qp-dot '+cls+'"></div>';
      }).join("");

      var html = '<h2 class="block-heading" style="margin-top:0;border-top:none;padding-top:0">'+esc(heading)+'</h2>'+
        '<div class="quiz-progress">'+dots+'</div>'+
        '<div class="quiz-card"><div class="quiz-q">Q'+(i+1)+'. '+esc(q.q)+'</div>'+
        '<div id="quiz-answer-area"></div>'+
        '<div id="quiz-feedback-area"></div>'+
        '<div class="quiz-actions"><button class="btn btn-primary" id="quiz-next-btn" style="display:none">'+esc(UI.quizNext)+'</button></div>'+
        '</div>';
      rootEl.innerHTML = html;
      answered = false;
      renderAnswerArea(q);
    }

    function renderAnswerArea(q){
      var area = rootEl.querySelector("#quiz-answer-area");
      if(q.type==="mcq"){
        area.innerHTML = '<div class="quiz-options">'+q.options.map(function(o,idx){
          return '<button class="quiz-opt" data-idx="'+idx+'">'+esc(o)+'</button>';
        }).join("")+'</div>';
        area.querySelectorAll(".quiz-opt").forEach(function(btn){
          btn.addEventListener("click", function(){ handleMcq(q, parseInt(btn.dataset.idx,10), area); });
        });
      } else if(q.type==="truefalse"){
        area.innerHTML = '<div class="quiz-tf"><button data-v="true">True / ○</button><button data-v="false">False / ×</button></div>';
        area.querySelectorAll("button").forEach(function(btn){
          btn.addEventListener("click", function(){ handleTf(q, btn.dataset.v==="true", area); });
        });
      } else if(q.type==="goodng"){
        area.innerHTML = '<div class="quiz-goodng">'+
          '<button data-v="A">'+esc(q.optionA.label)+'</button>'+
          '<button data-v="B">'+esc(q.optionB.label)+'</button>'+
          '</div>';
        area.querySelectorAll("button").forEach(function(btn){
          btn.addEventListener("click", function(){ handleGoodNg(q, btn.dataset.v, area); });
        });
      }
    }

    function lockOptions(area){
      area.querySelectorAll("button").forEach(function(b){ b.disabled = true; });
    }

    function showFeedback(correct, explain){
      answered = true;
      if(correct) score++;
      var fb = rootEl.querySelector("#quiz-feedback-area");
      fb.innerHTML = '<div class="quiz-feedback '+(correct?"correct":"incorrect")+'">'+
        '<div class="qf-icon">'+icon(correct?"checkCircle":"xCircle")+'</div>'+
        '<div><div class="qf-title">'+esc(correct?UI.quizCorrect:UI.quizIncorrect)+'</div>'+
        '<div class="qf-body"><b>'+esc(UI.quizExplainHeading)+':</b> '+esc(explain)+'</div></div></div>';
      var nextBtn = rootEl.querySelector("#quiz-next-btn");
      nextBtn.style.display = "inline-flex";
      nextBtn.onclick = function(){ i++; render(); };
    }

    function handleMcq(q, idx, area){
      if(answered) return;
      area.querySelectorAll(".quiz-opt").forEach(function(btn,bidx){
        if(bidx===q.answer) btn.classList.add("correct");
        else if(bidx===idx) btn.classList.add("incorrect");
      });
      lockOptions(area);
      showFeedback(idx===q.answer, q.explain);
    }
    function handleTf(q, val, area){
      if(answered) return;
      lockOptions(area);
      area.querySelectorAll("button").forEach(function(btn){
        var v = btn.dataset.v==="true";
        if(v===q.answer) btn.classList.add("correct");
        else if(v===val && val!==q.answer) btn.classList.add("incorrect");
      });
      showFeedback(val===q.answer, q.explain);
    }
    function handleGoodNg(q, val, area){
      if(answered) return;
      lockOptions(area);
      var correctVal = q.optionA.verdict==="good" ? "A" : "B";
      area.querySelectorAll("button").forEach(function(btn){
        if(btn.dataset.v===correctVal) btn.classList.add("correct");
        else if(btn.dataset.v===val && val!==correctVal) btn.classList.add("incorrect");
      });
      showFeedback(val===correctVal, q.explain);
    }

    function renderResult(){
      var pct = Math.round((score/questions.length)*100);
      rootEl.innerHTML = '<h2 class="block-heading" style="margin-top:0;border-top:none;padding-top:0">'+esc(UI.quizFinishTitle)+'</h2>'+
        '<div class="quiz-result">'+
        '<div class="qr-score">'+score+' / '+questions.length+'</div>'+
        '<div class="qr-msg">'+esc(UI.quizScoreLabel)+': '+pct+'%</div>'+
        '<button class="btn btn-primary" id="quiz-retry-btn">'+icon("refresh")+' '+esc(UI.quizRetry)+'</button>'+
        '</div>';
      rootEl.querySelector("#quiz-retry-btn").addEventListener("click", function(){ i=0; score=0; render(); });
    }

    function esc(s){ return s==null?"":String(s); }
    render();
  }

  window.QuizModule = { mount: mount };
})();
