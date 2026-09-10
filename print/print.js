/* =========================================================================
   Print manual renderer — builds a static, paginated version of the same
   content used by the web app (index.html), for printing / saving as PDF.
   ========================================================================= */
(function(){
  "use strict";
  var esc = window.esc;
  var LANGS = { ja: window.CONTENT_JA, en: window.CONTENT_EN, ru: window.CONTENT_RU };

  var PRINT_UI = {
    ja: { coverTitle:"SNS運用マニュアル", coverSub:"JICA Kyrgyzstan Instagram運用ガイド ― 印刷用マニュアル", coverMeta:"社内資料 ／ Web版と同一内容",
      tocTitle:"目次", answerKey:"クイズの解答を見る（タップして開く）", answerLabel:"解説", practiceHeading:"実践ステップ", learnHeading:"このセクションで学ぶこと",
      finalTitle:"投稿する前に、もう一度。", finalBody:"投稿前確認チェックリストを上から順番に確認し、すべて完了したらアイスルーさん、スベトラーナさんに確認してください。",
      printBtn:"印刷 / PDFとして保存", langLabel:"言語", footNote:"本マニュアルは職員向け社内資料です。内容はWeb版と同一です。", coverPageLabel:"ページ" },
    en: { coverTitle:"Instagram SNS Manual", coverSub:"JICA Kyrgyzstan Instagram Operations Guide — Print Edition", coverMeta:"Internal reference / same content as the web version",
      tocTitle:"Contents", answerKey:"Show quiz answers (click to open)", answerLabel:"Explanation", practiceHeading:"Practice steps", learnHeading:"What you'll learn in this section",
      finalTitle:"One more look before you post.", finalBody:"Go through the Pre-Post Checklist from top to bottom, then confirm with Aisuluu and Svetlana once everything is checked.",
      printBtn:"Print / Save as PDF", langLabel:"Language", footNote:"This is an internal manual for staff use. Content matches the web version.", coverPageLabel:"Page" },
    ru: { coverTitle:"Руководство по Instagram", coverSub:"Инструкция по ведению Instagram JICA Кыргызстан — версия для печати", coverMeta:"Внутренний материал / содержание совпадает с веб-версией",
      tocTitle:"Содержание", answerKey:"Показать ответы теста (нажмите, чтобы открыть)", answerLabel:"Пояснение", practiceHeading:"Шаги на практике", learnHeading:"Чему вы научитесь в этом разделе",
      finalTitle:"Ещё раз проверьте перед публикацией.", finalBody:"Пройдите чек-лист перед публикацией сверху вниз и, когда всё отмечено, согласуйте с Айсулуу и Светланой.",
      printBtn:"Печать / Сохранить как PDF", langLabel:"Язык", footNote:"Это внутренний материал для сотрудников. Содержание совпадает с веб-версией.", coverPageLabel:"Стр." }
  };

  var VIDEO_NOTE = { ja: "この動画はWeb版でご覧いただけます。", en: "Watch this video in the web version of the manual.", ru: "Это видео можно посмотреть в веб-версии руководства." };

  /* Print can't embed a playable video, so a videoEmbed block falls back to its poster
     frame plus a short note pointing to the web version. Every other block type is
     rendered exactly as in the web app via the shared window.renderBlock(). */
  function renderBlockForPrint(b, UI, lang){
    if(b.type === "videoEmbed"){
      return '<div class="img-figure pm-avoid-break"><img src="'+esc(b.poster)+'" alt="">'+
        '<div class="img-figure-caption"><b>▶ '+esc(VIDEO_NOTE[lang]||VIDEO_NOTE.ja)+'</b><br>'+window.mdBold(b.caption||"")+'</div></div>';
    }
    if(b.type === "capcutStep"){
      return '<div class="capcut-step pm-avoid-break'+(b.poster? '':' no-video')+'">'+
        (b.poster? '<div class="cs-video"><img src="'+esc(b.poster)+'" alt=""><div class="cs-video-note">▶ '+esc(VIDEO_NOTE[lang]||VIDEO_NOTE.ja)+'</div></div>':'')+
        '<div class="cs-text">'+
          '<div class="category-heading"><div class="cat-num">'+esc(b.num)+'</div><h3>'+esc(b.title)+'</h3></div>'+
          '<div class="category-body">'+window.mdBold(b.body)+'</div>'+
          (b.steps? '<ol class="cs-steps">'+b.steps.map(function(s){ return '<li>'+window.mdBold(s)+'</li>'; }).join("")+'</ol>':'')+
        '</div>'+
      '</div>';
    }
    if(b.type === "wideStep"){
      return '<div class="wide-step pm-avoid-break'+(b.poster? '':' no-video')+'">'+
        (b.poster? '<div class="ws-video"><img src="'+esc(b.poster)+'" alt=""><div class="cs-video-note">▶ '+esc(VIDEO_NOTE[lang]||VIDEO_NOTE.ja)+'</div></div>':'')+
        '<div class="ws-text">'+
          '<div class="category-heading"><div class="cat-num">'+esc(b.num)+'</div><h3>'+esc(b.title)+'</h3></div>'+
          '<div class="category-body">'+window.mdBold(b.body)+'</div>'+
          (b.steps? '<ol class="cs-steps">'+b.steps.map(function(s){ return '<li>'+window.mdBold(s)+'</li>'; }).join("")+'</ol>':'')+
        '</div>'+
      '</div>';
    }
    if(b.type === "downloadLink"){
      /* A download link only makes sense in the interactive web version. */
      return "";
    }
    return window.renderBlock(b, UI);
  }

  var toneBg = { coral:"var(--coral2)", sky:"var(--jica-blue)", violet:"var(--violet)", amber:"var(--amber)", coral2:"var(--coral2)", green:"var(--green)" };

  function qs(name){ var m = new RegExp("[?&]"+name+"=([^&]+)").exec(location.search); return m? decodeURIComponent(m[1]) : null; }

  function renderQuiz(quiz, PUI, headingLabel){
    var html = headingLabel ? '<h3 class="block-subheading">'+esc(headingLabel)+'</h3>' : '';
    html += '<details class="pm-answer-key"><summary>'+esc(PUI.answerKey)+'</summary>';
    quiz.forEach(function(q, idx){
      html += '<div class="pm-quiz-q pm-avoid-break"><div class="pmq-title">Q'+(idx+1)+'. '+esc(q.q)+'</div><div class="pmq-opts">';
      if(q.type==="mcq"){
        q.options.forEach(function(o,oi){ html += '<div class="pmq-opt"><span class="box"></span><span>'+(oi===q.answer?'<b>✓ </b>':'')+esc(o)+'</span></div>'; });
      } else if(q.type==="truefalse"){
        html += '<div class="pmq-opt"><span class="box"></span><span>'+(q.answer===true?'<b>✓ </b>':'')+'True / ○</span></div>';
        html += '<div class="pmq-opt"><span class="box"></span><span>'+(q.answer===false?'<b>✓ </b>':'')+'False / ×</span></div>';
      } else if(q.type==="goodng"){
        var aGood = q.optionA.verdict==="good";
        html += '<div class="pmq-opt"><span class="box"></span><span>'+(aGood?'<b>✓ </b>':'')+esc(q.optionA.label)+'</span></div>';
        html += '<div class="pmq-opt"><span class="box"></span><span>'+(!aGood?'<b>✓ </b>':'')+esc(q.optionB.label)+'</span></div>';
      }
      html += '</div><div class="ak-item"><b>'+esc(PUI.answerLabel)+':</b> '+esc(q.explain)+'</div></div>';
    });
    html += '</details>';
    return html;
  }

  function renderSection(s, PUI, UI, lang){
    var html = '<div class="pm-page">';
    html += '<div class="pm-section-title pm-avoid-break">'+(s.mostImportant? '':'<div class="pm-num" style="background:'+toneBg[s.color]+'">'+esc(s.number)+'</div>')+'<h1>'+esc(s.title)+'</h1><p>'+esc(s.shortDesc)+'</p></div>';

    if(s.groups){
      html += '<p class="block-para" style="font-weight:700">'+esc(s.intro)+'</p>';
      s.groups.forEach(function(g){
        html += '<div class="pm-check-group pm-avoid-break"><h3>'+esc(g.title)+'</h3>';
        g.items.forEach(function(it){
          html += '<div class="pm-check-item"><span class="box"></span><span>'+linkify(it)+'</span></div>';
        });
        html += '</div>';
      });
      html += '</div>';
      return html;
    }

    if(s.isPlaceholder){
      html += '<p class="block-para"><b>'+esc(s.placeholderLead)+'</b></p><p class="block-para">'+esc(s.placeholderBody)+'</p>';
      html += '</div>';
      return html;
    }

    html += '<div class="pm-avoid-break" style="margin-bottom:18px;padding:14px 16px;background:var(--sky-tint);border-radius:12px">';
    html += '<div style="font-weight:800;font-size:13px;margin-bottom:8px">'+esc(PUI.learnHeading)+'</div><ul style="margin:0;padding-left:18px">';
    s.learn.forEach(function(t){ html += '<li style="font-size:12.5px;margin-bottom:4px">'+esc(t)+'</li>'; });
    html += '</ul></div>';

    if(s.tabs){
      /* Section 2 (Reel / Carousel / Caption): print renders every tab one after
         another, since a printed page has no concept of tab-switching. */
      html += s.topBlocks.map(function(b){ return renderBlockForPrint(b, UI, lang); }).join("");
      s.tabs.forEach(function(t){
        html += '<h2 class="block-heading" style="margin-top:34px">'+esc(t.label)+'</h2>';
        html += t.blocks.map(function(b){ return renderBlockForPrint(b, UI, lang); }).join("");
        if(t.quiz) html += renderQuiz(t.quiz, PUI, t.quizHeading);
      });
    } else {
      html += s.blocks.map(function(b){ return renderBlockForPrint(b, UI, lang); }).join("");

      if(s.practice){
        html += '<h3 class="block-subheading">'+esc(PUI.practiceHeading)+'</h3><ol style="padding-left:18px;margin-bottom:16px">';
        s.practice.forEach(function(t){ html += '<li style="font-size:12.5px;margin-bottom:6px">'+esc(t)+'</li>'; });
        html += '</ol>';
      }
      if(s.spotQuiz) html += renderQuiz(s.spotQuiz, PUI, UI.spotQuizHeading);
      if(s.quiz) html += renderQuiz(s.quiz, PUI);
    }

    html += '</div>';
    return html;
  }

  function linkify(text){
    var urlRe = /(https?:\/\/[^\s)]+)/g;
    var withBold = window.mdBold ? window.mdBold(text) : esc(text);
    return withBold.replace(urlRe, function(u){ return '<a href="'+u+'">'+u+'</a>'; });
  }

  function render(lang){
    var C = LANGS[lang], UI = C.ui, PUI = PRINT_UI[lang];
    document.documentElement.lang = lang;
    var html = '';
    html += '<div class="pm-cover pm-page"><div class="pm-mark">IG</div><h1>'+esc(PUI.coverTitle)+'</h1><p class="pm-sub">'+esc(PUI.coverSub)+'</p>'+
      '<p class="pm-sub" style="font-size:13px;opacity:.8">'+esc(UI.footerNote)+'</p>'+
      '<div class="pm-meta">'+esc(PUI.coverMeta)+'</div></div>';

    html += '<div class="pm-toc pm-page"><h2>'+esc(PUI.tocTitle)+'</h2><ol>';
    C.sections.forEach(function(s){
      html += '<li>'+(s.mostImportant? '':'<span class="toc-num">'+esc(s.number)+'</span>')+'<span>'+esc(s.title)+'</span><span class="toc-fill"></span><span class="toc-desc">'+esc(s.shortDesc)+'</span></li>';
    });
    html += '</ol></div>';

    C.sections.forEach(function(s){ html += renderSection(s, PUI, UI, lang); });

    html += '<div class="pm-final-page"><h2>'+esc(PUI.finalTitle)+'</h2><p>'+esc(PUI.finalBody)+'</p></div>';
    html += '<div class="pm-footer-note screen-only">'+esc(PUI.footNote)+'</div>';

    document.getElementById("print-root").innerHTML = html;
    document.querySelectorAll(".pm-lang-btn").forEach(function(b){ b.classList.toggle("active", b.dataset.lang===lang); });
    document.getElementById("pm-print-btn-label").textContent = PUI.printBtn;
  }

  document.addEventListener("DOMContentLoaded", function(){
    var lang = qs("lang") || "ja";
    if(!LANGS[lang]) lang = "ja";
    render(lang);
    document.querySelectorAll(".pm-lang-btn").forEach(function(b){
      b.addEventListener("click", function(){ render(b.dataset.lang); history.replaceState(null,"","?lang="+b.dataset.lang); });
    });
    document.getElementById("pm-print-btn").addEventListener("click", function(){ window.print(); });
  });
})();
