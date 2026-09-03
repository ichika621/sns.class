/* =========================================================================
   Checklist module — interactive pre-post checklist (Section 5)
   State persists (in-memory) across language switches within the session.
   ========================================================================= */
(function(){
  "use strict";
  var checkedKeys = {};   // "g-i" -> true
  var completed = false;

  function esc(s){ return s==null?"":String(s); }
  function totalItems(section){
    return section.groups.reduce(function(sum,g){ return sum+g.items.length; }, 0);
  }
  function checkedCount(){
    return Object.keys(checkedKeys).filter(function(k){ return checkedKeys[k]; }).length;
  }

  function linkify(text){
    var urlRe = /(https?:\/\/[^\s)]+)/g;
    var withBold = window.mdBold ? window.mdBold(text) : esc(text);
    return withBold.replace(urlRe, function(u){ return '<a href="'+u+'" target="_blank" rel="noopener">'+u+'</a>'; });
  }

  function mount(rootEl, section, UI){
    if(!rootEl) return;
    var total = totalItems(section);

    function render(){
      var html = '';
      section.groups.forEach(function(g, gi){
        html += '<div class="check-group"><h3>'+esc(g.title)+'</h3>';
        g.items.forEach(function(item, ii){
          var key = gi+"-"+ii;
          var checked = !!checkedKeys[key];
          html += '<div class="check-item'+(checked?' checked':'')+'" data-key="'+key+'">'+
            '<div class="cb">'+icon("check")+'</div>'+
            '<div class="ct">'+linkify(item)+'</div>'+
            '</div>';
        });
        html += '</div>';
      });

      html += completed
        ? '<div class="checklist-done-banner"><div class="cdb-title">'+icon("checkCircle")+' '+esc(UI.checklistDoneMsg)+'</div></div>'+
          '<div class="checklist-complete"><button class="btn btn-ghost" id="cl-reset-btn">'+icon("refresh")+' '+esc(UI.checklistReset)+'</button></div>'
        : '<div class="checklist-complete"><button class="btn btn-coral" id="cl-done-btn">'+icon("checkCircle")+' '+esc(UI.checklistDone)+'</button></div>';

      html += '<div class="checklist-final-note">'+icon("star")+' '+esc(UI.checklistFinalNote)+'</div>';

      rootEl.innerHTML = html;

      rootEl.querySelectorAll(".check-item").forEach(function(el){
        el.addEventListener("click", function(e){
          if(e.target.tagName==="A") return;
          var key = el.dataset.key;
          checkedKeys[key] = !checkedKeys[key];
          if(!checkedKeys[key]) completed = false;
          updateProgress();
          render();
        });
      });
      var doneBtn = document.getElementById("cl-done-btn");
      if(doneBtn) doneBtn.addEventListener("click", function(){ completed = true; render(); });
      var resetBtn = document.getElementById("cl-reset-btn");
      if(resetBtn) resetBtn.addEventListener("click", function(){ checkedKeys = {}; completed = false; render(); updateProgress(); });

      updateProgress();
    }

    function updateProgress(){
      var fill = document.getElementById("cl-fill");
      var count = document.getElementById("cl-count");
      if(!fill || !count) return;
      var c = checkedCount();
      fill.style.width = total ? Math.round((c/total)*100)+"%" : "0%";
      count.textContent = c+" / "+total;
    }

    render();
  }

  window.ChecklistModule = { mount: mount };
})();
