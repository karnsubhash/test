// CodeOnWagesNote.jsx
//
// Opens an ACTUAL PDF (not a re-typed web page) but renders it as a clean,
// continuous, web-like reader — no browser PDF toolbar / download bar.
//
// How it works:
//  - The PDF is served as a static asset (put it in your app's `public/` folder).
//  - We render inside an <iframe srcDoc> (same pattern as AccountingNote) so the
//    reader's styles/scripts are isolated from your app.
//  - PDF.js is loaded from a CDN *inside* the iframe, so there is nothing to
//    install or configure in your build (no pdf worker setup headaches).
//  - Pages are painted to <canvas> lazily as you scroll, on a soft background
//    with page cards + shadows, a slim top bar (page count + zoom). Feels like a
//    document reader, not a PDF plugin.
//
// SETUP (one time):
//  1. Copy the PDF into your app's public folder as:  public/code-on-wages.pdf
//     (or pass a different path via the `src` prop).
//  2. Import and use it like AccountingNote — see RevisionViewer.
//
// Props:
//  - src        : path/URL to the PDF (default "/code-on-wages.pdf"). A relative
//                 path is resolved against the current origin.
//  - title      : shown in the reader's top bar.
//  - className   / style : forwarded to the <iframe>.

const PDFJS_VERSION = "3.11.174";

function buildReaderHtml(pdfUrl, title) {
  const CDN = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/" + PDFJS_VERSION;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title ? title.replace(/</g, "&lt;") : "Document"}</title>
<style>
  :root{
    --bg:#eef1f6; --bar:#ffffff; --ink:#1f2733; --muted:#6b7686;
    --line:#e2e6ee; --accent:#2f4a86; --shadow:0 6px 24px -10px rgba(20,30,50,.35);
  }
  @media (prefers-color-scheme: dark){
    :root{ --bg:#0f141b; --bar:#161c25; --ink:#e6ebf2; --muted:#93a0b3;
           --line:#232c38; --accent:#7aa0e6; --shadow:0 8px 26px -12px rgba(0,0,0,.7); }
  }
  *{ box-sizing:border-box; }
  html,body{ margin:0; height:100%; }
  body{
    background:var(--bg); color:var(--ink);
    font-family:system-ui,-apple-system,"Segoe UI",sans-serif;
    display:flex; flex-direction:column;
  }
  /* top bar */
  .bar{
    flex:none; display:flex; align-items:center; gap:14px;
    padding:10px 16px; padding-top:calc(10px + env(safe-area-inset-top,0px));
    background:var(--bar); border-bottom:1px solid var(--line);
    box-shadow:0 1px 0 rgba(0,0,0,.02); z-index:5;
  }
  .bar .ttl{ font-weight:600; font-size:14px; white-space:nowrap; overflow:hidden;
    text-overflow:ellipsis; }
  .bar .spacer{ flex:1; }
  .bar .pill{ font-size:12.5px; color:var(--muted); font-variant-numeric:tabular-nums;
    white-space:nowrap; }
  .zoom{ display:flex; align-items:center; gap:2px; }
  .zoom button{
    width:30px; height:30px; border:1px solid var(--line); background:transparent;
    color:var(--ink); border-radius:8px; cursor:pointer; font-size:16px; line-height:1;
    display:grid; place-items:center;
  }
  .zoom button:hover{ border-color:var(--accent); color:var(--accent); }
  .zoom .lvl{ font-size:12px; color:var(--muted); min-width:42px; text-align:center;
    font-variant-numeric:tabular-nums; }
  /* progress line */
  #prog{ position:absolute; left:0; top:0; height:2px; width:0;
    background:var(--accent); transition:width .12s linear; z-index:6; }
  /* scroll area */
  .scroll{ flex:1; overflow-y:auto; scroll-behavior:smooth; padding:22px 0 40px; }
  .scroll{ scrollbar-width:thin; }
  .scroll::-webkit-scrollbar{ width:10px; }
  .scroll::-webkit-scrollbar-thumb{ background:#b9c2d0; border-radius:6px;
    border:2px solid transparent; background-clip:content-box; }
  .col{ display:flex; flex-direction:column; align-items:center; gap:18px; }
  .page{
    position:relative; background:#fff; border-radius:6px; box-shadow:var(--shadow);
    overflow:hidden; max-width:calc(100% - 24px);
  }
  .page canvas{ display:block; }
  .page .ph{
    display:grid; place-items:center; color:#aeb7c5; font-size:13px;
    width:100%; height:100%;
  }
  .page .pnum{
    position:absolute; right:8px; bottom:6px; font-size:11px; color:#9aa4b2;
    background:rgba(255,255,255,.7); border-radius:6px; padding:1px 6px;
    pointer-events:none;
  }
  /* states */
  .overlay{
    position:absolute; inset:0; display:grid; place-items:center; padding:24px;
    text-align:center; color:var(--muted); background:var(--bg);
  }
  .overlay .box{ max-width:420px; }
  .overlay h3{ color:var(--ink); margin:0 0 8px; font-size:16px; }
  .overlay code{ background:var(--line); padding:2px 6px; border-radius:5px;
    font-size:12.5px; color:var(--ink); }
  .overlay a{ color:var(--accent); }
  .spin{ width:26px; height:26px; border:3px solid var(--line);
    border-top-color:var(--accent); border-radius:50%; animation:sp .8s linear infinite;
    margin:0 auto 12px; }
  @keyframes sp{ to{ transform:rotate(360deg); } }
</style>
</head>
<body>
  <div class="bar">
    <span class="ttl">${title ? title.replace(/</g, "&lt;") : "Document"}</span>
    <span class="spacer"></span>
    <span class="pill" id="counter">Loading…</span>
    <span class="zoom">
      <button id="zout" title="Zoom out" aria-label="Zoom out">&#8722;</button>
      <span class="lvl" id="zlvl">100%</span>
      <button id="zin" title="Zoom in" aria-label="Zoom in">&#43;</button>
    </span>
  </div>
  <div id="prog"></div>
  <div class="scroll" id="scroll">
    <div class="col" id="col"></div>
    <div class="overlay" id="loading"><div class="box"><div class="spin"></div>Preparing document…</div></div>
  </div>

<script src="${CDN}/pdf.min.js"></script>
<script>
(function(){
  "use strict";
  var PDF_URL = ${JSON.stringify(pdfUrl)};
  var WORKER  = ${JSON.stringify(CDN + "/pdf.worker.min.js")};

  var scroll = document.getElementById("scroll");
  var col = document.getElementById("col");
  var counter = document.getElementById("counter");
  var prog = document.getElementById("prog");
  var zlvl = document.getElementById("zlvl");
  var loading = document.getElementById("loading");

  function fail(msg, showPath){
    loading.innerHTML = '<div class="box"><h3>Couldn\\'t open the document</h3>'
      + '<p>' + msg + '</p>'
      + (showPath ? '<p style="margin-top:10px">Make sure the file exists at '
          + '<code>public/code-on-wages.pdf</code> (or pass a <code>src</code> prop), '
          + 'then reload.</p>' : '')
      + '<p style="margin-top:10px"><a href="' + PDF_URL + '" target="_blank" rel="noopener">Open the PDF directly</a></p>'
      + '</div>';
  }

  if(!window.pdfjsLib){ fail("The PDF viewer library failed to load from the network.", false); return; }
  pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER;

  var zoom = 1;                 // user zoom multiplier
  var MIN = 0.5, MAX = 3;
  var pdf = null;
  var pageEls = [];             // one wrapper .page per page
  var rendered = {};            // pageNum -> true (at current zoom)
  var baseScale = 1;            // fit-width scale for current width
  var pageViewport1 = null;     // viewport of page 1 at scale 1 (pages are uniform A4)
  var io = null;                // lazy-render observer
  var current = 1;

  function computeBaseScale(){
    if(!pageViewport1) return 1;
    var avail = Math.min(scroll.clientWidth - 24, 900); // fit width, capped for readability
    return avail / pageViewport1.width;
  }

  function sizePlaceholder(el){
    var w = pageViewport1.width * baseScale * zoom;
    var h = pageViewport1.height * baseScale * zoom;
    el.style.width = w + "px";
    el.style.height = h + "px";
  }

  function renderPage(num){
    if(rendered[num]) return;
    rendered[num] = true;
    pdf.getPage(num).then(function(page){
      var scale = baseScale * zoom;
      var dpr = window.devicePixelRatio || 1;
      var vp = page.getViewport({ scale: scale });
      var canvas = document.createElement("canvas");
      canvas.width = Math.floor(vp.width * dpr);
      canvas.height = Math.floor(vp.height * dpr);
      canvas.style.width = vp.width + "px";
      canvas.style.height = vp.height + "px";
      var ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      page.render({ canvasContext: ctx, viewport: vp }).promise.then(function(){
        var host = pageEls[num-1];
        var ph = host.querySelector(".ph");
        if(ph) ph.remove();
        host.insertBefore(canvas, host.querySelector(".pnum"));
      });
    }).catch(function(){ rendered[num] = false; });
  }

  function buildPages(){
    col.innerHTML = "";
    pageEls = [];
    rendered = {};
    for(var i=1;i<=pdf.numPages;i++){
      var el = document.createElement("div");
      el.className = "page";
      el.dataset.num = i;
      sizePlaceholder(el);
      var ph = document.createElement("div");
      ph.className = "ph"; ph.textContent = "Page " + i;
      el.appendChild(ph);
      var pn = document.createElement("div");
      pn.className = "pnum"; pn.textContent = i + " / " + pdf.numPages;
      el.appendChild(pn);
      col.appendChild(el);
      pageEls.push(el);
    }
    observe();
  }

  function observe(){
    if(io) io.disconnect();
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var n = parseInt(en.target.dataset.num, 10);
          renderPage(n);
        }
      });
    }, { root: scroll, rootMargin: "600px 0px 600px 0px", threshold: 0.01 });
    pageEls.forEach(function(el){ io.observe(el); });
  }

  // current-page counter + progress bar
  scroll.addEventListener("scroll", function(){
    var h = scroll.scrollHeight - scroll.clientHeight;
    prog.style.width = (h > 0 ? (scroll.scrollTop / h * 100) : 0) + "%";
    // find the page whose middle is nearest the viewport centre
    var mid = scroll.scrollTop + scroll.clientHeight / 2;
    var best = 1, bestD = Infinity;
    for(var i=0;i<pageEls.length;i++){
      var el = pageEls[i];
      var c = el.offsetTop + el.offsetHeight / 2;
      var d = Math.abs(c - mid);
      if(d < bestD){ bestD = d; best = i + 1; }
    }
    if(best !== current){ current = best; counter.textContent = "Page " + current + " / " + pdf.numPages; }
  }, { passive: true });

  var reflowTimer = null;
  function reflow(){
    baseScale = computeBaseScale();
    for(var i=0;i<pageEls.length;i++) sizePlaceholder(pageEls[i]);
    // re-render everything at the new scale
    rendered = {};
    pageEls.forEach(function(el){
      var cv = el.querySelector("canvas"); if(cv) cv.remove();
      if(!el.querySelector(".ph")){
        var ph = document.createElement("div"); ph.className="ph";
        ph.textContent = "Page " + el.dataset.num;
        el.insertBefore(ph, el.querySelector(".pnum"));
      }
    });
    observe();
  }

  window.addEventListener("resize", function(){
    clearTimeout(reflowTimer); reflowTimer = setTimeout(reflow, 180);
  });

  function setZoom(z){
    zoom = Math.max(MIN, Math.min(MAX, z));
    zlvl.textContent = Math.round(zoom * 100) + "%";
    reflow();
  }
  document.getElementById("zin").addEventListener("click", function(){ setZoom(zoom + 0.2); });
  document.getElementById("zout").addEventListener("click", function(){ setZoom(zoom - 0.2); });

  // load the document
  pdfjsLib.getDocument({ url: PDF_URL }).promise.then(function(doc){
    pdf = doc;
    return pdf.getPage(1);
  }).then(function(page1){
    pageViewport1 = page1.getViewport({ scale: 1 });
    baseScale = computeBaseScale();
    buildPages();
    counter.textContent = "Page 1 / " + pdf.numPages;
    loading.remove();
  }).catch(function(err){
    var notFound = ("" + (err && err.message || err)).toLowerCase();
    if(notFound.indexOf("missing") > -1 || notFound.indexOf("404") > -1 || notFound.indexOf("fetch") > -1){
      fail("The PDF file wasn't found at <code>" + PDF_URL + "</code>.", true);
    } else {
      fail("Something went wrong while reading the file.", true);
    }
  });
})();
</script>
</body>
</html>`;
}

export default function CodeOnWagesNote({
  src = "/code-on-wages.pdf",
  title = "The Code on Wages, 2019",
  className,
  style,
  ...rest
}) {
  // Resolve to an absolute URL: the iframe's base is about:srcdoc, so relative
  // paths wouldn't resolve inside it.
  const absoluteSrc =
    typeof window !== "undefined" ? new URL(src, window.location.href).href : src;

  const html = buildReaderHtml(absoluteSrc, title);

  return (
    <iframe
      title={title}
      srcDoc={html}
      className={className}
      style={{ width: "100%", height: "100%", border: "none", background: "#eef1f6", ...style }}
      {...rest}
    />
  );
}