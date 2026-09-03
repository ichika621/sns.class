/* =========================================================================
   Shared content-block renderer — used by both the web app (app.js) and
   the print manual (print/print.js) so the two stay visually consistent.
   ========================================================================= */
window.esc = function esc(s){ return (s==null? "": String(s)); };

/* Markdown-style **bold** -> <strong>. Text is HTML-escaped first, so this is safe
   even though the source strings may contain raw double-asterisks. Mirrors the
   genuine bold-run emphasis found in the source docx (see js/content-*.js). */
window.mdBold = function mdBold(s){
  var t = window.esc(s);
  return t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
};

window.renderBlock = function renderBlock(b, UI){
  var esc = window.esc;
  var mb = window.mdBold;
  switch(b.type){
    case "heading": return '<h2 class="block-heading">'+esc(b.text)+'</h2>';
    case "subheading": return '<h3 class="block-subheading">'+esc(b.text)+'</h3>';
    case "para": return '<p class="block-para">'+mb(b.text)+'</p>';
    case "note": return '<div class="note-box">'+icon("info")+'<span>'+mb(b.text)+'</span></div>';
    case "leadBox": return '<div class="lead-box">'+mb(b.text)+'</div>';
    case "goalBox": return '<div class="goal-box">'+mb(b.text)+'</div>';
    case "vennBox": return '<div class="venn-box">'+esc(b.text)+'</div>';
    case "decisionBox": return '<div class="decision-box">'+mb(b.text)+'</div>';
    case "list":
      return '<ul class="block-list">'+b.items.map(function(it){ return '<li><span>'+mb(it)+'</span></li>'; }).join("")+'</ul>';
    case "quoteList":
      return '<ul class="quote-list">'+b.items.map(function(it){ return '<li>'+mb(it)+'</li>'; }).join("")+'</ul>';
    case "cards3":
      return '<div class="cards3">'+b.items.map(function(it){
        return '<div class="c3-item"><div class="c3-icon">'+icon(it.icon)+'</div><div class="c3-label">'+esc(it.label)+'</div><div class="c3-title">'+esc(it.title)+'</div></div>';
      }).join("")+'</div>';
    case "flow":
      return '<div class="flow-diagram">'+(b.title? '<div class="flow-title">'+esc(b.title)+'</div>':'')+
        '<div class="flow-steps">'+b.steps.map(function(s,i){
          var isObj = s && typeof s === "object";
          var txt = isObj ? s.text : s;
          var note = isObj ? s.note : null;
          return (i>0? '<div class="flow-arrow">'+icon("arrowRight")+'</div>':'')+
            '<div class="flow-step">'+esc(txt)+(note? '<div class="flow-step-note">'+esc(note)+'</div>':'')+'</div>';
        }).join("")+'</div></div>';
    case "targetCard":
      return '<div class="target-card"><div class="tag">'+esc(b.tag)+'</div><div><h4>'+esc(b.title)+'</h4><p>'+mb(b.body)+'</p>'+
        (b.flow? '<div class="target-flow">'+b.flow.map(function(f,i){ return (i>0? '<span>→</span>':'')+'<span>'+esc(f)+'</span>'; }).join("")+'</div>':'')+
        '</div></div>';
    case "example":
      return '<div class="example-block"><div class="example-row">'+
        '<div class="example-cell bad"><span class="example-tag bad">'+icon("xCircle")+' '+esc(UI.ngLabel)+'</span>'+
        '<div class="example-text">'+mb(b.bad)+'</div>'+(b.badWhy? '<div class="example-why"><b>'+esc(UI.whyLabel)+'</b> '+mb(b.badWhy)+'</div>':'')+'</div>'+
        '<div class="example-cell good"><span class="example-tag good">'+icon("checkCircle")+' '+esc(UI.goodLabel)+'</span>'+
        (b.isStory? '<div class="story-example">'+mb(b.good)+'</div>' : '<div class="example-text">'+mb(b.good)+'</div>'+(b.goodWhy? '<div class="example-why"><b>'+esc(UI.whyLabel)+'</b> '+mb(b.goodWhy)+'</div>':''))+
        '</div></div></div>';
    case "categoryHeading":
      return '<div class="category-heading"><div class="cat-num">'+esc(b.num)+'</div><h3>'+esc(b.title)+'</h3></div>'+
        '<div class="category-body">'+mb(b.body)+'</div>';
    case "capcutStep":
      return '<div class="capcut-step'+(b.src? '':' no-video')+'">'+
        (b.src? '<div class="cs-video"><video controls playsinline preload="metadata"'+(b.poster? ' poster="'+esc(b.poster)+'"':'')+'>'+
          (b.webm? '<source src="'+esc(b.webm)+'" type="video/webm">':'')+
          '<source src="'+esc(b.src)+'" type="video/mp4"></video></div>':'')+
        '<div class="cs-text">'+
          '<div class="category-heading"><div class="cat-num">'+esc(b.num)+'</div><h3>'+esc(b.title)+'</h3></div>'+
          '<div class="category-body">'+mb(b.body)+'</div>'+
          (b.steps? '<ol class="cs-steps">'+b.steps.map(function(s){ return '<li>'+mb(s)+'</li>'; }).join("")+'</ol>':'')+
        '</div>'+
      '</div>';
    case "ratioMockup":
      return '<div class="ratio-mockup"><div class="ratio-box '+(b.ratio==="9:16"?"r916":"r45")+'">'+esc(b.ratio)+'</div><div class="ratio-caption">'+esc(b.label)+'</div></div>';
    case "gridMockup":
      return '<div class="grid-mockup"><div class="gm-frame"><div class="gm-line gm-v1"></div><div class="gm-line gm-v2"></div><div class="gm-line gm-h1"></div><div class="gm-line gm-h2"></div><div class="gm-face"></div><div class="gm-note">grid overlay</div></div></div>';
    case "statBox":
      return '<div class="stat-box'+(b.emphasis?" emphasis":"")+(b.muted?" muted":"")+'"><div class="stat-num">'+esc(b.stat)+'</div><div class="stat-label">'+esc(b.label)+'</div></div>';
    case "videoEmbed":
      return '<div class="video-embed'+(b.narrow?" narrow":"")+'">'+
        '<video controls playsinline preload="metadata"'+(b.poster? ' poster="'+esc(b.poster)+'"':'')+'>'+
        (b.webm? '<source src="'+esc(b.webm)+'" type="video/webm">':'')+
        '<source src="'+esc(b.src)+'" type="video/mp4"></video>'+
        (b.caption? '<div class="video-caption"><b>'+icon("play","icon")+' '+esc(b.captionLabel||"")+'</b> '+mb(b.caption)+'</div>':'')+
        '</div>';
    case "imgFigure":
      return '<div class="img-figure'+(b.narrow?" narrow":"")+'"><img src="'+esc(b.src)+'" alt="'+esc(b.alt||"")+'">'+
        (b.caption? '<div class="img-figure-caption">'+mb(b.caption)+'</div>':'')+
        '</div>';
    case "structureFlow":
      return '<div class="structure-flow'+(b.compact?' compact':'')+'">'+b.steps.map(function(s){
        return '<div class="sf-item"><div class="sf-title">'+esc(s.title)+'</div><div class="sf-body">'+mb(s.body)+'</div>'+
          (s.examples? '<div class="sf-examples">'+s.examples.map(function(e){ return '<span>'+esc(e)+'</span>'; }).join("")+'</div>':'')+
          '</div>';
      }).join("")+'</div>';
    case "formatTable":
      return '<div class="format-table">'+b.rows.map(function(r){
        return '<div class="format-row"><div class="fmt-val">'+esc(r.value)+'</div><div><div class="fmt-label">'+esc(r.label)+'</div><div class="fmt-note">'+esc(r.note)+'</div></div></div>';
      }).join("")+'</div>';
    case "goodng":
      return '<div class="goodng-inline"><span class="pill ng">'+esc(b.ngLabel)+'</span><span class="arrow">→</span><span class="pill good">'+esc(b.goodLabel)+'</span></div>'+
        (b.note? '<div class="goodng-note">'+esc(b.note)+'</div>':'');
    case "hookPatterns":
      return '<div class="hook-patterns">'+b.items.map(function(p){
        return '<div class="hook-pattern"><div class="hp-name">'+esc(p.name)+'</div><div class="hp-example">"'+esc(p.example)+'"</div></div>';
      }).join("")+'</div>';
    case "hashtagBox":
      return '<div class="hashtag-box">'+
        '<div class="hashtag-col"><div class="hc-label">'+esc(b.fixedLabel)+'</div><div class="hc-tags">'+b.fixed.map(function(t){ return '<span>'+esc(t)+'</span>'; }).join("")+'</div></div>'+
        '<div class="hashtag-col"><div class="hc-label">'+esc(b.contentLabel)+'</div><div class="hc-tags">'+b.content.map(function(t){ return '<span>'+esc(t)+'</span>'; }).join("")+'</div></div>'+
        '</div>';
    case "timeBox":
      return '<div class="time-box">'+icon("clock","icon")+'<div><div class="time-num">'+esc(b.time)+'</div><div class="time-label">'+esc(b.label)+'</div></div></div>';
    case "baPhotos":
      return '<div class="ba-strip">'+
        '<figure><img src="'+esc(b.before.src)+'" alt="'+esc(b.before.caption)+'"><span class="ba-tag before">BEFORE</span></figure>'+
        '<figure><img src="'+esc(b.after.src)+'" alt="'+esc(b.after.caption)+'"><span class="ba-tag after">AFTER</span></figure>'+
        '</div><div class="img-credit">'+esc(b.before.caption)+' / '+esc(b.after.caption)+' — '+esc(b.credit)+'</div>';
    case "canvaLink":
      return '<div class="canva-link-box"><div class="cl-text">'+esc(b.url)+'</div><a class="btn btn-white" href="'+esc(b.url)+'" target="_blank" rel="noopener">'+esc(b.label)+' '+icon("arrowRight")+'</a></div>';
    case "promptBox":
      return '<div class="prompt-box">'+
        (b.label? '<div class="prompt-box-label">'+icon("sparkle","icon")+' '+esc(b.label)+'</div>':'')+
        '<pre class="prompt-text">'+esc(b.text)+'</pre>'+
        '<button type="button" class="btn btn-white prompt-copy-btn screen-only" data-copied-label="'+esc(b.copiedLabel||"Copied!")+'">'+icon("copy","icon")+' <span class="prompt-copy-label">'+esc(b.copyLabel||"Copy")+'</span></button>'+
        (b.note? '<div class="prompt-box-note">'+mb(b.note)+'</div>':'')+
        '</div>';
    default: return "";
  }
};
