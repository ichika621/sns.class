/* =========================================================================
   SNS運用マニュアル — App shell: routing, i18n, block renderer
   ========================================================================= */
(function(){
  "use strict";

  var LANGS = { ja: window.CONTENT_JA, en: window.CONTENT_EN, ru: window.CONTENT_RU };
  var LANG_ORDER = ["ja","en","ru"];
  var state = { lang: "ja", route: "home", activeTab: {} };

  function getContent(){ return LANGS[state.lang]; }
  function getSection(id){ return getContent().sections.find(function(s){ return s.id===id; }); }

  /* ---------------- Block renderer (shared with print/print.js) ---------------- */
  var esc = window.esc;
  function renderBlock(b){ return window.renderBlock(b, I()); }

  function I(){ return getContent().ui; }

  /* ---------------- Home page ---------------- */
  function renderHome(){
    var C = getContent(), UI = C.ui;
    var s1=C.sections[0], s2=C.sections[1], s3=C.sections[2], s4=C.sections[3], s5=C.sections[4];
    var tones = { coral:"tone-coral", sky:"tone-sky", violet:"tone-violet", amber:"tone-amber", coral2:"tone-coral2" };

    function normalCard(s){
      return '<a class="sec-card '+tones[s.color]+(s.isPlaceholder?" placeholder":"")+'" href="#'+s.id+'">'+
        (s.isPlaceholder? '<span class="soon-badge">'+esc(UI.comingSoonTitle)+'</span>':'')+
        '<span class="num">'+esc(s.number)+'</span>'+
        '<div class="icon-wrap">'+icon(s.icon)+'</div>'+
        '<h3>'+esc(s.title)+'</h3><p>'+esc(s.shortDesc)+'</p>'+
        '<span class="learn-link">'+esc(UI.learnBtn)+' '+icon("arrowRight")+'</span></a>';
    }
    function featuredCard(s){
      return '<a class="sec-card featured tone-coral2" href="#'+s.id+'">'+
        '<div class="icon-wrap">'+icon(s.icon)+'</div>'+
        '<div style="flex:1"><span class="featured-badge">'+icon("star")+' '+esc(UI.badgeMostImportant)+'</span>'+
        '<h3>'+esc(s.number)+' &middot; '+esc(s.title)+'</h3><p>'+esc(s.shortDesc)+'</p></div>'+
        '<span class="btn btn-coral cta">'+esc(UI.startBtn)+' '+icon("arrowRight")+'</span></a>';
    }

    return ''+
    '<section class="hero">'+
      '<div class="container">'+
        '<div>'+
          '<span class="hero-eyebrow">'+icon("sparkle")+' '+esc(UI.siteSubtitle)+'</span>'+
          '<h1>'+esc(UI.siteTitle)+'</h1>'+
          '<p class="lead">'+esc(heroLead())+'</p>'+
          '<div class="hero-cta">'+
            '<a class="btn btn-white" href="#s5">'+icon("check")+' '+esc(C.sections[4].title)+'</a>'+
            '<a class="btn btn-outline-white" href="print/manual.html" target="_blank">'+icon("printer")+' '+esc(UI.printBtn)+'</a>'+
          '</div>'+
        '</div>'+
        '<div class="hero-visual">'+phoneMockup()+'</div>'+
      '</div>'+
    '</section>'+
    '<section class="section-py"><div class="container">'+
      '<div class="section-title-row"><div><div class="eyebrow">Instagram Guide</div><h2>'+esc(UI.siteTitle)+'</h2></div></div>'+
      '<div class="card-grid">'+
        featuredCard(s5)+
        normalCard(s1)+ normalCard(s2)+ normalCard(s3)+ normalCard(s4)+
      '</div>'+
    '</div></section>';
  }

  function heroLead(){
    var l = state.lang;
    if(l==="ja") return "Instagramを使って、JICAの活動をより分かりやすく、より多くの人に届ける。写真・図解・実例・クイズで、見ながら学べる社内向けSNS運用マニュアルです。";
    if(l==="ru") return "Использовать Instagram, чтобы рассказывать о деятельности JICA понятнее и доносить её до большего числа людей. Внутреннее руководство по ведению соцсетей: фото, схемы, примеры и тесты — учитесь, просматривая, а не просто читая.";
    return "Using Instagram to make JICA's work easier to understand and reach more people. An internal social media manual you learn by looking at — photos, diagrams, real examples, and quizzes.";
  }

  function phoneMockup(){
    return '<div class="phone-frame phone-2"><div class="screen"><div class="ig-top"><div class="ig-avatar"></div><div class="ig-name">jica_kyrgyzstan</div></div><div class="ig-photo"></div></div></div>'+
      '<div class="phone-frame"><div class="screen"><div class="ig-top"><div class="ig-avatar"></div><div class="ig-name">jica_kyrgyzstan</div></div>'+
      '<div class="ig-photo"></div><div class="ig-actions">'+icon("star","icon")+icon("message","icon")+icon("arrowRight","icon")+'</div>'+
      '<div class="ig-caption"><b>jica_kyrgyzstan</b> Why does this road stay usable even in winter? 🇯🇵🇰🇬 #JICA #JICAKyrgyzstan</div></div></div>';
  }

  /* ---------------- Section page ---------------- */
  function renderSection(s){
    var UI = I();
    if(s.groups){
      return sectionHero(s)+'<div class="page-body"><div class="container">'+
        '<div class="panel"><p class="block-para" style="font-size:16px;font-weight:700;margin-bottom:0">'+esc(s.intro)+'</p></div>'+
        '<div class="checklist-progress-wrap"><div class="container" style="padding:0"><div class="checklist-progress-bar"><div class="checklist-progress-fill" id="cl-fill"></div></div>'+
        '<div class="checklist-progress-text"><span id="cl-count">0 / 0</span><span>'+esc(UI.checklistProgress)+'</span></div></div></div>'+
        '<div class="panel" id="checklist-root"></div>'+
      '</div></div>';
    }
    if(s.isPlaceholder){
      return sectionHero(s)+
      '<div class="page-body"><div class="container">'+
        '<div class="panel"><div class="placeholder-wrap">'+
          '<span class="ph-badge">'+icon("sparkle")+' '+esc(UI.comingSoonTitle)+'</span>'+
          '<h2>'+esc(s.placeholderLead)+'</h2>'+
          '<p>'+esc(s.placeholderBody)+'</p>'+
          '<div class="ph-grid">'+UI.comingSoonList.map(function(t){ return '<div class="ph-slot">'+icon("video")+'<span>'+esc(t)+'</span></div>'; }).join("")+'</div>'+
        '</div></div>'+
      '</div></div>';
    }

    if(s.tabs){ return renderTabbedSection(s); }

    var body = '';
    body += learnBox(s);
    body += '<div class="panel">'+s.blocks.map(renderBlock).join("")+'</div>';
    if(s.practice) body += practicePanel(s);
    if(s.spotQuiz) body += '<div class="panel"><div id="spotquiz-root"></div></div>';
    if(s.quiz) body += '<div class="panel"><div id="quiz-root"></div></div>';

    return sectionHero(s)+'<div class="page-body"><div class="container">'+body+'</div></div>';
  }

  /* ---------------- Tabbed section (Section 2: Reel / Carousel / Caption) ---------------- */
  function renderTabbedSection(s){
    var body = '';
    body += learnBox(s);
    body += '<div class="panel">'+s.topBlocks.map(renderBlock).join("")+'</div>';
    body += '<div class="panel"><div class="sec-tabs" id="sec-tabs"></div><div id="tab-panel-root"></div></div>';
    body += '<div class="panel"><div id="tab-quiz-root"></div></div>';
    return sectionHero(s)+'<div class="page-body"><div class="container">'+body+'</div></div>';
  }

  function mountTabs(s){
    var UI = I();
    var idx = state.activeTab[s.id] || 0;
    if(idx >= s.tabs.length) idx = 0;

    function paint(){
      var tabsEl = document.getElementById("sec-tabs");
      var panelEl = document.getElementById("tab-panel-root");
      var quizEl = document.getElementById("tab-quiz-root");
      if(!tabsEl || !panelEl) return;
      tabsEl.innerHTML = s.tabs.map(function(t,i){
        return '<button type="button" class="sec-tab-btn'+(i===idx?" active":"")+'" data-tabidx="'+i+'">'+
          '<span class="sec-tab-num">'+(i+1)+'</span><span>'+esc(t.label)+'</span></button>';
      }).join("");
      var activeTab = s.tabs[idx];
      panelEl.innerHTML = activeTab.blocks.map(renderBlock).join("");
      if(quizEl){
        if(activeTab.quiz){ window.QuizModule && window.QuizModule.mount(quizEl, activeTab.quiz, UI, activeTab.quizHeading); }
        else { quizEl.innerHTML = ""; }
      }
      tabsEl.querySelectorAll(".sec-tab-btn").forEach(function(btn){
        btn.addEventListener("click", function(){
          state.activeTab[s.id] = parseInt(btn.dataset.tabidx,10);
          idx = state.activeTab[s.id];
          paint();
          panelEl.scrollIntoView({behavior:"smooth", block:"start"});
        });
      });
    }
    paint();
  }

  function learnBox(s){
    var UI = I();
    return '<div class="panel"><div class="learn-box"><div class="lb-icon">'+icon("target")+'</div><div>'+
      '<h2>'+esc(UI.sectionLearnHeading)+'</h2>'+
      '<ul>'+s.learn.map(function(t){ return '<li>'+icon("checkCircle")+'<span>'+esc(t)+'</span></li>'; }).join("")+'</ul>'+
      '</div></div></div>';
  }

  function practicePanel(s){
    var UI = I();
    return '<div class="panel"><h2 class="block-heading" style="margin-top:0;border-top:none;padding-top:0">'+esc(UI.sectionPracticeHeading)+'</h2>'+
      '<ol class="practice-list">'+s.practice.map(function(t){ return '<li><span>'+esc(t)+'</span></li>'; }).join("")+'</ol></div>';
  }

  function sectionHero(s){
    var UI = I();
    var toneBg = {
      coral:"linear-gradient(160deg,#FF6B57,#c8392c)", sky:"linear-gradient(160deg,#3AA6E0,#0056A6)",
      violet:"linear-gradient(160deg,#8B6FE0,#5c40b8)", amber:"linear-gradient(160deg,#F4A93B,#b8781a)",
      coral2:"linear-gradient(160deg,#E8483A,#a8281d)"
    };
    return '<section class="sec-hero" style="background:'+toneBg[s.color]+'">'+
      '<div class="container">'+
        '<a class="back" href="#home"><span style="display:inline-flex;transform:rotate(180deg)">'+icon("arrowRight","icon")+'</span> '+esc(UI.backHome)+'</a>'+
        '<div class="num-badge">'+esc(s.number)+'</div>'+
        '<h1>'+esc(s.title)+'</h1><p>'+esc(s.shortDesc)+'</p>'+
      '</div>'+
    '</section>';
  }

  /* ---------------- Router ---------------- */
  var root = document.getElementById("app");
  function render(){
    var route = state.route;
    document.documentElement.lang = state.lang;
    if(route==="home"){ root.innerHTML = renderHome(); }
    else {
      var s = getSection(route);
      if(!s){ state.route="home"; return render(); }
      root.innerHTML = renderSection(s);
      if(s.tabs){ mountTabs(s); }
      if(!s.isPlaceholder && !s.groups && !s.tabs && s.spotQuiz){ window.QuizModule && window.QuizModule.mount(document.getElementById("spotquiz-root"), s.spotQuiz, I(), I().spotQuizHeading); }
      if(!s.isPlaceholder && !s.groups && !s.tabs && s.quiz){ window.QuizModule && window.QuizModule.mount(document.getElementById("quiz-root"), s.quiz, I()); }
      if(s.groups && window.ChecklistModule){ window.ChecklistModule.mount(document.getElementById("checklist-root"), s, I()); }
    }
    window.scrollTo({top:0, behavior:"instant" in window.scrollTo ? "instant":"auto"});
    updateHeader();
  }

  function updateHeader(){
    var UI = I();
    document.getElementById("brand-title").textContent = UI.siteTitle;
    document.getElementById("brand-sub").textContent = UI.siteSubtitle;
    document.querySelectorAll(".lang-btn").forEach(function(b){ b.classList.toggle("active", b.dataset.lang===state.lang); });
    document.getElementById("nav-home-text").textContent = UI.home;
  }

  function onHashChange(){
    var h = location.hash.replace("#","") || "home";
    state.route = h;
    render();
  }

  function setLang(l){
    state.lang = l;
    try{ localStorage.setItem("jica_sns_lang", l); }catch(e){}
    render();
  }

  function initHeader(){
    var header = document.getElementById("site-header");
    header.querySelector(".brand").addEventListener("click", function(){ location.hash = "#home"; });
    header.querySelectorAll(".lang-btn").forEach(function(b){
      b.addEventListener("click", function(){ setLang(b.dataset.lang); });
    });
  }

  function initPromptCopy(){
    document.addEventListener("click", function(ev){
      var btn = ev.target.closest ? ev.target.closest(".prompt-copy-btn") : null;
      if(!btn) return;
      var box = btn.closest(".prompt-box");
      var pre = box ? box.querySelector(".prompt-text") : null;
      if(!pre) return;
      var text = pre.textContent;
      var label = btn.querySelector(".prompt-copy-label");
      var origText = label ? label.textContent : null;
      function flash(copiedText){
        btn.classList.add("copied");
        if(label) label.textContent = copiedText;
        setTimeout(function(){
          btn.classList.remove("copied");
          if(label && origText!=null) label.textContent = origText;
        }, 1800);
      }
      var copiedLabel = btn.dataset.copiedLabel || "Copied!";
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(function(){ flash(copiedLabel); }).catch(function(){
          fallbackCopy(text); flash(copiedLabel);
        });
      } else {
        fallbackCopy(text); flash(copiedLabel);
      }
    });
  }
  function fallbackCopy(text){
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand("copy"); }catch(e){}
    document.body.removeChild(ta);
  }

  window.addEventListener("hashchange", onHashChange);
  document.addEventListener("DOMContentLoaded", function(){
    var saved = null;
    try{ saved = localStorage.getItem("jica_sns_lang"); }catch(e){}
    if(saved && LANGS[saved]) state.lang = saved;
    initHeader();
    initPromptCopy();
    onHashChange();
  });

  window.App = { getContent: getContent, getSection: getSection, state: state };
})();
