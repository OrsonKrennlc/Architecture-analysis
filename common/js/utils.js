/**
 * ════════════════════════════════════════
 * ANTIMAP CORE SHARED UTILITIES
 * ════════════════════════════════════════
 */

(function (global) {
  'use strict';

  const PI = Math.PI;
  const a_ee = 6378245.0;
  const ee = 0.00669342162296594323;

  // ─── Coordinate Transformations (GCJ02 / WGS84 / Web Mercator) ───
  function transformLat(x, y) {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
    return ret;
  }

  function transformLon(x, y) {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
    return ret;
  }

  function outOfChina(lat, lng) {
    return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
  }

  function gcj02towgs84(lat, lng) {
    if (outOfChina(lat, lng)) return [lat, lng];
    let dlat = transformLat(lng - 105.0, lat - 35.0);
    let dlng = transformLon(lng - 105.0, lat - 35.0);
    let radlat = lat / 180.0 * PI;
    let magic = Math.sin(radlat);
    magic = 1 - ee * magic * magic;
    let sqrtmagic = Math.sqrt(magic);
    dlat = (dlat * 180.0) / ((a_ee * (1 - ee)) / (magic * sqrtmagic) * PI);
    dlng = (dlng * 180.0) / (a_ee / sqrtmagic * Math.cos(radlat) * PI);
    let mglat = lat + dlat;
    let mglng = lng + dlng;
    return [lat * 2 - mglat, lng * 2 - mglng];
  }

  function unifyToWGS84(lat, lng) {
    return [lat, lng];
  }

  function latLngToMeters(lat, lng) {
    const x = lng * 20037508.34 / 180;
    let y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
    y = y * 20037508.34 / 180;
    return [x, y];
  }

  // ─── OSM Feature Filters ───
  function isRealGreen(t) {
    if (!t) return false;
    const le = t.leisure || '', lu = t.landuse || '', nat = t.natural || '';
    return le === 'park' || le === 'garden' || le === 'nature_reserve' || le === 'recreation_ground' ||
      lu === 'forest' || lu === 'grass' || lu === 'meadow' || lu === 'village_green' ||
      nat === 'wood' || nat === 'grassland';
  }

  function isRealWater(t) {
    if (!t) return false;
    const nat = t.natural || '', wat = t.water || '', ww = t.waterway || '';
    return nat === 'water' || !!wat || ww === 'riverbank' || ww === 'dock';
  }

  // ─── Color Utilities ───
  function _lum(hex) {
    hex = (hex || '').replace('#', '');
    if (hex.length < 6) return 1;
    return (0.299 * parseInt(hex.slice(0, 2), 16) + 0.587 * parseInt(hex.slice(2, 4), 16) + 0.114 * parseInt(hex.slice(4, 6), 16)) / 255;
  }

  function h2r(h) {
    h = (h || '#000').replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16) || 0);
  }

  function r2h(a) {
    return '#' + a.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  }

  function mix(a, b, p) {
    const x = h2r(a), y = h2r(b);
    return r2h([0, 1, 2].map(i => x[i] + (y[i] - x[i]) * p));
  }

  // ─── Shared UI Helpers (Unified Toast) ───
  let toastTimer;
  function toast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('on');
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove('on');
      el.classList.remove('show');
    }, 2400);
  }

  // ─── Shared Language Switcher i18n helper ───
  function getSharedLang() {
    let lang = 'zh';
    try {
      lang = localStorage.getItem('em_lang') || 'zh';
    } catch (e) {}
    return lang;
  }

  function setSharedLang(lang) {
    try {
      localStorage.setItem('em_lang', lang);
    } catch (e) {}
  }

  // ─── Shared Overpass API Endpoints ───
  // maps.mail.ru mirror is the most reliable endpoint for browser direct requests due to CORS
  const SHARED_OVERPASS_ENDPOINTS = [
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
    'https://overpass-api.de/api/interpreter',
    'https://lz4.overpass-api.de/api/interpreter',
    'https://overpass.openstreetmap.fr/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
  ];

  // ─── Export to Global Scope ───
  Object.assign(global, {
    transformLat,
    transformLon,
    outOfChina,
    gcj02towgs84,
    unifyToWGS84,
    latLngToMeters,
    isRealGreen,
    isRealWater,
    _lum,
    h2r,
    r2h,
    mix,
    toast,
    getSharedLang,
    setSharedLang,
    SHARED_OVERPASS_ENDPOINTS
  });

})(window);
