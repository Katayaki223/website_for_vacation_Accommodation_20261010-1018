/* shared runtime: icon sprite + checkbox persistence */
(function(){
  var SPRITE = "<svg class=\"sprite\" aria-hidden=\"true\"><defs>\n<symbol id=\"i-plane\" viewBox=\"0 0 24 24\"><path d=\"M2 13l20-8-6 17-4-7-10-2z\"/></symbol>\n<symbol id=\"i-subway\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"3\" width=\"14\" height=\"14\" rx=\"3\"/><path d=\"M5 10h14M8 20l2-3M16 20l-2-3\"/><circle cx=\"9\" cy=\"13.5\" r=\".9\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"13.5\" r=\".9\" fill=\"currentColor\"/></symbol>\n<symbol id=\"i-katsu\" viewBox=\"0 0 24 24\"><ellipse cx=\"12\" cy=\"15\" rx=\"9\" ry=\"5\"/><path d=\"M7 13l3-4h5l2 3M9.5 9.5l1.5 3M13 9.5l1.5 3\"/></symbol>\n<symbol id=\"i-wave\" viewBox=\"0 0 24 24\"><path d=\"M2 15c2.5 0 3-2 5-2s2.5 2 5 2 3-2 5-2 2.5 2 5 2M2 19c2.5 0 3-2 5-2s2.5 2 5 2 3-2 5-2 2.5 2 5 2\"/><circle cx=\"17\" cy=\"6\" r=\"3\"/></symbol>\n<symbol id=\"i-island\" viewBox=\"0 0 24 24\"><path d=\"M2 20h20\"/><path d=\"M8 20c0-4 2-6 2-9M10 5c3 0 5 2 5 4s-2 3-5 3-4-1-4-3 1-4 4-4z\"/><path d=\"M14 20c1-3 3-4 5-4\"/></symbol>\n<symbol id=\"i-luge\" viewBox=\"0 0 24 24\"><path d=\"M2 19h14l4-5\"/><circle cx=\"7\" cy=\"19\" r=\"2\"/><circle cx=\"15\" cy=\"19\" r=\"2\"/><path d=\"M6 17l2-5h6l1 5M11 12V8\"/><circle cx=\"11\" cy=\"5.5\" r=\"2\"/></symbol>\n<symbol id=\"i-train\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"12\" rx=\"3\"/><path d=\"M4 11h16M7 20l2-4M17 20l-2-4\"/><circle cx=\"8.5\" cy=\"8\" r=\".9\" fill=\"currentColor\"/><circle cx=\"15.5\" cy=\"8\" r=\".9\" fill=\"currentColor\"/></symbol>\n<symbol id=\"i-capsule\" viewBox=\"0 0 24 24\"><path d=\"M3 5h18\"/><path d=\"M12 5v3\"/><rect x=\"6\" y=\"8\" width=\"12\" height=\"9\" rx=\"4.5\"/><path d=\"M8.5 11.5h7\"/><path d=\"M9 20l1.5-3M15 20l-1.5-3\"/></symbol>\n<symbol id=\"i-art\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M6 15l3.5-5 3 4 2-2.5L18 15M12 21v-3\"/></symbol>\n<symbol id=\"i-yacht\" viewBox=\"0 0 24 24\"><path d=\"M3 17h18l-2 4H5l-2-4z\"/><path d=\"M11 15V3l7 12H11zM9 15L6 8v7\"/></symbol>\n<symbol id=\"i-spa\" viewBox=\"0 0 24 24\"><path d=\"M4 14h16c0 4-3 6-8 6s-8-2-8-6z\"/><path d=\"M9 10c0-2 2-2 2-4s-2-2-2-4M15 10c0-2 1.5-2 1.5-3.5\"/></symbol>\n<symbol id=\"i-bag\" viewBox=\"0 0 24 24\"><path d=\"M5 8h14l-1.2 12H6.2L5 8z\"/><path d=\"M9 8V6a3 3 0 016 0v2\"/></symbol>\n<symbol id=\"i-cable\" viewBox=\"0 0 24 24\"><path d=\"M2 4l20 6\"/><path d=\"M9 7.3V11M9 11h7v6H9z\"/><path d=\"M9 14h7\"/></symbol>\n<symbol id=\"i-bridge\" viewBox=\"0 0 24 24\"><path d=\"M2 17h20M4 17V8M20 17V8\"/><path d=\"M4 10c5-4 11-4 16 0\"/><path d=\"M8 17v-4.6M12 17v-6M16 17v-4.6\"/></symbol>\n<symbol id=\"i-village\" viewBox=\"0 0 24 24\"><path d=\"M3 21h18\"/><path d=\"M4 21v-6l4-3 4 3v6M12 21v-9l4-3 4 3v9\"/><path d=\"M6.5 17h1.5M15.5 15h1.5\"/></symbol>\n<symbol id=\"i-ktx\" viewBox=\"0 0 24 24\"><path d=\"M4 17c0-6 3-11 8-11s8 5 8 11H4z\"/><path d=\"M8 10h8M2 20h20\"/><circle cx=\"9\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"14\" r=\"1\" fill=\"currentColor\"/></symbol>\n<symbol id=\"i-hanok\" viewBox=\"0 0 24 24\"><path d=\"M2 8c4-3 6-4 10-4s6 1 10 4\"/><path d=\"M4 8v12M20 8v12M2 20h20\"/><path d=\"M9 20v-7h6v7\"/></symbol>\n<symbol id=\"i-market\" viewBox=\"0 0 24 24\"><path d=\"M3 9h18l-2-5H5L3 9z\"/><path d=\"M5 9v11h14V9\"/><path d=\"M3 9c1.5 2 3 2 4.5 0 1.5 2 3 2 4.5 0 1.5 2 3 2 4.5 0 1.5 2 3 2 4.5 0\"/><path d=\"M10 20v-6h4v6\"/></symbol>\n<symbol id=\"i-tower\" viewBox=\"0 0 24 24\"><path d=\"M12 2v6M9 21l3-13 3 13\"/><ellipse cx=\"12\" cy=\"9.5\" rx=\"4\" ry=\"2\"/><path d=\"M7 21h10\"/></symbol>\n<symbol id=\"i-tree\" viewBox=\"0 0 24 24\"><path d=\"M12 21v-6\"/><path d=\"M12 3l5 6h-3l4 6H6l4-6H7l5-6z\"/></symbol>\n<symbol id=\"i-loft\" viewBox=\"0 0 24 24\"><path d=\"M3 21V9l5-4v16M8 21V9l5-4v16M13 21V9l8 4v8M2 21h20\"/><path d=\"M16 17h2\"/></symbol>\n<symbol id=\"i-sun\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M18.5 5.5L17 7M7 17l-1.5 1.5\"/></symbol>\n<symbol id=\"i-cup\" viewBox=\"0 0 24 24\"><path d=\"M4 8h13v6a5 5 0 01-5 5H9a5 5 0 01-5-5V8z\"/><path d=\"M17 10h2a2.5 2.5 0 010 5h-2\"/><path d=\"M3 21h15\"/></symbol>\n<symbol id=\"i-bed\" viewBox=\"0 0 24 24\"><path d=\"M3 20v-9h18v9M3 14h18M3 20h18\"/><path d=\"M6 11V7h5v4\"/></symbol>\n<symbol id=\"i-cam\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"3\"/><circle cx=\"12\" cy=\"13.5\" r=\"3.5\"/><path d=\"M9 7l1.5-3h3L15 7\"/></symbol>\n<symbol id=\"i-pin\" viewBox=\"0 0 24 24\"><path d=\"M12 22s7-7.4 7-12A7 7 0 005 10c0 4.6 7 12 7 12z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/></symbol>\n<symbol id=\"i-shirt\" viewBox=\"0 0 24 24\"><path d=\"M9 3l3 2 3-2 5 3-2 4-1.5-1V21H7.5V9L6 10 4 6l5-3z\"/></symbol>\n<symbol id=\"i-shoe\" viewBox=\"0 0 24 24\"><path d=\"M2 17h17a3 3 0 003-3c0-2-2-2.5-4-3l-4-3-3 2-2-2H4l-2 4v5z\"/><path d=\"M8 13l1 2M12 12l1 2\"/></symbol>\n<symbol id=\"i-gift\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"8\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M3 13h18M12 8v13\"/><path d=\"M12 8S10 3 7.5 4.5 12 8 12 8s2-5 4.5-3.5S12 8 12 8z\"/></symbol>\n<symbol id=\"i-lip\" viewBox=\"0 0 24 24\"><rect x=\"8\" y=\"10\" width=\"8\" height=\"11\" rx=\"2\"/><path d=\"M10 10V5a2 2 0 014 0v5\"/><path d=\"M8 14h8\"/></symbol>\n<symbol id=\"i-fish\" viewBox=\"0 0 24 24\"><path d=\"M2 12c4-6 12-6 16 0-4 6-12 6-16 0z\"/><path d=\"M18 12l4-4v8l-4-4z\"/><circle cx=\"7\" cy=\"11\" r=\"1\" fill=\"currentColor\"/></symbol>\n<symbol id=\"i-rabbit\" viewBox=\"0 0 24 24\"><ellipse cx=\"12\" cy=\"16\" rx=\"6\" ry=\"5.5\"/><path d=\"M8.5 11C7.5 8 7 4 8.8 3.4S11 6.5 11 10.6M15.5 11c1-3 1.5-7-.3-7.6S13 6.5 13 10.6\"/><circle cx=\"10\" cy=\"15.5\" r=\".9\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"15.5\" r=\".9\" fill=\"currentColor\"/><path d=\"M11.2 18.3h1.6\"/></symbol>\n<symbol id=\"i-draw\" viewBox=\"0 0 24 24\"><path d=\"M4 20l4-1 11-11a2.5 2.5 0 00-3.5-3.5L4.5 15.5 4 20z\"/><path d=\"M14.5 6.5l3 3\"/></symbol>\n\n<symbol id=\"i-cal\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"3\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/><path d=\"M8 14.5l2 2 4-4\"/></symbol>\n<symbol id=\"i-check\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M8 12.5l2.5 2.5L16 9.5\"/></symbol>\n<symbol id=\"i-list\" viewBox=\"0 0 24 24\"><path d=\"M9 6h11M9 12h11M9 18h11\"/><path d=\"M4 5.5l1 1 1.8-2M4 11.5l1 1 1.8-2M4 17.5l1 1 1.8-2\"/></symbol>\n<symbol id=\"i-coin\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-4M9.5 13.1h5\"/></symbol>\n<symbol id=\"i-warn\" viewBox=\"0 0 24 24\"><path d=\"M12 3.5L22 20H2L12 3.5z\"/><path d=\"M12 10v4\"/><circle cx=\"12\" cy=\"17\" r=\".9\" fill=\"currentColor\"/></symbol>\n<symbol id=\"i-case\" viewBox=\"0 0 24 24\"><rect x=\"2.5\" y=\"7\" width=\"19\" height=\"13\" rx=\"3\"/><path d=\"M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M2.5 12.5h19\"/></symbol>\n<symbol id=\"i-map\" viewBox=\"0 0 24 24\"><path d=\"M9 4L3 6.5v14L9 18l6 2.5 6-2.5v-14L15 6.5 9 4z\"/><path d=\"M9 4v14M15 6.5v14\"/></symbol>\n<symbol id=\"i-grid\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"7.5\" height=\"7.5\" rx=\"2\"/><rect x=\"13.5\" y=\"3\" width=\"7.5\" height=\"7.5\" rx=\"2\"/><rect x=\"3\" y=\"13.5\" width=\"7.5\" height=\"7.5\" rx=\"2\"/><rect x=\"13.5\" y=\"13.5\" width=\"7.5\" height=\"7.5\" rx=\"2\"/></symbol>\n<symbol id=\"i-arrow\" viewBox=\"0 0 24 24\"><path d=\"M5 12h14M13 6l6 6-6 6\"/></symbol>\n<symbol id=\"i-clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5.5l3.5 2\"/></symbol>\n<symbol id=\"i-info\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 11v5.5\"/><circle cx=\"12\" cy=\"7.8\" r=\".9\" fill=\"currentColor\"/></symbol>\n<symbol id=\"i-won\" viewBox=\"0 0 24 24\"><path d=\"M3 7l3.5 10L10 9l2 8 3.5-10M2.5 11h19M2.5 14h19\"/></symbol>\n<symbol id=\"i-pizza\" viewBox=\"0 0 24 24\"><path d=\"M12 3l8.5 15.3a1.4 1.4 0 01-1.7 2C16.6 19.7 14.4 19.2 12 19.2s-4.6.5-6.8 1.1a1.4 1.4 0 01-1.7-2L12 3z\"/><path d=\"M6.6 12.9c3.4-1.2 7.4-1.2 10.8 0\"/><circle cx=\"10.1\" cy=\"10.4\" r=\".95\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"14.6\" r=\".95\" fill=\"currentColor\"/><circle cx=\"9.4\" cy=\"15.4\" r=\".95\" fill=\"currentColor\"/></symbol>\n<symbol id=\"i-pot\" viewBox=\"0 0 24 24\"><path d=\"M4 10.5h16v3.5a5 5 0 01-5 5H9a5 5 0 01-5-5v-3.5z\"/><path d=\"M2.4 10.5h19.2M4 13.5H2.2M20 13.5h1.8\"/><path d=\"M9.5 7.2c0-1.3 1-1.7 1-3M13.5 7.5c0-1.4 1-1.8 1-3.3\"/></symbol>\n<symbol id=\"i-bread\" viewBox=\"0 0 24 24\"><path d=\"M4.2 17.6C2.7 14.3 3.8 10.2 6.7 8.3c2.3-1.6 5.3-1.6 7.6 0 2.9 1.9 4 6 2.5 9.3-.4.9-1.3 1.4-2.3 1.4H6.5c-1 0-1.9-.5-2.3-1.4z\"/><path d=\"M9.1 8.7c-.9 3.3-.9 6.8 0 10.3M13 8.7c.9 3.3.9 6.8 0 10.3\"/></symbol>\n<symbol id=\"i-pan\" viewBox=\"0 0 24 24\"><circle cx=\"9.8\" cy=\"13\" r=\"6.6\"/><path d=\"M16.4 13H22\"/><path d=\"M7.2 12.3c.8-.9 2-.9 2.8 0s2 .9 2.8 0\"/></symbol>\n<symbol id=\"i-mac\" viewBox=\"0 0 24 24\"><rect x=\"2.8\" y=\"4\" width=\"18.4\" height=\"12.4\" rx=\"2.2\"/><path d=\"M2.8 13.4h18.4\"/><path d=\"M12 16.4V20M9 20h6\"/></symbol>\n</defs></svg>";
  function injectSprite(){
    if(document.querySelector('svg.sprite')) return;
    var d = document.createElement('div');
    d.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    d.innerHTML = SPRITE;
    document.body.insertBefore(d, document.body.firstChild);
  }

  var KEY = 'krtrip:' + (document.body.dataset.page || 'x');

  function load(){
    var o = {};
    try {
      var h = location.hash.match(/(?:^|[#&])ck=([A-Za-z0-9_.~-]*)/);
      if (h) { h[1].split('.').forEach(function(k){ if(k) o[k]=1; }); save(o); history.replaceState(null,'',location.pathname+location.search); return o; }
    } catch(e){}
    try { o = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch(e){ o = {}; }
    return o;
  }
  function save(o){ try { localStorage.setItem(KEY, JSON.stringify(o)); } catch(e){} }

  function initChecks(){
    var boxes = [].slice.call(document.querySelectorAll('input[data-ck]'));
    if (!boxes.length) return;
    var state = load();
    boxes.forEach(function(b){
      b.checked = !!state[b.dataset.ck];
      b.addEventListener('change', function(){
        if (b.checked) state[b.dataset.ck] = 1; else delete state[b.dataset.ck];
        save(state); paint();
      });
    });
    function paint(){
      boxes.forEach(function(b){
        var row = b.closest('[data-ckrow]');
        if (row) row.classList.toggle('done', b.checked);
      });
      var done = boxes.filter(function(b){ return b.checked; }).length;
      var bar = document.querySelector('.ckbar');
      if (bar) {
        var c = bar.querySelector('.cnt'); if (c) c.textContent = done + ' / ' + boxes.length;
        var f = bar.querySelector('.bar i'); if (f) f.style.width = (boxes.length ? done/boxes.length*100 : 0) + '%';
      }
    }
    var shareBtn = document.querySelector('[data-ckshare]');
    if (shareBtn) shareBtn.addEventListener('click', function(){
      var keys = boxes.filter(function(b){ return b.checked; }).map(function(b){ return b.dataset.ck; });
      var url = location.origin + location.pathname + '#ck=' + keys.join('.');
      var done = function(){ var t = shareBtn.innerHTML; shareBtn.textContent = '已複製連結'; shareBtn.classList.add('ok');
        setTimeout(function(){ shareBtn.innerHTML = t; shareBtn.classList.remove('ok'); }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, fb);
      else fb();
      function fb(){ var ta = document.createElement('textarea'); ta.value = url; ta.style.position='fixed'; ta.style.opacity='0';
        document.body.appendChild(ta); ta.select(); try{ document.execCommand('copy'); done(); }catch(e){} document.body.removeChild(ta); }
    });
    var resetBtn = document.querySelector('[data-ckreset]');
    if (resetBtn) resetBtn.addEventListener('click', function(){
      boxes.forEach(function(b){ b.checked = false; delete state[b.dataset.ck]; });
      save(state); paint();
    });
    paint();
  }

  function go(){ injectSprite(); initChecks(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  window.addEventListener('hashchange', function(){
    if (/(?:^|[#&])ck=/.test(location.hash)) location.reload();
  });
})();
