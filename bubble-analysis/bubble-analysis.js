/* bubble-analysis.js */

const CATS = [
  {id: 'public', nm: 'Public 公共', c: '#C0392B', items: ['Lobby 大厅', 'Living Room 客厅', 'Exhibition 展厅', 'Reception 接待', 'Lounge 休息区', 'Atrium 中庭']},
  {id: 'private', nm: 'Private 私密', c: '#2C6E8F', items: ['Bedroom 卧室', 'Office 办公室', 'Study 书房', 'Meeting Room 会议室', 'Master Suite 主卧']},
  {id: 'service', nm: 'Service 服务', c: '#4A7C59', items: ['Kitchen 厨房', 'Bathroom 卫生间', 'Storage 储藏', 'Pantry 备餐', 'Laundry 洗衣房', 'Plant 设备']},
  {id: 'semi', nm: 'Semi 半公共', c: '#E0822D', items: ['Café 咖啡', 'Dining 餐厅', 'Library 图书', 'Workshop 工坊', 'Gallery 展廊']},
  {id: 'circ', nm: 'Circulation 交通', c: '#8A6FB0', items: ['Corridor 走廊', 'Stair 楼梯', 'Entrance 入口', 'Elevator 电梯']},
  {id: 'outdoor', nm: 'Outdoor 室外', c: '#C9A227', items: ['Courtyard 庭院', 'Terrace 露台', 'Garden 花园', 'Balcony 阳台', 'Plaza 广场']}
];

const PALETTES = {
  classic: {nm: '经典 Classic', cols: ['#C0392B', '#2C6E8F', '#4A7C59', '#E0822D', '#8A6FB0', '#C9A227']},
  morandi: {nm: '莫兰迪 Morandi', cols: ['#B07C76', '#7C90A0', '#8B9D83', '#C9A98C', '#9888A0', '#C2B280']},
  nordic: {nm: '冷调 Nordic', cols: ['#4A6D8C', '#5E8B7E', '#7B9EA8', '#A0B9C8', '#6E7B91', '#8FA9B8']},
  warm: {nm: '暖调 Warm', cols: ['#C0392B', '#D9772E', '#E0A93B', '#B5562E', '#A8554C', '#C99A3F']},
  bold: {nm: '撞色 Bold', cols: ['#E63946', '#1D3557', '#2A9D8F', '#F4A261', '#7209B7', '#E9C46A']},
  ink: {nm: '墨色 Ink', cols: ['#2B2B2B', '#555', '#777', '#444', '#666', '#888']}
};

let palette = 'classic';
const SIZE_DEFAULT = 80;
let spaces = [];
let links = [];
let view = 'bubble';
let uid = 1;
let linkMode = false;
let linkFirst = null;
let customCat = 'public';
let styleMode = 'contour';
let showBoundary = true;
let selectedId = null;
let selectedLink = null;
let linkUid = 1;
let sketch = false;
let notes = [];
let noteUid = 1;
let showArea = false;
let baseImg = null;
let baseOpacity = 0.55;
let baseScale = 1;
let baseX = 0;
let baseY = 0;

const cv = document.getElementById('canvas');
const VW = 1200;
const VH = 800;

function paletteColor(catId) {
  const idx = CATS.findIndex(c => c.id === catId);
  const p = PALETTES[palette];
  return (p && idx >= 0) ? p.cols[idx] : (CATS[idx] ? CATS[idx].c : '#888');
}

function catColor(id) {
  return paletteColor(id);
}

function catName(id) {
  const c = CATS.find(x => x.id === id);
  return c ? c.nm.split(' ')[0] : id;
}

function bgColor() {
  return styleMode === 'contour' ? '#FFFFFF' : styleMode === 'water' ? '#F2F5F7' : '#F8F7F5';
}

/* ---- color helpers ---- */
function h2r(h) {
  h = h.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function r2h(r) {
  return '#' + r.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
}

function mix(a, b, p) {
  const x = h2r(a), y = h2r(b);
  return r2h([0, 1, 2].map(i => x[i] + (y[i] - x[i]) * p));
}

function initPresets() {
  document.getElementById('presetBox').innerHTML = CATS.map(c =>
    '<div class="pgroup"><div class="pghead"><span class="pgdot" style="background:' + c.c + '"></span><span class="pgname">' + c.nm + '</span></div>'
    + '<div class="chips">' + c.items.map(it => '<span class="chip" data-cat="' + c.id + '" data-nm="' + it + '">' + it + '</span>').join('') + '</div></div>'
  ).join('');
  document.querySelectorAll('.chip').forEach(ch => ch.onclick = () => { addSpace(ch.dataset.nm, ch.dataset.cat); flash(ch); });
}

function flash(ch) {
  ch.classList.add('on');
  setTimeout(() => ch.classList.remove('on'), 250);
}

// ---- undo (Ctrl+Z) — snapshot-based ----
let _undoStack = [];

function pushUndo() {
  try {
    _undoStack.push(JSON.stringify({ spaces, links, uid, linkUid, notes, noteUid, bx: baseX, by: baseY, bs: baseScale }));
    if (_undoStack.length > 40) _undoStack.shift();
  } catch (e) {}
}

function undo() {
  if (!_undoStack.length) {
    toast('Nothing to undo · 没有可撤销的');
    return;
  }
  try {
    const st = JSON.parse(_undoStack.pop());
    spaces = st.spaces;
    links = st.links;
    uid = st.uid;
    linkUid = st.linkUid;
    notes = st.notes || [];
    noteUid = st.noteUid || 1;
    if (st.bs !== undefined) {
      baseX = st.bx;
      baseY = st.by;
      baseScale = st.bs;
    }
    selectedId = null;
    selectedLink = null;
    document.getElementById('inspector').classList.remove('on');
    document.getElementById('linkInspector').classList.remove('on');
    renderList();
    draw();
    toast('Undo · 已撤销');
  } catch (e) {}
}

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    undo();
  }
});

function addSpace(name, cat) {
  pushUndo();
  const ang = Math.random() * 6.28, rad = 120 + Math.random() * 200;
  spaces.push({
    id: uid++,
    name,
    cat,
    r: SIZE_DEFAULT,
    wob: 0.20,
    children: [],
    x: VW / 2 + Math.cos(ang) * rad,
    y: VH / 2 + Math.sin(ang) * rad,
    seed: Math.random() * 1000
  });
  renderList();
  draw();
}

function delSpace(id) {
  pushUndo();
  spaces = spaces.filter(s => s.id !== id);
  links = links.filter(l => l.a !== id && l.b !== id);
  if (selectedId === id) {
    selectedId = null;
    document.getElementById('inspector').classList.remove('on');
  }
  renderList();
  draw();
}

function renderList() {
  document.getElementById('spCount').textContent = spaces.length;
  const box = document.getElementById('spList');
  box.innerHTML = spaces.length ? spaces.map(s =>
    '<div class="sp"><span class="sdot" style="background:' + catColor(s.cat) + '"></span><span class="snm" style="cursor:pointer" onclick="select(' + s.id + ')">' + s.name + '</span><span class="sx" onclick="delSpace(' + s.id + ')">×</span></div>'
  ).join('') : '<div style="font-size:11px;color:var(--t3);padding:3px">none yet</div>';
  document.getElementById('empty').style.display = spaces.length ? 'none' : 'flex';
}

function blobPath(cx, cy, r, seed, wob) {
  const pts = 10, arr = [], amp = wob == null ? 0.20 : wob;
  for (let i = 0; i < pts; i++) {
    const a = (i / pts) * 6.283;
    const n = Math.sin(seed + i * 1.7) * 0.5 + Math.cos(seed * 1.3 + i * 2.3) * 0.5;
    const rr = r * (0.82 + amp * ((n + 1) / 2));
    arr.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  return smoothLoop(arr);
}

function smoothLoop(arr) {
  const n = arr.length;
  let d = '';
  for (let i = 0; i < n; i++) {
    const p0 = arr[(i - 1 + n) % n], p1 = arr[i], p2 = arr[(i + 1) % n], p3 = arr[(i + 2) % n];
    if (i === 0) d += 'M' + p1[0].toFixed(1) + ',' + p1[1].toFixed(1);
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6,
          c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ' C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1);
  }
  return d + 'Z';
}

/* nested contour bands: same shape, shrinking radius, pale outer -> saturated inner */
function waterGradId(col) {
  return 'wg' + col.replace('#', '');
}

function waterDefs() {
  const used = [...new Set(spaces.map(s => catColor(s.cat)))];
  let d = '<defs>';
  used.forEach(col => {
    d += '<radialGradient id="' + waterGradId(col) + '" cx="34%" cy="28%" r="78%">'
      + '<stop offset="0%" stop-color="' + col + '" stop-opacity="0.55"/>'
      + '<stop offset="48%" stop-color="' + col + '" stop-opacity="0.30"/>'
      + '<stop offset="100%" stop-color="' + col + '" stop-opacity="0.10"/>'
      + '</radialGradient>';
  });
  return d + '</defs>';
}

function waterBlob(sp) {
  const col = catColor(sp.cat), sel = linkFirst === sp.id, act = selectedId === sp.id;
  const d = blobPath(sp.x, sp.y, sp.r, sp.seed, sp.wob * 0.28);
  let out = '<path class="blob" data-id="' + sp.id + '" d="' + d + '" fill="url(#' + waterGradId(col) + ')" stroke="' + col + '" stroke-opacity="0.55" stroke-width="' + (sel ? 3.4 : act ? 2.6 : 1.4) + '"' + (sel ? ' stroke-dasharray="6,4"' : '') + '/>';
  // glossy highlight
  out += '<ellipse cx="' + (sp.x - sp.r * 0.34).toFixed(1) + '" cy="' + (sp.y - sp.r * 0.42).toFixed(1) + '" rx="' + (sp.r * 0.30).toFixed(1) + '" ry="' + (sp.r * 0.17).toFixed(1) + '" fill="#ffffff" fill-opacity="0.5" transform="rotate(-24 ' + (sp.x - sp.r * 0.34).toFixed(1) + ' ' + (sp.y - sp.r * 0.42).toFixed(1) + ')" pointer-events="none"/>';
  // small secondary glint
  out += '<circle cx="' + (sp.x + sp.r * 0.38).toFixed(1) + '" cy="' + (sp.y + sp.r * 0.44).toFixed(1) + '" r="' + (sp.r * 0.06).toFixed(1) + '" fill="#ffffff" fill-opacity="0.42" pointer-events="none"/>';
  
  if (sp.children && sp.children.length) {
    const n = sp.children.length;
    sp.children.forEach((ch, i) => {
      const a = (i / n) * 6.283 - 1.2, rr = sp.r * 0.46, cr = sp.r * 0.26;
      const cx = sp.x + Math.cos(a) * rr * 0.62, cy = sp.y + Math.sin(a) * rr * 0.62;
      const ccol = catColor(ch.cat || sp.cat);
      out += '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + cr.toFixed(1) + '" fill="url(#' + waterGradId(ccol) + ')" stroke="' + ccol + '" stroke-opacity="0.5" stroke-width="1" pointer-events="none"/>';
      out += '<text x="' + cx.toFixed(1) + '" y="' + (cy + 3).toFixed(1) + '" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="#1A1917" pointer-events="none" paint-order="stroke" stroke="#fff" stroke-width="2.4">' + esc(ch.name.split(' ')[0]) + '</text>';
    });
  }
  return out;
}

function contourBlob(sp) {
  const L = 10, col = catColor(sp.cat), pale = mix(col, '#ffffff', 0.66);
  let out = '';
  for (let i = 0; i < L; i++) {
    const t = i / (L - 1);
    const rr = sp.r * (0.24 + 0.76 * (1 - t));
    const fill = mix(pale, col, t);
    out += '<path d="' + blobPath(sp.x, sp.y, rr, sp.seed, sp.wob) + '" fill="' + fill + '" fill-opacity="0.135" stroke="' + col + '" stroke-opacity="0.045" stroke-width="0.8"/>';
  }
  return out;
}

function flatBlob(sp) {
  const col = catColor(sp.cat), sel = linkFirst === sp.id, act = selectedId === sp.id;
  return '<path class="blob" data-id="' + sp.id + '" d="' + blobPath(sp.x, sp.y, sp.r, sp.seed, sp.wob) + '" fill="' + col + '" fill-opacity="' + (view === 'zone' ? 0 : 0.42) + '" stroke="' + col + '" stroke-width="' + (sel ? 4 : act ? 3 : 2) + '"' + (sel ? ' stroke-dasharray="6,4"' : '') + '/>';
}

function separate(passes) {
  for (let it = 0; it < passes; it++) {
    for (let i = 0; i < spaces.length; i++) {
      for (let j = i + 1; j < spaces.length; j++) {
        const a = spaces[i], b = spaces[j], dx = b.x - a.x, dy = b.y - a.y;
        let d = Math.hypot(dx, dy) || 0.01;
        const min = (a.r + b.r) * (a.cat === b.cat ? 0.62 : 0.92);
        if (d < min) {
          const p = (min - d) / 2, ux = dx / d, uy = dy / d;
          a.x -= ux * p; a.y -= uy * p;
          b.x += ux * p; b.y += uy * p;
        }
      }
    }
  }
  spaces.forEach(s => {
    s.x = Math.max(s.r + 30, Math.min(VW - s.r - 30, s.x));
    s.y = Math.max(s.r + 30, Math.min(VH - s.r - 30, s.y));
  });
}

function autoArrange() { // cluster by category
  if (!spaces.length) { draw(); return; }
  pushUndo();
  const cats = [...new Set(spaces.map(s => s.cat))], cx = VW / 2, cy = VH / 2, clusterR = Math.min(VW, VH) * 0.26;
  cats.forEach((cat, ci) => {
    const ang = (ci / cats.length) * 6.28 - Math.PI / 2,
          gx = cx + Math.cos(ang) * clusterR, gy = cy + Math.sin(ang) * clusterR,
          mem = spaces.filter(s => s.cat === cat);
    mem.forEach((s, mi) => {
      if (mem.length === 1) {
        s.x = gx; s.y = gy;
      } else {
        const a2 = (mi / mem.length) * 6.28, r2 = 42 + mem.length * 7;
        s.x = gx + Math.cos(a2) * r2;
        s.y = gy + Math.sin(a2) * r2;
      }
    });
  });
  separate(50); draw();
}

function arrangeRadial() { // biggest in the centre, rest in rings
  if (!spaces.length) { draw(); return; }
  pushUndo();
  const sorted = [...spaces].sort((a, b) => b.r - a.r), cx = VW / 2, cy = VH / 2;
  sorted[0].x = cx; sorted[0].y = cy;
  const rest = sorted.slice(1);
  rest.forEach((s, i) => {
    const ring = Math.floor(i / 8), inRing = i % 8, cnt = Math.min(rest.length - ring * 8, 8);
    const rad = sorted[0].r + 110 + ring * 150, ang = (inRing / cnt) * 6.28 - Math.PI / 2 + ring * 0.35;
    s.x = cx + Math.cos(ang) * rad;
    s.y = cy + Math.sin(ang) * rad;
  });
  separate(50); draw();
}

function arrangeLinear() { // along a horizontal band
  if (!spaces.length) { draw(); return; }
  pushUndo();
  const totalW = spaces.reduce((a, s) => a + s.r * 1.5, 0);
  let x = Math.max(80, (VW - Math.min(totalW, VW - 160)) / 2);
  const cy = VH / 2;
  spaces.forEach((s, i) => {
    x += s.r * 0.78;
    s.x = Math.min(VW - s.r - 30, x);
    s.y = cy + (i % 2 === 0 ? -1 : 1) * s.r * 0.22;
    x += s.r * 0.78 + 26;
  });
  separate(30); draw();
}

function toggleLink() {
  linkMode = !linkMode;
  linkFirst = null;
  document.getElementById('linkBanner').classList.toggle('on', linkMode);
  const b = document.getElementById('linkBtn');
  b.style.background = linkMode ? 'var(--ac)' : '';
  b.style.color = linkMode ? '#fff' : '';
  b.style.borderColor = linkMode ? 'var(--ac)' : '';
  draw();
}

function clickForLink(id) {
  if (linkFirst === null) {
    linkFirst = id;
    draw();
    return;
  }
  if (linkFirst === id) {
    linkFirst = null;
    draw();
    return;
  }
  pushUndo();
  const a = linkFirst, b = id, ex = links.find(l => (l.a === a && l.b === b) || (l.a === b && l.b === a));
  if (ex) {
    if (ex.a === a) {
      links = links.filter(l => l !== ex);
      toast('箭头已删除 · removed');
    } else {
      ex.a = a; ex.b = b;
      toast('方向已反转 · reversed');
    }
  } else {
    const nl = { id: linkUid++, a, b, w: 3, col: 'auto', style: 'line' };
    links.push(nl);
    linkFirst = null;
    selectLink(nl.id);
    return;
  }
  linkFirst = null;
  draw();
}

/* ---- organic dashed site boundary ---- */
function hull(pts) {
  if (pts.length < 3) return pts.slice();
  const p = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [];
  for (const q of p) {
    while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop();
    lo.push(q);
  }
  const up = [];
  for (let i = p.length - 1; i >= 0; i--) {
    const q = p[i];
    while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop();
    up.push(q);
  }
  lo.pop(); up.pop();
  return lo.concat(up);
}

function boundaryPath() {
  if (spaces.length < 1) return '';
  const pad = 46, pool = [];
  spaces.forEach(s => {
    for (let k = 0; k < 8; k++) {
      const a = k / 8 * 6.283;
      pool.push([s.x + Math.cos(a) * (s.r + pad), s.y + Math.sin(a) * (s.r + pad)]);
    }
  });
  let h = hull(pool);
  if (h.length < 3) return '';
  const cx = h.reduce((a, p) => a + p[0], 0) / h.length,
        cy = h.reduce((a, p) => a + p[1], 0) / h.length;
  h = h.map(p => {
    const dx = p[0] - cx, dy = p[1] - cy, d = Math.hypot(dx, dy) || 1;
    return [p[0] + dx / d * 10, p[1] + dy / d * 10];
  });
  return smoothLoop(h);
}

function draw() {
  document.getElementById('empty').style.display = spaces.length ? 'none' : 'flex';
  document.getElementById('canvWrap').style.background = bgColor();
  let s = '';
  // sketch filter
  s += '<defs><filter id="sketch" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.026" numOctaves="4" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="' + (sketch ? 13 : 0) + '" xChannelSelector="R" yChannelSelector="G"/></filter></defs>';
  const skOpen = sketch ? '<g filter="url(#sketch)">' : '';
  const skClose = sketch ? '</g>' : '';
  s += skOpen;
  
  if (baseImg) {
    const bw = VW * baseScale, bh = VH * baseScale;
    s += '<image class="baseimg" href="' + baseImg + '" x="' + baseX.toFixed(1) + '" y="' + baseY.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" preserveAspectRatio="xMidYMid meet" opacity="' + baseOpacity + '" style="cursor:move"/>';
  }
  
  if (view === 'zone') {
    s += '<g style="mix-blend-mode:multiply">';
    [...new Set(spaces.map(x => x.cat))].forEach(cat => { s += zoneRegion(cat); });
    s += '</g>';
    spaces.forEach(sp => {
      const act = selectedId === sp.id;
      s += '<path class="blob" data-id="' + sp.id + '" d="' + blobPath(sp.x, sp.y, sp.r, sp.seed, sp.wob) + '" fill="transparent"' + (act ? ' stroke="#1A1917" stroke-width="1.4" stroke-dasharray="1,5" stroke-linecap="round"' : '') + '/>';
    });
  } else {
    if (styleMode === 'water') {
      s += waterDefs() + '<g>';
      spaces.forEach(sp => { s += waterBlob(sp); });
      s += '</g>';
    } else {
      s += '<g style="mix-blend-mode:multiply">';
      if (styleMode === 'contour') {
        spaces.forEach(sp => { s += (sp.children && sp.children.length) ? nestedBlob(sp) : contourBlob(sp); });
      } else {
        spaces.forEach(sp => { s += (sp.children && sp.children.length) ? nestedBlob(sp) : flatBlob(sp); });
      }
      s += '</g>';
    }
    if (styleMode === 'contour') {
      spaces.forEach(sp => {
        const sel = linkFirst === sp.id, act = selectedId === sp.id;
        s += '<path class="blob" data-id="' + sp.id + '" d="' + blobPath(sp.x, sp.y, sp.r, sp.seed, sp.wob) + '" fill="transparent"' + (sel ? ' stroke="' + catColor(sp.cat) + '" stroke-width="3" stroke-dasharray="6,4"' : act ? ' stroke="#1A1917" stroke-width="1.4" stroke-dasharray="1,5" stroke-linecap="round"' : '') + '/>';
      });
    }
  }
  
  if (showBoundary && spaces.length) {
    const bp = boundaryPath();
    if (bp) s += '<path d="' + bp + '" fill="none" stroke="' + (styleMode === 'contour' ? '#C0392B' : '#1A1917') + '" stroke-opacity="0.5" stroke-width="1.4" stroke-dasharray="2,7" stroke-linecap="round"/>';
  }
  if (view !== 'zone') {
    links.forEach(l => { s += drawArrow(l); });
  }
  s += skClose;
  
  if (view === 'zone') {
    [...new Set(spaces.map(x => x.cat))].forEach(cat => {
      const mem = spaces.filter(x => x.cat === cat);
      if (!mem.length) return;
      const cx = mem.reduce((a, m) => a + m.x, 0) / mem.length,
            cy = mem.reduce((a, m) => a + m.y, 0) / mem.length;
      s += '<text x="' + cx.toFixed(1) + '" y="' + cy.toFixed(1) + '" text-anchor="middle" font-family="Archivo,sans-serif" font-size="23" font-weight="800" fill="#1A1917" paint-order="stroke" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round" pointer-events="none">' + esc(catName(cat)) + '</text>';
    });
    spaces.forEach(sp => {
      s += '<text x="' + sp.x.toFixed(1) + '" y="' + (sp.y + sp.r * 0.5).toFixed(1) + '" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" font-weight="600" fill="#1A1917" opacity="0.5" paint-order="stroke" stroke="#fff" stroke-width="2.4" pointer-events="none">' + esc(sp.name.split(' ')[0]) + '</text>';
    });
  } else {
    spaces.forEach(sp => {
      if (sp.children && sp.children.length) {
        s += '<text x="' + sp.x.toFixed(1) + '" y="' + (sp.y - sp.r * 0.78).toFixed(1) + '" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#1A1917" paint-order="stroke" stroke="#ffffff" stroke-width="3.4" stroke-linejoin="round" pointer-events="none">' + esc(sp.name) + '</text>';
        (sp._kids || []).forEach(k => {
          if (k.r >= 15) {
            s += '<text x="' + k.x.toFixed(1) + '" y="' + (k.y + 3).toFixed(1) + '" text-anchor="middle" font-family="Inter,sans-serif" font-size="' + (k.r >= 24 ? 11 : 9) + '" font-weight="600" fill="#1A1917" paint-order="stroke" stroke="#fff" stroke-width="2.4" pointer-events="none">' + esc(k.name.split(' ')[0]) + '</text>';
          }
        });
      } else {
        const words = wrap(sp.name, sp.r), lh = 14, sy = -(words.length - 1) * lh / 2;
        s += '<g pointer-events="none">';
        words.forEach((w, i) => {
          const y = (sp.y + sy + i * lh + 4).toFixed(1);
          s += '<text x="' + sp.x.toFixed(1) + '" y="' + y + '" text-anchor="middle" font-family="Inter,sans-serif" font-size="13" font-weight="700" fill="#1A1917" paint-order="stroke" stroke="#ffffff" stroke-width="3.2" stroke-linejoin="round">' + esc(w) + '</text>';
        });
        if (showArea) {
          const ar = sp.area || Math.round(sp.r * sp.r / 55);
          s += '<text x="' + sp.x.toFixed(1) + '" y="' + (sp.y + sy + words.length * lh + 6).toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="10" fill="#6B6860" paint-order="stroke" stroke="#fff" stroke-width="2.4">~' + ar + ' m²</text>';
        }
        s += '</g>';
      }
    });
  }
  
  // free text annotations
  notes.forEach(n => {
    s += '<g class="note" data-nid="' + n.id + '" style="cursor:grab"><text x="' + n.x.toFixed(1) + '" y="' + n.y.toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="' + (n.size || 14) + '" font-weight="700" fill="#1A1917" paint-order="stroke" stroke="#ffffff" stroke-width="3.4" stroke-linejoin="round">' + esc(n.text) + '</text></g>';
  });
  
  cv.innerHTML = s;
  bindNotes(); bindBase(); bindDrag(); bindLinks();
}

function zoneRegion(cat) {
  const mem = spaces.filter(s => s.cat === cat);
  if (!mem.length) return '';
  const col = catColor(cat), pale = mix(col, '#ffffff', 0.66), pad = 34, pool = [];
  mem.forEach(s => {
    for (let k = 0; k < 10; k++) {
      const a = k / 10 * 6.283;
      pool.push([s.x + Math.cos(a) * (s.r + pad), s.y + Math.sin(a) * (s.r + pad)]);
    }
  });
  let h = hull(pool), out = '', L = 5;
  if (h.length < 3) {
    const cx = mem.reduce((a, m) => a + m.x, 0) / mem.length,
          cy = mem.reduce((a, m) => a + m.y, 0) / mem.length,
          rr = mem[0].r + pad;
    for (let i = 0; i < L; i++) {
      const t = i / (L - 1);
      out += '<path d="' + blobPath(cx, cy, rr * (0.5 + 0.5 * (1 - t)), mem[0].seed, 0.18) + '" fill="' + mix(pale, col, t) + '" fill-opacity="0.17"/>';
    }
    return out;
  }
  const cx = h.reduce((a, p) => a + p[0], 0) / h.length,
        cy = h.reduce((a, p) => a + p[1], 0) / h.length;
  for (let i = 0; i < L; i++) {
    const t = i / (L - 1), sh = 0.34 * t, ring = h.map(p => [p[0] + (cx - p[0]) * sh, p[1] + (cy - p[1]) * sh]);
    out += '<path d="' + smoothLoop(ring) + '" fill="' + mix(pale, col, t) + '" fill-opacity="0.17"/>';
  }
  return out;
}

function packChildren(sp) {
  const ch = sp.children || [], N = ch.length;
  if (!N) return [];
  const inner = sp.r * 0.82,
        cr = Math.max(13, Math.min(inner * 0.5, inner * 0.92 / (1 + Math.sqrt(N)))),
        g = 2.399963229;
  const pts = ch.map((c, i) => {
    const a = i * g, rad = inner * 0.62 * Math.sqrt((i + 0.55) / N);
    return { x: sp.x + Math.cos(a) * rad, y: sp.y + Math.sin(a) * rad, r: c.r || cr, name: c.name, cat: c.cat || sp.cat };
  });
  for (let it = 0; it < 16; it++) {
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const A = pts[i], Bp = pts[j], dx = Bp.x - A.x, dy = Bp.y - A.y;
        let dd = Math.hypot(dx, dy) || 0.01;
        const mn = (A.r + Bp.r) * 1.05;
        if (dd < mn) {
          const p = (mn - dd) / 2, ux = dx / dd, uy = dy / dd;
          A.x -= ux * p; A.y -= uy * p;
          Bp.x += ux * p; Bp.y += uy * p;
        }
      }
    }
    pts.forEach(P => {
      const dx = P.x - sp.x, dy = P.y - sp.y, dd = Math.hypot(dx, dy) || 0.01, max = inner - P.r;
      if (dd > max) {
        P.x = sp.x + dx / dd * max;
        P.y = sp.y + dy / dd * max;
      }
    });
  }
  return pts;
}

function nestedBlob(sp) {
  const col = catColor(sp.cat), pale = mix(col, '#ffffff', 0.74);
  let out = '', L = 4;
  for (let i = 0; i < L; i++) {
    const t = i / (L - 1);
    out += '<path d="' + blobPath(sp.x, sp.y, sp.r * (0.52 + 0.48 * (1 - t)), sp.seed, sp.wob) + '" fill="' + mix(pale, col, t * 0.45) + '" fill-opacity="0.11" stroke="' + col + '" stroke-opacity="0.07" stroke-width="0.8"/>';
  }
  const kids = packChildren(sp);
  sp._kids = kids;
  kids.forEach((k, i) => {
    const kc = catColor(k.cat), kp = mix(kc, '#ffffff', 0.6), KL = 6;
    for (let j = 0; j < KL; j++) {
      const t = j / (KL - 1);
      out += '<path d="' + blobPath(k.x, k.y, k.r * (0.3 + 0.7 * (1 - t)), sp.seed + i * 7.7, 0.16) + '" fill="' + mix(kp, kc, t) + '" fill-opacity="0.17"/>';
    }
  });
  return out;
}

function drawArrow(l) {
  const a = spaces.find(x => x.id === l.a), b = spaces.find(x => x.id === l.b);
  if (!a || !b) return '';
  const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1, ux = dx / d, uy = dy / d;
  const x1 = a.x + ux * a.r * 0.72, y1 = a.y + uy * a.r * 0.72,
        x2 = b.x - ux * b.r * 0.82, y2 = b.y - uy * b.r * 0.82;
  const cxm = (x1 + x2) / 2 - uy * 30, cym = (y1 + y2) / 2 + ux * 30;
  const col = l.col === 'auto' ? catColor(a.cat) : l.col, w = l.w || 3, op = 0.92, sel = selectedLink === l.id;
  const path = 'M' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' Q' + cxm.toFixed(1) + ',' + cym.toFixed(1) + ' ' + x2.toFixed(1) + ',' + y2.toFixed(1);
  const B = t => {
    const m = 1 - t;
    return [m * m * x1 + 2 * m * t * cxm + t * t * x2, m * m * y1 + 2 * m * t * cym + t * t * y2];
  };
  const T = t => {
    const m = 1 - t;
    let tx = 2 * m * (cxm - x1) + 2 * t * (x2 - cxm), ty = 2 * m * (cym - y1) + 2 * t * (y2 - cym);
    const n = Math.hypot(tx, ty) || 1;
    return [tx / n, ty / n];
  };
  let vis = '';
  if (l.style === 'ribbon') {
    const N = 18, Lp = [], Rp = [];
    for (let i = 0; i <= N; i++) {
      const t = i / N, p = B(t), tg = T(t), nx = -tg[1], ny = tg[0], hw = (w * 1.7) * (1 - t) * 0.5 + w * 0.15;
      Lp.push([p[0] + nx * hw, p[1] + ny * hw]);
      Rp.push([p[0] - nx * hw, p[1] - ny * hw]);
    }
    const end = B(1), tg = T(1);
    let dd = 'M' + Lp[0][0].toFixed(1) + ',' + Lp[0][1].toFixed(1);
    for (let i = 1; i <= N; i++) dd += ' L' + Lp[i][0].toFixed(1) + ',' + Lp[i][1].toFixed(1);
    dd += ' L' + (end[0] + tg[0] * w * 1.4).toFixed(1) + ',' + (end[1] + tg[1] * w * 1.4).toFixed(1);
    for (let i = N; i >= 0; i--) dd += ' L' + Rp[i][0].toFixed(1) + ',' + Rp[i][1].toFixed(1);
    dd += 'Z';
    vis = '<path d="' + dd + '" fill="' + col + '" fill-opacity="' + (op * 0.62) + '" style="mix-blend-mode:multiply"/>';
  } else if (l.style === 'double') {
    vis = '<path d="' + offsetPath(B, T, w * 0.9) + '" fill="none" stroke="' + col + '" stroke-width="' + (w * 0.5) + '" opacity="' + op + '"/>'
        + '<path d="' + offsetPath(B, T, -w * 0.9) + '" fill="none" stroke="' + col + '" stroke-width="' + (w * 0.5) + '" opacity="' + op + '"/>';
    vis += arrowHead(B, T, col, w, op);
  } else {
    const dash = l.style === 'dashed' ? ' stroke-dasharray="' + (w * 3) + ',' + (w * 2.4) + '"' : l.style === 'dotted' ? ' stroke-dasharray="0.1,' + (w * 2.2) + '" stroke-linecap="round"' : ' stroke-linecap="round"';
    vis = '<path d="' + path + '" fill="none" stroke="' + col + '" stroke-width="' + w + '"' + dash + ' opacity="' + op + '"/>' + arrowHead(B, T, col, w, op);
  }
  let out = '';
  if (sel) out += '<path d="' + path + '" fill="none" stroke="' + col + '" stroke-width="' + (w + 7) + '" opacity="0.16" stroke-linecap="round"/>';
  out += '<path class="flowlink" data-lid="' + l.id + '" d="' + path + '" fill="none" stroke="transparent" stroke-width="16" pointer-events="stroke" style="cursor:pointer"/>';
  let lbl = '';
  if (l.label) {
    const mid = B(0.5);
    lbl = '<text x="' + mid[0].toFixed(1) + '" y="' + (mid[1] - 7).toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="11" font-weight="700" fill="' + col + '" paint-order="stroke" stroke="#ffffff" stroke-width="3.2" stroke-linejoin="round" pointer-events="none">' + esc(l.label) + '</text>';
  }
  return out + vis + lbl;
}

function arrowHead(B, T, col, w, op) {
  const end = B(1), tg = T(1), nx = -tg[1], ny = tg[0], hl = 8 + w * 1.1, hw = 4 + w * 0.7,
        tip = [end[0] + tg[0] * 2, end[1] + tg[1] * 2],
        b1 = [tip[0] - tg[0] * hl + nx * hw, tip[1] - tg[1] * hl + ny * hw],
        b2 = [tip[0] - tg[0] * hl - nx * hw, tip[1] - tg[1] * hl - ny * hw];
  return '<path d="M' + tip[0].toFixed(1) + ',' + tip[1].toFixed(1) + ' L' + b1[0].toFixed(1) + ',' + b1[1].toFixed(1) + ' L' + b2[0].toFixed(1) + ',' + b2[1].toFixed(1) + 'Z" fill="' + col + '" opacity="' + op + '"/>';
}

function offsetPath(B, T, off) {
  const N = 16;
  let p0 = B(0), t0 = T(0), d = 'M' + (p0[0] - t0[1] * off).toFixed(1) + ',' + (p0[1] + t0[0] * off).toFixed(1);
  for (let i = 1; i <= N; i++) {
    const t = i / N, p = B(t), tg = T(t);
    d += ' L' + (p[0] - tg[1] * off).toFixed(1) + ',' + (p[1] + tg[0] * off).toFixed(1);
  }
  return d;
}

function bindNotes() {
  cv.querySelectorAll('.note').forEach(g => {
    const id = +g.dataset.nid;
    g.addEventListener('pointerdown', e => {
      e.stopPropagation();
      const n = notes.find(x => x.id === id);
      if (!n) return;
      pushUndo();
      const p = toSvg(e), ox = p.x - n.x, oy = p.y - n.y;
      g.setPointerCapture(e.pointerId);
      function mv(ev) {
        const q = toSvg(ev);
        n.x = q.x - ox; n.y = q.y - oy;
        draw();
      }
      function up() {
        g.releasePointerCapture(e.pointerId);
        cv.removeEventListener('pointermove', mv);
        cv.removeEventListener('pointerup', up);
      }
      cv.addEventListener('pointermove', mv);
      cv.addEventListener('pointerup', up);
    });
    g.addEventListener('dblclick', e => {
      e.stopPropagation();
      const n = notes.find(x => x.id === id);
      if (!n) return;
      const t = prompt('编辑标注（清空=删除） · Edit note (empty = delete):', n.text);
      if (t === null) return;
      pushUndo();
      if (!t.trim()) {
        notes = notes.filter(x => x.id !== id);
      } else {
        n.text = t.trim();
      }
      draw();
    });
  });
}

function bindBase() {
  const im = cv.querySelector('.baseimg');
  if (!im) return;
  im.addEventListener('pointerdown', e => {
    e.stopPropagation(); e.preventDefault();
    pushUndo();
    const p = toSvg(e), ox = p.x - baseX, oy = p.y - baseY;
    im.setPointerCapture(e.pointerId);
    function mv(ev) {
      const q = toSvg(ev);
      baseX = q.x - ox; baseY = q.y - oy;
      const bw = VW * baseScale, bh = VH * baseScale;
      im.setAttribute('x', baseX.toFixed(1));
      im.setAttribute('y', baseY.toFixed(1));
    }
    function up() {
      im.releasePointerCapture(e.pointerId);
      cv.removeEventListener('pointermove', mv);
      cv.removeEventListener('pointerup', up);
    }
    cv.addEventListener('pointermove', mv);
    cv.addEventListener('pointerup', up);
  });
}

function addNote() {
  const t = prompt('标注文字 · Note text:', '主入口 Main entrance');
  if (!t || !t.trim()) return;
  pushUndo();
  notes.push({ id: noteUid++, x: VW / 2, y: VH / 2 - 60, text: t.trim(), size: 14 });
  draw();
  toast('拖动摆放 · 双击编辑 — drag to place, dblclick to edit');
}

function bindLinks() {
  cv.querySelectorAll('.flowlink').forEach(g => {
    g.addEventListener('pointerdown', e => {
      if (linkMode) return;
      e.stopPropagation();
      selectLink(+g.dataset.lid);
    });
  });
}

function wrap(t, r) {
  const max = Math.max(7, Math.floor(r / 4.5)), ws = t.split(/\s+/), ls = [];
  let c = '';
  ws.forEach(w => {
    if ((c + ' ' + w).trim().length <= max) {
      c = (c + ' ' + w).trim();
    } else {
      if (c) ls.push(c);
      c = w;
    }
  });
  if (c) ls.push(c);
  return ls.slice(0, 3);
}

function esc(s) {
  return (s + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function bindDrag() {
  cv.querySelectorAll('.blob').forEach(g => {
    const id = +g.dataset.id;
    g.addEventListener('pointerdown', e => {
      if (linkMode) {
        clickForLink(id);
        e.preventDefault();
        return;
      }
      const sp = spaces.find(x => x.id === id);
      if (!sp) return;
      pushUndo();
      const p = toSvg(e), ox = p.x - sp.x, oy = p.y - sp.y;
      let moved = false, sx = e.clientX, sy = e.clientY;
      g.setPointerCapture(e.pointerId);
      function mv(ev) {
        if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 4) moved = true;
        const q = toSvg(ev);
        sp.x = q.x - ox; sp.y = q.y - oy;
        draw();
      }
      function up() {
        g.releasePointerCapture(e.pointerId);
        cv.removeEventListener('pointermove', mv);
        cv.removeEventListener('pointerup', up);
        if (!moved) select(id);
      }
      cv.addEventListener('pointermove', mv);
      cv.addEventListener('pointerup', up);
    });
    g.addEventListener('dblclick', e => {
      e.stopPropagation();
      const sp = spaces.find(x => x.id === id);
      if (!sp) return;
      const t = prompt('重命名 · Rename:', sp.name);
      if (t && t.trim()) {
        pushUndo();
        sp.name = t.trim();
        renderList();
        draw();
        if (selectedId === id) syncInspector();
      }
    });
  });
}

function toSvg(e) {
  const r = cv.getBoundingClientRect();
  return { x: (e.clientX - r.left) / r.width * VW, y: (e.clientY - r.top) / r.height * VH };
}

function select(id) {
  selectedId = id;
  selectedLink = null;
  document.getElementById('linkInspector').classList.remove('on');
  syncInspector();
  draw();
}

function deselect() {
  selectedId = null;
  selectedLink = null;
  document.getElementById('inspector').classList.remove('on');
  document.getElementById('linkInspector').classList.remove('on');
  draw();
}

function selectLink(id) {
  selectedLink = id;
  selectedId = null;
  document.getElementById('inspector').classList.remove('on');
  syncLinkInspector();
  draw();
}

function syncLinkInspector() {
  const l = links.find(x => x.id === selectedLink), ins = document.getElementById('linkInspector');
  if (!l) {
    ins.classList.remove('on');
    return;
  }
  ins.classList.add('on');
  document.querySelectorAll('#linkStyleSeg .so').forEach(o => o.classList.toggle('on', o.dataset.ls === l.style));
  document.getElementById('lkW').value = l.w;
  document.getElementById('lkWv').textContent = l.w;
  document.getElementById('lkLabel').value = l.label || '';
  document.querySelectorAll('#lkSwatch .sw').forEach(o => o.classList.toggle('on', o.dataset.c === l.col));
}

function buildSwatches() {
  const cols = ['auto', '#1A1917'].concat(CATS.map(c => c.c));
  document.getElementById('lkSwatch').innerHTML = cols.map(c =>
    '<div class="sw' + (c === 'auto' ? ' auto' : '') + '" data-c="' + c + '"' + (c !== 'auto' ? ' style="background:' + c + '"' : '') + ' title="' + (c === 'auto' ? 'follow source 跟随起点' : c) + '"></div>'
  ).join('');
  document.querySelectorAll('#lkSwatch .sw').forEach(o => o.onclick = () => {
    const l = links.find(x => x.id === selectedLink);
    if (!l) return;
    l.col = o.dataset.c;
    syncLinkInspector();
    draw();
  });
}

function syncInspector() {
  const sp = spaces.find(s => s.id === selectedId), ins = document.getElementById('inspector');
  if (!sp) {
    ins.classList.remove('on');
    return;
  }
  ins.classList.add('on');
  document.getElementById('insName').textContent = sp.name;
  document.getElementById('insDot').style.background = catColor(sp.cat);
  document.getElementById('insCat').textContent = catName(sp.cat);
  document.getElementById('insSize').value = Math.round(sp.r);
  document.getElementById('insSizeV').textContent = Math.round(sp.r);
  document.getElementById('insWob').value = Math.round(sp.wob * 100);
  document.getElementById('insWobV').textContent = sp.wob.toFixed(2);
  document.getElementById('insArea').value = sp.area || '';
  document.getElementById('insArea').placeholder = 'auto ~' + Math.round(sp.r * sp.r / 55);
  renderChildList();
}

function renderChildList() {
  const sp = spaces.find(s => s.id === selectedId), box = document.getElementById('insChildList');
  if (!sp) {
    box.innerHTML = '';
    return;
  }
  const ch = sp.children || [];
  box.innerHTML = ch.length ? ch.map((c, i) =>
    '<div class="cl-item"><span>' + esc(c.name) + '</span><span class="cl-x" data-i="' + i + '">×</span></div>'
  ).join('') : '<div style="font-size:10px;color:var(--t3);padding:2px 0">无 · none</div>';
  box.querySelectorAll('.cl-x').forEach(x => x.onclick = () => {
    sp.children.splice(+x.dataset.i, 1);
    renderChildList();
    draw();
  });
}

document.getElementById('insSize').addEventListener('input', function() {
  const sp = spaces.find(s => s.id === selectedId);
  if (!sp) return;
  sp.r = +this.value;
  document.getElementById('insSizeV').textContent = this.value;
  draw();
});

document.getElementById('insWob').addEventListener('input', function() {
  const sp = spaces.find(s => s.id === selectedId);
  if (!sp) return;
  sp.wob = +this.value / 100;
  document.getElementById('insWobV').textContent = sp.wob.toFixed(2);
  draw();
});

document.getElementById('insArea').addEventListener('input', function() {
  const sp = spaces.find(s => s.id === selectedId);
  if (!sp) return;
  sp.area = this.value ? Math.max(1, Math.round(+this.value)) : null;
  draw();
});

document.getElementById('insReroll').onclick = () => {
  const sp = spaces.find(s => s.id === selectedId);
  if (!sp) return;
  sp.seed = Math.random() * 1000;
  draw();
};

document.getElementById('insDel').onclick = () => {
  if (selectedId != null) delSpace(selectedId);
};

document.getElementById('insClose').onclick = deselect;

function addChild() {
  const sp = spaces.find(s => s.id === selectedId);
  if (!sp) return;
  const inp = document.getElementById('insChildIn'), v = inp.value.trim();
  if (!v) return;
  sp.children = sp.children || [];
  sp.children.push({ name: v, cat: sp.cat });
  if (sp.r < 96) sp.r = 96;
  inp.value = '';
  syncInspector();
  draw();
}

document.getElementById('insChildAdd').onclick = addChild;
document.getElementById('insChildIn').addEventListener('keydown', e => {
  if (e.key === 'Enter') addChild();
});

cv.addEventListener('pointerdown', e => {
  if (e.target === cv && !linkMode) deselect();
});

document.querySelectorAll('#linkStyleSeg .so').forEach(o => o.onclick = () => {
  const l = links.find(x => x.id === selectedLink);
  if (!l) return;
  l.style = o.dataset.ls;
  syncLinkInspector();
  draw();
});

document.getElementById('lkW').addEventListener('input', function() {
  const l = links.find(x => x.id === selectedLink);
  if (!l) return;
  l.w = +this.value;
  document.getElementById('lkWv').textContent = this.value;
  draw();
});

document.getElementById('lkLabel').addEventListener('input', function() {
  const l = links.find(x => x.id === selectedLink);
  if (!l) return;
  l.label = this.value;
  draw();
});

document.getElementById('lkDel').onclick = () => {
  if (selectedLink != null) {
    links = links.filter(x => x.id !== selectedLink);
    deselect();
  }
};

document.getElementById('linkClose').onclick = deselect;

buildSwatches();

cv.addEventListener('wheel', e => {
  const p = toSvg(e);
  let hit = null;
  for (const sp of spaces) {
    if (Math.hypot(p.x - sp.x, p.y - sp.y) <= sp.r * 1.05) hit = sp;
  }
  if (!hit) return;
  e.preventDefault();
  hit.r = Math.max(40, Math.min(190, hit.r - Math.sign(e.deltaY) * 7));
  if (selectedId === hit.id) syncInspector();
  draw();
}, { passive: false });

function buildSVG() {
  const ss = selectedId, sl = selectedLink;
  selectedId = null; selectedLink = null;
  draw();
  const inner = cv.innerHTML;
  selectedId = ss; selectedLink = sl;
  syncInspector(); syncLinkInspector();
  draw();
  
  const title = (document.getElementById('projName').value || 'PROGRAM DIAGRAM').toUpperCase();
  const vl = { bubble: 'BUBBLE DIAGRAM', zone: 'ZONING DIAGRAM' }[view];
  const used = [...new Set(spaces.map(s => s.cat))], bg = bgColor();
  
  let leg = '';
  used.forEach((c, i) => {
    leg += '<g transform="translate(' + (40 + i * 155) + ',762)"><circle r="6" cy="-4" fill="' + catColor(c) + '" fill-opacity="0.55" stroke="' + catColor(c) + '"/><text x="14" font-family="Space Mono,monospace" font-size="10" fill="#6B6860">' + esc(catName(c)) + '</text></g>';
  });
  
  const inner2 = inner.replace(/<image class="baseimg" href="([^"]+)"/g, '<image class="baseimg" href="$1" xlink:href="$1"');
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 800" width="1200" height="800">'
    + '<rect width="1200" height="800" fill="' + bg + '"/>'
    + '<text x="40" y="48" font-family="Space Mono,monospace" font-size="22" font-weight="700" fill="#1A1917">' + esc(title) + '</text>'
    + '<text x="40" y="68" font-family="Space Mono,monospace" font-size="10" fill="#A8A69F" letter-spacing="2">BUBBLE ANALYSIS · ' + vl + '</text>'
    + '<line x1="40" y1="80" x2="1160" y2="80" stroke="#1A1917" stroke-width="1.2"/>'
    + inner2 + leg
    + '<text x="1160" y="788" text-anchor="end" font-family="Space Mono,monospace" font-size="9" fill="#C8C6C0">Bubble Analysis</text>'
    + '</svg>';
}

function dlSVG() {
  if (!spaces.length) { toast('先添加空间'); return; }
  dl(new Blob(['<?xml version="1.0"?>\n' + buildSVG()], { type: 'image/svg+xml' }), 'bubble_analysis_' + view + '.svg');
  toast('SVG SAVED');
}

function dlPNG() {
  if (!spaces.length) { toast('先添加空间'); return; }
  let svg = buildSVG();
  svg = svg.replace(/<image class="baseimg"[^>]*>(<\/image>)?/g, '');
  const img = new Image(), u = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  const paint = (x) => {
    return new Promise(res => {
      if (!baseImg) { res(); return; }
      const bi = new Image();
      bi.onload = () => {
        const k = 2; // canvas is 2x viewBox
        const bw = VW * baseScale, bh = VH * baseScale;
        const sc = Math.min(bw / bi.width, bh / bi.height);
        const dw = bi.width * sc, dh = bi.height * sc;
        const dx = baseX + (bw - dw) / 2, dy = baseY + (bh - dh) / 2;
        x.globalAlpha = baseOpacity;
        x.drawImage(bi, dx * k, dy * k, dw * k, dh * k);
        x.globalAlpha = 1; res();
      };
      bi.onerror = () => res();
      bi.src = baseImg;
    });
  };
  img.onload = async () => {
    const c = document.createElement('canvas');
    c.width = 2400; c.height = 1600;
    const x = c.getContext('2d');
    x.fillStyle = bgColor(); x.fillRect(0, 0, 2400, 1600);
    await paint(x);
    x.drawImage(img, 0, 0, 2400, 1600);
    URL.revokeObjectURL(u);
    c.toBlob(b => {
      dl(b, 'bubble_analysis_' + view + '.png');
      toast('PNG SAVED');
    });
  };
  img.onerror = () => toast('PNG failed');
  img.src = u;
}

function dl(b, n) {
  const u = URL.createObjectURL(b), a = document.createElement('a');
  a.href = u; a.download = n;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(u), 5000);
}

function toast(m) {
  const t = document.getElementById('toast');
  t.textContent = m; t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 1800);
}

function setView(v) {
  view = v;
  document.querySelectorAll('.vt').forEach(t => t.classList.toggle('on', t.dataset.v === v));
  document.querySelector('.ttl').textContent = { bubble: 'PROGRAM DIAGRAM', zone: 'ZONING DIAGRAM' }[v];
  draw();
}

document.getElementById('customBtn').onclick = () => {
  const v = document.getElementById('customIn').value.trim();
  if (v) {
    addSpace(v, customCat);
    document.getElementById('customIn').value = '';
  }
};

document.getElementById('customIn').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('customBtn').click();
});

document.getElementById('linkBtn').onclick = toggleLink;
document.getElementById('arrangeBtn').onclick = autoArrange;
document.getElementById('clearBtn').onclick = () => {
  if (confirm('清空所有空间？Clear all?')) {
    spaces = []; links = []; uid = 1; linkUid = 1; notes = []; noteUid = 1;
    baseImg = null;
    document.getElementById('bgCtrl').style.display = 'none';
    document.getElementById('bgUpBtn').textContent = '⬆ UPLOAD BASE 上传底图';
    deselect(); renderList(); draw();
  }
};

document.getElementById('pngBtn').onclick = dlPNG;
document.getElementById('svgBtn').onclick = dlSVG;
document.querySelectorAll('.vt').forEach(t => t.onclick = () => setView(t.dataset.v));
document.querySelectorAll('#styleSeg .so').forEach(o => o.onclick = () => {
  styleMode = o.dataset.st;
  document.querySelectorAll('#styleSeg .so').forEach(x => x.classList.toggle('on', x === o));
  draw();
});

document.getElementById('boundaryRow').onclick = function() {
  showBoundary = !showBoundary;
  this.classList.toggle('on', showBoundary);
  draw();
};

document.getElementById('sketchRow').onclick = function() {
  sketch = !sketch;
  this.classList.toggle('on', sketch);
  draw();
};

document.getElementById('areaRow').onclick = function() {
  showArea = !showArea;
  this.classList.toggle('on', showArea);
  draw();
};

document.getElementById('noteBtn').onclick = addNote;
document.getElementById('radialBtn').onclick = arrangeRadial;
document.getElementById('linearBtn').onclick = arrangeLinear;

function initPalettes() {
  const box = document.getElementById('paletteBox');
  box.innerHTML = Object.keys(PALETTES).map(k => {
    const p = PALETTES[k];
    return '<div class="palopt' + (k === palette ? ' on' : '') + '" data-k="' + k + '">'
      + '<div style="display:flex;gap:2px;margin-bottom:4px">'
      + p.cols.map(c => '<span style="flex:1;height:11px;border-radius:2px;background:' + c + '"></span>').join('')
      + '</div>'
      + '<div style="font-size:10px;font-family:\'Space Mono\',monospace;color:var(--t2)">' + p.nm + '</div>'
      + '</div>';
  }).join('');
  box.querySelectorAll('.palopt').forEach(el => el.onclick = () => {
    palette = el.dataset.k;
    initPalettes();
    initPresets();
    draw();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && linkMode) toggleLink();
});

// ---- base image upload / opacity / remove ----
const bgFileInput = document.createElement('input');
bgFileInput.type = 'file'; bgFileInput.accept = 'image/*'; bgFileInput.style.display = 'none';
document.body.appendChild(bgFileInput);

document.getElementById('bgUpBtn').onclick = () => bgFileInput.click();

bgFileInput.onchange = e => {
  const f = e.target.files[0];
  if (!f) return;
  const rd = new FileReader();
  rd.onload = ev => {
    baseImg = ev.target.result;
    baseScale = 1; baseX = 0; baseY = 0;
    const bs = document.getElementById('bgScale');
    if (bs) {
      bs.value = 100;
      document.getElementById('bgScaleVal').textContent = '100%';
    }
    document.getElementById('bgCtrl').style.display = 'block';
    document.getElementById('bgUpBtn').textContent = '⟲ REPLACE 更换底图';
    draw();
  };
  rd.readAsDataURL(f);
  e.target.value = '';
};

document.getElementById('bgOpacity').addEventListener('input', function() {
  baseOpacity = +this.value / 100;
  document.getElementById('bgOpacityVal').textContent = this.value + '%';
  draw();
});

document.getElementById('bgScale').addEventListener('input', function() {
  const ns = +this.value / 100;
  const cx = baseX + VW * baseScale / 2, cy = baseY + VH * baseScale / 2;
  baseScale = ns; baseX = cx - VW * ns / 2; baseY = cy - VH * ns / 2;
  document.getElementById('bgScaleVal').textContent = this.value + '%';
  draw();
});

document.getElementById('bgRemoveBtn').onclick = () => {
  baseImg = null;
  document.getElementById('bgCtrl').style.display = 'none';
  document.getElementById('bgUpBtn').textContent = '⬆ UPLOAD BASE 上传底图';
  draw();
};

function seed() {
  const d = [
    ['Lobby 大厅', 'public', 128, 0.18],
    ['Exhibition 展厅', 'public', 132, 0.24],
    ['Café 咖啡', 'semi', 70, 0.22],
    ['Office 办公室', 'private', 82, 0.14],
    ['Storage 储藏', 'service', 54, 0.26],
    ['Courtyard 庭院', 'outdoor', 104, 0.34]
  ];
  d.forEach(([n, c, r, w]) => {
    spaces.push({
      id: uid++, name: n, cat: c, r, wob: w, children: [], x: VW / 2, y: VH / 2, seed: Math.random() * 1000
    });
  });
  spaces[1].children = [
    { name: 'Gallery A 展厅A', cat: 'public' },
    { name: 'Gallery B 展厅B', cat: 'public' },
    { name: 'Media 媒体', cat: 'semi' }
  ];
  links.push(
    { id: linkUid++, a: 1, b: 2, w: 5, col: 'auto', style: 'ribbon' },
    { id: linkUid++, a: 1, b: 3, w: 3, col: 'auto', style: 'line' },
    { id: linkUid++, a: 2, b: 6, w: 3, col: '#1A1917', style: 'dashed' }
  );
  renderList();
  autoArrange();
}

initPresets();
initPalettes();
seed();
