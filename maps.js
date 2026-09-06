/* =====================================================================
   地圖引擎：真・Google Maps ＋ Google 風格 二合一
   ---------------------------------------------------------------------
   ★ 想換成「真正的 Google 地圖」：
     把 Google Maps JavaScript API 金鑰填進下面 GMAPS_KEY 的引號裡，
     存檔上傳，全站所有地圖就會自動變成 Google Maps
     （含衛星圖、街景小人、Google 的 POI、路況與縮放控制）。
     只要改這一行，其他檔案都不用動。

     申請步驟：console.cloud.google.com → 建立專案 → 啟用
     「Maps JavaScript API」→ 憑證 → 建立 API 金鑰 →
     建議把金鑰限制在「HTTP 參照網址：katayaki223.github.io/*」。

   ★ 留空（目前狀態）＝ 免金鑰的 Google 風格地圖：
     Google 的水滴編號圖釘、Google 藍虛線路線、Google 樣式的控制項與
     資訊卡，底圖用 OpenStreetMap。金鑰填錯或載入失敗也會自動退回這個版本。
   ===================================================================== */
var GMAPS_KEY = '';

var GMAP = (function(){
  var BLUE = '#4285f4';
  var TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var ATTR = '&copy; OpenStreetMap contributors';

  function pin(color, label){
    return '<svg class="gmpin" width="30" height="42" viewBox="0 0 30 42" xmlns="http://www.w3.org/2000/svg">'
      + '<path d="M15 41.5S28.5 24.6 28.5 14.5A13.5 13.5 0 1 0 1.5 14.5C1.5 24.6 15 41.5 15 41.5z" fill="'
      + color + '" stroke="#ffffff" stroke-width="2"/>'
      + '<text x="15" y="19.8" text-anchor="middle" font-family="Helvetica,Arial,sans-serif"'
      + ' font-size="13" font-weight="700" fill="#ffffff">' + label + '</text></svg>';
  }

  function fail(el, msg){
    el.className = 'lmap err';
    el.textContent = msg || '地圖需要連網才能載入。你仍可使用下方的 Google Maps／Apple 地圖／Naver 連結。';
  }

  var gp = null;
  function gload(){
    if(gp) return gp;
    gp = new Promise(function(res, rej){
      if(window.google && window.google.maps) return res();
      var t = setTimeout(function(){ rej(new Error('timeout')); }, 10000);
      window.__gmReady = function(){ clearTimeout(t); res(); };
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(GMAPS_KEY)
            + '&callback=__gmReady&language=zh-TW&region=KR&loading=async';
      s.onerror = function(){ clearTimeout(t); rej(new Error('load')); };
      document.head.appendChild(s);
    });
    return gp;
  }

  function renderLeaflet(el, cfg){
    if(typeof L === 'undefined'){ fail(el); return null; }
    el.classList.add('gmlike');
    var map = L.map(el, {scrollWheelZoom:false, zoomControl:false});
    L.tileLayer(TILE, {attribution:ATTR, maxZoom:19, subdomains:'abc'}).addTo(map);
    L.control.zoom({position:'bottomright'}).addTo(map);
    var pts = cfg.stops.map(function(s){ return s.ll; });
    if(cfg.route !== false && pts.length > 1){
      L.polyline(pts, {color:'#ffffff', weight:8, opacity:.85, lineCap:'round', lineJoin:'round'}).addTo(map);
      L.polyline(pts, {color:BLUE, weight:5, opacity:1, lineCap:'round', lineJoin:'round', dashArray:'1 11'}).addTo(map);
    }
    cfg.stops.forEach(function(s){
      L.marker(s.ll, {title:s.t, icon:L.divIcon({
        className:'gmpinwrap', html:pin(cfg.color, s.label === undefined ? s.n : s.label),
        iconSize:[30,42], iconAnchor:[15,42], popupAnchor:[0,-38]
      })}).addTo(map).bindPopup(cfg.popup(s), {maxWidth:280});
    });
    map.fitBounds(L.latLngBounds(pts).pad(cfg.pad || 0.20));
    map.on('click', function(){ map.scrollWheelZoom.enable(); });
    map.on('mouseout', function(){ map.scrollWheelZoom.disable(); });
    if(cfg.onPopup) map.on('popupopen', function(e){
      cfg.onPopup(e.popup.getElement(), function(){ map.closePopup(); });
    });
    return map;
  }

  function renderGoogle(el, cfg){
    var g = google.maps;
    el.classList.add('gmreal');
    var map = new g.Map(el, {
      zoom:12, center:{lat:cfg.stops[0].ll[0], lng:cfg.stops[0].ll[1]},
      mapTypeControl:true, streetViewControl:true, fullscreenControl:true, zoomControl:true,
      gestureHandling:'cooperative',
      mapTypeControlOptions:{position:g.ControlPosition.TOP_LEFT}
    });
    var b = new g.LatLngBounds(), path = [], iw = new g.InfoWindow();
    cfg.stops.forEach(function(s){
      var pos = {lat:s.ll[0], lng:s.ll[1]};
      path.push(pos); b.extend(pos);
      var mk = new g.Marker({position:pos, map:map, title:s.t, icon:{
        url:'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(pin(cfg.color, s.label === undefined ? s.n : s.label)),
        scaledSize:new g.Size(30,42), anchor:new g.Point(15,42)
      }});
      mk.addListener('click', function(){
        iw.setContent('<div class="gmiw">' + cfg.popup(s) + '</div>');
        iw.open({anchor:mk, map:map});
      });
    });
    if(cfg.route !== false && path.length > 1){
      new g.Polyline({path:path, map:map, strokeOpacity:0, icons:[{
        icon:{path:g.SymbolPath.CIRCLE, fillColor:BLUE, fillOpacity:1, strokeOpacity:0, scale:3.2},
        offset:'0', repeat:'13px'
      }]});
    }
    map.fitBounds(b, 44);
    g.event.addListenerOnce(map, 'idle', function(){ if(map.getZoom() > 16) map.setZoom(16); });
    if(cfg.onPopup) iw.addListener('domready', function(){
      cfg.onPopup(document.querySelector('.gm-style-iw'), function(){ iw.close(); });
    });
    return map;
  }

  function render(el, cfg){
    if(!cfg || !cfg.stops || !cfg.stops.length){ fail(el); return; }
    if(GMAPS_KEY){
      gload().then(function(){ renderGoogle(el, cfg); })
             .catch(function(){ renderLeaflet(el, cfg); });
    } else {
      renderLeaflet(el, cfg);
    }
  }

  return {render:render, pin:pin, fail:fail, blue:BLUE, real:function(){ return !!GMAPS_KEY; }};
})();
