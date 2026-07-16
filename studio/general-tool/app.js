
/* ════════════════════════════════════════
   COLOUR SCHEMES  ★ EDIT HERE ★
════════════════════════════════════════ */
const SCH = {
  roads: [
    { p: '#1A1917', s: '#5A5856', t: '#A8A6A0', ph: '#D0CECC', dot: '#1A1917', dark: false },
    { p: '#2C4A6E', s: '#5A7A9E', t: '#8FAAC4', ph: '#BDD0E4', dot: '#2C4A6E', dark: false },
    { p: '#E8E4DC', s: '#A8A090', t: '#686460', ph: '#484440', dot: '#E8C87A', dark: true },
  ],
  landuse: [
    { res: '#E8B4A0', com: '#F0D080', civ: '#88B0D8', ind: '#C0A8D0', prk: '#A8CC88', wtr: '#80C0D8' },
    { res: '#D4785A', com: '#D4A830', civ: '#3A78B8', ind: '#8858A8', prk: '#5A9848', wtr: '#2888B8' },
    { res: '#F2D0C0', com: '#F8EAB0', civ: '#C0D8F0', ind: '#DCC8EC', prk: '#C8E0B0', wtr: '#B8DCF0' },
  ],
  gw: [
    { g: '#B8D9A8', gs: '#7AAE68', w: '#8EC4DC', ws: '#4A92B8' },
    { g: '#A0C878', gs: '#5C8A38', w: '#5AAAD0', ws: '#2A6A98' },
    { g: '#D4E8CC', gs: '#98C080', w: '#B8D8EC', ws: '#78B0D0' },
  ],
  nodes: [
    { p: '#C0392B', s: '#D4782A', t: '#4A7CAE', ax: '#C0392B', lax: '#D4782A', inf: 'rgba(192,57,43,0.06)' },
    { p: '#1A4A8A', s: '#2A7A5A', t: '#8A5A1A', ax: '#1A4A8A', lax: '#2A7A5A', inf: 'rgba(26,74,138,0.06)' },
    { p: '#3A3835', s: '#6B6860', t: '#A8A69F', ax: '#3A3835', lax: '#6B6860', inf: 'rgba(58,56,53,0.05)' },
  ],
  context: [
    { ring: '#C0392B', dash: '4,3', label: '#C0392B', tile: 'light_all', sat: '0' },
    { ring: '#1A1917', dash: '5,2', label: '#1A1917', tile: 'light_all', sat: '0' },
    { ring: '#2C4A6E', dash: '3,4', label: '#2C4A6E', tile: 'rastertiles/voyager', sat: '0.3' },
  ],
  fabric: [
    { bld: '#1A1917', void: '#F8F7F5', road: '#E8E6E0', site: '#C0392B' },
    { bld: '#2C2A28', void: '#FAFAF9', road: '#ECEAE4', site: '#2C4A6E' },
    { bld: '#3A3835', void: '#F0EEE8', road: '#E4E2DC', site: '#B45309' },
  ],
  orient: [
    { arrow: '#1A1917', accent: '#C0392B', ring: '#E0DDD8', label: '#1A1917', sub: '#6B6860' },
    { arrow: '#2C4A6E', accent: '#2C4A6E', ring: '#C8D8EC', label: '#2C4A6E', sub: '#6B8099' },
    { arrow: '#3A3835', accent: '#B45309', ring: '#E4E2DC', label: '#3A3835', sub: '#6B6860' },
  ],
  noise: [
    { hi: '#C0392B', md: '#E07820', lo: '#F5C842', bg: '#FFFFFF', road: '#E8E6E2' },
    { hi: '#8B0000', md: '#CC4400', lo: '#FFAA00', bg: '#FFF8F8', road: '#EEE8E4' },
    { hi: '#2C4A6E', md: '#5A7A9E', lo: '#A8C4DC', bg: '#F8FAFF', road: '#E8EEF4' },
  ],
  vitality: [
    { c0: '#C0392B', c1: '#2266CC', c2: '#4A7C59', c3: '#8844AA', road: '#EAE8E4', bg: '#FFFFFF' },
    { c0: '#B45309', c1: '#1A56DB', c2: '#166534', c3: '#6B21A8', road: '#EEE8E4', bg: '#FAFAF9' },
    { c0: '#7A1010', c1: '#1E3A5F', c2: '#1A3A2A', c3: '#3B0764', road: '#E8E6E2', bg: '#F8F8F8' },
  ],
  transit: [
    { ring5: 'rgba(74,124,89,0.15)', ring10: 'rgba(74,124,89,0.08)', ring15: 'rgba(74,124,89,0.04)', metro: '#C0392B', bus: '#2266CC', rail: '#B45309', stroke5: '#4A7C59', bg: '#FFFFFF' },
    { ring5: 'rgba(44,74,110,0.18)', ring10: 'rgba(44,74,110,0.09)', ring15: 'rgba(44,74,110,0.04)', metro: '#C0392B', bus: '#4A7C59', rail: '#B45309', stroke5: '#2C4A6E', bg: '#F8FAFF' },
    { ring5: 'rgba(58,56,53,0.12)', ring10: 'rgba(58,56,53,0.06)', ring15: 'rgba(58,56,53,0.03)', metro: '#C0392B', bus: '#3A3835', rail: '#B45309', stroke5: '#3A3835', bg: '#FAFAF9' },
  ],
  access: [
    { bg: '#F8F7F5', z1: '#16A34A', z2: '#CA8A04', z3: '#EA580C', z4: '#DC2626', road: '#E0DED8', site: '#1A1917' },
    { bg: '#F4F6FA', z1: '#2563EB', z2: '#7C3AED', z3: '#DB2777', z4: '#BE123C', road: '#DDE3EE', site: '#1A1917' },
    { bg: '#0A0C0F', z1: '#4ADE80', z2: '#FACC15', z3: '#FB923C', z4: '#F87171', road: '#1E2328', site: '#FFFFFF' },
  ],
  density: [
    { lo: '#FFF7EC', md: '#FDB97D', hi: '#C0392B', vhi: '#7B0D0D', road: '#E8E6E2', bg: '#FFFFFF' },
    { lo: '#EFF6FF', md: '#93C5FD', hi: '#1D4ED8', vhi: '#1E1B4B', road: '#E4ECF4', bg: '#F8FAFF' },
    { lo: '#F7FEE7', md: '#A3E635', hi: '#3F6212', vhi: '#1A2E05', road: '#E4EED4', bg: '#FAFFF5' },
  ],
  pedestrian: [
    { walk: '#2C4A6E', plaza: '#A8C4DC', cycle: '#4A7C59', road: '#E8E6E2', bg: '#FFFFFF' },
    { walk: '#1A1917', plaza: '#C8C6C0', cycle: '#6B6860', road: '#ECEAE4', bg: '#FAFAF9' },
    { walk: '#B45309', plaza: '#F5E6D0', cycle: '#4A7C59', road: '#EAE8E4', bg: '#FFFBF5' },
  ],
  sun: [
    { su: '#B45309', eq: '#8C8A82', wi: '#C8C6C0', sh: 'rgba(180,83,9,0.1)', site: '#1A1917' },
    { su: '#1A56DB', eq: '#7A9EC4', wi: '#BDD0E4', sh: 'rgba(26,86,219,0.08)', site: '#1A56DB' },
    { su: '#7A3028', eq: '#A07060', wi: '#C8B8B0', sh: 'rgba(122,48,40,0.08)', site: '#7A3028' },
  ],
  poiheat: [
    { c0: '#FEF3C7', c1: '#FCD34D', c2: '#F59E0B', c3: '#DC2626', c4: '#7B0D0D', road: '#EAE8E4', bg: '#FFFFFF' },
    { c0: '#EFF6FF', c1: '#93C5FD', c2: '#3B82F6', c3: '#1D4ED8', c4: '#1E1B4B', road: '#E4ECF4', bg: '#F8FAFF' },
    { c0: '#1A1A1A', c1: '#4A3A2A', c2: '#A8682A', c3: '#E07820', c4: '#FFD27A', road: '#222', bg: '#0E0E0E' },
  ],
  poitype: [
    { food: '#C0392B', shop: '#E07820', edu: '#2266CC', health: '#16A34A', leisure: '#8844AA', road: '#EAE8E4', bg: '#FFFFFF' },
    { food: '#B45309', shop: '#D4A830', edu: '#1A56DB', health: '#166534', leisure: '#6B21A8', road: '#EEE8E4', bg: '#FAFAF9' },
    { food: '#7A1010', shop: '#A8682A', edu: '#1E3A5F', health: '#1A3A2A', leisure: '#3B0764', road: '#E8E6E2', bg: '#F8F8F8' },
  ],
  combined: [
    { bld: '#1A1917', road: '#C0392B', road2: '#9A9A9A', green: '#8FC878', water: '#6EB4D4', bg: '#F7F6F3' },
    { bld: '#2C2A28', road: '#2C4A6E', road2: '#A8B8C8', green: '#A8C888', water: '#88B8D8', bg: '#FAFAF9' },
    { bld: '#080808', road: '#B45309', road2: '#B0AEA8', green: '#B8C8A0', water: '#A8C0D0', bg: '#FFFFFF' },
  ],
  location: [
    { ring: '#C0392B', fill: '#ECDFDA', stroke: '#C9A99E', faint: '#EFEDE8', label: '#1A1917', sub: '#A8A69F' },
    { ring: '#1A1917', fill: '#E8E6E0', stroke: '#C2C0B8', faint: '#F1EFEA', label: '#1A1917', sub: '#A8A69F' },
    { ring: '#2C4A6E', fill: '#DCE5EE', stroke: '#A9BBCE', faint: '#EDF0F4', label: '#2C4A6E', sub: '#8B9CB0' },
    { ring: '#5CC8F0', fill: '#16314A', stroke: '#2F5A78', faint: '#0E2236', label: '#DCF0FA', sub: '#7FB5D6' },
    { ring: '#9C3B26', fill: '#E6D6BC', stroke: '#C2A882', faint: '#EFE6D2', label: '#3A2C1C', sub: '#8A7458' },
    { ring: '#FF3B30', fill: '#FFE0DC', stroke: '#FFB0A8', faint: '#FFF0EE', label: '#101010', sub: '#9AA0A6' },
  ],
  rose: [
    { bar: '#C0392B', ring: '#EAE8E2', spoke: '#DAD7D0', label: '#6B6860', bg: '#FFFFFF' },
    { bar: '#1A1917', ring: '#EBE9E3', spoke: '#D8D5CE', label: '#8A877F', bg: '#FAFAF9' },
    { bar: '#2C5E8A', ring: '#E2E7EC', spoke: '#CAD4DE', label: '#5E6E7E', bg: '#F8FAFB' },
    { bar: '#5CC8F0', ring: '#1C3247', spoke: '#244055', label: '#9FD0E6', bg: '#0E1B2A' },
    { bar: '#A8642A', ring: '#E2D4BC', spoke: '#D2C0A0', label: '#6E5A40', bg: '#F3E9D6' },
    { bar: '#FF3B30', ring: '#EFEFEF', spoke: '#E0E0E0', label: '#606060', bg: '#FFFFFF' },
  ],
  voronoi: [
    { served: '#4F9D7F', fair: '#E6BE5E', gap: '#C85A3C', border: '#FBFAF8', pt: '#1A1917', bg: '#FBFAF8', site: '#C0392B' },
    { served: '#5FB89A', fair: '#E6C76E', gap: '#DB6A4A', border: '#14110E', pt: '#F2EFE9', bg: '#141310', site: '#FF6A4D' },
    { served: '#6CA6C2', fair: '#E2BC72', gap: '#C77052', border: '#FFFFFF', pt: '#2C2A28', bg: '#F6F7F8', site: '#C0392B' },
    { served: '#3FB8C0', fair: '#E0A83A', gap: '#E0573A', border: '#0E1B2A', pt: '#DCF0FA', bg: '#0E1B2A', site: '#FF6B5C' },
    { served: '#7E9458', fair: '#C8A24E', gap: '#B05A34', border: '#F3E9D6', pt: '#3A2C1C', bg: '#F3E9D6', site: '#9C3B26' },
    { served: '#1FB85A', fair: '#FFC400', gap: '#FF3B30', border: '#FFFFFF', pt: '#101010', bg: '#FFFFFF', site: '#0A84FF' },
  ],
  sitemap: [
    { metro: '#C0392B', edu: '#2266CC', health: '#16A34A', shop: '#E07820', green: '#5A9E4A', line: '#8A877F', label: '#1A1917', labelBg: 'rgba(255,255,255,0.88)', site: '#1A1917', base: '#EDECEA' },
    { metro: '#9C3B26', edu: '#1A56DB', health: '#166534', shop: '#B45309', green: '#4A7C59', line: '#7A8A9A', label: '#1A2A3A', labelBg: 'rgba(248,250,252,0.9)', site: '#2C4A6E', base: '#EEF0F4' },
    { metro: '#9C3B26', edu: '#5A6E8A', health: '#5E7A4A', shop: '#A8642A', green: '#7A8A4A', line: '#A8946E', label: '#3A2C1C', labelBg: 'rgba(243,235,221,0.9)', site: '#3A2C1C', base: '#EFE9DD' },
    { metro: '#FF6B5C', edu: '#5CC8F0', health: '#5CE0A0', shop: '#E0A83A', green: '#7FD08A', line: '#3A5A6E', label: '#DCF0FA', labelBg: 'rgba(14,27,42,0.82)', site: '#FFFFFF', base: '#0E1B2A' },
    { metro: '#9C3B26', edu: '#7E96A0', health: '#7E9458', shop: '#A8642A', green: '#8A9456', line: '#A8946E', label: '#3A2C1C', labelBg: 'rgba(239,230,210,0.9)', site: '#9C3B26', base: '#EFE6D2' },
    { metro: '#FF3B30', edu: '#0A84FF', health: '#1FB85A', shop: '#FF8A00', green: '#2BB673', line: '#B0B0B0', label: '#101010', labelBg: 'rgba(255,255,255,0.9)', site: '#101010', base: '#FFFFFF' },
  ],
  wind: [
    { flow: '#2C7DC0', arrow: '#1E5C90', bld: '#C8C6C0', site: '#C0392B', base: '#EDECEA' },
    { flow: '#3AA0A8', arrow: '#1E6E76', bld: '#C8C6C0', site: '#C0392B', base: '#ECEEEA' },
    { flow: '#7A8AA8', arrow: '#4A5A78', bld: '#CCCAC4', site: '#C0392B', base: '#EEEEEC' },
    { flow: '#5CC8F0', arrow: '#9FE0F2', bld: '#2A3E4E', site: '#FF6B5C', base: '#0E1B2A' },
    { flow: '#6E96A0', arrow: '#4E6E74', bld: '#C8B89A', site: '#9C3B26', base: '#EFE6D2' },
    { flow: '#0A84FF', arrow: '#0050B0', bld: '#D8D8D8', site: '#FF3B30', base: '#FFFFFF' },
  ],
  massing: [
    { lo: '#D8D2C4', mid: '#B89A6A', hi: '#8A5A2A', shadow: 'rgba(40,30,20,0.28)', edge: '#6E5A3E', site: '#C0392B', base: '#EDECEA' },
    { lo: '#CFE0EA', mid: '#6FA0C8', hi: '#24527A', shadow: 'rgba(20,40,70,0.30)', edge: '#1E456A', site: '#C0392B', base: '#EEF0F4' },
    { lo: '#E0DACE', mid: '#C8A878', hi: '#8A5A30', shadow: 'rgba(60,44,28,0.26)', edge: '#7A5C3A', site: '#9C3B26', base: '#EFE9DD' },
    { lo: '#1E3A52', mid: '#3A88B0', hi: '#7FE0F0', shadow: 'rgba(0,0,0,0.5)', edge: '#0A1B2A', site: '#FF6B5C', base: '#0E1B2A' },
    { lo: '#D8D0B0', mid: '#A89456', hi: '#6E5A2A', shadow: 'rgba(50,40,20,0.28)', edge: '#5A4A28', site: '#9C3B26', base: '#EFE6D2' },
    { lo: '#BFE8D0', mid: '#3FB87A', hi: '#0E6E3A', shadow: 'rgba(0,40,20,0.3)', edge: '#0A5A2E', site: '#FF3B30', base: '#FFFFFF' },
  ],
};

// climate colour schemes (climTemp/climPrecip/climOver/climDay/climsolar)
const CSCH = [
  { bg: '#FBFAF7', ink: '#26241F', sub: '#A8A49C', grid: '#EEEAE2', ax: '#D8D3C9', mon: '#B0ABA2', hi: '#C0392B', lo: '#5B7A99', bar: '#3E6B8C', warm: '#D89A3A' },
  { bg: '#FAFAF9', ink: '#1F2430', sub: '#9AA0AC', grid: '#E9E9E7', ax: '#D6D6D2', mon: '#AEAEA8', hi: '#374151', lo: '#8A93A3', bar: '#6B7280', warm: '#A98B6E' },
  { bg: '#FBF8F2', ink: '#3A2E22', sub: '#A89A86', grid: '#EDE7DC', ax: '#DDD4C6', mon: '#B6AB99', hi: '#B45309', lo: '#0E7490', bar: '#0E7490', warm: '#CA8A04' },
  { bg: '#F7FAFB', ink: '#1B2A33', sub: '#9AAAB2', grid: '#E6EEF1', ax: '#CFDDE2', mon: '#A6B6BD', hi: '#E2603F', lo: '#3E7CA8', bar: '#2E6E93', warm: '#5AA6B8' },
  { bg: '#F8FAF6', ink: '#243026', sub: '#9AA890', grid: '#E8EEE2', ax: '#D4DCC9', mon: '#AAB6A0', hi: '#B85C44', lo: '#6E8E6A', bar: '#5E8E72', warm: '#C49A52' },
  { bg: '#FAF8FB', ink: '#2A2433', sub: '#A29AAC', grid: '#ECE8F0', ax: '#D8D2E0', mon: '#B2AABC', hi: '#8E4A6E', lo: '#6A6A8E', bar: '#5E5E86', warm: '#B07AA0' },
];

// terrain colour schemes (contour/aspect)
const TSCH = [
  { lo: [214, 226, 206], hi: [206, 176, 128], line: '#9A8260', idx: '#6B4A2E', flow: '#3E6B8C', bg: '#F6F3EC' },
  { lo: [228, 232, 236], hi: [120, 132, 150], line: '#9AA0AC', idx: '#46505C', flow: '#46505C', bg: '#F4F5F7' },
  { lo: [206, 228, 232], hi: [28, 92, 120], line: '#5E8CA0', idx: '#234C5E', flow: '#234C5E', bg: '#EDF3F5' },
  { lo: [220, 228, 210], hi: [104, 140, 96], line: '#7E9472', idx: '#3C4E34', flow: '#3C6E4E', bg: '#F4F7F0' },
  { lo: [238, 226, 212], hi: [150, 72, 40], line: '#B07A56', idx: '#6E3A22', flow: '#9A4A2E', bg: '#FAF6F0' },
  { lo: [236, 236, 234], hi: [88, 88, 92], line: '#9A9A98', idx: '#3A3A3C', flow: '#3A3A3C', bg: '#F6F6F4' },
];

const ANALYSES = [
  { id: 'roads', name: 'Roads & Streets', name_zh: '道路与街道', sub: 'primary, secondary, paths', sub_zh: '主干道、次干道、步道', tag: 'OSM', on: true },
  { id: 'landuse', name: 'Functional Areas', name_zh: '功能分区', sub: 'zoning & land use', sub_zh: '用地规划与土地利用', tag: 'OSM', on: true },
  { id: 'gw', name: 'Green & Water', name_zh: '绿地与水体', sub: 'parks, forests, rivers', sub_zh: '公园、森林、河流', tag: 'OSM', on: true },
  { id: 'nodes', name: 'Node Analysis', name_zh: '节点分析', sub: 'spatial nodes & axes', sub_zh: '空间节点与轴线', tag: 'GIS', on: false },
  { id: 'sun', name: 'Sun Path & Wind', name_zh: '日照与风向', sub: 'solar analysis', sub_zh: '日照轨迹分析', tag: 'CALC', on: false },
  { id: 'sat', name: 'Satellite View', name_zh: '卫星图', sub: 'aerial + desaturated', sub_zh: '去色航拍底图', tag: 'MAP', on: false },
  { id: 'context', name: 'City Context', name_zh: '城市区位', sub: 'site location in city', sub_zh: '场地在城市中的位置', tag: 'MAP', on: false },
  { id: 'fabric', name: 'Urban Fabric', name_zh: '城市肌理', sub: 'building morphology', sub_zh: '建筑物形态肌理', tag: 'OSM', on: false },
  { id: 'orient', name: 'Orientation', name_zh: '方位分析', sub: 'cardinal directions', sub_zh: '指北针与基本方向', tag: 'GEO', on: false },
  { id: 'noise', name: 'Noise Analysis', name_zh: '噪音分析', sub: 'road traffic noise zones', sub_zh: '道路交通噪音区域', tag: 'OSM', on: false },
  { id: 'vitality', name: 'Street Vitality', name_zh: '街道活力', sub: 'POI density & activity', sub_zh: '兴趣点密度与活跃度', tag: 'OSM', on: false },
  { id: 'transit', name: 'Transit Access', name_zh: '交通可达性', sub: 'walking time to stops', sub_zh: '步行至交通站点的时间', tag: 'OSM', on: false },
  { id: 'access', name: 'Access Analysis', name_zh: '可达性分析', sub: 'isochrone from site', sub_zh: '场地出发等时线', tag: 'GIS', on: false },
  { id: 'density', name: 'Building Density', name_zh: '建筑密度', sub: 'floor area ratio & coverage', sub_zh: '容积率与建筑密度', tag: 'OSM', on: false },
  { id: 'pedestrian', name: 'Pedestrian Network', name_zh: '步行网络', sub: 'walkways, paths & plazas', sub_zh: '人行通道、路径与广场', tag: 'OSM', on: false },
  { id: 'poiheat', name: 'POI Density Heat', name_zh: '兴趣点热力', sub: 'amenity concentration', sub_zh: '服务设施集中度', tag: 'GIS', on: false },
  { id: 'poitype', name: 'POI Type Map', name_zh: '兴趣点分类', sub: 'amenities by category', sub_zh: '各类别服务设施', tag: 'OSM', on: false },
  { id: 'combined', name: 'Combined Overlay', name_zh: '综合叠加', sub: 'roads + green + buildings', sub_zh: '道路 + 绿化 + 建筑', tag: 'SYN', on: false },
  { id: 'location', name: 'Location', name_zh: '区位图', sub: 'site within country', sub_zh: '场地所在国家区位', tag: 'GEO', on: false },
  { id: 'orientrose', name: 'Orientation Rose', name_zh: '街道朝向', sub: 'street bearing distribution', sub_zh: '街道方位分布玫瑰图', tag: 'GEO', on: false },
  { id: 'voronoi', name: 'Service Territories', name_zh: '服务势力圈', sub: 'voronoi catchment & gaps', sub_zh: '服务覆盖与盲区', tag: 'GEO', on: false },
  { id: 'sitemap', name: 'Annotated Map', name_zh: '标注导览图', sub: 'nearest facilities on map', sub_zh: '最近设施标注', tag: 'GEO', on: false },
  { id: 'wind', name: 'Wind Flow', name_zh: '风环境', sub: 'prevailing flow around blocks', sub_zh: '绕建筑风场流线', tag: 'GEO', on: false },
  { id: 'massing', name: 'Building Massing', name_zh: '建筑体量', sub: 'height & shadow on map', sub_zh: '建筑高度与阴影', tag: 'GEO', on: false },
  { id: 'climtemp', name: 'Temperature Year', name_zh: '年度气温', sub: 'monthly high / low (°C)', sub_zh: '月均最高/最低温(°C)', tag: 'CLIM', on: false },
  { id: 'climprecip', name: 'Precipitation Year', name_zh: '年度降雨', sub: 'monthly rainfall (mm)', sub_zh: '月均降雨量(mm)', tag: 'CLIM', on: false },
  { id: 'climover', name: 'Annual Climate', name_zh: '年度气候', sub: 'temp + rainfall climograph', sub_zh: '气温+降雨气候图', tag: 'CLIM', on: false },
  { id: 'climday', name: 'Daylight Hours', name_zh: '日照时数', sub: 'mean daylight per month', sub_zh: '月均日照时长', tag: 'CLIM', on: false },
  { id: 'climsolar', name: 'Solar Radiation', name_zh: '太阳辐射', sub: 'shortwave MJ/m²·day', sub_zh: '短波辐射 MJ/m²·日', tag: 'CLIM', on: false },
  { id: 'contour', name: 'Topography', name_zh: '地形等高线', sub: 'elevation contours', sub_zh: '海拔等高线', tag: 'DEM', on: false },
  { id: 'aspect', name: 'Slope & Drainage', name_zh: '坡度与汇水', sub: 'downhill flow direction', sub_zh: '汇水流向', tag: 'DEM', on: false },
];

/* ════════════════════════════════════════  MAP  ════════════════════════════════════════ */
const TILES = {
  light: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  sat: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  grey: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
  dark: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
};
const ATTR = '© <a href="https://openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com">CARTO</a>';
const map = L.map('map', { center: [30.6586, 104.0648], zoom: 14 });
let tile = L.tileLayer(TILES.light, { attribution: ATTR, maxZoom: 19 }).addTo(map);
let AG = null, pin = null, ring = null;
let sLat = null, sLng = null, sName = '', curR = 600, curStyle = 'light';
let lastD = {}, cardSch = {}, cardName = {};

const mkPin = (dark) => L.divIcon({
  className: '', iconSize: [12, 12], iconAnchor: [6, 6],
  html: '<div style="width:12px;height:12px;border-radius:50%;background:' + (dark ? '#E8C87A' : '#1A1917') + ';border:2px solid #fff;box-shadow:0 1px 6px rgba(0,0,0,.22),0 0 0 3px ' + (dark ? 'rgba(232,200,122,.22)' : 'rgba(26,25,23,.1)') + '">'
});

map.on('click', e => {
  if (polyMode) { addPolyPoint(e.latlng.lat, e.latlng.lng); return; }
  const unified = unifyToWGS84(e.latlng.lat, e.latlng.lng);
  sLat = unified[0]; sLng = unified[1];
  dropPin(); document.getElementById('hint').style.opacity = '0'; revGeo(); if (curStyle === 'dark') drawOv();
});

function dropPin() {
  if (pin) map.removeLayer(pin); if (ring) map.removeLayer(ring);
  // Clear stale results when new pin dropped
  document.getElementById('emp').style.display = 'flex';
  document.getElementById('rgrid').style.display = 'none';
  document.getElementById('rgrid').innerHTML = '';
  lastD = {}; cardSch = {};
  const dk = curStyle === 'dark';
  pin = L.marker([sLat, sLng], { icon: mkPin(dk) }).addTo(map);
  ring = L.circle([sLat, sLng], { radius: curR, color: dk ? 'rgba(232,200,122,.5)' : '#1A1917', weight: .9, fillColor: 'transparent', dashArray: '5,5' }).addTo(map);
  document.getElementById('latB').textContent = (lang === 'zh' ? '纬度 ' : 'Lat ') + sLat.toFixed(5);
  document.getElementById('lngB').textContent = (lang === 'zh' ? '经度 ' : 'Lng ') + sLng.toFixed(5);
  const hc = document.getElementById('hudCoord');
  hc.style.display = 'block'; hc.textContent = sLat.toFixed(4) + '°N  ' + sLng.toFixed(4) + '°E';
  const dk2 = curStyle === 'dark';
  ['hudTag', 'hudCoord'].forEach(id => document.getElementById(id).className = 'hp' + (dk2 ? ' dk' : ''));
  document.getElementById('sdot').className = 'sd pulse';
  document.querySelector('.gen').classList.add('ready');
  document.getElementById('stxt').textContent = (lang === 'zh' ? '已放置大头针 — 点击开始生成 ↗' : 'SITE PINNED — CLICK GENERATE ↗');
}

function updateR() {
  curR = parseInt(document.getElementById('rSlider').value);
  document.getElementById('rVal').textContent = curR + 'm';
  if (ring && sLat) { ring.setRadius(curR); }
  if (curStyle === 'dark' && sLat) drawOv();
}

async function revGeo() {
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${sLat}&lon=${sLng}`, {
      method: 'GET',
      headers: { 'Accept-Language': (typeof lang !== 'undefined' && lang === 'zh') ? 'zh-CN,zh;q=0.9' : 'en' },
      signal: (() => { const ac = new AbortController(); setTimeout(() => ac.abort(), 8000); return ac.signal; })()
    });
    const d = await r.json(); const a = d.address || {};
    sName = a.city || a.town || a.village || a.county || 'Site';
    const dist = a.suburb || a.neighbourhood || '';
    document.getElementById('hudTag').textContent = (dist ? dist + ' · ' : '') + sName;
    if (d.display_name) document.getElementById('locIn').value = d.display_name.split(',').slice(0, 3).join(', ');
  } catch (e) { sName = (lang === 'zh' ? '场地' : 'Site'); }
}

async function doSearch() {
  const q = document.getElementById('locIn').value.trim();
  if (!q) { toast(t('ts_enter_loc')); return; }
  toast(t('ts_searching'));
  try {
    const ac = new AbortController();
    const tid = setTimeout(() => ac.abort(), 12000);
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`, {
      method: 'GET',
      headers: { 'Accept-Language': (typeof lang !== 'undefined' && lang === 'zh') ? 'zh-CN,zh;q=0.9' : 'en' },
      signal: ac.signal
    });
    clearTimeout(tid);
    if (!r.ok) { toast(t('ts_search_error') + ' ' + r.status); return; }
    const d = await r.json();
    if (!d.length) { toast(t('ts_not_found')); return; }
    const unified = unifyToWGS84(parseFloat(d[0].lat), parseFloat(d[0].lon));
    sLat = unified[0]; sLng = unified[1];
    map.setView([sLat, sLng], 15, { animate: true });
    dropPin(); revGeo();
    toast(t('ts_found') + ' · ' + (d[0].display_name || '').split(',')[0]);
  } catch (e) {
    toast(e.name === 'AbortError' ? t('ts_timeout') : t('ts_failed'));
    console.error('Search error:', e);
  }
}

function setTile(el, key) {
  document.querySelectorAll('.mb').forEach(b => b.classList.remove('on'));
  el.classList.add('on'); curStyle = key;
  map.removeLayer(tile);
  tile = L.tileLayer(TILES[key] || TILES.light, { attribution: ATTR, maxZoom: 19 }).addTo(map);
  const mw = document.getElementById('mwrap');
  mw.classList.toggle('sat-mode', key === 'sat');
  mw.classList.toggle('dark-mode', key === 'dark');
  if (AG) { map.removeLayer(AG); AG = null; }
  if (key === 'dark' && sLat) drawOv();
  if (sLat) dropPin();
}

/* ════════════════════════════════════════
   ANALYSIS OVERLAY — full-map extent
════════════════════════════════════════ */
function drawOv() {
  if (AG) { map.removeLayer(AG); }
  const g = L.layerGroup().addTo(map); AG = g;
  const lat = sLat, lng = sLng, r = curR;
  const latR = lat * Math.PI / 180;
  const mpL = 1 / 111320, mpN = 1 / (111320 * Math.cos(latR));
  function pol(dist, deg) { const br = (90 - deg) * Math.PI / 180; return [lat + dist * Math.sin(br) * mpL, lng + dist * Math.cos(br) * mpN]; }
  function lbl(txt, col) { return '<div style="font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:8px;color:' + col + ';background:rgba(6,6,10,.85);padding:3px 8px;border:0.5px solid rgba(255,255,255,.1);border-radius:2px;white-space:nowrap;letter-spacing:.07em;font-weight:600">' + txt + '</div>'; }
  function arrowI(deg, col, sz) { sz = sz || 22; return L.divIcon({ className: '', iconSize: [sz, sz], iconAnchor: [sz / 2, sz / 2], html: '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(' + deg + 'deg)"><polygon points="12,1 21,22 12,16 3,22" fill="' + col + '"/></svg>' }); }

  const bds = map.getBounds();
  const mW = bds.getEast() - bds.getWest(), mH = bds.getNorth() - bds.getSouth();
  const GC = 'rgba(148,140,122,.28)';
  // Full-map grid
  L.polyline([[lat, bds.getWest() - mW], [lat, bds.getEast() + mW]], { color: GC, weight: .9, dashArray: '9,7' }).addTo(g);
  L.polyline([[bds.getSouth() - mH, lng], [bds.getNorth() + mH, lng]], { color: GC, weight: .9, dashArray: '9,7' }).addTo(g);
  L.polyline([[bds.getSouth(), bds.getWest()], [bds.getNorth(), bds.getEast()]], { color: GC, weight: .4, dashArray: '4,9', opacity: .6 }).addTo(g);
  L.polyline([[bds.getNorth(), bds.getWest()], [bds.getSouth(), bds.getEast()]], { color: GC, weight: .4, dashArray: '4,9', opacity: .6 }).addTo(g);
  // Site ring
  L.circle([lat, lng], { radius: r, color: 'rgba(148,140,122,.42)', weight: .9, fillColor: 'transparent', dashArray: '5,5' }).addTo(g);

  // Road access arrows — extend to map edge
  const RC = 'rgba(148,65,58,.85)';
  [{ b: 0, l: 'N' }, { b: 90, l: 'E' }, { b: 180, l: 'S' }, { b: 270, l: 'W' }].forEach(({ b: deg, l: lx }) => {
    const edge = pol(r * 2.2, deg), arr = pol(r * .90, deg), lab = pol(r * 1.05, deg);
    L.polyline([pol(r * .04, deg), edge], { color: RC, weight: 3.5, opacity: .82, lineCap: 'round' }).addTo(g);
    L.marker(arr, { icon: arrowI(deg, RC, 24) }).addTo(g);
    const anch = { 0: [20, 24], 90: [0, 10], 180: [20, 0], 270: [44, 10] };
    L.marker(lab, { icon: L.divIcon({ className: '', html: lbl(lx + ' ACCESS', RC), iconAnchor: anch[deg] || [20, 10] }) }).addTo(g);
  });

  // Sun path arcs
  function sunPos(h, doy) {
    const decl = .409 * Math.sin(2 * Math.PI / 365 * (doy - 80));
    const ha = (h - 12) * 15 * Math.PI / 180;
    const alt = Math.asin(Math.sin(latR) * Math.sin(decl) + Math.cos(latR) * Math.cos(decl) * Math.cos(ha)) * 180 / Math.PI;
    const az = (Math.atan2(-Math.cos(decl) * Math.sin(ha), Math.sin(decl) * Math.cos(latR) - Math.cos(decl) * Math.cos(ha) * Math.sin(latR)) * 180 / Math.PI + 180);
    return { az, alt };
  }
  function sunPt(h, doy, d2) {
    const s = sunPos(h, doy); if (s.alt < 2) return null;
    const azR = (90 - s.az) * Math.PI / 180;
    return [lat + d2 * Math.sin(azR) * mpL, lng + d2 * Math.cos(azR) * mpN];
  }
  const SC = '#C4A855';
  [[172, r * 1.6, SC, 1.8, ''], [355, r * 1.2, SC, .9, '3,4']].forEach(([doy, d2, col, w, da]) => {
    const arc = []; for (let h = 5; h <= 19; h += .2) { const p = sunPt(h, doy, d2); if (p) arc.push(p); }
    if (arc.length > 2) L.polyline(arc, { color: col, weight: w, dashArray: da || undefined, opacity: .88 }).addTo(g);
  });
  [8, 10, 12, 14, 16].forEach(h => {
    const p = sunPt(h, 172, r * 1.6); if (!p) return;
    L.circleMarker(p, { radius: h === 12 ? 5 : 3, color: SC, fillColor: h === 12 ? SC : 'rgba(8,8,10,.9)', fillOpacity: 1, weight: 1.5 }).addTo(g);
    if (h === 12) L.marker(p, { icon: L.divIcon({ className: '', html: lbl('☀ NOON', SC), iconAnchor: [24, -8] }) }).addTo(g);
    else L.marker(p, { icon: L.divIcon({ className: '', html: '<div style="font:bold 7px \'Noto Sans\', \'Noto Sans SC\', sans-serif;color:' + SC + ';opacity:.75">' + h + 'h</div>', iconAnchor: [9, -2] }) }).addTo(g);
  });

  // Wind flow
  const WC = 'rgba(52,112,142,.82)';
  [[-20, 0], [0, 0], [20, 0]].forEach(([off]) => {
    const fr = pol(r * 2.0, 225 + off * .3), to = pol(r * .1, 225 + off * .2);
    L.polyline([fr, to], { color: WC, weight: 2.5, opacity: .78, lineCap: 'round' }).addTo(g);
    L.marker(to, { icon: arrowI(45, WC, 18) }).addTo(g);
  });
  L.marker(pol(r * 2.1, 224), { icon: L.divIcon({ className: '', html: lbl('WIND SW→NE', WC), iconAnchor: [48, 10] }) }).addTo(g);

  // Noise zone
  const NC = 'rgba(128,50,50,.72)';
  L.circle(pol(r * 1.1, 90), { radius: r * .38, color: NC, weight: 1.5, fillColor: NC, fillOpacity: .06, dashArray: '4,3' }).addTo(g);
  L.circle(pol(r * .75, 88), { radius: r * .25, color: NC, weight: .9, fillColor: 'transparent', dashArray: '3,5', opacity: .5 }).addTo(g);
  [72, 90, 108].forEach(d2 => L.polyline([pol(r * .55, d2), pol(r * .85, 90)], { color: NC, weight: 1.5, opacity: .38, lineCap: 'round' }).addTo(g));
  L.marker(pol(r * 1.25, 90), { icon: L.divIcon({ className: '', html: lbl('NOISE', NC), iconAnchor: [22, 10] }) }).addTo(g);

  // View axes
  const VC = 'rgba(46,122,82,.72)';
  [45, 130, 315].forEach(d2 => {
    L.polyline([[lat, lng], pol(r * 1.7, d2)], { color: VC, weight: 1.8, dashArray: '8,4', opacity: .7, lineCap: 'round' }).addTo(g);
    L.marker(pol(r * 1.65, d2), { icon: arrowI(d2, VC, 16) }).addTo(g);
  });
  L.marker(pol(r * 1.8, 47), { icon: L.divIcon({ className: '', html: lbl('VIEW', VC), iconAnchor: [14, -6] }) }).addTo(g);

  // Compass
  const cl = bds.getNorth() - mH * .07, cn = bds.getEast() - mW * .07;
  L.marker([cl, cn], { icon: L.divIcon({ className: '', iconSize: [48, 48], iconAnchor: [24, 24], html: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="rgba(6,6,10,.88)" stroke="rgba(255,255,255,.14)" stroke-width=".8"/><polygon points="24,4 27,24 24,19 21,24" fill="rgba(255,255,255,.90)"/><polygon points="24,44 27,24 24,29 21,24" fill="rgba(255,255,255,.22)"/><polygon points="4,24 24,21 19,24 24,27" fill="rgba(255,255,255,.22)"/><polygon points="44,24 24,21 29,24 24,27" fill="rgba(255,255,255,.22)"/><text x="24" y="11" text-anchor="middle" font-size="7" fill="rgba(255,255,255,.9)" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">N</text></svg>' }) }).addTo(g);

  // Legend
  const ll = bds.getSouth() + mH * .04, lln = bds.getWest() + mW * .02;
  L.marker([ll, lln], { icon: L.divIcon({ className: '', iconAnchor: [0, 0], html: '<div style="font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:7.5px;background:rgba(6,6,10,.88);padding:7px 11px;border:0.5px solid rgba(255,255,255,.1);border-radius:3px;line-height:1.95;pointer-events:none"><div style="color:rgba(255,255,255,.55);font-weight:700;margin-bottom:3px;letter-spacing:.1em">ANALYSIS</div><div><span style="color:' + RC + '">━━</span> ACCESS</div><div><span style="color:' + SC + '">━━</span> SUN PATH</div><div><span style="color:' + WC + '">━━</span> WIND</div><div><span style="color:' + VC + '">╌╌</span> VIEW AXES</div><div><span style="color:' + NC + '">○</span> NOISE</div></div>' }) }).addTo(g);
}

/* ════════════════════════════════════════
   MAP DATA OVERLAY — 3 visual styles
════════════════════════════════════════ */
let mapOvLayer = null, curOvStyle = null;

const OV = {
  nolli: {
    tile: 'grey',
    bldFill: '#C8C5BF', bldStrk: '#A0A09A', bldOp: .9,
    gFill: '#7EBF6A', gStrk: '#4A9048', gOp: .78,
    wFill: '#5AAACA', wStrk: '#2A7AA0', wOp: .82,
    rCol: { motorway: '#FFF', trunk: '#FFF', primary: '#FFF', secondary: '#ECEAE4', tertiary: '#D8D6D0', residential: '#C8C6C0' },
    rW: { motorway: 3, trunk: 2.8, primary: 2.4, secondary: 1.6, tertiary: 1, residential: .7 },
  },
  diagram: {
    tile: 'light',
    bldFill: '#2A2825', bldStrk: '#1A1714', bldOp: .88,
    gFill: '#C8E8A0', gStrk: '#88C060', gOp: .72,
    wFill: '#A0D0EE', wStrk: '#5098C8', wOp: .78,
    rCol: { motorway: '#C0392B', trunk: '#C0392B', primary: '#C0392B', secondary: '#2C4A6E', tertiary: '#6B8099', residential: '#A8B8C8' },
    rW: { motorway: 3.5, trunk: 3, primary: 2.8, secondary: 1.8, tertiary: 1, residential: .6 },
  },
  dark: {
    tile: 'dark',
    bldFill: '#3A3630', bldStrk: '#504A42', bldOp: .85,
    gFill: '#1C5A30', gStrk: '#2A8048', gOp: .82,
    wFill: '#1A3858', wStrk: '#2A5888', wOp: .85,
    rCol: { motorway: '#E8D898', trunk: '#D8C070', primary: '#C4AC50', secondary: '#7A9AAE', tertiary: '#505A68', residential: '#343840' },
    rW: { motorway: 3, trunk: 2.8, primary: 2.2, secondary: 1.5, tertiary: .9, residential: .6 },
  },
};

// Note: isRealGreen and isRealWater are imported from shared utils.js

function drawMapOv(key) {
  if (mapOvLayer) { map.removeLayer(mapOvLayer); mapOvLayer = null; }
  // Remove fade div
  const oldFade = document.getElementById('ovFade');
  if (oldFade) oldFade.remove();
  if (!key || !sLat) return;
  const st = OV[key]; if (!st) return;

  // Switch tile
  map.removeLayer(tile);
  tile = L.tileLayer(TILES[st.tile] || TILES.light, { attribution: ATTR, maxZoom: 19 }).addTo(map);
  const mw = document.getElementById('mwrap');
  mw.classList.toggle('sat-mode', st.tile === 'sat');
  mw.classList.toggle('dark-mode', st.tile === 'dark');
  curStyle = st.tile;

  const g = L.layerGroup().addTo(map);
  mapOvLayer = g;

  // Green & Water — strict filter
  (lastD.gw && lastD.gw.elements || []).forEach(el => {
    const t = el.tags || {};
    const isW = isRealWater(t);
    const isG = isRealGreen(t);
    if (!isW && !isG) return;
    const fill = isW ? st.wFill : st.gFill, strk = isW ? st.wStrk : st.gStrk, op = isW ? st.wOp : st.gOp;
    if (el.geometry && el.geometry.length > 2)
      L.polygon(el.geometry.map(n => [n.lat, n.lon]), { color: strk, weight: .8, fillColor: fill, fillOpacity: op, opacity: .9 }).addTo(g);
    if (el.members) {
      const pts = [];
      el.members.forEach(m => { if (!m.geometry || m.role === 'inner') return; pts.push(m.geometry.map(n => [n.lat, n.lon])); });
      if (pts.length) L.polygon(pts, { color: strk, weight: .8, fillColor: fill, fillOpacity: op, opacity: .9 }).addTo(g);
    }
  });

  // Buildings
  (lastD.buildings && lastD.buildings.elements || []).forEach(el => {
    if (!el.geometry || el.geometry.length < 3) return;
    L.polygon(el.geometry.map(n => [n.lat, n.lon]), { color: st.bldStrk, weight: .5, fillColor: st.bldFill, fillOpacity: st.bldOp, opacity: .85 }).addTo(g);
  });

  // Roads — draw thin first then primary on top
  ['residential', 'tertiary', 'secondary', 'primary', 'trunk', 'motorway'].forEach(hw => {
    const col = st.rCol[hw], w = st.rW[hw]; if (!col || !w) return;
    (lastD.roads && lastD.roads.elements || []).forEach(el => {
      if (!el.geometry || (el.tags && el.tags.highway) !== hw) return;
      L.polyline(el.geometry.map(n => [n.lat, n.lon]), { color: col, weight: w, lineCap: 'round', lineJoin: 'round', opacity: .95 }).addTo(g);
    });
  });

  // Add radial gradient fade to hide square data boundary
  updateOvFade();
  map.on('move zoom', updateOvFade);
}

function updateOvFade() {
  if (!curOvStyle || !sLat) {
    const d = document.getElementById('ovFade'); if (d) d.remove(); return;
  }
  let fadeDiv = document.getElementById('ovFade');
  if (!fadeDiv) {
    fadeDiv = document.createElement('div');
    fadeDiv.id = 'ovFade';
    fadeDiv.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:450;transition:background .3s';
    document.getElementById('mwrap').appendChild(fadeDiv);
  }
  const bg = curStyle === 'dark' ? '10,12,16' : (curStyle === 'grey' ? '236,234,230' : '248,247,245');
  // Vignette: four edges of the viewport fade to background, center clear
  fadeDiv.style.background =
    `radial-gradient(ellipse 70% 60% at 50% 50%, ` +
    `transparent 0%, ` +
    `transparent 45%, ` +
    `rgba(${bg},0.08) 58%, ` +
    `rgba(${bg},0.28) 70%, ` +
    `rgba(${bg},0.58) 82%, ` +
    `rgba(${bg},0.82) 91%, ` +
    `rgba(${bg},0.96) 100%)`;
}

function setOvStyle(key, el) {
  document.querySelectorAll('.ovbtn').forEach(b => b.classList.remove('on'));
  map.off('move zoom', updateOvFade);
  if (curOvStyle === key) {
    drawMapOv(null);
    curOvStyle = null;
    const d = document.getElementById('ovFade'); if (d) d.remove();
    return;
  }
  el.classList.add('on');
  curOvStyle = key;
  // Auto-zoom tighter to site center so overlay is focused (not too wide)
  if (sLat) {
    const bounds = L.latLng(sLat, sLng).toBounds(curR * 1.15);
    map.flyToBounds(bounds, { duration: 0.8, padding: [0, 0] });
    setTimeout(() => drawMapOv(key), 850);
  } else {
    drawMapOv(key);
  }
}

const OPS = SHARED_OVERPASS_ENDPOINTS;

// ── Daily usage limit (per browser, soft cap to protect free OSM) ──
function checkDailyLimit() {
  return true;
}
function showBusyMsg() {
  let m = document.getElementById('busyModal');
  if (!m) {
    m = document.createElement('div'); m.id = 'busyModal';
    m.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(20,22,27,.6);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;font-family:Inter,system-ui,sans-serif';
    m.onclick = function (e) { if (e.target === m) m.style.display = 'none'; };
    m.innerHTML = '<div style="background:#fff;border-radius:20px;padding:36px;max-width:380px;width:90%;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,.3)">'
      + '<div style="font-size:30px;margin-bottom:8px">⏳</div>'
      + '<div style="font-size:18px;font-weight:700;color:#1A1917;margin-bottom:8px">数据源繁忙，请稍后再试</div>'
      + '<div style="font-size:12px;color:#8C8A82;line-height:1.6">The map data source is busy right now — please try again in a moment.<br>同时在线人数较多时可能出错，稍等片刻重新生成即可。感谢理解 ♥</div>'
      + '<button onclick="document.getElementById(\'busyModal\').style.display=\'none\'" style="margin-top:20px;padding:11px 28px;border-radius:30px;background:#1A1917;color:#fff;border:none;font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:11px;font-weight:700;letter-spacing:.06em;cursor:pointer">RETRY LATER</button></div>';
    document.body.appendChild(m);
  }
  m.style.display = 'flex';
}

async function testNet() {
  const dot = document.getElementById('netDot');
  const txt = document.getElementById('netTxt');
  if (!dot || !txt) return;
  dot.style.background = '#B45309'; txt.textContent = t('ts_osm_testing');
  // Try all endpoints; any one ok means reachable
  for (let i = 0; i < OPS.length; i++) {
    try {
      const ac = new AbortController();
      const tid = setTimeout(() => ac.abort(), 15000);
      const r = await fetch(OPS[i], {
        method: 'POST',
        body: 'data=' + encodeURIComponent('[out:json][timeout:10];node(48.85,2.29,48.86,2.30);out 1;'),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        signal: ac.signal
      });
      clearTimeout(tid);
      if (r.ok) { dot.style.background = '#4A7C59'; txt.textContent = t('ts_osm_reachable'); return; }
    } catch (e) { /* try next */ }
  }
  dot.style.background = '#C0392B'; txt.textContent = t('ts_osm_offline');
}

function dbgLog(msg) {
  // Silent logging - keep panel hidden
  console.log('[dbg]', msg);
}

async function op(ql) {
  const body = 'data=' + encodeURIComponent(ql);
  const hdrs = { 'Content-Type': 'application/x-www-form-urlencoded' };
  dbgLog('→ querying ' + ql.slice(0, 60) + '...');
  // Two passes over the endpoints — mobile networks often need a retry
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < OPS.length; i++) {
      const ep = OPS[i];
      dbgLog('  trying: ' + ep.replace('https://', '') + (pass ? ' (retry)' : ''));
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 30000);
        const r = await fetch(ep, { method: 'POST', body, headers: hdrs, signal: ctrl.signal });
        clearTimeout(t);
        dbgLog('  status: ' + r.status);
        if (!r.ok) { dbgLog('  SKIP (not ok)'); continue; }
        const d = await r.json();
        if (d && Array.isArray(d.elements)) {
          dbgLog('  ✓ got ' + d.elements.length + ' elements');
          const dot = document.getElementById('netDot');
          if (dot) { dot.style.background = '#4A7C59'; document.getElementById('netTxt').textContent = 'OSM ✓ ' + d.elements.length + ' el'; }
          return d;
        }
        dbgLog('  SKIP (bad json)');
      } catch (e) {
        dbgLog('  ERROR: ' + e.message);
        await new Promise(r => setTimeout(r, 400));
      }
    }
  }
  dbgLog('✗ ALL ENDPOINTS FAILED');
  const dot = document.getElementById('netDot');
  if (dot) { dot.style.background = '#C0392B'; document.getElementById('netTxt').textContent = 'OSM busy — try again'; }
  return { elements: [] };
}
function bbox() {
  const d = curR / 111320, dl = curR / (111320 * Math.cos(sLat * Math.PI / 180));
  return (sLat - d) + ',' + (sLng - dl) + ',' + (sLat + d) + ',' + (sLng + dl);
}

/* ════════════════════════════════════════
   SVG ENGINE
════════════════════════════════════════ */
const W = 240, H = 240, PAD = 22;

function getBounds() {
  const d = curR / 111320, dl = curR / (111320 * Math.cos(sLat * Math.PI / 180));
  return { mnLat: sLat - d, mxLat: sLat + d, mnLng: sLng - dl, mxLng: sLng + dl };
}

/* ════════════════════════════════════════
   COORDINATE TRANSFORMATION (GCJ02/BD09/WGS84)
════════════════════════════════════════ */
const PI = Math.PI;
// Coordinate transformations (gcj02towgs84, outOfChina, unifyToWGS84, latLngToMeters) are imported from shared utils.js

function proj(lat, lng, b) {
  if (!b || b.mxLng === b.mnLng || b.mxLat === b.mnLat) return [W / 2, H / 2];
  const [mx, my] = latLngToMeters(lat, lng);
  const [minX, minY] = latLngToMeters(b.mnLat, b.mnLng);
  const [maxX, maxY] = latLngToMeters(b.mxLat, b.mxLng);
  const x = PAD + (mx - minX) / (maxX - minX) * (W - PAD * 2);
  const y = PAD + (maxY - my) / (maxY - minY) * (H - PAD * 2);
  return [isFinite(x) ? x : W / 2, isFinite(y) ? y : H / 2];
}

function getTileUrl(style, z, tx, ty) {
  let t = '';
  if (style === 'dark') t = 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
  else if (style === 'light') t = 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
  else if (style === 'sat') t = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  else t = style;
  return t.replace('{z}', z).replace('{x}', tx).replace('{y}', ty);
}

function getTileImagesSVG(b, z, style) {
  const minX_z = ((b.mnLng + 180) / 360) * 256 * Math.pow(2, z);
  const maxX_z = ((b.mxLng + 180) / 360) * 256 * Math.pow(2, z);
  const minY_z = (1 - Math.log(Math.tan(b.mxLat * Math.PI / 180) + 1 / Math.cos(b.mxLat * Math.PI / 180)) / Math.PI) / 2 * 256 * Math.pow(2, z);
  const maxY_z = (1 - Math.log(Math.tan(b.mnLat * Math.PI / 180) + 1 / Math.cos(b.mnLat * Math.PI / 180)) / Math.PI) / 2 * 256 * Math.pow(2, z);

  const scaleX = (W - PAD * 2) / (maxX_z - minX_z);
  const scaleY = (H - PAD * 2) / (maxY_z - minY_z);

  const tMinX = Math.floor(minX_z / 256);
  const tMaxX = Math.floor(maxX_z / 256);
  const tMinY = Math.floor(minY_z / 256);
  const tMaxY = Math.floor(maxY_z / 256);

  let svgs = '';
  for (let tx = tMinX; tx <= tMaxX; tx++) {
    for (let ty = tMinY; ty <= tMaxY; ty++) {
      const imgX = PAD + (tx * 256 - minX_z) * scaleX;
      const imgY = PAD + (ty * 256 - minY_z) * scaleY;
      const imgW = 256 * scaleX;
      const imgH = 256 * scaleY;
      const url = getTileUrl(style, z, tx, ty);
      svgs += '<image xlink:href="' + url + '" x="' + imgX.toFixed(1) + '" y="' + imgY.toFixed(1) + '" width="' + (imgW + 0.8).toFixed(1) + '" height="' + (imgH + 0.8).toFixed(1) + '" preserveAspectRatio="none" opacity=".85"/>';
    }
  }
  return svgs;
}

function wpts(way, b) {
  if (!way.geometry || !way.geometry.length) return '';
  const s = way.geometry.map(n => proj(n.lat, n.lon, b).join(',')).join(' ');
  return s.includes('NaN') ? '' : s;
}

let cardShape = 'circle'; // 'circle' | 'rect' | 'square' | 'poly'
let globalShowScale = true;
let globalShowNorth = true;
let sitePolygon = []; // array of {lat,lng} when user draws a custom boundary
let polyMode = false; // currently drawing a polygon
let polyLayer = null; // leaflet layer for the drawn polygon

let legendZh = true;
const LEG_I18N = {
  // 2D legends
  'PRIMARY': { en: 'PRIMARY', zh: '一级路网' },
  'SEC.': { en: 'SEC.', zh: '二级路网' },
  'PATH': { en: 'PATH', zh: '人行步道' },
  'RESID': { en: 'RESID', zh: '住宅用地' },
  'CIVIC': { en: 'CIVIC', zh: '公共用地' },
  'COMM': { en: 'COMM', zh: '商业用地' },
  'GREEN': { en: 'GREEN', zh: '绿地' },
  'WATER': { en: 'WATER', zh: '水体' },
  'SECONDARY': { en: 'SECONDARY', zh: '二级路网' },
  'MINOR': { en: 'MINOR', zh: '支路' },
  'SUMMER': { en: 'SUMMER', zh: '夏至日照' },
  'EQUINOX': { en: 'EQUINOX', zh: '春秋分日照' },
  'WINTER': { en: 'WINTER', zh: '冬至日照' },
  'NORTH': { en: 'NORTH', zh: '正北' },
  'S / E / W': { en: 'S / E / W', zh: '南/东/西' },
  'HIGH ≥70dB': { en: 'HIGH ≥70dB', zh: '高噪音 ≥70dB' },
  'MED 62-70dB': { en: 'MED 62-70dB', zh: '中噪音 62-70dB' },
  'LOW <62dB': { en: 'LOW <62dB', zh: '低噪音 <62dB' },
  'COMMERCE': { en: 'COMMERCE', zh: '商业服务' },
  'CULTURE': { en: 'CULTURE', zh: '文化设施' },
  'TRANSIT': { en: 'TRANSIT', zh: '交通设施' },
  'LOW': { en: 'LOW', zh: '低密度' },
  'MED': { en: 'MED', zh: '中密度' },
  'HIGH': { en: 'HIGH', zh: '高密度' },
  'VERY HIGH': { en: 'VERY HIGH', zh: '极高密度' },
  'FOOD': { en: 'FOOD', zh: '餐饮美食' },
  'SHOP': { en: 'SHOP', zh: '生活购物' },
  'EDU': { en: 'EDU', zh: '教育科研' },
  'HEALTH': { en: 'HEALTH', zh: '医疗健康' },
  'LEISURE': { en: 'LEISURE', zh: '休闲娱乐' },
  'BUILT': { en: 'BUILT', zh: '建筑体量' },
  'ROADS': { en: 'ROADS', zh: '道路网' },
  'METRO/RAIL': { en: 'METRO/RAIL', zh: '地铁/铁路' },
  'TRAM': { en: 'TRAM', zh: '有轨电车' },
  'BUS': { en: 'BUS', zh: '公共汽车' },
  'FOOTWAY': { en: 'FOOTWAY', zh: '步行道' },
  'CYCLEWAY': { en: 'CYCLEWAY', zh: '自行车道' },
  'PLAZA': { en: 'PLAZA', zh: '广场' },
  '0–5 MIN': { en: '0–5 MIN', zh: '0–5 分钟' },
  '5–10 MIN': { en: '5–10 MIN', zh: '5–10 分钟' },
  '10–15 MIN': { en: '10–15 MIN', zh: '10–15 分钟' },
  '15–20 MIN': { en: '15–20 MIN', zh: '15–20 分钟' },
  '0-5 MIN': { en: '0-5 MIN', zh: '0-5 分钟' },
  '5-10 MIN': { en: '5-10 MIN', zh: '5-10 分钟' },
  '10-15 MIN': { en: '10-15 MIN', zh: '10-15 分钟' },
  '15-20 MIN': { en: '15-20 MIN', zh: '15-20 分钟' },

  // 3D legends
  'Building mass': { en: 'Building mass', zh: '建筑体量' },
  'Shadow face': { en: 'Shadow face', zh: '阴影面' },
  '<6m': { en: '<6m', zh: '<6米' },
  '12-25m': { en: '12-25m', zh: '12-25米' },
  '40-60m': { en: '40-60m', zh: '40-60米' },
  '80m+': { en: '80m+', zh: '80米+' },
  'Landmark': { en: 'Landmark', zh: '地标建筑' },
  'Residential': { en: 'Residential', zh: '住宅用地' },
  'Mixed': { en: 'Mixed', zh: '混合用地' },
  'Commercial': { en: 'Commercial', zh: '商业用地' },
  'Office': { en: 'Office', zh: '办公用地' },
  'Very low': { en: 'Very low', zh: '极低' },
  'Mid-low': { en: 'Mid-low', zh: '中低' },
  'Medium': { en: 'Medium', zh: '中等' },
  'High': { en: 'High', zh: '高' },
  'Very high': { en: 'Very high', zh: '极高' },
  'Sunlit': { en: 'Sunlit', zh: '受光面' },
  'Shaded': { en: 'Shaded', zh: '阴影面' },
  'Sun dir →': { en: 'Sun dir →', zh: '太阳方向 →' },
  'Silhouette': { en: 'Silhouette', zh: '天际线轮廓' },
  'Peak': { en: 'Peak', zh: '最高点' },
  'Ruler': { en: 'Ruler', zh: '标尺' }
};

function tLeg(text) {
  if (!legendZh) return text;
  const match = LEG_I18N[text];
  return match ? (match.zh || match.en) : text;
}

function legTextWidth(text) {
  let w = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c > 127) {
      w += 7.2;
    } else {
      w += 3.8;
    }
  }
  return w;
}

function wrap(inner, leg, note, opts) {
  opts = opts || {};
  const showScale = (opts.noScale !== true) && globalShowScale;
  const showNorth = (opts.noNorth !== true) && globalShowNorth;
  const cx = W / 2, cy = H / 2, cr = W / 2 - PAD + 4;
  const uid = 'u' + Math.random().toString(36).slice(2, 8);
  const legY = H + 18;
  const nL = Math.max(leg.length, 1);
  const itemWidths = leg.map(it => 14 + legTextWidth(tLeg(it.l)));
  const sumItemWidths = itemWidths.reduce((a, b) => a + b, 0);
  let gap = 14;
  let totalWidth = sumItemWidths + (nL - 1) * gap;
  const maxAvailW = W - 12;
  if (totalWidth > maxAvailW && nL > 1) {
    gap = (maxAvailW - sumItemWidths) / (nL - 1);
    if (gap < 4) gap = 4;
    totalWidth = sumItemWidths + (nL - 1) * gap;
  }
  let curX = (W - totalWidth) / 2;
  const legS = leg.map((it, i) => {
    const x = curX;
    const itemW = itemWidths[i];
    curX += itemW + gap;
    if (it.type === 'rect') return '<rect x="' + x.toFixed(1) + '" y="' + (legY - 6) + '" width="11" height="7" fill="' + it.c + '" stroke="' + (it.s || it.c) + '" stroke-width=".5"/><text x="' + (x + 14).toFixed(1) + '" y="' + (legY + 1) + '" font-size="6.5" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + tLeg(it.l) + '</text>';
    return '<line x1="' + x.toFixed(1) + '" y1="' + (legY - 2) + '" x2="' + (x + 11).toFixed(1) + '" y2="' + (legY - 2) + '" stroke="' + it.c + '" stroke-width="' + (it.w || 1.2) + '"' + (it.da ? ' stroke-dasharray="' + it.da + '"' : '') + '/><text x="' + (x + 14).toFixed(1) + '" y="' + (legY + 2) + '" font-size="6.5" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + tLeg(it.l) + '</text>';
  }).join('');
  const noteS = note ? '<text x="' + (W - 4) + '" y="' + (H + 25) + '" text-anchor="end" font-size="5.5" fill="#D8D6D0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + note + '</text>' : '';
  // Scale bar (bottom-left) — diagram width spans ~2*curR meters across (W-PAD*2) px
  let scaleS = '';
  if (showScale) try {
    const mPerPx = (typeof curR !== 'undefined' ? curR * 2 : 1200) / (W - PAD * 2);
    // pick a "nice" round distance close to ~70px
    const targetM = 70 * mPerPx;
    const nice = [50, 100, 200, 250, 500, 1000, 2000];
    let pick = nice[0]; for (const n of nice) { if (n <= targetM) pick = n; }
    const barPx = pick / mPerPx;
    const bx = PAD + 2, by = H - 6;
    const lbl = pick >= 1000 ? (pick / 1000) + 'km' : pick + 'm';
    scaleS = '<g font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">'
      + '<line x1="' + bx + '" y1="' + by + '" x2="' + (bx + barPx) + '" y2="' + by + '" stroke="#8C8A82" stroke-width="1.3"/>'
      + '<line x1="' + bx + '" y1="' + (by - 2.5) + '" x2="' + bx + '" y2="' + (by + 2.5) + '" stroke="#8C8A82" stroke-width="1.3"/>'
      + '<line x1="' + (bx + barPx) + '" y1="' + (by - 2.5) + '" x2="' + (bx + barPx) + '" y2="' + (by + 2.5) + '" stroke="#8C8A82" stroke-width="1.3"/>'
      + '<text x="' + (bx + barPx / 2) + '" y="' + (by - 4) + '" text-anchor="middle" font-size="6" fill="#8C8A82">' + lbl + '</text></g>';
  } catch (e) { }
  // North arrow (bottom-right margin)
  const nx = W - PAD - 2, ny = H - 18;
  const northS = !showNorth ? '' : '<g font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">'
    + '<line x1="' + nx + '" y1="' + ny + '" x2="' + nx + '" y2="' + (ny + 13) + '" stroke="#8C8A82" stroke-width="1"/>'
    + '<path d="M' + nx + ',' + (ny - 2) + ' l-2.6,5 l2.6,-1.7 l2.6,1.7 z" fill="#8C8A82"/>'
    + '<text x="' + nx + '" y="' + (ny + 21) + '" text-anchor="middle" font-size="6" fill="#8C8A82" font-weight="700">N</text></g>';
  const isRect = cardShape === 'rect' || cardShape === 'square';
  const rxry = (cardShape === 'rect') ? ' rx="18" ry="18"' : '';
  const isPoly = cardShape === 'poly' && sitePolygon && sitePolygon.length >= 3;
  let polyPts = '';
  if (isPoly) {
    const bb = getBounds();
    polyPts = sitePolygon.map(p => proj(p.lat, p.lng, bb).join(',')).join(' ');
  }
  const clipShape = isPoly
    ? '<polygon points="' + polyPts + '"/>'
    : isRect
      ? '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '"' + rxry + '/>'
      : '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr + '"/>';
  const borderShape = isPoly
    ? '<polygon points="' + polyPts + '" fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>'
    : isRect
      ? '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '"' + rxry + ' fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>'
      : '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr + '" fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>';
  return '<svg viewBox="0 0 ' + W + ' ' + (H + 28) + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + W + '" height="' + (H + 28) + '">'
    + '<defs><clipPath id="' + uid + '">' + clipShape + '</clipPath></defs>'
    + '<g clip-path="url(#' + uid + ')">' + inner + '</g>'
    + borderShape
    + scaleS + northS
    + legS + noteS + '</svg>';
}

function blank(msg) {
  const cx = W / 2, cy = H / 2, cr = W / 2 - PAD + 4;
  const isRect = cardShape === 'rect' || cardShape === 'square';
  const rxry = (cardShape === 'rect') ? ' rx="18" ry="18"' : '';
  const border = isRect
    ? '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '"' + rxry + ' fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>'
    : '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr + '" fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>';
  return '<svg viewBox="0 0 ' + W + ' ' + (H + 28) + '" xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + (H + 28) + '">'
    + border
    + '<text x="' + cx + '" y="' + (cy - 6) + '" text-anchor="middle" font-size="9" fill="#C8C6C0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + msg + '</text>'
    + '<text x="' + cx + '" y="' + (cy + 10) + '" text-anchor="middle" font-size="8" fill="#D8D6D0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">TRY LARGER RADIUS</text>'
    + '</svg>';
}

/* ──── ROADS ──── */
function drawRoads(data, sc) {
  const s = getScheme('roads', sc || 0);
  const isDark = s.dark || false;
  const bg = isDark ? '#080808' : '#FFFFFF';
  const fid = 'rd' + Math.random().toString(36).slice(2, 8);
  const gid = 'rdg' + Math.random().toString(36).slice(2, 8);

  const RD = {
    motorway: { c: s.p, w: 2.4, glow: true }, trunk: { c: s.p, w: 2.1, glow: true },
    primary: { c: s.p, w: 1.8, glow: true }, secondary: { c: s.s, w: 1.3, glow: isDark },
    tertiary: { c: s.t, w: 1, glow: false }, residential: { c: s.t, w: .7, glow: false },
    pedestrian: { c: s.ph, w: .7, da: '2,2' }, footway: { c: s.ph, w: .5, da: '1,2' },
    cycleway: { c: s.ph, w: .55, da: '3,2' }, path: { c: s.ph, w: .4, da: '1,3' }, service: { c: s.ph, w: .3 }
  };

  const b = getBounds();
  let linesBase = '', linesGlow = '', cnt = 0;

  (data.elements || []).forEach(el => {
    if (el.type !== 'way' || !el.geometry) return;
    const st = RD[el.tags && el.tags.highway] || { c: isDark ? '#2A2826' : '#E0DEDB', w: .3 };
    const pts = wpts(el, b); if (!pts) return; cnt++;
    const ln = '<polyline points="' + pts + '" fill="none" stroke="' + st.c + '" stroke-width="' + st.w + '" stroke-linecap="round" stroke-linejoin="round"' + (st.da ? ' stroke-dasharray="' + st.da + '"' : '') + '/>';
    if (st.glow && isDark) {
      linesGlow += '<polyline points="' + pts + '" fill="none" stroke="' + st.c + '" stroke-width="' + (st.w * 3.5) + '" stroke-linecap="round" stroke-linejoin="round" opacity=".18"/>';
      linesGlow += '<polyline points="' + pts + '" fill="none" stroke="' + st.c + '" stroke-width="' + (st.w * 1.8) + '" stroke-linecap="round" stroke-linejoin="round" opacity=".35"/>';
    }
    linesBase += ln;
  });

  if (!cnt) {
    const cx = W / 2, cy = H / 2;
    linesBase += '<line x1="' + PAD + '" y1="' + cy + '" x2="' + (W - PAD) + '" y2="' + cy + '" stroke="' + s.p + '" stroke-width="2"/>';
    linesBase += '<line x1="' + cx + '" y1="' + PAD + '" x2="' + cx + '" y2="' + (H - PAD) + '" stroke="' + s.p + '" stroke-width="2"/>';
  }

  // Flow arrows on primary roads
  if (!isDark) {
    (data.elements || []).forEach(el => {
      if (el.type !== 'way' || !el.geometry) return;
      const hw = el.tags && el.tags.highway || '';
      if (!['primary', 'trunk', 'motorway'].includes(hw)) return;
      const geo = el.geometry; if (geo.length < 3) return;
      const mi = Math.floor(geo.length / 2);
      const [x1, y1] = proj(geo[mi - 1].lat, geo[mi - 1].lon, b);
      const [x2, y2] = proj(geo[mi].lat, geo[mi].lon, b);
      const ang = Math.atan2(y2 - y1, x2 - x1);
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const al = 6, aw = 3;
      const p1x = mx + al * Math.cos(ang), p1y = my + al * Math.sin(ang);
      const p2x = mx - aw * Math.sin(ang) * .5, p2y = my + aw * Math.cos(ang) * .5;
      const p3x = mx + aw * Math.sin(ang) * .5, p3y = my - aw * Math.cos(ang) * .5;
      linesBase += '<polygon points="' + p1x.toFixed(1) + ',' + p1y.toFixed(1) + ' ' + p2x.toFixed(1) + ',' + p2y.toFixed(1) + ' ' + p3x.toFixed(1) + ',' + p3y.toFixed(1) + '" fill="' + s.p + '" opacity=".45"/>';
    });
  }
  const [sx, sy] = proj(sLat, sLng, b);
  const siteDot = isDark
    ? '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#E8C87A" opacity=".9"/><circle cx="' + sx + '" cy="' + sy + '" r="2.5" fill="#080808"/>'
    : '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="' + s.dot + '"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="#FAFAF9"/>';

  // Radial gradient for dark mode — brightest at center
  let defs = '<defs>';
  if (isDark) {
    defs += '<filter id="' + fid + '" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.5"/></filter>';
    defs += '<radialGradient id="' + gid + '" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1A1814" stop-opacity="0"/><stop offset="100%" stop-color="#080808" stop-opacity="0.92"/></radialGradient>';
  }
  defs += '</defs>';

  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + bg + '"/>';
  if (isDark && linesGlow) inner += '<g filter="url(#' + fid + ')">' + linesGlow + '</g>';
  inner += linesBase;
  if (isDark) inner += '<rect width="' + W + '" height="' + H + '" fill="url(#' + gid + ')" pointer-events="none"/>';
  inner += siteDot;

  const legCol = isDark ? '#A8A69F' : '#A8A69F';
  return wrap(defs + inner, [{ c: s.p, w: 2, l: 'PRIMARY' }, { c: s.s, w: 1.2, l: 'SEC.' }, { c: s.ph, w: .7, l: 'PATH', da: '2,2' }], cnt ? 'REAL·' + cnt : 'SCHEMATIC');
}

/* ──── LANDUSE ──── */
function drawLanduse(data, sc) {
  const s = getScheme('landuse', sc || 0);
  // Only color individual building footprints and parks — no large landuse zones
  function bldCol(t) {
    if (!t) return null;
    const bu = t.building || '', am = t.amenity || '', le = t.leisure || '', sh = t.shop || '', of = t.office || '', lu = t.landuse || '';
    // Must have building tag for all categories
    if (!bu) return null;
    // Civic
    if (['school', 'university', 'college', 'hospital', 'clinic', 'church', 'mosque', 'temple',
      'public_building', 'government', 'fire_station', 'police', 'library', 'theatre', 'cinema'].includes(bu) ||
      ['school', 'university', 'college', 'hospital', 'clinic', 'library', 'theatre', 'cinema',
        'police', 'fire_station', 'place_of_worship'].includes(am)) return [s.civ, 4];
    // Commercial
    if (['commercial', 'retail', 'supermarket', 'warehouse'].includes(bu) || sh || of ||
      ['bank', 'restaurant', 'cafe', 'fast_food', 'marketplace'].includes(am)) return [s.com, 3];
    // Industrial
    if (bu === 'industrial') return [s.ind, 3];
    // Residential / generic
    return [s.res, 1];
  }
  const b = getBounds();
  let sh = '<rect width="' + W + '" height="' + H + '" fill="#FFFFFF"/>';
  // Draw light grey building outlines as context (image 4 style)
  (lastD.buildings && lastD.buildings.elements || []).forEach(el => {
    if (!el.geometry) return;
    const pts = wpts(el, b); if (!pts) return;
    sh += '<polygon points="' + pts + '" fill="#E0DEDC" stroke="#C8C6C2" stroke-width=".3"/>';
  });
  let cnt = 0;
  const polys = [];
  (data.elements || []).forEach(el => {
    const r = bldCol(el.tags); if (!r) return;
    const [col, pri] = r;
    if (el.geometry) {
      const pts = wpts(el, b); if (!pts) return;
      polys.push({ pts, col, pri });
    }
    if (el.members) {
      el.members.forEach(m => {
        if (!m.geometry || m.role === 'inner') return;
        const pts = m.geometry.map(n => proj(n.lat, n.lon, b).join(',')).join(' ');
        if (!pts || pts.includes('NaN')) return;
        polys.push({ pts, col, pri });
      });
    }
  });
  polys.sort((a, b2) => a.pri - b2.pri);
  polys.forEach(p => { cnt++; sh += '<polygon points="' + p.pts + '" fill="' + p.col + '" stroke="rgba(0,0,0,0.06)" stroke-width=".3"/>'; });
  if (!cnt) {
    // Schematic fallback
    const cx = W / 2, cy = H / 2;
    const z = [{ x: PAD, y: PAD, w: (W - PAD * 2) * .48, h: (H - PAD * 2) * .48, c: s.res, l: 'RESID.' },
    { x: PAD + (W - PAD * 2) * .52, y: PAD, w: (W - PAD * 2) * .48, h: (H - PAD * 2) * .48, c: s.com, l: 'COMM.' },
    { x: PAD, y: PAD + (H - PAD * 2) * .52, w: (W - PAD * 2) * .48, h: (H - PAD * 2) * .48, c: s.prk, l: 'PARK' },
    { x: PAD + (W - PAD * 2) * .52, y: PAD + (H - PAD * 2) * .52, w: (W - PAD * 2) * .48, h: (H - PAD * 2) * .48, c: s.civ, l: 'CIVIC' }];
    z.forEach(z2 => sh += '<rect x="' + z2.x + '" y="' + z2.y + '" width="' + z2.w + '" height="' + z2.h + '" fill="' + z2.c + '" stroke="#C8C6BF" stroke-width=".5"/><text x="' + (z2.x + z2.w / 2) + '" y="' + (z2.y + z2.h / 2 + 3) + '" text-anchor="middle" font-size="8" fill="#6B6860" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + z2.l + '</text>');
  }
  const [sx, sy] = proj(sLat, sLng, b);
  sh += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="#FAFAF9"/>';
  return wrap(sh, [{ type: 'rect', c: s.res, l: 'RESID' }, { type: 'rect', c: s.civ, l: 'CIVIC' }, { type: 'rect', c: s.com, l: 'COMM' }], cnt ? 'REAL·' + cnt : 'SCHEMATIC');
}

/* ──── GREEN & WATER ──── */
function drawGW(data, sc) {
  const s = getScheme('gw', sc || 0);
  const b = getBounds(); let sh = '<rect width="' + W + '" height="' + H + '" fill="#FFFFFF"/>', cnt = 0;

  function polyArea(pts) {
    if (!pts) return 0;
    const pairs = pts.trim().split(' ').map(p => p.split(',').map(Number));
    let a = 0;
    for (let i = 0; i < pairs.length; i++) { const [x1, y1] = pairs[i], [x2, y2] = pairs[(i + 1) % pairs.length]; a += x1 * y2 - x2 * y1; }
    return Math.abs(a) / 2;
  }
  const MAX_WATER = W * H * 0.55;

  (data.elements || []).forEach(el => {
    const t = el.tags || {};
    const isRiverPoly = t.waterway && (t.waterway === 'riverbank' || t.natural === 'water' || t.water);
    const isW = (t.natural === 'water' || t.landuse === 'basin' || t.water || isRiverPoly);
    const isG = t.leisure === 'park' || t.leisure === 'garden' || t.landuse === 'forest' || t.landuse === 'grass' || t.landuse === 'meadow' || t.natural === 'wood' || t.natural === 'scrub' || t.landuse === 'recreation_ground';
    if (!isW && !isG) return;
    const fill = isW ? s.w : s.g;
    const strk = isW ? s.ws : s.gs;

    if (el.geometry) {
      const pts = wpts(el, b); if (!pts) return;
      if (isW && polyArea(pts) > MAX_WATER) return;
      cnt++;
      sh += '<polygon points="' + pts + '" fill="' + fill + '" stroke="' + strk + '" stroke-width=".6"/>';
    }

    if (el.members) {
      // For relations: collect outer members and draw each as filled polygon
      // Also handle inner rings as cutouts using SVG path with even-odd rule
      const outers = [], inners = [];
      el.members.forEach(m => {
        if (!m.geometry || !m.geometry.length) return;
        const pts = m.geometry.map(n => proj(n.lat, n.lon, b).join(',')).join(' ');
        if (!pts || pts.includes('NaN')) return;
        if (m.role === 'inner') inners.push(pts);
        else outers.push(pts);
      });
      if (!outers.length) return;
      // Build SVG path combining outers + inners with even-odd fill rule
      let d = '';
      outers.forEach(pts => {
        const pairs = pts.split(' ');
        if (pairs.length < 2) return;
        d += 'M' + pairs.join('L') + 'Z';
      });
      inners.forEach(pts => {
        const pairs = pts.split(' ');
        if (pairs.length < 2) return;
        d += 'M' + pairs.join('L') + 'Z';
      });
      if (d && (!isW || polyArea(outers[0] || '') < MAX_WATER)) {
        cnt++;
        sh += '<path d="' + d + '" fill="' + fill + '" fill-rule="evenodd" stroke="' + strk + '" stroke-width=".6"/>';
      }
    }
  });

  if (!cnt) {
    const cx = W / 2, cy = H / 2;
    sh += '<ellipse cx="' + (cx - 28) + '" cy="' + (cy - 18) + '" rx="38" ry="30" fill="' + s.g + '" stroke="' + s.gs + '" stroke-width=".7"/>';
    sh += '<ellipse cx="' + (cx + 24) + '" cy="' + (cy + 20) + '" rx="30" ry="24" fill="' + s.g + '" stroke="' + s.gs + '" stroke-width=".7"/>';
    sh += '<ellipse cx="' + (cx + 12) + '" cy="' + (cy - 32) + '" rx="22" ry="17" fill="' + s.w + '" stroke="' + s.ws + '" stroke-width=".7"/>';
    sh += '<path d="M' + PAD + ',' + (cy + 42) + ' Q' + cx + ',' + (cy + 32) + ' ' + (W - PAD) + ',' + (cy + 40) + '" stroke="' + s.ws + '" stroke-width="6" fill="none" opacity=".6"/>';
  }
  const [sx, sy] = proj(sLat, sLng, b);
  sh += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="#FAFAF9"/>';
  return wrap(sh, [{ type: 'rect', c: s.g, s: s.gs, l: 'GREEN' }, { type: 'rect', c: s.w, s: s.ws, l: 'WATER' }], cnt ? 'REAL·' + cnt : 'SCHEMATIC');
}

/* ──── NODE ANALYSIS ──── */
function drawNodes(poisData, roadsData, sc) {
  const s = getScheme('nodes', sc || 0);
  const b = getBounds(); const cx = W / 2, cy = H / 2, clipR = W / 2 - PAD + 4;
  const uid = 'n' + Math.random().toString(36).slice(2, 8);
  // Use colored CARTO map tile as background
  let inner = '<g opacity=".85">' + getTileImagesSVG(b, 15, 'dark') + '</g>';
  // POIs
  const pois = [];
  (poisData.elements || []).forEach(el => {
    if (el.type !== 'node') return;
    const t = el.tags || {};
    const [x, y] = proj(el.lat, el.lon, b);
    const dx = x - cx, dy = y - cy;
    if (dx * dx + dy * dy > (clipR - 4) * (clipR - 4)) return;
    let tier = 0;
    if (t.amenity === 'school' || t.amenity === 'university' || t.amenity === 'hospital' || t.railway === 'station') tier = 1;
    else if (t.amenity === 'cafe' || t.amenity === 'restaurant' || t.shop || t.leisure === 'park') tier = 2;
    else if (t.highway === 'bus_stop' || t.railway === 'tram_stop' || t.amenity) tier = 3;
    if (tier > 0) pois.push({ x, y, tier });
  });
  const useReal = pois.length >= 3;
  let nodes = useReal ? pois.slice(0, 14) : schNodes(cx, cy);
  const P = nodes.filter(n => n.tier === 1 || n.sc === 'P');
  const S = nodes.filter(n => n.tier === 2 || n.sc === 'S');
  const T = nodes.filter(n => n.tier === 3 || n.sc === 'T');
  // Halos
  P.forEach(n => { inner += '<circle cx="' + n.x + '" cy="' + n.y + '" r="22" fill="' + s.inf + '" stroke="' + s.p + '" stroke-width=".6" stroke-dasharray="2,3"/><circle cx="' + n.x + '" cy="' + n.y + '" r="36" fill="none" stroke="' + s.p + '" stroke-width=".3" stroke-dasharray="1,5" opacity=".3"/>'; });
  // Axes
  P.forEach(n => { inner += '<line x1="' + cx + '" y1="' + cy + '" x2="' + n.x + '" y2="' + n.y + '" stroke="' + s.ax + '" stroke-width="1.4" stroke-dasharray="5,3" opacity=".7"/>'; });
  S.forEach(n => { inner += '<line x1="' + cx + '" y1="' + cy + '" x2="' + n.x + '" y2="' + n.y + '" stroke="' + s.lax + '" stroke-width=".8" stroke-dasharray="3,4" opacity=".5"/>'; });
  for (let i = 0; i < S.length; i++) { const a = S[i], nb = S[(i + 1) % S.length]; if (Math.hypot(a.x - nb.x, a.y - nb.y) < W * .55) inner += '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + nb.x + '" y2="' + nb.y + '" stroke="' + s.lax + '" stroke-width=".5" stroke-dasharray="2,5" opacity=".3"/>'; }
  // Markers
  T.forEach(n => { inner += '<circle cx="' + n.x + '" cy="' + n.y + '" r="4.5" fill="white" stroke="' + s.t + '" stroke-width="1.1"/><circle cx="' + n.x + '" cy="' + n.y + '" r="1.8" fill="' + s.t + '"/>'; });
  S.forEach(n => { inner += '<circle cx="' + n.x + '" cy="' + n.y + '" r="7" fill="white" stroke="' + s.s + '" stroke-width="1.6"/><circle cx="' + n.x + '" cy="' + n.y + '" r="3.5" fill="' + s.s + '"/>'; });
  P.forEach(n => { inner += '<circle cx="' + n.x + '" cy="' + n.y + '" r="11" fill="white" stroke="' + s.p + '" stroke-width="2"/><circle cx="' + n.x + '" cy="' + n.y + '" r="6" fill="' + s.p + '"/><circle cx="' + n.x + '" cy="' + n.y + '" r="2.5" fill="white"/>'; });
  // Site
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="18" fill="none" stroke="' + s.p + '" stroke-width=".6" stroke-dasharray="2,3" opacity=".4"/>';
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="14" fill="white" stroke="' + s.p + '" stroke-width="2.2"/>';
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="8" fill="' + s.p + '"/><circle cx="' + cx + '" cy="' + cy + '" r="3.5" fill="white"/>';
  return wrap(inner, [{ c: s.p, w: 2.2, l: 'PRIMARY' }, { c: s.s, w: 1.6, l: 'SECONDARY' }, { c: s.t, w: 1.1, l: 'MINOR' }], useReal ? 'REAL·' + pois.length : 'SCHEMATIC');
}
function schNodes(cx, cy) {
  const nodes = [];
  const r1 = W / 2 - PAD - 18, r2 = W / 2 - PAD - 46;
  [70, 190, 310].forEach(d => { const a = d * Math.PI / 180; nodes.push({ x: cx + r2 * Math.cos(a), y: cy + r2 * Math.sin(a), tier: 1, sc: 'P' }); });
  [20, 92, 164, 236, 308].forEach(d => { const a = d * Math.PI / 180; nodes.push({ x: cx + r1 * Math.cos(a), y: cy + r1 * Math.sin(a), tier: 2, sc: 'S' }); });
  [0, 51, 103, 154, 206, 257, 309].forEach(d => { const a = d * Math.PI / 180; const rm = W / 2 - PAD - 32; nodes.push({ x: cx + rm * Math.cos(a), y: cy + rm * Math.sin(a), tier: 3, sc: 'T' }); });
  return nodes;
}

/* ──── SUN PATH ──── */
function drawSun(sc) {
  const s = getScheme('sun', sc || 0);
  const cx = W / 2, cy = H / 2, maxR = W / 2 - PAD;
  const latR = sLat * Math.PI / 180;
  function sp(h, doy) {
    const year = new Date().getFullYear();
    const date = new Date(year, 0, doy);
    const utcHour = h - (sLng / 15);
    date.setUTCHours(Math.floor(utcHour));
    date.setUTCMinutes((utcHour % 1) * 60);
    date.setUTCSeconds(0);
    if (typeof SunCalc !== 'undefined') {
      const pos = SunCalc.getPosition(date, sLat, sLng);
      return { alt: pos.altitude * 180 / Math.PI, az: pos.azimuth * 180 / Math.PI + 180 };
    } else {
      // Fallback if SunCalc is missing
      const decl = .409 * Math.sin(2 * Math.PI / 365 * (doy - 80));
      const ha = (h - 12) * 15 * Math.PI / 180;
      const alt = Math.asin(Math.sin(latR) * Math.sin(decl) + Math.cos(latR) * Math.cos(decl) * Math.cos(ha));
      const az = Math.atan2(-Math.cos(decl) * Math.sin(ha), Math.sin(decl) * Math.cos(latR) - Math.cos(decl) * Math.cos(ha) * Math.sin(latR));
      return { alt: alt * 180 / Math.PI, az: az * 180 / Math.PI + 180 };
    }
  }
  function xy(az, alt) { const rr = maxR * (1 - Math.max(0, alt) / 90), a = (az - 90) * Math.PI / 180; return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)]; }
  let inner = '';
  // Altitude rings
  [0, 30, 60, 90].forEach(alt => { const rr = maxR * (1 - alt / 90); inner += '<circle cx="' + cx + '" cy="' + cy + '" r="' + rr + '" fill="none" stroke="#ECEAE6" stroke-width="' + (alt === 0 ? 1 : .5) + '"/>'; if (alt > 0 && alt < 90) inner += '<text x="' + (cx + 3) + '" y="' + (cy - rr + 9) + '" font-size="5.5" fill="#C8C6C0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + alt + '°</text>'; });
  // Cardinal
  inner += '<line x1="' + cx + '" y1="' + (PAD - 4) + '" x2="' + cx + '" y2="' + (H - PAD + 4) + '" stroke="#ECEAE6" stroke-width=".5"/>';
  inner += '<line x1="' + (PAD - 4) + '" y1="' + cy + '" x2="' + (W - PAD + 4) + '" y2="' + cy + '" stroke="#ECEAE6" stroke-width=".5"/>';
  ['N', 'E', 'S', 'W'].forEach((l, i) => { const a = i * Math.PI / 2 - Math.PI / 2; inner += '<text x="' + (cx + (maxR + 10) * Math.cos(a)) + '" y="' + (cy + (maxR + 10) * Math.sin(a) + 3) + '" text-anchor="middle" font-size="7.5" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">' + l + '</text>'; });
  // Shadow
  const noon = sp(12, 172);
  if (noon.alt > 0) { const [nx, ny] = xy(noon.az + 180, 0); inner += '<path d="M' + cx + ',' + cy + ' L' + nx + ',' + ny + '" stroke="' + s.sh + '" stroke-width="10" stroke-linecap="round"/>'; }
  // Arcs
  [[172, s.su, 1.8, ''], [80, s.eq, .9, '3,2'], [355, s.wi, .7, '2,3']].forEach(([doy, col, sw, da]) => {
    const pts = []; for (let h = 4; h <= 20; h += .15) { const p = sp(h, doy); if (p.alt > 0) pts.push(xy(p.az, p.alt)); }
    if (pts.length > 1) inner += '<path d="' + pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('') + '" fill="none" stroke="' + col + '" stroke-width="' + sw + '"' + (da ? ' stroke-dasharray="' + da + '"' : '') + '/>';
  });
  // Hour markers
  [6, 8, 10, 12, 14, 16, 18].forEach(h => {
    const p = sp(h, 172); if (p.alt <= 0) return;
    const [x, y] = xy(p.az, p.alt);
    const isN = h === 12;
    inner += '<circle cx="' + x + '" cy="' + y + '" r="' + (isN ? 5 : 2.5) + '" fill="' + (isN ? s.su : 'white') + '" stroke="' + s.su + '" stroke-width="' + (isN ? 0 : 1) + '"/>';
    if (isN) { inner += '<circle cx="' + x + '" cy="' + y + '" r="2" fill="white"/><text x="' + x + '" y="' + (y - 8) + '" text-anchor="middle" font-size="6.5" fill="' + s.su + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">NOON</text>'; }
    else inner += '<text x="' + (x + (h < 12 ? -7 : 7)) + '" y="' + (y - 4) + '" text-anchor="middle" font-size="5.5" fill="' + s.su + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" opacity=".75">' + h + 'h</text>';
  });
  // Site box
  inner += '<rect x="' + (cx - 11) + '" y="' + (cy - 8) + '" width="22" height="17" rx="3" fill="white" stroke="' + s.site + '" stroke-width="1"/>';
  inner += '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-size="6" fill="' + s.site + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">SITE</text>';
  inner += '<text x="' + cx + '" y="' + (H - PAD + 14) + '" text-anchor="middle" font-size="6" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + sLat.toFixed(2) + 'N</text>';
  return wrap(inner, [{ c: s.su, w: 1.8, l: 'SUMMER' }, { c: s.eq, w: .9, l: 'EQUINOX', da: '3,2' }, { c: s.wi, w: .7, l: 'WINTER', da: '2,3' }], null, { noScale: true, noNorth: true });
}

/* ──── SATELLITE ──── */
function drawSat(sc) {
  const sats = ['0.38', '0.18', '0.62'];
  const sat = sats[sc || 0];
  const cx = W / 2, cy = H / 2, cr = W / 2 - PAD + 4;
  const fid = 'f' + Math.random().toString(36).slice(2, 8);
  const uid = 'c' + Math.random().toString(36).slice(2, 8);
  const isRect = cardShape === 'rect' || cardShape === 'square';
  const rxry = (cardShape === 'rect') ? ' rx="18" ry="18"' : '';
  const clipShape = isRect
    ? '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '"' + rxry + '/>'
    : '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr + '"/>';
  const borderShape = isRect
    ? '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '"' + rxry + ' fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>'
    : '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr + '" fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>';
  const vgid = 'satv' + Math.random().toString(36).slice(2, 8);

  const tileSvgs = getTileImagesSVG(getBounds(), 15, 'sat');

  return '<svg viewBox="0 0 ' + W + ' ' + (H + 28) + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + W + '" height="' + (H + 28) + '">'
    + '<defs><clipPath id="' + uid + '">' + clipShape + '</clipPath>'
    + '<filter id="' + fid + '"><feColorMatrix type="saturate" values="' + sat + '"/></filter>'
    + '<linearGradient id="' + vgid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#08080A" stop-opacity=".72"/><stop offset="28%" stop-color="#08080A" stop-opacity="0"/><stop offset="72%" stop-color="#08080A" stop-opacity="0"/><stop offset="100%" stop-color="#08080A" stop-opacity=".72"/></linearGradient>'
    + '</defs>'
    + '<g clip-path="url(#' + uid + ')">'
    + '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '" fill="#2C2A28"/>'
    + '<g filter="url(#' + fid + ')">' + tileSvgs + '</g>'
    + '<rect width="' + W + '" height="' + H + '" fill="url(#' + vgid + ')" pointer-events="none"/>'
    + '<circle cx="' + cx + '" cy="' + cy + '" r="6" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="1.5"/>'
    + '<circle cx="' + cx + '" cy="' + cy + '" r="2.5" fill="rgba(255,255,255,0.85)"/>'
    + '</g>'
    + borderShape
    + '<text x="' + cx + '" y="' + (H + 20) + '" text-anchor="middle" font-size="7" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">SATELLITE \u00b7 ' + sLat.toFixed(3) + 'N ' + sLng.toFixed(3) + 'E</text>'
    + '</svg>';
}

/* ──── CITY CONTEXT ──── */
function drawContext(sc) {
  const s = getScheme('context', sc || 0);
  const CW = 240, CH = 240, CPAD = 8;
  const cx = CW / 2, cy = CH / 2;
  const outerR = CW / 2 - CPAD + 4;

  const b = getBounds();
  const isRect = cardShape === 'rect' || cardShape === 'square';
  const rxry = (cardShape === 'rect') ? ' rx="18" ry="18"' : '';

  const uid = 'ctx' + Math.random().toString(36).slice(2, 8);
  const uid2 = 'ctx2' + Math.random().toString(36).slice(2, 8);
  const uid3 = 'ctx3' + Math.random().toString(36).slice(2, 8);

  const outerClip = isRect
    ? '<rect x="' + CPAD + '" y="' + CPAD + '" width="' + (CW - CPAD * 2) + '" height="' + (CH - CPAD * 2) + '"' + rxry + '/>'
    : '<circle cx="' + cx + '" cy="' + cy + '" r="' + outerR + '"/>';
  const outerBorder = isRect
    ? '<rect x="' + CPAD + '" y="' + CPAD + '" width="' + (CW - CPAD * 2) + '" height="' + (CH - CPAD * 2) + '"' + rxry + ' fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>'
    : '<circle cx="' + cx + '" cy="' + cy + '" r="' + outerR + '" fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>';

  // Road styles same as drawRoads scheme 0
  const rs = getScheme('roads', 0);
  const RD = {
    motorway: { c: rs.p, w: 2.2 }, trunk: { c: rs.p, w: 2 }, primary: { c: rs.p, w: 1.8 },
    secondary: { c: rs.s, w: 1.3 }, tertiary: { c: rs.t, w: 1 }, residential: { c: rs.t, w: .7 },
    pedestrian: { c: '#D0CECC', w: .6 }, footway: { c: '#D0CECC', w: .4 },
    path: { c: '#D0CECC', w: .35 }, service: { c: '#D0CECC', w: .3 }
  };

  // Site circle radius = same as site radius relative to canvas
  const sitePxR = outerR * 0.5; // fixed at half of canvas radius for visual balance

  // Build road lines SVG
  const roads = lastD.roads && lastD.roads.elements || [];
  let roadLines = '';
  roads.forEach(el => {
    if (el.type !== 'way' || !el.geometry) return;
    const st = RD[el.tags && el.tags.highway] || { c: '#E8E6E0', w: .3 };
    const pts = el.geometry.map(n => {
      const x = CPAD + (n.lon - b.mnLng) / (b.mxLng - b.mnLng) * (CW - CPAD * 2);
      const y = CPAD + (b.mxLat - n.lat) / (b.mxLat - b.mnLat) * (CH - CPAD * 2);
      return x.toFixed(1) + ',' + y.toFixed(1);
    }).join(' ');
    if (!pts || pts.includes('NaN')) return;
    roadLines += '<polyline points="' + pts + '" fill="none" stroke="' + st.c + '" stroke-width="' + st.w + '" stroke-linecap="round" stroke-linejoin="round"/>';
  });

  let svg = '<svg viewBox="0 0 ' + CW + ' ' + (CH + 28) + '" xmlns="http://www.w3.org/2000/svg" width="' + CW + '" height="' + (CH + 28) + '">';
  svg += '<defs>';
  svg += '<clipPath id="' + uid + '">' + outerClip + '</clipPath>';
  svg += '<clipPath id="' + uid2 + '"><circle cx="' + cx + '" cy="' + cy + '" r="' + sitePxR + '"/></clipPath>';
  // Mask: white outside circle, black inside → for faded outer layer
  svg += '<mask id="' + uid3 + '"><rect width="' + CW + '" height="' + CH + '" fill="white"/><circle cx="' + cx + '" cy="' + cy + '" r="' + sitePxR + '" fill="black"/></mask>';
  svg += '</defs>';

  svg += '<rect width="' + CW + '" height="' + CH + '" fill="white"/>';

  // Layer 1: roads outside site circle — faded (low opacity)
  svg += '<g clip-path="url(#' + uid + ')" mask="url(#' + uid3 + ')" opacity="0.25">';
  svg += roadLines;
  svg += '</g>';

  // Layer 2: roads inside site circle — full opacity, normal colors
  svg += '<g clip-path="url(#' + uid2 + ')">';
  svg += roadLines;
  svg += '</g>';

  // Site circle red dashed ring
  svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + sitePxR + '" fill="none" stroke="' + s.ring + '" stroke-width="2" stroke-dasharray="' + s.dash + '"/>';

  // SITE label above circle
  svg += '<text x="' + cx + '" y="' + (cy - sitePxR - 7) + '" text-anchor="middle" font-size="6.5" fill="' + s.label + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700" letter-spacing=".12em">SITE</text>';

  svg += outerBorder;
  svg += '<text x="' + cx + '" y="' + (CH + 20) + '" text-anchor="middle" font-size="5.5" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + sLat.toFixed(4) + 'N · ' + sLng.toFixed(4) + 'E</text>';
  svg += '</svg>';
  return svg;
}






/* ──── URBAN FABRIC ──── */
function drawFabric(data, sc) {
  const s = getScheme('fabric', sc || 0);
  const b = getBounds();
  const cx = W / 2, cy = H / 2, cr = W / 2 - PAD + 4;
  // Use CARTO light tile as base, fully desaturated → gives road/block structure
  // then overlay building footprints as black masses
  const fid = 'fab' + Math.random().toString(36).slice(2, 8);

  const tileSvgs = getTileImagesSVG(b, 15, 'light');

  // Start inner with tile (will be clipped by wrap)
  let inner = '<defs><filter id="' + fid + '"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope="1.15" intercept="-0.07"/><feFuncG type="linear" slope="1.15" intercept="-0.07"/><feFuncB type="linear" slope="1.15" intercept="-0.07"/></feComponentTransfer></filter></defs>';
  inner += '<rect width="' + W + '" height="' + H + '" fill="#F0EFED"/>';
  inner += '<g filter="url(#' + fid + ')">' + tileSvgs + '</g>';

  let cnt = 0;
  // Overlay buildings as solid dark masses
  (data.elements || []).forEach(el => {
    if (!el.geometry && !el.members) return;
    const t = el.tags || {};
    if (!t.building) return;
    if (el.geometry) {
      const pts = wpts(el, b); if (!pts) return; cnt++;
      inner += '<polygon points="' + pts + '" fill="' + s.bld + '" stroke="' + s.bld + '" stroke-width=".3"/>';
    }
    if (el.members) {
      el.members.forEach(m => {
        if (!m.geometry || m.role === 'inner') return;
        const pts = m.geometry.map(n => proj(n.lat, n.lon, b).join(',')).join(' ');
        if (!pts || pts.includes('NaN')) return; cnt++;
        inner += '<polygon points="' + pts + '" fill="' + s.bld + '" stroke="' + s.bld + '" stroke-width=".3"/>';
      });
    }
  });

  if (!cnt) {
    const blocks = [
      { x: PAD + 4, y: PAD + 4, w: 60, h: 42 }, { x: PAD + 72, y: PAD + 8, w: 40, h: 32 },
      { x: PAD + 4, y: PAD + 56, w: 32, h: 54 }, { x: PAD + 44, y: PAD + 50, w: 65, h: 38 },
      { x: PAD + 118, y: PAD + 4, w: 48, h: 70 }, { x: PAD + 4, y: PAD + 120, w: 75, h: 44 },
    ];
    blocks.forEach(bk => inner += '<rect x="' + bk.x + '" y="' + bk.y + '" width="' + bk.w + '" height="' + bk.h + '" fill="' + s.bld + '"/>');
  }

  // Site marker
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<line x1="' + (sx - 4.5) + '" y1="' + sy + '" x2="' + (sx + 4.5) + '" y2="' + sy + '" stroke="' + s.site + '" stroke-width="1.8"/>';
  inner += '<line x1="' + sx + '" y1="' + (sy - 4.5) + '" x2="' + sx + '" y2="' + (sy + 4.5) + '" stroke="' + s.site + '" stroke-width="1.8"/>';
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="2" fill="none" stroke="' + s.site + '" stroke-width="1.2"/>';

  // wrap needs xmlns:xlink for image tag
  const uid = 'fab2' + Math.random().toString(36).slice(2, 8);
  const isRect = cardShape === 'rect' || cardShape === 'square';
  const rxry = (cardShape === 'rect') ? ' rx="18" ry="18"' : '';
  const clipShape = isRect
    ? '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '"' + rxry + '/>'
    : '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr + '"/>';
  const borderShape = isRect
    ? '<rect x="' + PAD + '" y="' + PAD + '" width="' + (W - PAD * 2) + '" height="' + (H - PAD * 2) + '"' + rxry + ' fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>'
    : '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr + '" fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>';
  const leg = [{ type: 'rect', c: s.bld, l: lang === 'zh' ? '建筑体量' : 'BUILT MASS' }, { type: 'rect', c: '#F0EFED', s: '#C8C6C0', l: lang === 'zh' ? '虚空 / 街道' : 'VOID / STREET' }];
  const note = cnt ? (lang === 'zh' ? '实际·' + cnt : 'REAL·' + cnt) : (lang === 'zh' ? '示意图' : 'SCHEMATIC');
  return wrap(inner, leg, note);
}
/* ──── ORIENTATION ──── */
function drawOrient(sc) {
  const s = getScheme('orient', sc || 0);
  const cx = W / 2, cy = H / 2, cr = W / 2 - PAD + 4;
  let inner = '';
  // Concentric rings background
  [cr * .25, cr * .5, cr * .75, cr].forEach((r2, i) => {
    inner += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r2 + '" fill="none" stroke="' + s.ring + '" stroke-width="' + (i === 3 ? 1.2 : .5) + '" opacity="' + (i === 3 ? '1' : '.5') + '"/>';
  });
  // Diagonal guide lines
  [45, 135].forEach(deg => {
    const a = deg * Math.PI / 180;
    inner += '<line x1="' + (cx - cr * Math.cos(a)) + '" y1="' + (cy - cr * Math.sin(a)) + '" x2="' + (cx + cr * Math.cos(a)) + '" y2="' + (cy + cr * Math.sin(a)) + '" stroke="' + s.ring + '" stroke-width=".4" opacity=".4"/>';
  });
  // Cross lines
  inner += '<line x1="' + cx + '" y1="' + (cy - cr) + '" x2="' + cx + '" y2="' + (cy + cr) + '" stroke="' + s.ring + '" stroke-width=".6" opacity=".5"/>';
  inner += '<line x1="' + (cx - cr) + '" y1="' + cy + '" x2="' + (cx + cr) + '" y2="' + cy + '" stroke="' + s.ring + '" stroke-width=".6" opacity=".5"/>';

  // Arrow helper
  function arrow(deg, len, label, isMain) {
    const a = (deg - 90) * Math.PI / 180; // 0=up
    const ex = cx + len * Math.cos(a), ey = cy + len * Math.sin(a);
    const hw = isMain ? 7 : 4.5, hl = isMain ? 12 : 8;
    const perp = a + Math.PI / 2;
    // Shaft
    const shaftLen = len - hl;
    const sx2 = cx + shaftLen * Math.cos(a), sy2 = cy + shaftLen * Math.sin(a);
    const sw = isMain ? 2.8 : 1.8;
    inner += '<line x1="' + cx + '" y1="' + cy + '" x2="' + sx2 + '" y2="' + sy2 + '" stroke="' + (isMain ? s.accent : s.arrow) + '" stroke-width="' + sw + '" stroke-linecap="round"/>';
    // Arrowhead — elegant chevron
    const p1x = ex - hw * Math.cos(perp), p1y = ey - hw * Math.sin(perp);
    const p2x = ex + hw * Math.cos(perp), p2y = ey + hw * Math.sin(perp);
    const basex = sx2, basey = sy2;
    inner += '<polygon points="' + ex.toFixed(1) + ',' + ey.toFixed(1) + ' ' + p1x.toFixed(1) + ',' + p1y.toFixed(1) + ' ' + basex.toFixed(1) + ',' + basey.toFixed(1) + ' ' + p2x.toFixed(1) + ',' + p2y.toFixed(1) + '" fill="' + (isMain ? s.accent : s.arrow) + '" stroke="none"/>';
    // Label
    const lx = cx + (len + 16) * Math.cos(a), ly = cy + (len + 16) * Math.sin(a);
    inner += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 4).toFixed(1) + '" text-anchor="middle" font-size="' + (isMain ? 11 : 8) + '" fill="' + (isMain ? s.accent : s.arrow) + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">' + label + '</text>';
  }

  // Four main arrows
  arrow(0, cr * .78, 'N', true);
  arrow(180, cr * .62, 'S', false);
  arrow(90, cr * .62, 'E', false);
  arrow(270, cr * .62, 'W', false);

  // Intercardinals — thin tick marks
  [45, 135, 225, 315].forEach(deg => {
    const a = (deg - 90) * Math.PI / 180;
    const r1 = cr * .72, r2b = cr * .82;
    inner += '<line x1="' + (cx + r1 * Math.cos(a)) + '" y1="' + (cy + r1 * Math.sin(a)) + '" x2="' + (cx + r2b * Math.cos(a)) + '" y2="' + (cy + r2b * Math.sin(a)) + '" stroke="' + s.arrow + '" stroke-width="1.2" opacity=".5"/>';
    const label = ['NE', 'SE', 'SW', 'NW'][[45, 135, 225, 315].indexOf(deg)];
    inner += '<text x="' + (cx + (cr * .9) * Math.cos(a)) + '" y="' + (cy + (cr * .9) * Math.sin(a) + 3) + '" text-anchor="middle" font-size="6" fill="' + s.sub + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" opacity=".7">' + label + '</text>';
  });

  // Lat/lon at center
  inner += '<rect x="' + (cx - 28) + '" y="' + (cy - 10) + '" width="56" height="20" rx="4" fill="white" stroke="' + s.ring + '" stroke-width=".8"/>';
  inner += '<text x="' + cx + '" y="' + (cy - 1) + '" text-anchor="middle" font-size="5.5" fill="' + s.sub + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + sLat.toFixed(3) + '°N</text>';
  inner += '<text x="' + cx + '" y="' + (cy + 7) + '" text-anchor="middle" font-size="5.5" fill="' + s.sub + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + sLng.toFixed(3) + '°E</text>';

  return wrap(inner, [{ c: s.accent, w: 2.8, l: 'NORTH' }, { c: s.arrow, w: 1.8, l: 'S / E / W' }], 'LAT·' + sLat.toFixed(2) + '  LON·' + sLng.toFixed(2), { noScale: true, noNorth: true });
}


/* ──── NOISE ANALYSIS ──── */
function drawNoise(data, sc) {
  const s = getScheme('noise', sc || 0);
  const b = getBounds();
  const fid = 'ns' + Math.random().toString(36).slice(2, 8);
  const NL = {
    motorway: { db: 75, w: 18 }, trunk: { db: 73, w: 16 }, primary: { db: 70, w: 13 },
    secondary: { db: 65, w: 10 }, tertiary: { db: 60, w: 7 }, residential: { db: 55, w: 4 }
  };
  function dbColor(db) {
    if (db >= 70) return s.hi;
    if (db >= 62) return s.md;
    return s.lo;
  }
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  // Light road base
  (data.elements || []).forEach(el => {
    if (!el.geometry) return;
    const hw = el.tags && el.tags.highway || '';
    if (!NL[hw]) return;
    const pts = wpts(el, b); if (!pts) return;
    inner += '<polyline points="' + pts + '" fill="none" stroke="' + s.road + '" stroke-width="1" stroke-linecap="round"/>';
  });
  // Noise buffer zones — multiple passes with blur
  inner += '<g filter="url(#' + fid + ')">';
  (data.elements || []).forEach(el => {
    if (!el.geometry) return;
    const hw = el.tags && el.tags.highway || '';
    const nl = NL[hw]; if (!nl) return;
    const pts = wpts(el, b); if (!pts) return;
    const col = dbColor(nl.db);
    // Draw 3 layers: wide+transparent, medium, narrow+opaque
    [[nl.w * 3, .12], [nl.w * 1.8, .2], [nl.w, .35]].forEach(([w2, op]) => {
      inner += '<polyline points="' + pts + '" fill="none" stroke="' + col + '" stroke-width="' + w2 + '" stroke-linecap="round" stroke-linejoin="round" opacity="' + op + '"/>';
    });
  });
  inner += '</g>';
  // dB labels on major roads
  (data.elements || []).forEach(el => {
    if (!el.geometry || el.geometry.length < 2) return;
    const hw = el.tags && el.tags.highway || '';
    const nl = NL[hw]; if (!nl || nl.db < 65) return;
    const mid = el.geometry[Math.floor(el.geometry.length / 2)];
    const [x, y] = proj(mid.lat, mid.lon, b);
    inner += '<text x="' + x + '" y="' + (y - 4) + '" text-anchor="middle" font-size="5" fill="' + dbColor(nl.db) + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" opacity=".8">' + nl.db + 'dB</text>';
  });
  // Site dot
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="4" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="1.5" fill="white"/>';
  const ngid = 'nsg' + Math.random().toString(36).slice(2, 8);
  const defs = '<defs>'
    + '<filter id="' + fid + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2"/></filter>'
    + '<radialGradient id="' + ngid + '" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="white" stop-opacity="0"/><stop offset="100%" stop-color="white" stop-opacity="0.18"/></radialGradient>'
    + '</defs>';
  inner += '<rect width="' + W + '" height="' + H + '" fill="url(#' + ngid + ')" pointer-events="none"/>';
  return wrap(defs + inner, [{ c: s.hi, w: 3, l: 'HIGH ≥70dB' }, { c: s.md, w: 3, l: 'MED 62-70dB' }, { c: s.lo, w: 3, l: 'LOW <62dB' }], 'NOISE·ESTIMATED');
}

/* ──── STREET VITALITY ──── */
function drawVitality(data, sc) {
  const s = getScheme('vitality', sc || 0);
  const b = getBounds();
  const fid = 'vt' + Math.random().toString(36).slice(2, 8);
  function poiCat(t) {
    const am = t.amenity || '', sh = t.shop || '', le = t.leisure || '';
    if (['restaurant', 'cafe', 'bar', 'fast_food', 'pub', 'food_court', 'ice_cream'].includes(am) || sh) return 0; // FOOD & RETAIL
    if (['school', 'university', 'library', 'theatre', 'cinema', 'museum', 'place_of_worship', 'arts_centre'].includes(am) || le === 'sports_centre' || le === 'fitness_centre') return 1; // CULTURE
    if (['bus_stop', 'station', 'subway_entrance'].includes(am) || t.public_transport || t.railway) return 2; // TRANSIT
    if (le === 'park' || le === 'garden' || le === 'playground') return 3; // GREEN
    return -1;
  }
  const cats = [
    { col: s.c0, size: 2.8, label: 'COMMERCE' },
    { col: s.c1, size: 3.2, label: 'CULTURE' },
    { col: s.c2, size: 2.4, label: 'TRANSIT' },
    { col: s.c3, size: 2.4, label: 'GREEN' },
  ];
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  // Subtle road grid as context
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry) return;
    const hw = el.tags && el.tags.highway || '';
    if (!['primary', 'secondary', 'tertiary', 'residential'].includes(hw)) return;
    const pts = wpts(el, b); if (!pts) return;
    inner += '<polyline points="' + pts + '" fill="none" stroke="' + s.road + '" stroke-width=".5" stroke-linecap="round" opacity=".6"/>';
  });
  // Glow layer
  inner += '<g filter="url(#' + fid + ')" opacity=".5">';
  (data.elements || []).forEach(el => {
    if (el.type !== 'node') return;
    const ci = poiCat(el.tags || {}); if (ci < 0) return;
    const [x, y] = proj(el.lat, el.lon, b);
    inner += '<circle cx="' + x + '" cy="' + y + '" r="12" fill="' + cats[ci].col + '"/>';
  });
  inner += '</g>';
  // Dots
  const counts = [0, 0, 0, 0];
  (data.elements || []).forEach(el => {
    if (el.type !== 'node') return;
    const ci = poiCat(el.tags || {}); if (ci < 0) return;
    counts[ci]++;
    const [x, y] = proj(el.lat, el.lon, b);
    inner += '<circle cx="' + x + '" cy="' + y + '" r="' + cats[ci].size + '" fill="' + cats[ci].col + '" stroke="white" stroke-width=".6" opacity=".92"/>';
  });
  const total = counts.reduce((a, c) => a + c, 0);
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="white"/>';
  const defs = '<defs><filter id="' + fid + '" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter></defs>';
  return wrap(defs + inner, cats.map(c => ({ type: 'rect', c: c.col, l: c.label })), 'POI·' + total);
}

/* ──── POI DENSITY HEAT ──── */
function drawPoiHeat(data, sc) {
  const s = getScheme('poiheat', sc);
  const b = getBounds();
  const fid = 'ph' + Math.random().toString(36).slice(2, 8);
  // collect POI points
  const pts = [];
  (data.elements || []).forEach(el => {
    if (el.type !== 'node' || !el.tags) return;
    const t = el.tags;
    if (t.amenity || t.shop || t.leisure || t.tourism || t.office) { const [x, y] = proj(el.lat, el.lon, b); pts.push([x, y]); }
  });
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  // subtle roads
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry) return; const hw = el.tags && el.tags.highway || '';
    if (!['primary', 'secondary', 'tertiary', 'residential'].includes(hw)) return;
    const p = wpts(el, b); if (!p) return;
    inner += '<polyline points="' + p + '" fill="none" stroke="' + s.road + '" stroke-width=".4" opacity=".5"/>';
  });
  // grid-based density: count POIs per cell, color by intensity
  const GRID = 18, cell = (W - PAD * 2) / GRID;
  const grid = {};
  let maxC = 0;
  pts.forEach(([x, y]) => {
    const gx = Math.floor((x - PAD) / cell), gy = Math.floor((y - PAD) / cell);
    const k = gx + ',' + gy; grid[k] = (grid[k] || 0) + 1; if (grid[k] > maxC) maxC = grid[k];
  });
  const cols = [s.c0, s.c1, s.c2, s.c3, s.c4];
  inner += '<g filter="url(#' + fid + ')">';
  Object.keys(grid).forEach(k => {
    const [gx, gy] = k.split(',').map(Number);
    const v = grid[k] / Math.max(maxC, 1);
    const ci = Math.min(4, Math.floor(v * 5));
    const cx = PAD + gx * cell + cell / 2, cy = PAD + gy * cell + cell / 2;
    inner += '<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="' + (cell * 0.9).toFixed(1) + '" fill="' + cols[ci] + '" opacity="' + (0.35 + v * 0.55).toFixed(2) + '"/>';
  });
  inner += '</g>';
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="white"/>';
  const defs = '<defs><filter id="' + fid + '" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5"/></filter></defs>';
  return wrap(defs + inner, [{ type: 'rect', c: s.c0, l: 'LOW' }, { type: 'rect', c: s.c2, l: 'MED' }, { type: 'rect', c: s.c4, l: 'HIGH' }], 'POI·' + pts.length);
}

/* ──── POI TYPE MAP ──── */
function drawPoiType(data, sc) {
  const s = getScheme('poitype', sc);
  const b = getBounds();
  function cat(t) {
    const am = t.amenity || '', sh = t.shop || '', le = t.leisure || '', to = t.tourism || '';
    if (['restaurant', 'cafe', 'bar', 'fast_food', 'pub', 'food_court', 'ice_cream'].includes(am)) return 0; // FOOD
    if (sh) return 1; // SHOP
    if (['school', 'university', 'college', 'library', 'kindergarten'].includes(am)) return 2; // EDU
    if (['hospital', 'clinic', 'doctors', 'pharmacy', 'dentist'].includes(am)) return 3; // HEALTH
    if (le || to || ['theatre', 'cinema', 'arts_centre'].includes(am)) return 4; // LEISURE
    return -1;
  }
  const cats = [{ c: s.food, l: 'FOOD' }, { c: s.shop, l: 'SHOP' }, { c: s.edu, l: 'EDU' }, { c: s.health, l: 'HEALTH' }, { c: s.leisure, l: 'LEISURE' }];
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry) return; const hw = el.tags && el.tags.highway || '';
    if (!['primary', 'secondary', 'tertiary', 'residential'].includes(hw)) return;
    const p = wpts(el, b); if (!p) return;
    inner += '<polyline points="' + p + '" fill="none" stroke="' + s.road + '" stroke-width=".4" opacity=".6"/>';
  });
  const counts = [0, 0, 0, 0, 0];
  (data.elements || []).forEach(el => {
    if (el.type !== 'node' || !el.tags) return;
    const ci = cat(el.tags); if (ci < 0) return; counts[ci]++;
    const [x, y] = proj(el.lat, el.lon, b);
    inner += '<circle cx="' + x + '" cy="' + y + '" r="2.6" fill="' + cats[ci].c + '" stroke="white" stroke-width=".5" opacity=".92"/>';
  });
  const total = counts.reduce((a, c) => a + c, 0);
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="white"/>';
  return wrap(inner, cats.map(c => ({ type: 'rect', c: c.c, l: c.l })), 'POI·' + total);
}

/* ──── TRANSIT ACCESS ──── */
/* ──── COMBINED OVERLAY (roads + green + water + buildings in one) ──── */
function drawCombined(sc) {
  const s = getScheme('combined', sc);
  const b = getBounds();
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  // green areas
  (lastD.gw && lastD.gw.elements || []).forEach(el => {
    if (!el.geometry || !el.tags) return;
    if (isRealGreen(el.tags)) { const p = wpts(el, b); if (p) inner += '<polygon points="' + p + '" fill="' + s.green + '" opacity=".55"/>'; }
  });
  // water
  (lastD.gw && lastD.gw.elements || []).forEach(el => {
    if (!el.geometry || !el.tags) return;
    if (isRealWater(el.tags)) { const p = wpts(el, b); if (p) inner += '<polygon points="' + p + '" fill="' + s.water + '" opacity=".6"/>'; }
  });
  // buildings (footprints)
  (lastD.buildings && lastD.buildings.elements || []).forEach(el => {
    if (!el.geometry || el.geometry.length < 3) return;
    const p = wpts(el, b); if (p) inner += '<polygon points="' + p + '" fill="' + s.bld + '" opacity=".82"/>';
  });
  // roads (secondary then primary)
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry) return; const hw = el.tags && el.tags.highway || '';
    if (['primary', 'trunk', 'motorway', 'secondary', 'tertiary'].includes(hw)) return;
    const p = wpts(el, b); if (p) inner += '<polyline points="' + p + '" fill="none" stroke="' + s.road2 + '" stroke-width=".7" opacity=".7"/>';
  });
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry) return; const hw = el.tags && el.tags.highway || '';
    if (!['primary', 'trunk', 'motorway', 'secondary', 'tertiary'].includes(hw)) return;
    const w = ['primary', 'trunk', 'motorway'].includes(hw) ? 1.8 : 1.1;
    const p = wpts(el, b); if (p) inner += '<polyline points="' + p + '" fill="none" stroke="' + s.road + '" stroke-width="' + w + '" stroke-linecap="round"/>';
  });
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="5.5" fill="none" stroke="' + s.road + '" stroke-width="1.5"/><circle cx="' + sx + '" cy="' + sy + '" r="2.5" fill="' + s.road + '"/>';
  return wrap(inner, [{ type: 'rect', c: s.bld, l: 'BUILT' }, { type: 'rect', c: s.green, l: 'GREEN' }, { c: s.road, w: 1.8, l: 'ROADS' }], 'COMBINED');
}

function drawTransit(data, sc) {
  const s = getScheme('transit', sc || 0);
  const b = getBounds();
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  const [cx, cy] = [W / 2, H / 2];
  const mPerPx = (b.mxLng - b.mnLng) / (W - PAD * 2) * 111320;
  function mToPx(m) { return m / mPerPx; }
  // Walking rings
  [[1200, s.ring15, s.stroke5, .5, '15'], [800, s.ring10, s.stroke5, .8, '10'], [400, s.ring5, s.stroke5, 1.4, '5']].forEach(([m, fill, strk, sw, lbl]) => {
    const r2 = mToPx(m);
    inner += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r2 + '" fill="' + fill + '" stroke="' + strk + '" stroke-width="' + sw + '" stroke-dasharray="4,3"/>';
    // Label at top of ring only
    inner += '<text x="' + cx + '" y="' + (cy - r2 + 8) + '" text-anchor="middle" font-size="5" fill="' + strk + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" opacity=".7">' + lbl + 'min</text>';
  });
  // Transit stops — major only get name, bus gets dot only
  let cnt = 0;
  (data.elements || []).forEach(el => {
    if (el.type !== 'node') return;
    const t = el.tags || {};
    let col = null, r3 = 2.5, isMajor = false;
    if (t.railway === 'subway_entrance' || t.station === 'subway' || t.railway === 'station') { col = s.metro; r3 = 5; isMajor = true; }
    else if (t.railway === 'tram_stop' || t.railway === 'halt') { col = s.rail; r3 = 3.5; isMajor = true; }
    else if (t.highway === 'bus_stop' || t.public_transport === 'stop_position') { col = s.bus; r3 = 2; }
    if (!col) return;
    const [x, y] = proj(el.lat, el.lon, b); cnt++;
    inner += '<circle cx="' + x + '" cy="' + y + '" r="' + r3 + '" fill="' + col + '" stroke="white" stroke-width=".7"/>';
    // Only show name for major stops (metro/rail) and only if name is short
    if (isMajor && t.name && t.name.length < 20) {
      inner += '<rect x="' + (x + r3 + 2) + '" y="' + (y - 5) + '" width="' + (Math.min(t.name.length * 3.2, 60) + 4) + '" height="9" rx="1.5" fill="white" opacity=".85"/>';
      inner += '<text x="' + (x + r3 + 4) + '" y="' + (y + 2) + '" font-size="4.5" fill="' + col + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">' + t.name.slice(0, 18) + '</text>';
    }
  });
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="white"/>';
  return wrap(inner, [{ type: 'rect', c: s.metro, l: 'METRO/RAIL' }, { type: 'rect', c: s.rail, l: 'TRAM' }, { type: 'rect', c: s.bus, l: 'BUS' }], cnt ? 'STOPS·' + cnt : 'NO DATA');
}

/* ──── ACCESS ANALYSIS ──── */
function drawAccess(data, sc) {
  const s = getScheme('access', sc || 0);
  const b = getBounds();
  const cx = W / 2, cy = H / 2, cr = W / 2 - PAD + 4;
  const fid = 'ac' + Math.random().toString(36).slice(2, 8);
  const gid = 'acg' + Math.random().toString(36).slice(2, 8);
  const isDark = s.bg.startsWith('#0');

  const SPEED = 1.2; // m/s walking
  const ZONES = [5 * 60, 10 * 60, 15 * 60, 20 * 60]; // seconds

  function zoneCol(sec) {
    if (sec <= ZONES[0]) return s.z1;
    if (sec <= ZONES[1]) return s.z2;
    if (sec <= ZONES[2]) return s.z3;
    return s.z4;
  }
  function zoneW(sec) {
    if (sec <= ZONES[0]) return 2.2;
    if (sec <= ZONES[1]) return 1.6;
    if (sec <= ZONES[2]) return 1.1;
    return 0.7;
  }

  const hwSpeed = {
    motorway: 1.0, trunk: 1.0, primary: 1.2, secondary: 1.2,
    tertiary: 1.3, residential: 1.3, pedestrian: 1.1, footway: 1.1,
    cycleway: 1.2, path: 1.0, service: 1.1
  };

  // Simple distance-based approach: for each road segment,
  // compute min straight-line distance from site, convert to travel time
  // This is an approximation but always works without crashing
  function mFromSite(lat, lon) {
    const dlat = (lat - sLat) * 111320;
    const dlon = (lon - sLng) * 111320 * Math.cos(sLat * Math.PI / 180);
    return Math.sqrt(dlat * dlat + dlon * dlon);
  }

  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';

  // Draw base road network (dim)
  (data.elements || []).forEach(el => {
    if (el.type !== 'way' || !el.geometry) return;
    const hw = el.tags && el.tags.highway || '';
    if (!hwSpeed[hw]) return;
    const pts = wpts(el, b); if (!pts) return;
    inner += '<polyline points="' + pts + '" fill="none" stroke="' + s.road + '" stroke-width=".6" stroke-linecap="round" opacity=".7"/>';
  });

  // Draw colored access roads — glow layer
  const coloredLines = [];
  (data.elements || []).forEach(el => {
    if (el.type !== 'way' || !el.geometry) return;
    const hw = el.tags && el.tags.highway || '';
    const spd = hwSpeed[hw]; if (!spd) return;
    // Min distance from site to any node on this segment
    let minM = Infinity;
    el.geometry.forEach(n => { const m = mFromSite(n.lat, n.lon); if (m < minM) minM = m; });
    // Convert to travel time (straight-line / speed, with road factor)
    const sec = minM / (SPEED * spd);
    if (sec > ZONES[3]) return;
    const pts = wpts(el, b); if (!pts) return;
    coloredLines.push({ pts, sec });
  });

  // Glow pass
  inner += '<g filter="url(#' + fid + ')">';
  coloredLines.forEach(({ pts, sec }) => {
    inner += '<polyline points="' + pts + '" fill="none" stroke="' + zoneCol(sec) + '" stroke-width="' + (zoneW(sec) * 2.8) + '" stroke-linecap="round" opacity="' + (isDark ? '.22' : '.14') + '"/>';
  });
  inner += '</g>';

  // Crisp color pass
  coloredLines.forEach(({ pts, sec }) => {
    inner += '<polyline points="' + pts + '" fill="none" stroke="' + zoneCol(sec) + '" stroke-width="' + zoneW(sec) + '" stroke-linecap="round" stroke-linejoin="round" opacity=".95"/>';
  });

  // Isochrone rings
  const mPerPx = (b.mxLng - b.mnLng) / (W - PAD * 2) * 111320;
  ZONES.slice(0, 3).forEach((sec, i) => {
    const m = sec * SPEED;
    const r2 = m / mPerPx;
    const col = [s.z1, s.z2, s.z3][i];
    const lbl = [' 5min', ' 10min', ' 15min'][i];
    inner += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r2.toFixed(1) + '" fill="none" stroke="' + col + '" stroke-width="1" stroke-dasharray="4,3" opacity=".55"/>';
    const ly = cy - r2 + 10;
    if (ly > PAD + 4) {
      inner += '<rect x="' + (cx - 14) + '" y="' + (ly - 8) + '" width="28" height="11" rx="2" fill="' + (isDark ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.8)') + '"/>';
      inner += '<text x="' + cx + '" y="' + ly + '" text-anchor="middle" font-size="7" font-weight="700" fill="' + col + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + lbl + '</text>';
    }
  });

  // Radial vignette
  inner += '<rect width="' + W + '" height="' + H + '" fill="url(#' + gid + ')" pointer-events="none"/>';

  // Site marker
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="7" fill="none" stroke="' + s.site + '" stroke-width="1.5"/>';
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="3" fill="' + s.site + '"/>';

  const defs = '<defs>'
    + '<filter id="' + fid + '" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3"/></filter>'
    + '<radialGradient id="' + gid + '" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="' + s.bg + '" stop-opacity="0"/><stop offset="100%" stop-color="' + s.bg + '" stop-opacity="' + (isDark ? '0.65' : '0.4') + '"/></radialGradient>'
    + '</defs>';

  const total = coloredLines.length;
  return wrap(defs + inner, [
    { c: s.z1, w: 2, l: '0–5 MIN' },
    { c: s.z2, w: 1.8, l: '5–10 MIN' },
    { c: s.z3, w: 1.4, l: '10–15 MIN' },
    { c: s.z4, w: 1, l: '15–20 MIN' },
  ], total ? 'WALK·' + total : 'NO DATA');
}



/* ──── BUILDING DENSITY ──── */
function drawDensity(data, sc) {
  const s = getScheme('density', sc || 0);
  const b = getBounds();
  const CellN = 12; // grid cells per side
  const cw = (W - PAD * 2) / CellN, ch = (H - PAD * 2) / CellN;
  // Compute coverage per cell
  const cells = Array.from({ length: CellN }, () => new Array(CellN).fill(0));
  const cellArea = cw * ch;
  (data.elements || []).forEach(el => {
    if (!el.geometry || !el.tags || !el.tags.building) return;
    const levels = parseFloat(el.tags['building:levels'] || el.tags.levels || '3') || 3;
    // Get building centroid in grid coords
    const pts = el.geometry.map(n => proj(n.lat, n.lon, b));
    const mx = pts.reduce((a, p) => a + p[0], 0) / pts.length;
    const my = pts.reduce((a, p) => a + p[1], 0) / pts.length;
    const gc = Math.floor((mx - PAD) / cw), gr = Math.floor((my - PAD) / ch);
    if (gc < 0 || gc >= CellN || gr < 0 || gr >= CellN) return;
    // Rough footprint area in SVG units
    let area = 0;
    for (let i = 0; i < pts.length - 1; i++) { area += pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1]; }
    area = Math.abs(area) / 2;
    cells[gr][gc] += area * levels;
  });
  // Max for normalization
  const maxVal = Math.max(...cells.flat(), 1);
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  cells.forEach((row, gr) => row.forEach((val, gc) => {
    if (val === 0) return;
    const ratio = val / maxVal;
    let col;
    if (ratio < 0.25) col = s.lo;
    else if (ratio < 0.5) col = s.md;
    else if (ratio < 0.75) col = s.hi;
    else col = s.vhi;
    const x = PAD + gc * cw, y = PAD + gr * ch;
    inner += '<rect x="' + x + '" y="' + y + '" width="' + cw + '" height="' + ch + '" fill="' + col + '" opacity="' + (0.5 + ratio * 0.5).toFixed(2) + '"/>';
  }));
  // Light road grid overlay
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry) return;
    const hw = el.tags && el.tags.highway || '';
    if (!['primary', 'secondary', 'tertiary'].includes(hw)) return;
    const pts = wpts(el, b); if (!pts) return;
    inner += '<polyline points="' + pts + '" fill="none" stroke="' + s.road + '" stroke-width=".6" opacity=".5"/>';
  });
  // Grid lines
  for (let i = 0; i <= CellN; i++) {
    inner += '<line x1="' + (PAD + i * cw) + '" y1="' + PAD + '" x2="' + (PAD + i * cw) + '" y2="' + (H - PAD) + '" stroke="' + s.road + '" stroke-width=".3" opacity=".4"/>';
    inner += '<line x1="' + PAD + '" y1="' + (PAD + i * ch) + '" x2="' + (W - PAD) + '" y2="' + (PAD + i * ch) + '" stroke="' + s.road + '" stroke-width=".3" opacity=".4"/>';
  }
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="white"/>';
  return wrap(inner, [{ type: 'rect', c: s.lo, l: 'LOW' }, { type: 'rect', c: s.md, l: 'MED' }, { type: 'rect', c: s.hi, l: 'HIGH' }, { type: 'rect', c: s.vhi, l: 'VERY HIGH' }], 'FAR·ESTIMATED');
}

/* ──── PEDESTRIAN NETWORK ──── */
function drawPedestrian(data, sc) {
  const s = getScheme('pedestrian', sc || 0);
  const b = getBounds();
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  // Background minor roads
  (data.elements || []).forEach(el => {
    if (!el.geometry) return;
    const hw = el.tags && el.tags.highway || '';
    if (!['residential', 'tertiary', 'secondary', 'primary'].includes(hw)) return;
    const pts = wpts(el, b); if (!pts) return;
    inner += '<polyline points="' + pts + '" fill="none" stroke="' + s.road + '" stroke-width="' + (hw === 'primary' ? 1.2 : hw === 'secondary' ? .9 : .6) + '" stroke-linecap="round" opacity=".55"/>';
  });
  // Pedestrian plazas and squares (areas)
  (data.elements || []).forEach(el => {
    if (!el.geometry) return;
    const t = el.tags || {};
    const isPedArea = t.highway === 'pedestrian' || t.highway === 'living_street' || t.leisure === 'plaza' || t.place === 'square';
    if (!isPedArea || el.geometry.length < 4) return;
    const pts = wpts(el, b); if (!pts) return;
    inner += '<polygon points="' + pts + '" fill="' + s.plaza + '" stroke="' + s.walk + '" stroke-width=".4" opacity=".7"/>';
  });
  let walkCnt = 0, cycleCnt = 0;
  (data.elements || []).forEach(el => {
    if (!el.geometry) return;
    const t = el.tags || {};
    const hw = t.highway || '';
    const isPed = hw === 'footway' || hw === 'pedestrian' || hw === 'steps' || hw === 'path' || t.foot === 'yes' || t.foot === 'designated';
    const isCyc = hw === 'cycleway' || t.bicycle === 'designated';
    if (!isPed && !isCyc) return;
    const pts = wpts(el, b); if (!pts) return;
    if (isCyc) {
      cycleCnt++;
      inner += '<polyline points="' + pts + '" fill="none" stroke="' + s.cycle + '" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="5,2" opacity=".9"/>';
      // Arrow on cycleway
      if (el.geometry && el.geometry.length >= 2) {
        const mi = Math.floor(el.geometry.length / 2);
        const [ax1, ay1] = proj(el.geometry[Math.max(0, mi - 1)].lat, el.geometry[Math.max(0, mi - 1)].lon, b);
        const [ax2, ay2] = proj(el.geometry[mi].lat, el.geometry[mi].lon, b);
        const ang = Math.atan2(ay2 - ay1, ax2 - ax1);
        const mx = (ax1 + ax2) / 2, my = (ay1 + ay2) / 2;
        inner += '<polygon points="' + (mx + 5 * Math.cos(ang)).toFixed(1) + ',' + (my + 5 * Math.sin(ang)).toFixed(1) + ' ' + (mx - 2.5 * Math.sin(ang)).toFixed(1) + ',' + (my + 2.5 * Math.cos(ang)).toFixed(1) + ' ' + (mx + 2.5 * Math.sin(ang)).toFixed(1) + ',' + (my - 2.5 * Math.cos(ang)).toFixed(1) + '" fill="' + s.cycle + '" opacity=".7"/>';
      }
    } else {
      walkCnt++;
      inner += '<polyline points="' + pts + '" fill="none" stroke="' + s.walk + '" stroke-width="1" stroke-linecap="round" opacity=".9"/>';
    }
  });
  const [sx, sy] = proj(sLat, sLng, b);
  inner += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="#1A1917"/><circle cx="' + sx + '" cy="' + sy + '" r="2" fill="white"/>';
  const total = walkCnt + cycleCnt;
  return wrap(inner, [{ c: s.walk, w: 1.5, l: 'FOOTWAY' }, { c: s.cycle, w: 1.5, da: '5,2', l: 'CYCLEWAY' }, { type: 'rect', c: s.plaza, l: 'PLAZA' }], total ? 'PATHS·' + total : 'NO DATA');
}

/* ════════════════════════════════════════
   RENDER DISPATCHER — always returns SVG
════════════════════════════════════════ */
function render(id, sc) {
  const out = renderRaw(id, sc);
  return applyAccent(out);
}
let userAccent = null; // null = default red; otherwise a hex string
let exportBgColor = 'theme';
function setExportBg(val, isCustom) {
  const customPick = document.getElementById('exportBgPick');
  const select = document.getElementById('bgSelect');
  if (val === 'custom' && !isCustom) {
    customPick.style.display = 'inline-block';
    exportBgColor = customPick.value;
  } else if (isCustom) {
    exportBgColor = val;
    select.value = 'custom';
    customPick.style.display = 'inline-block';
  } else {
    customPick.style.display = 'none';
    exportBgColor = val;
  }
}
// ── i18n (lightweight bilingual) ──
let lang = 'zh';
try { lang = localStorage.getItem('em_lang') || ''; } catch (e) { }
const I18N = {
  home_btn: { en: '← Home', zh: '← 主页' },
  bubble_tool_title: { en: 'Diagram Tools', zh: '设计图表工具' },
  bubble_tool_btn: { en: 'Bubble Diagram Generator ↗', zh: '功能分区气泡图生成器 ↗' },
  // Studio Tools sidebar section
  studio_tool_title: { en: 'Studio Tools', zh: '工作室工具' },
  tool_bubble_link: { en: '◌ Bubble Diagram ↗', zh: '◌ 泡泡图 / 功能关系图 ↗' },
  tool_strategy_link: { en: '◇ Site Strategy ↗', zh: '◇ 场地策略图 ↗' },
  tool_floorplan_link: { en: '▣ Floorplan / AXO ↗', zh: '▣ 平面绘制 / 轴测 ↗' },
  tool_flow_link: { en: '➤ Flow Analysis ↗', zh: '➤ 流线分析 ↗' },
  tool_parti_link: { en: '◆ Parti Studio ↗', zh: '◆ Parti 概念演变 ↗' },
  tool_planrender_link: { en: '▦ Plan Render ↗', zh: '▦ 总平上色 ↗' },
  tool_elevation_link: { en: '△ Elevation / Section ↗', zh: '△ 立面 / 剖面渲染 ↗' },
  tool_layout_link: { en: '▥ Portfolio Layout ↗', zh: '▥ 作品集排版 ↗' },
  loc: { en: 'Location', zh: '场地定位' },
  locph: { en: 'Search address or place...', zh: '搜索地址或地点...' },
  viewmode: { en: 'View Mode', zh: '视图模式' },
  v2d: { en: '2D Analysis', zh: '2D 分析' },
  v3d: { en: '3D City', zh: '3D 城市' },
  mapstyle: { en: 'Map Style', zh: '地图样式' },
  analysis: { en: 'Analysis Types', zh: '分析类型' },
  shape: { en: 'Diagram Shape', zh: '图形形状' },
  maxtools: { en: 'Max Tools', zh: 'Max 工具' },
  tool_bubble: { en: '◌ Concept', zh: '◌ 概念图' },
  tool_layout: { en: '▦ Portfolio', zh: '▦ 作品集' },
  generate: { en: 'GENERATE', zh: '生成图纸' },
  // sidebar elements
  sb_sub: { en: 'ARCHITECTURAL SITE ANALYSIS', zh: '建筑场地分析与制图' },
  bubble_tool_title: { en: 'Diagram Tools', zh: '分析图工具' },
  bubble_tool_btn: { en: 'Bubble Diagram Generator ↗', zh: '泡泡图/功能关系图生成器 ↗' },
  tile_light: { en: 'Light', zh: '亮色' },
  tile_sat: { en: 'Sat', zh: '卫星' },
  radius: { en: 'Radius', zh: '分析半径' },
  map_overlay: { en: 'Map Overlay', zh: '叠加底图' },
  after_generate: { en: 'after generate', zh: '生成后生效' },
  analysis_types_3d: { en: '3D Analysis Types', zh: '3D 分析类型' },
  tap_preview: { en: 'tap to preview · all generate', zh: '点击预览 · 最终全部生成' },
  m3d_white: { en: 'White Model', zh: '素模分析' },
  m3d_height: { en: 'Height Model', zh: '高度分析' },
  m3d_zone: { en: 'Zoning Model', zh: '地带分区' },
  m3d_density: { en: 'Density Model', zh: '密度分析' },
  m3d_solar: { en: 'Solar Shadow', zh: '阴影分析' },
  m3d_skyline: { en: 'Skyline Model', zh: '天际线分析' },
  solar_noon: { en: 'SOLAR NOON', zh: '正午太阳高度' },
  shape_3d: { en: 'SHAPE', zh: '范围形状' },
  shp3d_circle: { en: 'Circle', zh: '圆形' },
  shp3d_square: { en: 'Square', zh: '方形' },
  btn_all: { en: 'all', zh: '全选' },
  btn_none: { en: 'none', zh: '全清' },
  shp_circle: { en: '● Circle', zh: '● 圆形范围' },
  shp_round: { en: '▢ Round', zh: '▢ 圆角方形' },
  shp_poly: { en: '⬡ Site', zh: '⬡ 场地范围' },
  shp_square: { en: '█ Square', zh: '█ 直角矩形' },
  display_opts: { en: 'Diagram Elements', zh: '图面元素控制' },
  opt_scale: { en: 'Scale Bar', zh: '显示比例尺' },
  opt_north: { en: 'Compass', zh: '显示指北针' },
  opt_legend_zh: { en: 'Chinese Legend', zh: '使用中文图例' },
  poly_hint_text: { en: 'Click on map to add boundary points (min 3) to draw your site.', zh: '点击地图添加边界点（至少3个），画出你的场地范围。' },
  btn_done: { en: '✓ DONE', zh: '✓ 完成' },
  btn_clear: { en: '✕ CLEAR', zh: '✕ 清除' },
  color_theme: { en: 'Color Theme', zh: '配色方案' },
  export_bg: { en: 'EXPORT BG', zh: '导出背景颜色' },
  bg_theme: { en: 'Theme Default', zh: '主题默认' },
  bg_transparent: { en: 'Transparent', zh: '透明' },
  bg_custom: { en: 'Custom', zh: '自定义' },
  applies_all: { en: 'applies to all', zh: '应用到全部' },
  theme_warm: { en: 'Warm', zh: '暖色系' },
  theme_cool: { en: 'Cool', zh: '冷色系' },
  theme_mono: { en: 'Mono', zh: '单色系' },
  accent_color: { en: '自定义主色', zh: '自定义主色' },
  btn_reset: { en: 'RESET', zh: '重置' },
  btn_edit_colors: { en: 'EDIT ✎', zh: '编辑 ✎' },
  btn_reset_all: { en: 'RESET ALL', zh: '全部重置' },
  custom_colors_label: { en: '自定义配色', zh: '自定义配色' },
  cm_pick_analysis: { en: 'Pick an analysis to edit its colors', zh: '请选择要编辑的分析图' },
  cm_scheme: { en: 'SCHEME', zh: '方案' },
  cm_reset_this: { en: 'RESET THIS SCHEME', zh: '恢复此方案默认' },
  btn_generate: { en: 'GENERATE ANALYSIS ↗', zh: '开始生成场地分析 ↗' },
  btn_report_pdf: { en: 'REPORT PDF ↓', zh: '导出报告 PDF ↓' },
  btn_layered_axon_pdf: { en: 'LAYERED AXON PDF ↓', zh: '导出轴测叠加 PDF ↓' },
  empty_state: { en: 'SELECT SITE · CHOOSE ANALYSES · GENERATE', zh: '请在右侧点选场地 · 勾选左侧分析 · 点击开始生成' },
  ready_status: { en: 'READY', zh: '准备就绪' },
  sbar_analyses: { en: 'ANALYSES', zh: '项分析' },
  sbar_site: { en: 'SITE', zh: '场地' },
  btn_search: { en: '⌕\u00a0search on map', zh: '⌕\u00a0在地图上搜索' },
  lat_lbl: { en: 'Lat —', zh: '纬度 —' },
  lng_lbl: { en: 'Lng —', zh: '经度 —' },
  net_unknown: { en: 'OSM status unknown', zh: 'OSM 服务连接状态未知' },
  btn_test: { en: 'TEST', zh: '测试' },
  hud_click_map: { en: 'CLICK MAP TO SELECT SITE', zh: '请在地图上点击选择场地中心' },
  map_hint: { en: 'CLICK ANYWHERE ON MAP TO DROP PIN', zh: '在地图任意位置点击以放置场地大头针' },
  modal_layered_title: { en: 'LAYERED AXONOMETRIC', zh: '轴测图层叠加' },
  modal_layered_subtitle: { en: 'Select 2–8 analyses to stack · order = stack order', zh: '选择 2–8 个分析图层进行三维叠加 · 顺序即为叠放顺序' },
  btn_cancel: { en: 'CANCEL', zh: '取消' },
  btn_generate_poster: { en: 'GENERATE POSTER →', zh: '生成叠加图纸 →' },
  help_quick_start: { en: 'Quick Start · 快速上手', zh: 'Quick Start · 快速上手' },
  help_title: { en: 'Four steps to a finished board', zh: '只需四步，轻松生成场地分析图纸' },
  help_dont: { en: 'Don\'t show on startup · 不再自动显示', zh: '不再自动显示' },
  help_try_example: { en: '▶ Try example · 试一个', zh: '▶ 试一个示例' },
  help_got_it: { en: 'Got it →', zh: '我知道了 →' },
  // common toasts / messages
  ts_pickloc: { en: 'CLICK MAP TO SELECT A SITE FIRST', zh: '请先在地图上点选场地' },
  ts_selone: { en: 'SELECT AT LEAST ONE ANALYSIS', zh: '请至少选择一项分析' },
  ts_enter_loc: { en: 'ENTER A LOCATION', zh: '请输入地址进行搜索' },
  ts_searching: { en: 'SEARCHING...', zh: '搜索中...' },
  ts_search_error: { en: 'SEARCH ERROR', zh: '搜索出错' },
  ts_not_found: { en: 'NOT FOUND — try a bigger place or different spelling', zh: '未找到该地址，请尝试更大范围或检查拼写' },
  ts_found: { en: 'FOUND', zh: '已定位至' },
  ts_timeout: { en: 'SEARCH TIMED OUT — try again', zh: '搜索超时，请稍后重试' },
  ts_failed: { en: 'search failed, try again', zh: '搜索失败，请重试' },
  ts_gen_first: { en: 'GENERATE ANALYSES FIRST', zh: '请先生成分析图' },
  ts_gen_more: { en: 'GENERATE MORE ANALYSES FIRST', zh: '请先生成多项分析图' },
  ts_drawing: { en: 'DRAWING YOUR ANALYSES...', zh: '正在绘制分析图层...' },
  ts_composing: { en: 'COMPOSING DIAGRAMS...', zh: '正在组装图纸...' },
  ts_ready: { en: 'ANALYSES READY', zh: '分析图生成完毕' },
  ts_locating: { en: 'LOCATING YOUR SITE...', zh: '正在定位场地...' },
  ts_osm_query: { en: 'QUERYING OPENSTREETMAP...', zh: '正在获取 OSM 地图数据...' },
  ts_osm_busy: { en: 'OSM busy / limit hit — retry in a bit', zh: 'OSM 数据源繁忙或受限，请稍后重试' },
  ts_osm_success: { en: 'OSM data loaded', zh: 'OSM 地图数据加载成功' },
  ts_osm_fail: { en: 'OSM fetch failed — please try again', zh: 'OSM 地图数据加载失败，请重试' },
  ts_fetch_clim: { en: 'FETCHING CLIMATE DATA...', zh: '正在获取气候数据...' },
  ts_fetch_terr: { en: 'SAMPLING ELEVATION...', zh: '正在采样高程数据...' },
  ts_poly_hint: { en: 'TAP THE MAP TO ADD BOUNDARY POINTS', zh: '请在地图上点击以添加边界顶点' },
  ts_poly_points: { en: 'points', zh: '个点' },
  ts_poly_add_more: { en: 'add more points', zh: '请继续添加顶点' },
  ts_poly_can_done: { en: 'can click DONE to finish', zh: '可以点击 DONE 完成' },
  ts_poly_need3: { en: 'NEED AT LEAST 3 POINTS', zh: '边界至少需要 3 个顶点' },
  ts_poly_set: { en: 'SITE BOUNDARY SET · REGENERATE', zh: '场地边界已设置，请重新生成' },
  ts_poly_clear: { en: 'BOUNDARY CLEARED', zh: '边界已清除' },
  ts_osm_reachable: { en: 'OSM reachable ✓', zh: 'OSM 连接正常 ✓' },
  ts_osm_busy_status: { en: 'OSM busy / limit ⚠', zh: 'OSM 繁忙 / 受限 ⚠' },
  ts_osm_offline: { en: 'OSM offline ✕', zh: 'OSM 离线 ✕' },
  ts_osm_testing: { en: 'Testing...', zh: '测试中...' },
  ts_select_min2: { en: 'SELECT AT LEAST 2', zh: '请选择至少 2 个图层' },
  ts_select_max8: { en: 'MAX 8 LAYERS', zh: '最多选择 8 个图层' },
  ts_building_layered: { en: 'BUILDING LAYERED POSTER...', zh: '正在组装轴测叠加海报...' },
};
function t(key) { const e = I18N[key]; return e ? (e[lang] || e.en) : key; }
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (I18N[k]) el.textContent = t(k); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { const k = el.getAttribute('data-i18n-ph'); if (I18N[k]) el.placeholder = t(k); });
  document.documentElement.lang = lang;

  // Page Title
  document.title = lang === 'zh' ? 'AntiMap生成器' : 'AntiMap Generator';

  // Sidebar Header Logo
  const sbn = document.getElementById('sbName');
  if (sbn) sbn.innerHTML = lang === 'zh' ? 'AntiMap<span>生成器</span>' : 'AntiMap<span>Generator</span>';

  // Update lang switcher toggle UI
  const zh = document.getElementById('langZH');
  const en = document.getElementById('langEN');
  if (zh && en) {
    if (lang === 'zh') {
      zh.classList.add('active');
      en.classList.remove('active');
    } else {
      en.classList.add('active');
      zh.classList.remove('active');
    }
  }

  // Update analyses sidebar list
  if (typeof renderList === 'function') renderList();

  // Update existing card titles if not custom renamed
  document.querySelectorAll('.card').forEach(card => {
    const id = card.id.replace('card_', '');
    const a = ANALYSES.find(x => x.id === id);
    if (a && !cardName[id]) {
      const titleEl = card.querySelector('.ct');
      if (titleEl) {
        titleEl.textContent = lang === 'zh' ? (a.name_zh || a.name) : a.name;
      }
    }
  });

  // Update status bar texts
  const st = document.getElementById('stxt');
  if (st) {
    if (st.textContent === 'READY' || st.textContent === '准备就绪' || st.textContent === 'Site pinned — Click Generate ↗' || st.textContent === 'SITE PINNED — CLICK GENERATE ↗') {
      st.textContent = t('ready_status');
    } else if (sLat) {
      const sel = ANALYSES.filter(a => a.on);
      st.textContent = sel.length + ' ' + t('sbar_analyses') + ' · ' + (sName || t('sbar_site')).toUpperCase();
    }
  }

  // Update help steps if help modal is open
  if (typeof renderHelpSteps === 'function') renderHelpSteps();

  // Sync legend checkbox
  const legendZhChk = document.getElementById('legendZhChk');
  if (legendZhChk) legendZhChk.checked = legendZh;
}
function setLang(l) {
  lang = l;
  try { localStorage.setItem('em_lang', l); } catch (e) { }
  const lp = document.getElementById('langPick'); if (lp) lp.style.display = 'none';
  legendZh = (l === 'zh');
  applyLang();
  reRenderCards();
}
function toggleLang() {
  setLang(lang === 'zh' ? 'en' : 'zh');
}
// On first load: if no language chosen yet, show the picker
function initLang() {
  try { lang = localStorage.getItem('em_lang') || 'zh'; } catch (e) { lang = 'zh'; }
  legendZh = (lang === 'zh');
  applyLang();
}

// ── Tiers: free / pro / max ──
const FREE_IDS = ['roads', 'landuse', 'gw', 'fabric'];
let isPro = true, isMax = true;
function applyAccent(svg) {
  if (!userAccent || !svg) return svg;
  // Replace the two default red accents used across diagrams with the user's color
  return svg.split('#C0392B').join(userAccent).split('#E0533F').join(userAccent).split('#c0392b').join(userAccent);
}

/* ════════════════════  CUSTOM COLOR SCHEMES  ════════════════════ */
// customSchemes[id][sc] = { field: '#hex', ... } | null
// null means: use default SCH/CSCH/TSCH entry for that index.
let customSchemes = {};
try {
  const raw = localStorage.getItem('em_custom_sch');
  if (raw) customSchemes = JSON.parse(raw) || {};
} catch (e) { customSchemes = {}; }
function saveCustomSchemes() {
  try { localStorage.setItem('em_custom_sch', JSON.stringify(customSchemes)); } catch (e) {}
}
// Map analysis id -> source table & key.
// SCH entries: keyed by id (with alias 'orientrose' -> SCH.rose).
// CSCH/TSCH: shared across all climate / terrain diagrams.
const CLIM_IDS_FOR_SCH = ['climtemp', 'climprecip', 'climover', 'climday', 'climsolar'];
const TERR_IDS_FOR_SCH = ['contour', 'aspect'];
function _schSrc(id) {
  if (CLIM_IDS_FOR_SCH.indexOf(id) >= 0) return { kind: 'csch' };
  if (TERR_IDS_FOR_SCH.indexOf(id) >= 0) return { kind: 'tsch' };
  return { kind: 'sch', key: id === 'orientrose' ? 'rose' : id };
}
function _defaultScheme(id, sc) {
  const src = _schSrc(id);
  if (src.kind === 'csch') return CSCH[sc] || CSCH[0];
  if (src.kind === 'tsch') return TSCH[sc] || TSCH[0];
  const arr = SCH[src.key] || [];
  return arr[sc] || arr[0];
}
function getScheme(id, sc) {
  const c = customSchemes[id] && customSchemes[id][sc];
  if (c) return c;
  return _defaultScheme(id, sc);
}
function isSchemeCustom(id, sc) {
  return !!(customSchemes[id] && customSchemes[id][sc]);
}
function applyCustomColor(id, sc, field, hex) {
  if (!customSchemes[id]) customSchemes[id] = {};
  if (!customSchemes[id][sc]) {
    // clone defaults so unused fields stay intact
    customSchemes[id][sc] = Object.assign({}, _defaultScheme(id, sc));
  }
  customSchemes[id][sc][field] = hex;
  saveCustomSchemes();
  // re-render that single card
  schSwitch(id, sc);
  // refresh scheme dot gradient to match new primary colors
  _refreshDotGradient(id, sc);
}
function resetScheme(id, sc) {
  if (customSchemes[id]) {
    delete customSchemes[id][sc];
    if (Object.keys(customSchemes[id]).length === 0) delete customSchemes[id];
    saveCustomSchemes();
  }
  schSwitch(id, sc);
  _refreshDotGradient(id, sc);
}
function resetAllCustomColors() {
  customSchemes = {};
  saveCustomSchemes();
  // re-render every visible card with its default scheme
  document.querySelectorAll('.card').forEach(card => {
    const id = card.id.replace('card_', '');
    const sc = cardSch[id] || 0;
    schSwitch(id, sc);
    _refreshDotGradient(id, sc);
  });
  toast(lang === 'zh' ? '所有配色已恢复默认' : 'ALL COLORS RESET TO DEFAULT');
}
// Update a single .dot's gradient to reflect the (possibly customized) scheme.
function _refreshDotGradient(id, sc) {
  const card = document.getElementById('card_' + id);
  if (!card) return;
  const dot = card.querySelectorAll('.dot')[sc];
  if (!dot) return;
  const pair = _schemePrevPair(id, sc);
  dot.style.background = 'linear-gradient(135deg,' + pair[0] + ' 50%,' + pair[1] + ' 50%)';
}
// Pick two representative colors from a scheme for the .dot preview.
function _schemePrevPair(id, sc) {
  const s = getScheme(id, sc);
  const src = _schSrc(id);
  // For each kind, pick 2 most-identifying fields (mirrors PREV choices).
  if (src.kind === 'csch') return [s.hi || s.bar || '#C0392B', s.lo || s.warm || '#5B7A99'];
  if (src.kind === 'tsch') {
    const a = s.hi, b = s.line;
    return [_rgbToHex(a), b];
  }
  // SCH: try common primary fields in order of preference.
  const picks = ['p', 'ring', 'bar', 'flow', 'metro', 'served', 'p', 'hi', 'site', 'lo'];
  const altPicks = ['s', 'fill', 'spoke', 'arrow', 'edu', 'fair', 'mid', 'lo', 'stroke', 'border'];
  let c1 = null, c2 = null;
  for (const k of picks) { if (s[k]) { c1 = s[k]; break; } }
  for (const k of altPicks) { if (s[k]) { c2 = s[k]; break; } }
  if (!c1) c1 = '#C0392B';
  if (!c2) c2 = '#888';
  return [c1, c2];
}
function _rgbToHex(rgb) {
  if (typeof rgb === 'string') return rgb;
  if (Array.isArray(rgb)) {
    return '#' + rgb.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
  }
  return '#888';
}

/* ── Color Editor modal ── */
let cmState = { id: null, sc: 0 };
function openColorEditor(id) {
  cmState.id = id || null;
  cmState.sc = id ? (cardSch[id] || 0) : 0;
  const modal = document.getElementById('colorModal');
  modal.style.display = 'flex';
  _cmRenderAnalysisList();
  _cmRenderSchemeDots();
  _cmRenderFields();
  _cmApplyI18n();
}
function closeColorEditor() {
  document.getElementById('colorModal').style.display = 'none';
}
function _cmRenderAnalysisList() {
  const wrap = document.getElementById('cmAnalysisList');
  if (!wrap) return;
  if (cmState.id) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'grid';
  wrap.innerHTML = ANALYSES.map(a => {
    const name = lang === 'zh' ? (a.name_zh || a.name) : a.name;
    const on = cmState.id === a.id;
    return '<button onclick="cmSelectAnalysis(\'' + a.id + '\')" style="text-align:left;padding:9px 11px;font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:12px;background:' + (on ? 'var(--accent)' : 'var(--s2)') + ';color:' + (on ? '#fff' : 'var(--tx)') + ';border:1px solid var(--ln);border-radius:7px;cursor:pointer">'
      + '<div style="font-weight:600">' + name + '</div>'
      + '<div style="font-size:10px;color:' + (on ? 'rgba(255,255,255,.7)' : 'var(--t3)') + ';margin-top:3px;letter-spacing:.05em">' + a.tag + '</div></button>';
  }).join('');
}
function cmSelectAnalysis(id) {
  cmState.id = id;
  cmState.sc = cardSch[id] || 0;
  _cmRenderAnalysisList();
  _cmRenderSchemeDots();
  _cmRenderFields();
  _cmApplyI18n();
}
function _cmRenderSchemeDots() {
  const row = document.getElementById('cmSchemeRow');
  const dots = document.getElementById('cmSchemeDots');
  if (!row || !dots) return;
  if (!cmState.id) { row.style.display = 'none'; return; }
  row.style.display = 'block';
  const id = cmState.id;
  const src = _schSrc(id);
  const n = src.kind === 'csch' ? CSCH.length : src.kind === 'tsch' ? TSCH.length : (SCH[src.key] || []).length;
  dots.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const pair = _schemePrevPair(id, i);
    const isOn = i === cmState.sc;
    const isCust = isSchemeCustom(id, i);
    const dot = document.createElement('div');
    dot.style.cssText = 'width:48px;height:24px;border-radius:5px;cursor:pointer;border:2px solid ' + (isOn ? 'var(--tx)' : 'transparent') + ';background:linear-gradient(135deg,' + pair[0] + ' 50%,' + pair[1] + ' 50%);position:relative';
    dot.title = (lang === 'zh' ? '方案 ' : 'Scheme ') + (i + 1) + (isCust ? (lang === 'zh' ? '（已自定义）' : ' (customized)') : '');
    dot.onclick = (function (idx) { return function () { cmState.sc = idx; _cmRenderSchemeDots(); _cmRenderFields(); }; })(i);
    if (isCust) {
      const badge = document.createElement('div');
      badge.style.cssText = 'position:absolute;top:-4px;right:-4px;width:10px;height:10px;background:var(--accent);border-radius:50%;border:1px solid var(--sf)';
      dot.appendChild(badge);
    }
    dots.appendChild(dot);
  }
}
function _cmRenderFields() {
  const wrap = document.getElementById('cmFields');
  const footer = document.getElementById('cmFooter');
  const title = document.getElementById('cmTitle');
  const sub = document.getElementById('cmSub');
  if (!wrap || !footer) return;
  if (!cmState.id) {
    wrap.style.display = 'none';
    footer.style.display = 'none';
    if (title) title.textContent = (lang === 'zh' ? '配色编辑器' : 'COLOR EDITOR');
    if (sub) sub.textContent = (lang === 'zh' ? '请选择要编辑的分析图' : 'Pick an analysis to edit its colors');
    return;
  }
  const id = cmState.id;
  const sc = cmState.sc;
  const a = ANALYSES.filter(x => x.id === id)[0] || {};
  if (title) title.textContent = (lang === 'zh' ? (a.name_zh || a.name) : a.name) + ' · ' + (lang === 'zh' ? '方案 ' : 'SCHEME ') + (sc + 1);
  if (sub) sub.textContent = (lang === 'zh' ? '调整下方颜色，分析图实时更新' : 'Adjust colors — diagram updates live');
  const s = getScheme(id, sc);
  const isCust = isSchemeCustom(id, sc);
  wrap.style.display = 'flex';
  wrap.style.flexDirection = 'column';
  wrap.style.gap = '10px';
  footer.style.display = 'flex';
  const resetBtn = footer.querySelector('button');
  if (resetBtn) resetBtn.style.display = isCust ? 'block' : 'none';
  wrap.innerHTML = Object.keys(s).map(field => {
    const val = s[field];
    let hex;
    if (Array.isArray(val)) hex = _rgbToHex(val);
    else if (typeof val === 'string' && val.startsWith('#')) hex = val.length === 7 ? val : '#888';
    else if (typeof val === 'string' && val.startsWith('rgb')) hex = '#888'; // rgba() — show grey swatch, not editable as native color
    else hex = '#888';
    const isEditable = (typeof val === 'string' && val.startsWith('#')) || Array.isArray(val);
    const swatch = isEditable
      ? '<input type="color" value="' + hex + '" oninput="applyCustomColor(\'' + id + '\',' + sc + ',\'' + field + '\',this.value)" style="width:42px;height:32px;border:1px solid var(--ln);border-radius:6px;padding:0;cursor:pointer;background:none" />'
      : '<div style="width:42px;height:32px;border:1px solid var(--ln);border-radius:6px;background:' + val + ';display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--t3)">—</div>';
    return '<div style="display:flex;align-items:center;gap:12px;padding:9px 12px;background:var(--s2);border-radius:8px">'
      + swatch
      + '<div style="flex:1">'
      + '<div style="font-family:\'Space Mono\',monospace;font-size:12px;color:var(--tx);font-weight:700">' + field + '</div>'
      + '<div style="font-family:\'Space Mono\',monospace;font-size:11px;color:var(--t3)">' + (typeof val === 'string' ? val : 'rgb(' + val.join(',') + ')') + '</div>'
      + '</div></div>';
  }).join('');
}
function resetCurrentScheme() {
  if (!cmState.id) return;
  resetScheme(cmState.id, cmState.sc);
  _cmRenderSchemeDots();
  _cmRenderFields();
  toast(lang === 'zh' ? '已恢复此方案默认配色' : 'SCHEME RESET TO DEFAULT');
}
function _cmApplyI18n() {
  // re-translate any data-i18n inside the color modal
  const els = document.querySelectorAll('#colorModal [data-i18n]');
  els.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (window.I18N && I18N[key]) el.textContent = lang === 'zh' ? (I18N[key].zh || I18N[key].en) : I18N[key].en;
  });
}

/* ════════════════════  CLIMATE (Open-Meteo Archive API · 10-year normal)  ════════════════════ */
let climD = null, climKey = '';
const CLIM_IDS = ['climtemp', 'climprecip', 'climover', 'climday', 'climsolar'];
async function fetchClimate() {
  if (sLat == null || sLng == null) return null;
  const key = sLat.toFixed(3) + ',' + sLng.toFixed(3);
  if (climD && climKey === key) return climD;
  const url = 'https://archive-api.open-meteo.com/v1/archive?latitude=' + sLat.toFixed(4) + '&longitude=' + sLng.toFixed(4)
    + '&start_date=2014-01-01&end_date=2023-12-31'
    + '&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,shortwave_radiation_sum,daylight_duration,sunshine_duration'
    + '&timezone=auto';
  try {
    const r = await fetch(url);
    const j = await r.json();
    if (!j || !j.daily) return null;
    climD = aggClimate(j.daily); climKey = key; return climD;
  } catch (e) { return null; }
}
function aggClimate(dly) {
  const time = dly.time || [], N = time.length;
  const mTx = Array.from({ length: 12 }, () => []), mTn = Array.from({ length: 12 }, () => []), mRad = Array.from({ length: 12 }, () => []), mDay = Array.from({ length: 12 }, () => []), mSun = Array.from({ length: 12 }, () => []);
  const prYM = {};
  for (let i = 0; i < N; i++) {
    const d = time[i]; if (!d) continue;
    const m = +d.slice(5, 7) - 1, y = d.slice(0, 4);
    const tx = dly.temperature_2m_max && dly.temperature_2m_max[i], tn = dly.temperature_2m_min && dly.temperature_2m_min[i],
      pr = dly.precipitation_sum && dly.precipitation_sum[i], rad = dly.shortwave_radiation_sum && dly.shortwave_radiation_sum[i],
      day = dly.daylight_duration && dly.daylight_duration[i], sun = dly.sunshine_duration && dly.sunshine_duration[i];
    if (tx != null) mTx[m].push(tx); if (tn != null) mTn[m].push(tn); if (rad != null) mRad[m].push(rad);
    if (day != null) mDay[m].push(day); if (sun != null) mSun[m].push(sun);
    if (pr != null) { const k = m + '_' + y; prYM[k] = (prYM[k] || 0) + pr; }
  }
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
  const prM = Array.from({ length: 12 }, () => []); Object.keys(prYM).forEach(k => { prM[+k.split('_')[0]].push(prYM[k]); });
  return {
    tmax: mTx.map(avg), tmin: mTn.map(avg), precip: prM.map(avg),
    rad: mRad.map(avg), daylight: mDay.map(a => avg(a) / 3600), sunshine: mSun.map(a => avg(a) / 3600)
  };
}
// shared chart frame (240×268 to match the other diagram cards)
const CMON = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const CX0 = 30, CX1 = 222, CY0 = 64, CY1 = 228;
function _cx(m) { return CX0 + (m + 0.5) / 12 * (CX1 - CX0); }
function climWrap(title, sub, inner, P, bare) {
  P = P || CSCH[0];
  const axis = bare ? '' : ('<line x1="' + CX0 + '" y1="' + CY1 + '" x2="' + CX1 + '" y2="' + CY1 + '" stroke="' + P.ax + '" stroke-width="1"/>'
    + CMON.map((l, m) => '<text x="' + _cx(m).toFixed(1) + '" y="' + (CY1 + 12) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="7" fill="' + P.mon + '">' + l + '</text>').join(''));
  return '<svg viewBox="0 0 240 268" xmlns="http://www.w3.org/2000/svg" width="240" height="268">'
    + '<rect width="240" height="268" fill="' + P.bg + '"/>'
    + '<text x="20" y="28" font-family="Space Grotesk,sans-serif" font-size="12.5" font-weight="700" fill="' + P.ink + '">' + title + '</text>'
    + '<text x="20" y="41" font-family="Space Mono,monospace" font-size="6.5" letter-spacing=".14em" fill="' + P.sub + '">' + sub + '</text>'
    + axis + inner + '</svg>';
}
function _noClim(P) { P = P || CSCH[0]; return climWrap('Climate', 'open-meteo · loading', '<text x="120" y="150" text-anchor="middle" font-family="Space Mono,monospace" font-size="8" fill="' + P.sub + '">CLIMATE DATA UNAVAILABLE</text>', P); }
function _gridY(vals, P, fmt) {
  let mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals);
  if (mn === mx) { mx = mn + 1; } const pad = (mx - mn) * 0.12; mn -= pad; mx += pad;
  const yv = v => CY1 - (v - mn) / (mx - mn) * (CY1 - CY0);
  let g = ''; for (let i = 0; i <= 3; i++) { const v = mn + (mx - mn) * i / 3, y = yv(v); g += '<line x1="' + CX0 + '" y1="' + y.toFixed(1) + '" x2="' + CX1 + '" y2="' + y.toFixed(1) + '" stroke="' + P.grid + '" stroke-width="1"/>' + '<text x="' + (CX0 - 4) + '" y="' + (y + 2.5).toFixed(1) + '" text-anchor="end" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.sub + '">' + (fmt ? fmt(v) : Math.round(v)) + '</text>'; }
  return { min: mn, max: mx, yv, grid: g };
}
function _path(pts) { return 'M' + pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join('L'); }
function _uid() { return 'g' + Math.random().toString(36).slice(2, 8); }
function _polar(cx, cy, r, deg) { const a = (deg - 90) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
function _smooth(pts) {
  if (pts.length < 2) return _path(pts);
  let d = 'M' + pts[0][0].toFixed(1) + ',' + pts[0][1].toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += 'C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1);
  }
  return d;
}
function _smoothClosed(pts) {
  const n = pts.length; let d = 'M' + pts[0][0].toFixed(1) + ',' + pts[0][1].toFixed(1);
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += 'C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1);
  }
  return d + 'Z';
}
// 1 ── TEMPERATURE · thermal gradient ridge
function climTemp(sc) {
  const P = getScheme('climtemp', sc || 0), c = climD; if (!c) return _noClim(P);
  const A = _gridY(c.tmin.concat(c.tmax), P);
  const top = c.tmax.map((v, m) => [_cx(m), A.yv(v)]), bot = c.tmin.map((v, m) => [_cx(m), A.yv(v)]);
  const gid = _uid();
  let s = '<defs><linearGradient id="' + gid + '" x1="0" y1="' + CY0 + '" x2="0" y2="' + CY1 + '" gradientUnits="userSpaceOnUse">'
    + '<stop offset="0" stop-color="' + P.hi + '" stop-opacity="0.50"/>'
    + '<stop offset="0.55" stop-color="' + P.hi + '" stop-opacity="0.10"/>'
    + '<stop offset="1" stop-color="' + P.lo + '" stop-opacity="0.22"/></linearGradient></defs>';
  s += A.grid;
  const topP = _smooth(top), botRev = bot.slice().reverse(), botP = _smooth(botRev);
  const band = topP + 'L' + botRev[0][0].toFixed(1) + ',' + botRev[0][1].toFixed(1) + botP.replace(/^M[\d.\-]+,[\d.\-]+/, '') + 'Z';
  s += '<path d="' + band + '" fill="url(#' + gid + ')"/>';
  s += '<path d="' + _smooth(bot) + '" fill="none" stroke="' + P.lo + '" stroke-width="3" stroke-opacity="0.13" stroke-linecap="round"/>';
  s += '<path d="' + _smooth(bot) + '" fill="none" stroke="' + P.lo + '" stroke-width="1.7" stroke-linecap="round"/>';
  s += '<path d="' + _smooth(top) + '" fill="none" stroke="' + P.hi + '" stroke-width="3.4" stroke-opacity="0.15" stroke-linecap="round"/>';
  s += '<path d="' + _smooth(top) + '" fill="none" stroke="' + P.hi + '" stroke-width="1.9" stroke-linecap="round"/>';
  let hm = 0, cm = 0; c.tmax.forEach((v, m) => { if (v > c.tmax[hm]) hm = m; }); c.tmin.forEach((v, m) => { if (v < c.tmin[cm]) cm = m; });
  const hp = top[hm], cp = bot[cm];
  s += '<circle cx="' + hp[0].toFixed(1) + '" cy="' + hp[1].toFixed(1) + '" r="4" fill="' + P.hi + '" fill-opacity="0.18"/><circle cx="' + hp[0].toFixed(1) + '" cy="' + hp[1].toFixed(1) + '" r="2" fill="' + P.hi + '"/>';
  s += '<text x="' + hp[0].toFixed(1) + '" y="' + (hp[1] - 6).toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.hi + '">' + Math.round(c.tmax[hm]) + '°</text>';
  s += '<circle cx="' + cp[0].toFixed(1) + '" cy="' + cp[1].toFixed(1) + '" r="4" fill="' + P.lo + '" fill-opacity="0.18"/><circle cx="' + cp[0].toFixed(1) + '" cy="' + cp[1].toFixed(1) + '" r="2" fill="' + P.lo + '"/>';
  s += '<text x="' + cp[0].toFixed(1) + '" y="' + (cp[1] + 10).toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.lo + '">' + Math.round(c.tmin[cm]) + '°</text>';
  return climWrap('Temperature', 'MEAN MONTHLY HIGH / LOW · °C', s, P);
}
// 2 ── PRECIPITATION · water gradient wave
function climPrecip(sc) {
  const P = getScheme('climprecip', sc || 0), c = climD; if (!c) return _noClim(P);
  const A = _gridY([0].concat(c.precip), P);
  const pts = c.precip.map((v, m) => [_cx(m), A.yv(v)]);
  const gid = _uid();
  let s = '<defs><linearGradient id="' + gid + '" x1="0" y1="' + CY0 + '" x2="0" y2="' + CY1 + '" gradientUnits="userSpaceOnUse">'
    + '<stop offset="0" stop-color="' + P.bar + '" stop-opacity="0.50"/>'
    + '<stop offset="1" stop-color="' + P.bar + '" stop-opacity="0.03"/></linearGradient></defs>';
  s += A.grid;
  const area = _smooth(pts) + 'L' + _cx(11).toFixed(1) + ',' + CY1 + 'L' + _cx(0).toFixed(1) + ',' + CY1 + 'Z';
  s += '<path d="' + area + '" fill="url(#' + gid + ')"/>';
  s += '<path d="' + _smooth(pts) + '" fill="none" stroke="' + P.bar + '" stroke-width="3" stroke-opacity="0.13" stroke-linecap="round"/>';
  s += '<path d="' + _smooth(pts) + '" fill="none" stroke="' + P.bar + '" stroke-width="1.8" stroke-linecap="round"/>';
  pts.forEach(p => s += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="1.7" fill="' + P.bg + '" stroke="' + P.bar + '" stroke-width="1.1"/>');
  let wm = 0; c.precip.forEach((v, m) => { if (v > c.precip[wm]) wm = m; });
  s += '<text x="' + pts[wm][0].toFixed(1) + '" y="' + (pts[wm][1] - 6).toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.bar + '">' + Math.round(c.precip[wm]) + '</text>';
  return climWrap('Precipitation', 'MEAN MONTHLY RAINFALL · mm', s, P);
}
// 3 ── ANNUAL CLIMATE · climograph (pill columns + glow temp curve)
function climOver(sc) {
  const P = getScheme('climover', sc || 0), c = climD; if (!c) return _noClim(P);
  const tA = _gridY(c.tmin.concat(c.tmax), P);
  let pmx = Math.max.apply(null, c.precip); if (pmx <= 0) pmx = 1; pmx *= 1.2;
  const pyv = v => CY1 - (v / pmx) * (CY1 - CY0); const bw = (CX1 - CX0) / 12 * 0.40;
  const gid = _uid();
  let s = '<defs><linearGradient id="' + gid + '" x1="0" y1="' + CY0 + '" x2="0" y2="' + CY1 + '" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + P.bar + '" stop-opacity="0.85"/><stop offset="1" stop-color="' + P.bar + '" stop-opacity="0.28"/></linearGradient></defs>';
  s += tA.grid;
  c.precip.forEach((v, m) => { const x = _cx(m), y = pyv(v), h = Math.max(bw, (CY1 - y)); s += '<rect x="' + (x - bw / 2).toFixed(1) + '" y="' + (CY1 - h).toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + h.toFixed(1) + '" fill="url(#' + gid + ')" rx="' + (bw / 2).toFixed(1) + '"/>'; });
  const tline = c.tmax.map((v, m) => [_cx(m), tA.yv((c.tmax[m] + c.tmin[m]) / 2)]);
  s += '<path d="' + _smooth(tline) + '" fill="none" stroke="' + P.hi + '" stroke-width="3.4" stroke-opacity="0.16" stroke-linecap="round"/>';
  s += '<path d="' + _smooth(tline) + '" fill="none" stroke="' + P.hi + '" stroke-width="1.9" stroke-linecap="round"/>';
  tline.forEach(p => s += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="1.6" fill="' + P.hi + '"/>');
  s += '<text x="' + CX1 + '" y="56" text-anchor="end" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.hi + '">TEMP °C</text>';
  s += '<text x="' + (CX1 - 46) + '" y="56" text-anchor="end" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.bar + '">RAIN mm</text>';
  return climWrap('Annual Climate', 'TEMPERATURE + RAINFALL · 10-YR NORMAL', s, P);
}
// 4 ── DAYLIGHT · polar petal ring
function climDay(sc) {
  const P = getScheme('climday', sc || 0), c = climD; if (!c) return _noClim(P);
  const cx = 120, cy = 158, r0 = 22, r1 = 80;
  const mn = Math.min.apply(null, c.daylight), mx = Math.max.apply(null, c.daylight), rng = (mx - mn) || 1;
  const rr = v => r0 + (v - mn) / rng * (r1 - r0);
  const gid = _uid();
  let s = '<defs><radialGradient id="' + gid + '" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="' + P.warm + '" stop-opacity="0.04"/><stop offset="0.65" stop-color="' + P.warm + '" stop-opacity="0.28"/><stop offset="1" stop-color="' + P.warm + '" stop-opacity="0.52"/></radialGradient></defs>';
  for (let k = 0; k <= 2; k++) { s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r0 + (r1 - r0) * k / 2).toFixed(1) + '" fill="none" stroke="' + P.grid + '" stroke-width="0.7"/>'; }
  for (let m = 0; m < 12; m++) { const a = _polar(cx, cy, r1, m * 30), b = _polar(cx, cy, r0, m * 30); s += '<line x1="' + b[0].toFixed(1) + '" y1="' + b[1].toFixed(1) + '" x2="' + a[0].toFixed(1) + '" y2="' + a[1].toFixed(1) + '" stroke="' + P.grid + '" stroke-width="0.5"/>'; const lp = _polar(cx, cy, r1 + 10, m * 30); s += '<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 2.2).toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.mon + '">' + CMON[m] + '</text>'; }
  const pts = []; for (let m = 0; m < 12; m++) pts.push(_polar(cx, cy, rr(c.daylight[m]), m * 30));
  s += '<path d="' + _smoothClosed(pts) + '" fill="url(#' + gid + ')" stroke="' + P.warm + '" stroke-width="1.7" stroke-linejoin="round"/>';
  pts.forEach(p => s += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="1.5" fill="' + P.warm + '"/>');
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r0 * 0.42).toFixed(1) + '" fill="' + P.warm + '"/>';
  let lm = 0; c.daylight.forEach((v, m) => { if (v > c.daylight[lm]) lm = m; });
  s += '<text x="120" y="' + (cy + r1 + 22) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.sub + '">PEAK ' + c.daylight[lm].toFixed(1) + 'h · ' + CMON[lm] + '</text>';
  return climWrap('Daylight Hours', 'MEAN DAYLIGHT · POLAR YEAR', s, P, true);
}
// 5 ── SOLAR RADIATION · radial sunburst
function climSolar(sc) {
  const P = getScheme('climsolar', sc || 0), c = climD; if (!c) return _noClim(P);
  const cx = 120, cy = 158, r0 = 15, r1 = 82;
  const mx = Math.max.apply(null, c.rad) || 1;
  const rr = v => r0 + (v / mx) * (r1 - r0);
  for (var k = 1, rings = ''; k <= 2; k++) { rings += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r0 + (r1 - r0) * k / 2).toFixed(1) + '" fill="none" stroke="' + P.grid + '" stroke-width="0.6"/>'; }
  let s = rings;
  for (let m = 0; m < 12; m++) {
    const ang = m * 30, r = rr(c.rad[m]), half = 11;
    const a0 = _polar(cx, cy, r0, ang - half), a1 = _polar(cx, cy, r, ang - half * 0.45), a2 = _polar(cx, cy, r, ang + half * 0.45), a3 = _polar(cx, cy, r0, ang + half);
    const op = (0.42 + 0.5 * (c.rad[m] / mx)).toFixed(2);
    s += '<path d="M' + a0[0].toFixed(1) + ',' + a0[1].toFixed(1) + 'L' + a1[0].toFixed(1) + ',' + a1[1].toFixed(1) + 'L' + a2[0].toFixed(1) + ',' + a2[1].toFixed(1) + 'L' + a3[0].toFixed(1) + ',' + a3[1].toFixed(1) + 'Z" fill="' + P.warm + '" fill-opacity="' + op + '"/>';
    const lp = _polar(cx, cy, r1 + 9, ang); s += '<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 2.2).toFixed(1) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.mon + '">' + CMON[m] + '</text>';
  }
  s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r0 * 0.66).toFixed(1) + '" fill="' + P.warm + '"/>';
  let pm = 0; c.rad.forEach((v, m) => { if (v > c.rad[pm]) pm = m; });
  s += '<text x="120" y="' + (cy + r1 + 20) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="6.5" fill="' + P.sub + '">PEAK ' + c.rad[pm].toFixed(1) + ' MJ · ' + CMON[pm] + '</text>';
  return climWrap('Solar Radiation', 'SHORTWAVE · MJ/m² · SUNBURST', s, P, true);
}

/* ════════════════════  TERRAIN / DEM (Open-Meteo Elevation · Copernicus GLO-90 · global incl. China)  ════════════════════ */
let terrD = null, terrKey = '';
const TERR_IDS = ['contour', 'aspect'];
const TGRID = 11;                                  // 11×11 = 121 sample points
async function fetchTerrain() {
  if (sLat == null || sLng == null) return null;
  const key = sLat.toFixed(3) + ',' + sLng.toFixed(3) + '@' + curR;
  if (terrD && terrKey === key) return terrD;
  const b = getBounds(), n = TGRID, lats = [], lngs = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    lats.push((b.mxLat - i / (n - 1) * (b.mxLat - b.mnLat)).toFixed(5));
    lngs.push((b.mnLng + j / (n - 1) * (b.mxLng - b.mnLng)).toFixed(5));
  }
  // Elevation API Accepts ≤100 coords/request → split into batches
  const elev = [];
  try {
    for (let off = 0; off < lats.length; off += 100) {
      const la = lats.slice(off, off + 100).join(','), lo = lngs.slice(off, off + 100).join(',');
      const r = await fetch('https://api.open-meteo.com/v1/elevation?latitude=' + la + '&longitude=' + lo);
      const j = await r.json();
      if (!j || !j.elevation) return null;
      for (const v of j.elevation) elev.push(v);
    }
  } catch (e) { return null; }
  if (elev.length < n * n) return null;
  let mn = Infinity, mx = -Infinity; elev.forEach(v => { if (v < mn) mn = v; if (v > mx) mx = v; });
  terrD = { n, elev, min: mn, max: mx, b, spanM: 2 * curR }; terrKey = key; return terrD;
}
// screen coords of grid node (i=row/north→south, j=col/west→east)
function _tsx(j, n) { return PAD + j / (n - 1) * (W - 2 * PAD); }
function _tsy(i, n) { return PAD + i / (n - 1) * (H - 2 * PAD); }
function _eAt(t, i, j) { return t.elev[i * t.n + j]; }
function _noTerr() { return wrap('<rect width="' + W + '" height="' + (H) + '" fill="#FBFAF7"/><text x="' + (W / 2) + '" y="' + (H / 2) + '" text-anchor="middle" font-family="Space Mono,monospace" font-size="8" fill="#C8C6C0">ELEVATION DATA UNAVAILABLE</text>', null, 'DEM'); }
// marching-squares contour segments for one level
function _contourSegs(t, level) {
  const n = t.n; let segs = [];
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < n - 1; j++) {
    const e = [_eAt(t, i, j), _eAt(t, i, j + 1), _eAt(t, i + 1, j + 1), _eAt(t, i + 1, j)]; // TL,TR,BR,BL (cw)
    const p = [[_tsx(j, n), _tsy(i, n)], [_tsx(j + 1, n), _tsy(i, n)], [_tsx(j + 1, n), _tsy(i + 1, n)], [_tsx(j, n), _tsy(i + 1, n)]];
    const cr = [];
    for (let k = 0; k < 4; k++) { const a = e[k], bb = e[(k + 1) % 4]; if ((a - level) * (bb - level) < 0) { const tt = (level - a) / (bb - a); cr.push([p[k][0] + tt * (p[(k + 1) % 4][0] - p[k][0]), p[k][1] + tt * (p[(k + 1) % 4][1] - p[k][1])]); } }
    if (cr.length === 2) segs.push(cr);
    else if (cr.length === 4) { segs.push([cr[0], cr[1]]); segs.push([cr[2], cr[3]]); }
  }
  return segs;
}
function _eBil(t, fi, fj) {
  const n = t.n; let i0 = Math.floor(fi), j0 = Math.floor(fj);
  i0 = Math.max(0, Math.min(n - 2, i0)); j0 = Math.max(0, Math.min(n - 2, j0));
  const di = fi - i0, dj = fj - j0;
  const e00 = _eAt(t, i0, j0), e01 = _eAt(t, i0, j0 + 1), e10 = _eAt(t, i0 + 1, j0), e11 = _eAt(t, i0 + 1, j0 + 1);
  return e00 * (1 - di) * (1 - dj) + e01 * (1 - di) * dj + e10 * di * (1 - dj) + e11 * di * dj;
}
function _gradBil(t, fi, fj) {
  const h = 0.5, eL = _eBil(t, fi, fj - h), eR = _eBil(t, fi, fj + h), eU = _eBil(t, fi - h, fj), eD = _eBil(t, fi + h, fj);
  return { gi: (eD - eU) / (2 * h), gj: (eR - eL) / (2 * h) };
}
function drawContour(sc) {
  const P = getScheme('contour', sc || 0), t = terrD; if (!t) return _noTerr();
  const n = t.n, rng = (t.max - t.min) || 1;
  const lerp = (a, b, u) => a + (b - a) * u, hx = (r, g, b) => 'rgb(' + Math.round(Math.max(0, Math.min(255, r))) + ',' + Math.round(Math.max(0, Math.min(255, g))) + ',' + Math.round(Math.max(0, Math.min(255, b))) + ')';
  const FM = 24;
  let gmax = 1e-6;
  for (let i = 0; i < FM; i++) for (let j = 0; j < FM; j++) { const G = _gradBil(t, i * (n - 1) / (FM - 1), j * (n - 1) / (FM - 1)); const g = Math.hypot(G.gi, G.gj); if (g > gmax) gmax = g; }
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + P.bg + '"/>';
  for (let i = 0; i < FM - 1; i++) for (let j = 0; j < FM - 1; j++) {
    const fi = (i + 0.5) * (n - 1) / (FM - 1), fj = (j + 0.5) * (n - 1) / (FM - 1);
    const ev = _eBil(t, fi, fj), u = (ev - t.min) / rng;
    const c0 = [lerp(P.lo[0], P.hi[0], u), lerp(P.lo[1], P.hi[1], u), lerp(P.lo[2], P.hi[2], u)];
    const G = _gradBil(t, fi, fj), sh = Math.max(-1, Math.min(1, (-(G.gi + G.gj)) / gmax / Math.SQRT2)), k = 1 + 0.32 * sh;
    inner += '<rect x="' + _tsx(j, FM).toFixed(1) + '" y="' + _tsy(i, FM).toFixed(1) + '" width="' + (_tsx(j + 1, FM) - _tsx(j, FM) + 0.6).toFixed(1) + '" height="' + (_tsy(i + 1, FM) - _tsy(i, FM) + 0.6).toFixed(1) + '" fill="' + hx(c0[0] * k, c0[1] * k, c0[2] * k) + '"/>';
  }
  // smooth contour lines from a bilinear-upsampled field
  const M = 31, fe = []; for (let i = 0; i < M; i++) for (let j = 0; j < M; j++) fe.push(_eBil(t, i * (n - 1) / (M - 1), j * (n - 1) / (M - 1)));
  const tf = { n: M, elev: fe };
  const NL = 9;
  for (let l = 1; l < NL; l++) {
    const level = t.min + rng * l / NL; const segs = _contourSegs(tf, level); const idx = (l % 3 === 0);
    let d = ''; segs.forEach(sg => { d += 'M' + sg[0][0].toFixed(1) + ',' + sg[0][1].toFixed(1) + 'L' + sg[1][0].toFixed(1) + ',' + sg[1][1].toFixed(1); });
    if (d) inner += '<path d="' + d + '" fill="none" stroke="' + (idx ? P.idx : P.line) + '" stroke-width="' + (idx ? 1.2 : 0.65) + '" stroke-opacity="' + (idx ? 0.95 : 0.62) + '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  const vg = _uid();
  inner += '<defs><radialGradient id="' + vg + '" cx="0.5" cy="0.5" r="0.62"><stop offset="0.58" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.13"/></radialGradient></defs><rect width="' + W + '" height="' + H + '" fill="url(#' + vg + ')"/>';
  const note = 'Δ' + Math.round(t.max - t.min) + 'm · ' + Math.round(t.min) + '–' + Math.round(t.max) + 'm';
  return wrap(inner, [{ c: P.line, w: 1, l: lang === 'zh' ? '等高线' : 'CONTOUR' }, { c: P.idx, w: 1.2, l: lang === 'zh' ? '计曲线' : 'INDEX' }], note);
}
function _slopeDeg(t, i, j) {
  const n = t.n, cell = t.spanM / (n - 1);
  const e00 = _eAt(t, i, j), e01 = _eAt(t, i, j + 1), e10 = _eAt(t, i + 1, j), e11 = _eAt(t, i + 1, j + 1);
  const dzdx = ((e01 + e11) - (e00 + e10)) / 2 / cell, dzdy = ((e10 + e11) - (e00 + e01)) / 2 / cell;
  return { deg: Math.atan(Math.hypot(dzdx, dzdy)) * 180 / Math.PI, dx: dzdx, dy: dzdy };
}
function drawAspect(sc) {
  const P = getScheme('aspect', sc || 0), t = terrD; if (!t) return _noTerr();
  const n = t.n; let inner = '<rect width="' + W + '" height="' + H + '" fill="' + P.bg + '"/>';
  const did = 'ah' + Math.random().toString(36).slice(2, 7);
  inner += '<defs><marker id="' + did + '" markerWidth="4.6" markerHeight="4.6" refX="3" refY="1.8" orient="auto"><path d="M0,0 L3.6,1.8 L0,3.6 Z" fill="' + P.flow + '"/></marker></defs>';
  const S = 6;
  for (let a = 0; a < S; a++) for (let b = 0; b < S; b++) {
    let ci = 0.5 + a * (n - 1) / S, cj = 0.5 + b * (n - 1) / S;
    const pts = [[_tsx(cj, n), _tsy(ci, n)]]; let acc = 0, steps = 0;
    for (let step = 0; step < 18; step++) {
      const G = _gradBil(t, ci, cj); let di = -G.gi, dj = -G.gj; const m = Math.hypot(di, dj); if (m < 1e-7) break;
      di /= m; dj /= m; acc += m; steps++;
      ci += di * 0.36; cj += dj * 0.36;
      if (ci < 0.15 || ci > n - 1.15 || cj < 0.15 || cj > n - 1.15) { pts.push([_tsx(cj, n), _tsy(ci, n)]); break; }
      pts.push([_tsx(cj, n), _tsy(ci, n)]);
    }
    if (pts.length < 3 || steps < 2) continue;
    const avg = acc / steps;
    const sw = (0.7 + Math.min(1.8, avg * 9)).toFixed(2), op = (0.40 + Math.min(0.5, avg * 6)).toFixed(2);
    inner += '<path d="' + _smooth(pts) + '" fill="none" stroke="' + P.flow + '" stroke-width="' + sw + '" stroke-opacity="' + op + '" stroke-linecap="round" marker-end="url(#' + did + ')"/>';
  }
  return wrap(inner, [{ c: P.flow, w: 1, l: lang === 'zh' ? '汇水流线' : 'FLOW STREAMLINE' }], lang === 'zh' ? '汇水' : 'DRAINAGE');
}

/* ──── LOCATION / 区位 (site within its country) ──── */
let geoWorld = null, geoState = 'idle';   // idle | loading | ready | error
function ensureGeo() {
  if (geoState === 'ready' || geoState === 'loading') return;
  geoState = 'loading';
  const urls = ['https://cdn.jsdelivr.net/gh/johan/world.geo.json@master/countries.geo.json',
    'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'];
  (function tryUrl(i) {
    if (i >= urls.length) { geoState = 'error'; refreshLocationCard(); return; }
    fetch(urls[i]).then(r => { if (!r.ok) throw 0; return r.json(); })
      .then(j => { geoWorld = j; geoState = 'ready'; refreshLocationCard(); })
      .catch(() => tryUrl(i + 1));
  })(0);
}
function refreshLocationCard() {
  const c = document.getElementById('card_location'); if (!c) return;
  const b = c.querySelector('.cbody'); if (!b) return;
  const s = render('location', (typeof cardSch !== 'undefined' && cardSch.location) || 0); if (s) b.innerHTML = s;
}
function ptInRing(ring, x, y) { let inside = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1]; if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / ((yj - yi) || 1e-12) + xi)) inside = !inside; } return inside; }
function featRings(f) { const g = f.geometry, out = []; if (!g) return out; if (g.type === 'Polygon') out.push(g.coordinates); else if (g.type === 'MultiPolygon') g.coordinates.forEach(p => out.push(p)); return out; }
function ptInFeat(f, x, y) { for (const poly of featRings(f)) if (poly[0] && ptInRing(poly[0], x, y)) return true; return false; }
function featBBox(f) { let mnx = 180, mxx = -180, mny = 90, mxy = -90; for (const poly of featRings(f)) for (const p of poly[0]) { if (p[0] < mnx) mnx = p[0]; if (p[0] > mxx) mxx = p[0]; if (p[1] < mny) mny = p[1]; if (p[1] > mxy) mxy = p[1]; } return { mnx, mxx, mny, mxy }; }
function simpRing(ring, step) { if (step <= 1 || ring.length < 8) return ring; const r = []; for (let i = 0; i < ring.length; i += step) r.push(ring[i]); r.push(ring[ring.length - 1]); return r; }
function featPath(f, proj, step) { let d = ''; for (const poly of featRings(f)) { for (let ri = 0; ri < poly.length; ri++) { const ring = simpRing(poly[ri], step); for (let i = 0; i < ring.length; i++) { const xy = proj(ring[i][0], ring[i][1]); d += (i ? 'L' : 'M') + xy[0].toFixed(1) + ',' + xy[1].toFixed(1); } d += 'Z'; } } return d; }

function drawLocation(sc) {
  const s = getScheme('location', sc || 0);
  const CW = 240, CH = 240, CPAD = 8;
  const isRect = cardShape === 'rect' || cardShape === 'square';
  const rxry = (cardShape === 'rect') ? ' rx="18" ry="18"' : '';
  const outerBorder = isRect
    ? '<rect x="' + CPAD + '" y="' + CPAD + '" width="' + (CW - CPAD * 2) + '" height="' + (CH - CPAD * 2) + '"' + rxry + ' fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>'
    : '<circle cx="' + (CW / 2) + '" cy="' + (CH / 2) + '" r="' + (CW / 2 - CPAD + 4) + '" fill="none" stroke="#D8D6D0" stroke-width=".7" stroke-dasharray="3,3"/>';
  const uid = 'loc' + Math.random().toString(36).slice(2, 8);
  const clipShape = isRect
    ? '<rect x="' + CPAD + '" y="' + CPAD + '" width="' + (CW - CPAD * 2) + '" height="' + (CH - CPAD * 2) + '"' + rxry + '/>'
    : '<circle cx="' + (CW / 2) + '" cy="' + (CH / 2) + '" r="' + (CW / 2 - CPAD + 4) + '"/>';
  const head = '<svg viewBox="0 0 ' + CW + ' ' + (CH + 28) + '" xmlns="http://www.w3.org/2000/svg" width="' + CW + '" height="' + (CH + 28) + '">';

  ensureGeo();
  if (geoState !== 'ready') {
    const msg = geoState === 'error' ? (lang === 'zh' ? '区位图离线' : 'MAP OFFLINE') : (lang === 'zh' ? '加载地图…' : 'LOADING');
    return head + '<rect width="' + CW + '" height="' + CH + '" fill="white"/>' + outerBorder +
      '<text x="' + (CW / 2) + '" y="' + (CH / 2) + '" text-anchor="middle" font-size="7" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + msg + '</text></svg>';
  }

  // which country contains the site
  let country = null;
  for (const f of geoWorld.features) { if (ptInFeat(f, sLng, sLat)) { country = f; break; } }
  if (!country) { let best = 1e9; for (const f of geoWorld.features) { const bb = featBBox(f); const dd = ((bb.mnx + bb.mxx) / 2 - sLng) ** 2 + ((bb.mny + bb.mxy) / 2 - sLat) ** 2; if (dd < best) { best = dd; country = f; } } }
  const cName = (country && country.properties && country.properties.name) || '—';

  // main view: fit focus country bbox + margin (aspect-correct)
  const bb = featBBox(country);
  const mx = (bb.mxx - bb.mnx) * 0.14 + 0.4, my = (bb.mxy - bb.mny) * 0.14 + 0.4;
  const view = { mnLng: bb.mnx - mx, mxLng: bb.mxx + mx, mnLat: bb.mny - my, mxLat: bb.mxy + my };
  const x0 = CPAD + 10, y0 = CPAD + 22, bw = CW - (CPAD + 10) * 2, bh = CH - (CPAD + 22) - CPAD - 8;
  const cosL = Math.cos((view.mnLat + view.mxLat) / 2 * Math.PI / 180) || 1;
  const gw = (view.mxLng - view.mnLng) * cosL, gh = (view.mxLat - view.mnLat);
  const sca = Math.min(bw / gw, bh / gh), offX = x0 + (bw - gw * sca) / 2, offY = y0 + (bh - gh * sca) / 2;
  const proj = (lng, lat) => [offX + (lng - view.mnLng) * cosL * sca, offY + (view.mxLat - lat) * sca];

  let neighbors = '';
  for (const f of geoWorld.features) { if (f === country) continue; const fb = featBBox(f);
    if (fb.mxx < view.mnLng || fb.mnx > view.mxLng || fb.mxy < view.mnLat || fb.mny > view.mxLat) continue;
    neighbors += '<path d="' + featPath(f, proj, 4) + '" fill="' + s.faint + '" stroke="#FFFFFF" stroke-width=".4"/>'; }
  const focusPath = '<path d="' + featPath(country, proj, 1) + '" fill="' + s.fill + '" stroke="' + s.stroke + '" stroke-width=".9"/>';

  // site marker — radar target
  const sp = proj(sLng, sLat), sx = sp[0].toFixed(1), sy = sp[1].toFixed(1);
  let ticks = ''; for (let a = 0; a < 360; a += 15) { const rad = a * Math.PI / 180; ticks += '<line x1="' + (sp[0] + Math.cos(rad) * 10).toFixed(1) + '" y1="' + (sp[1] + Math.sin(rad) * 10).toFixed(1) + '" x2="' + (sp[0] + Math.cos(rad) * 13.5).toFixed(1) + '" y2="' + (sp[1] + Math.sin(rad) * 13.5).toFixed(1) + '" stroke="' + s.ring + '" stroke-width=".5" opacity=".7"/>'; }
  const marker = '<g>' +
    '<circle cx="' + sx + '" cy="' + sy + '" r="13.5" fill="none" stroke="' + s.ring + '" stroke-width=".6" stroke-dasharray="2,2" opacity=".8"/>' +
    '<circle cx="' + sx + '" cy="' + sy + '" r="8" fill="none" stroke="' + s.ring + '" stroke-width="1"/>' + ticks +
    '<line x1="' + sx + '" y1="' + (sp[1] - 14).toFixed(1) + '" x2="' + sx + '" y2="' + (sp[1] + 14).toFixed(1) + '" stroke="' + s.ring + '" stroke-width=".5" opacity=".5"/>' +
    '<line x1="' + (sp[0] - 14).toFixed(1) + '" y1="' + sy + '" x2="' + (sp[0] + 14).toFixed(1) + '" y2="' + sy + '" stroke="' + s.ring + '" stroke-width=".5" opacity=".5"/>' +
    '<circle cx="' + sx + '" cy="' + sy + '" r="2.4" fill="' + s.ring + '"/></g>';

  // mini world locator (bottom-left)
  const ww = 52, wh = 28, wx = CPAD + 6, wy = CH - wh - CPAD - 2;
  const wproj = (lng, lat) => [wx + (lng + 180) / 360 * ww, wy + (90 - lat) / 180 * wh];
  let mini = ''; for (const f of geoWorld.features) { mini += '<path d="' + featPath(f, wproj, 6) + '" fill="' + (f === country ? s.ring : '#D9D6D0') + '" stroke="none"/>'; }
  const miniBox = '<g opacity=".92"><rect x="' + wx + '" y="' + wy + '" width="' + ww + '" height="' + wh + '" fill="#F4F2EE" stroke="#E0DDD8" stroke-width=".5"/>' + mini + '</g>';

  let svg = head;
  svg += '<defs><clipPath id="' + uid + '">' + clipShape + '</clipPath></defs>';
  svg += '<rect width="' + CW + '" height="' + CH + '" fill="white"/>';
  svg += '<g clip-path="url(#' + uid + ')">' + neighbors + focusPath + marker + miniBox + '</g>';
  svg += '<rect x="0" y="0" width="' + CW + '" height="24" fill="white" opacity=".82"/>';
  svg += '<text x="' + (CW / 2) + '" y="16" text-anchor="middle" font-size="8.5" fill="' + s.label + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700" letter-spacing=".05em">' + cName.toUpperCase() + '</text>';
  svg += outerBorder;
  svg += '<text x="' + (CW / 2) + '" y="' + (CH + 20) + '" text-anchor="middle" font-size="5.5" fill="' + s.sub + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + sLat.toFixed(4) + 'N · ' + sLng.toFixed(4) + 'E · ' + (lang === 'zh' ? '场地位置' : 'SITE LOCATION') + '</text>';
  svg += '</svg>';
  return svg;
}

/* ──── ORIENTATION ROSE / 街道朝向 (street-bearing polar histogram) ──── */
function drawOrientRose(sc) {
  const s = getScheme('orientrose', sc);
  const b = getBounds();
  const cx = W / 2, cy = H / 2, cr = W / 2 - PAD - 9;
  const NB = 36, bins = new Array(NB).fill(0);
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry || el.geometry.length < 2) return;
    for (let i = 1; i < el.geometry.length; i++) {
      const a = el.geometry[i - 1], c = el.geometry[i];
      const dy = c.lat - a.lat, dx = (c.lon - a.lon) * Math.cos(a.lat * Math.PI / 180);
      const len = Math.hypot(dx, dy); if (len < 1e-12) continue;
      let brg = Math.atan2(dx, dy) * 180 / Math.PI; if (brg < 0) brg += 360;
      const bi = Math.floor(brg / 10) % NB;
      bins[bi] += len; bins[(bi + 18) % NB] += len;
    }
  });
  const mx = Math.max.apply(null, bins) || 1e-9;
  const sum = bins.reduce((a, c) => a + c, 0) || 1;
  const defs = '<defs><radialGradient id="rg' + sc + '" cx="50%" cy="50%" r="50%">'
    + '<stop offset="0%" stop-color="' + s.bar + '" stop-opacity=".35"/>'
    + '<stop offset="100%" stop-color="' + s.bar + '" stop-opacity=".95"/></radialGradient></defs>';
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  [0.25, 0.5, 0.75, 1].forEach(f => { inner += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (cr * f).toFixed(1) + '" fill="none" stroke="' + s.ring + '" stroke-width=".5"/>'; });
  for (let d = 0; d < 360; d += 45) { const a = (d - 90) * Math.PI / 180; inner += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + Math.cos(a) * cr).toFixed(1) + '" y2="' + (cy + Math.sin(a) * cr).toFixed(1) + '" stroke="' + s.spoke + '" stroke-width=".4"/>'; }
  // wedges
  for (let i = 0; i < NB; i++) {
    const r = Math.sqrt(bins[i] / mx) * cr; if (r < 0.6) continue;
    const a0 = (i * 10 - 90) * Math.PI / 180, a1 = ((i * 10 + 10) - 90) * Math.PI / 180;
    const x0 = (cx + Math.cos(a0) * r).toFixed(2), y0 = (cy + Math.sin(a0) * r).toFixed(2);
    const x1 = (cx + Math.cos(a1) * r).toFixed(2), y1 = (cy + Math.sin(a1) * r).toFixed(2);
    inner += '<path d="M' + cx + ',' + cy + ' L' + x0 + ',' + y0 + ' A' + r.toFixed(2) + ',' + r.toFixed(2) + ' 0 0 1 ' + x1 + ',' + y1 + ' Z" fill="url(#rg' + sc + ')" stroke="' + s.bg + '" stroke-width=".35"/>';
  }
  inner += '<circle cx="' + cx + '" cy="' + cy + '" r="1.6" fill="' + s.bar + '"/>';
  [['N', 0], ['E', 90], ['S', 180], ['W', 270]].forEach(function (p) {
    const a = (p[1] - 90) * Math.PI / 180, lx = cx + Math.cos(a) * (cr + 6), ly = cy + Math.sin(a) * (cr + 6);
    inner += '<text x="' + lx.toFixed(1) + '" y="' + (ly + 2.4).toFixed(1) + '" text-anchor="middle" font-size="7.5" fill="' + s.label + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">' + p[0] + '</text>';
  });
  let ent = 0; bins.forEach(function (v) { if (v > 0) { const p = v / sum; ent -= p * Math.log(p); } });
  const order = Math.max(0, Math.min(99, Math.round((1 - ent / Math.log(NB)) * 100)));
  return wrap(defs + inner, [{ c: s.bar, w: 1, l: lang === 'zh' ? '街道长度' : 'STREET LENGTH' }], (lang === 'zh' ? '有序度' : 'ORDER') + ' ' + order + '%', { noScale: true, noNorth: true });
}

/* ──── SERVICE TERRITORIES / 设施势力范围 (voronoi catchment & gaps) ──── */
function drawVoronoi(data, sc) {
  const s = getScheme('voronoi', sc);
  const b = getBounds();
  const cats = [
    { l: 'TRANSIT', f: function (t) { return t.highway === 'bus_stop' || ['station', 'tram_stop', 'subway_entrance', 'halt'].indexOf(t.railway) >= 0 || ['station', 'stop_position'].indexOf(t.public_transport) >= 0; } },
    { l: 'SCHOOL', f: function (t) { return ['school', 'university', 'college', 'kindergarten'].indexOf(t.amenity) >= 0; } },
    { l: 'FOOD', f: function (t) { return ['supermarket', 'convenience', 'bakery', 'greengrocer', 'butcher'].indexOf(t.shop) >= 0 || t.amenity === 'marketplace'; } },
    { l: 'SERVICE', f: function (t) { return !!t.amenity || !!t.shop; } }
  ];
  let pts = [], label = '';
  for (let ci = 0; ci < cats.length; ci++) {
    const arr = []; (data.elements || []).forEach(function (el) { if (el.type === 'node' && el.tags && cats[ci].f(el.tags)) { const p = proj(el.lat, el.lon, b); if (p[0] >= PAD - 4 && p[0] <= W - PAD + 4 && p[1] >= PAD - 4 && p[1] <= H - PAD + 4) arr.push(p); } });
    if (arr.length >= 5) { pts = arr; label = cats[ci].l; break; }
  }
  let inner = '<rect width="' + W + '" height="' + H + '" fill="' + s.bg + '"/>';
  if (pts.length < 3) {
    inner += '<text x="' + (W / 2) + '" y="' + (H / 2) + '" text-anchor="middle" font-size="8" fill="#B8B6B0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + (lang === 'zh' ? '无设施数据' : 'NO SERVICE DATA') + '</text>';
    return wrap(inner, [], (lang === 'zh' ? '势力圈·0' : 'TERRITORIES·0'));
  }
  if (pts.length > 80) { const out = [], st = pts.length / 80; for (let i = 0; i < pts.length; i += st) out.push(pts[Math.floor(i)]); pts = out; }
  const N = 88, step = (W - PAD * 2) / N;
  const idx = new Int16Array(N * N);
  const area = new Array(pts.length).fill(0);
  for (let gy = 0; gy < N; gy++) for (let gx = 0; gx < N; gx++) {
    const x = PAD + gx * step + step / 2, y = PAD + gy * step + step / 2;
    let bi = 0, bd = 1e18;
    for (let k = 0; k < pts.length; k++) { const ddx = pts[k][0] - x, ddy = pts[k][1] - y, d = ddx * ddx + ddy * ddy; if (d < bd) { bd = d; bi = k; } }
    idx[gy * N + gx] = bi; area[bi]++;
  }
  const maxA = Math.max.apply(null, area) || 1;
  function hx(a, bb, t) { a = a.slice(1); bb = bb.slice(1); const r = Math.round(parseInt(a.slice(0, 2), 16) + (parseInt(bb.slice(0, 2), 16) - parseInt(a.slice(0, 2), 16)) * t), g = Math.round(parseInt(a.slice(2, 4), 16) + (parseInt(bb.slice(2, 4), 16) - parseInt(a.slice(2, 4), 16)) * t), bl = Math.round(parseInt(a.slice(4, 6), 16) + (parseInt(bb.slice(4, 6), 16) - parseInt(a.slice(4, 6), 16)) * t); return '#' + [r, g, bl].map(function (v) { return ('0' + v.toString(16)).slice(-2); }).join(''); }
  function ramp(t) { t = Math.pow(Math.max(0, Math.min(1, t)), 0.72); return t < 0.5 ? hx(s.served, s.fair, t * 2) : hx(s.fair, s.gap, (t - 0.5) * 2); }
  const tcol = area.map(function (a) { return ramp(a / maxA); });
  // RLE fills per row (keeps SVG small)
  for (let gy = 0; gy < N; gy++) {
    let run = 0;
    for (let gx = 1; gx <= N; gx++) {
      if (gx < N && idx[gy * N + gx] === idx[gy * N + run]) continue;
      const k = idx[gy * N + run];
      const x = (PAD + run * step).toFixed(2), y = (PAD + gy * step).toFixed(2), w = ((gx - run) * step + 0.4).toFixed(2);
      inner += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (step + 0.4).toFixed(2) + '" fill="' + tcol[k] + '" opacity=".9"/>';
      run = gx;
    }
  }
  // crisp territory borders (where neighbor differs)
  let bd2 = '';
  for (let gy = 0; gy < N; gy++) for (let gx = 0; gx < N; gx++) {
    const cur = idx[gy * N + gx];
    if (gx < N - 1 && idx[gy * N + gx + 1] !== cur) { const x = (PAD + (gx + 1) * step).toFixed(2); bd2 += 'M' + x + ',' + (PAD + gy * step).toFixed(2) + 'v' + step.toFixed(2); }
    if (gy < N - 1 && idx[(gy + 1) * N + gx] !== cur) { const y = (PAD + (gy + 1) * step).toFixed(2); bd2 += 'M' + (PAD + gx * step).toFixed(2) + ',' + y + 'h' + step.toFixed(2); }
  }
  inner += '<path d="' + bd2 + '" stroke="' + s.border + '" stroke-width=".6" fill="none" opacity=".85"/>';
  // service points
  pts.forEach(function (p) { inner += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="1.7" fill="' + s.pt + '" stroke="' + s.bg + '" stroke-width=".5"/>'; });
  // site marker
  const sp = proj(sLat, sLng, b);
  inner += '<circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="4.8" fill="none" stroke="' + s.site + '" stroke-width="1.5"/><circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="2" fill="' + s.site + '"/>';
  // gap metric: share of area in the under-served half
  let gapCells = 0, totCells = N * N; for (let k = 0; k < area.length; k++) { if (area[k] / maxA > 0.5) gapCells += area[k]; }
  return wrap(inner, [{ type: 'rect', c: s.served, l: label + ' ' + (lang === 'zh' ? '覆盖' : 'OK') }, { type: 'rect', c: s.fair, l: lang === 'zh' ? '一般' : 'FAIR' }, { type: 'rect', c: s.gap, l: lang === 'zh' ? '盲区' : 'GAP' }, { type: 'rect', c: s.pt, l: lang === 'zh' ? '站点' : 'STOP' }], label + '·' + pts.length);
}

/* ──── VECTOR BASEMAP — clean self-drawn map from OSM data (no tiles, works in CN) ──── */
function _lum(hex) { hex = (hex || '').replace('#', ''); if (hex.length < 6) return 1; return (0.299 * parseInt(hex.slice(0, 2), 16) + 0.587 * parseInt(hex.slice(2, 4), 16) + 0.114 * parseInt(hex.slice(4, 6), 16)) / 255; }
function vectorBase(s) {
  const b = getBounds();
  const dark = _lum(s.base) < 0.34;
  const P = dark
    ? { bg: s.base, water: '#1B3A4A', green: '#1E3A2A', road: '#3A4A56', roadc: '#222E38', bld: '#28323C', bldE: '#1A222A' }
    : { bg: s.base, water: '#CBE0EC', green: '#DDE8CE', road: '#FFFFFF', roadc: '#E4E0D8', bld: '#E9E5DD', bldE: '#D8D3C9' };
  let svg = '<rect width="' + W + '" height="' + H + '" fill="' + P.bg + '"/>';
  // green + water polygons
  (lastD.gw && lastD.gw.elements || []).forEach(function (el) { if (!el.geometry || !el.tags) return; if (isRealGreen(el.tags)) { const p = wpts(el, b); if (p) svg += '<polygon points="' + p + '" fill="' + P.green + '"/>'; } });
  (lastD.gw && lastD.gw.elements || []).forEach(function (el) { if (!el.geometry || !el.tags) return; if (isRealWater(el.tags)) { const p = wpts(el, b); if (p) svg += '<polygon points="' + p + '" fill="' + P.water + '"/>'; } });
  // roads: casing then fill, width by class
  function rw(h) { if (['motorway', 'trunk'].indexOf(h) >= 0) return 2.2; if (h === 'primary') return 1.7; if (h === 'secondary') return 1.3; if (h === 'tertiary') return 1.0; if (['footway', 'path', 'pedestrian', 'cycleway', 'steps'].indexOf(h) >= 0) return 0.4; return 0.65; }
  const RD = lastD.roads && lastD.roads.elements || [];
  RD.forEach(function (el) { if (!el.geometry) return; const h = el.tags && el.tags.highway || ''; if (!h) return; const p = wpts(el, b); if (p) svg += '<polyline points="' + p + '" fill="none" stroke="' + P.roadc + '" stroke-width="' + (rw(h) + 0.8).toFixed(1) + '" stroke-linecap="round" stroke-linejoin="round"/>'; });
  RD.forEach(function (el) { if (!el.geometry) return; const h = el.tags && el.tags.highway || ''; if (!h) return; const p = wpts(el, b); if (p) svg += '<polyline points="' + p + '" fill="none" stroke="' + P.road + '" stroke-width="' + rw(h).toFixed(1) + '" stroke-linecap="round" stroke-linejoin="round"/>'; });
  // building footprints (faint)
  (lastD.buildings && lastD.buildings.elements || []).forEach(function (el) { if (!el.geometry || !el.tags || !el.tags.building) return; const p = wpts(el, b); if (p) svg += '<polygon points="' + p + '" fill="' + P.bld + '" stroke="' + P.bldE + '" stroke-width=".25"/>'; });
  return svg;
}

/* ──── ANNOTATED MAP / 标注导览 (nearest key facilities on real basemap) ──── */
function drawSiteMap(data, sc) {
  const s = getScheme('sitemap', sc);
  const b = getBounds();
  let inner = vectorBase(s);
  const sp = proj(sLat, sLng, b);
  function mD(lat, lon) { const dlat = (lat - sLat) * 111320, dlon = (lon - sLng) * 111320 * Math.cos(sLat * Math.PI / 180); return Math.sqrt(dlat * dlat + dlon * dlon); }
  const cats = [
    { c: s.metro, g: 'M', l: lang === 'zh' ? '地铁' : 'METRO', f: function (t) { return t.railway === 'station' || t.railway === 'subway_entrance' || t.station === 'subway' || t.public_transport === 'station'; } },
    { c: s.edu, g: 'E', l: lang === 'zh' ? '学校' : 'SCHOOL', f: function (t) { return ['school', 'university', 'college', 'kindergarten'].indexOf(t.amenity) >= 0; } },
    { c: s.health, g: 'H', l: lang === 'zh' ? '医院' : 'HEALTH', f: function (t) { return ['hospital', 'clinic', 'pharmacy', 'doctors'].indexOf(t.amenity) >= 0; } },
    { c: s.shop, g: 'S', l: lang === 'zh' ? '购物' : 'SHOP', f: function (t) { return ['supermarket', 'convenience', 'mall'].indexOf(t.shop) >= 0 || t.amenity === 'marketplace'; } },
    { c: s.green, g: 'P', l: lang === 'zh' ? '公园' : 'PARK', f: function (t) { return ['park', 'garden'].indexOf(t.leisure) >= 0; } }
  ];
  const picks = [];
  cats.forEach(function (cat) {
    let best = null, bd = 1e9;
    (data.elements || []).forEach(function (el) {
      if (el.type !== 'node' || !el.tags || !cat.f(el.tags)) return;
      const d = mD(el.lat, el.lon); if (d < bd) { bd = d; best = el; }
    });
    if (best) picks.push({ cat: cat, el: best, d: bd });
  });
  picks.forEach(function (p) { const pj = proj(p.el.lat, p.el.lon, b); inner += '<line x1="' + sp[0] + '" y1="' + sp[1] + '" x2="' + pj[0].toFixed(1) + '" y2="' + pj[1].toFixed(1) + '" stroke="' + s.line + '" stroke-width="1" stroke-dasharray="3,2" opacity=".8"/>'; });
  picks.forEach(function (p) {
    const pj = proj(p.el.lat, p.el.lon, b), x = pj[0], y = pj[1];
    const txt = p.cat.l + ' ' + (p.d < 1000 ? Math.round(p.d) + 'm' : (p.d / 1000).toFixed(1) + 'km');
    const lw = txt.length * 4.0 + 7, ly = y - 11.5, lx = Math.max(2, Math.min(W - lw - 2, x - lw / 2));
    inner += '<rect x="' + lx.toFixed(1) + '" y="' + (ly - 7).toFixed(1) + '" width="' + lw.toFixed(1) + '" height="10.5" rx="2.5" fill="' + s.labelBg + '"/>';
    inner += '<text x="' + (lx + lw / 2).toFixed(1) + '" y="' + ly.toFixed(1) + '" text-anchor="middle" font-size="7" fill="' + s.label + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">' + txt + '</text>';
    inner += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="6.6" fill="' + p.cat.c + '" stroke="#fff" stroke-width="1.4"/>';
    inner += '<text x="' + x.toFixed(1) + '" y="' + (y + 3).toFixed(1) + '" text-anchor="middle" font-size="8.5" fill="#fff" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">' + p.cat.g + '</text>';
  });
  inner += '<circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="7" fill="' + s.site + '" stroke="#fff" stroke-width="1.8"/><circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="2.6" fill="#fff"/>';
  return wrap(inner, cats.map(function (c) { return { type: 'rect', c: c.c, l: c.l }; }), (lang === 'zh' ? '附近·' : 'NEARBY·') + picks.length);
}

/* ──── WIND FLOW / 风环境 (streamlines + flow chevrons + wind barb) ──── */
function drawWind(data, sc) {
  const s = getScheme('wind', sc);
  const b = getBounds();
  let inner = vectorBase(s);
  const cents = [];
  (data.elements || []).forEach(function (el) {
    if (!el.geometry || !el.tags || !el.tags.building) return;
    const pts = el.geometry.map(function (n) { return proj(n.lat, n.lon, b); });
    if (pts.length < 3) return;
    let mx = 0, my = 0; pts.forEach(function (p) { mx += p[0]; my += p[1]; }); mx /= pts.length; my /= pts.length; cents.push([mx, my]);
  });
  const windFrom = 225, ang = (windFrom + 180) * Math.PI / 180, fx = Math.sin(ang), fy = -Math.cos(ang);
  const perpx = -fy, perpy = fx, cx = W / 2, cy = H / 2;
  function chev(x, y, dx, dy, sz, col, op) { const a = Math.atan2(dy, dx); return '<path d="M' + (x - Math.cos(a - 0.5) * sz).toFixed(1) + ',' + (y - Math.sin(a - 0.5) * sz).toFixed(1) + ' L' + x.toFixed(1) + ',' + y.toFixed(1) + ' L' + (x - Math.cos(a + 0.5) * sz).toFixed(1) + ',' + (y - Math.sin(a + 0.5) * sz).toFixed(1) + '" fill="none" stroke="' + col + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="' + op + '"/>'; }
  const NS = 30, stepLen = 2.6, steps = 98;
  function clr(x, y) { let md = 1e9; for (let c = 0; c < cents.length; c++) { const dx = x - cents[c][0], dy = y - cents[c][1], d = dx * dx + dy * dy; if (d < md) md = d; } return Math.max(0, Math.min(1, Math.sqrt(md) / 22)); }
  for (let i = 0; i < NS; i++) {
    const t = (i / (NS - 1) - 0.5) * W * 2.0;
    let x = cx + perpx * t - fx * W * 0.95, y = cy + perpy * t - fy * W * 0.95, pvx = fx, pvy = fy;
    const pts = [[x, y]], dirs = [[fx, fy]];
    for (let stp = 0; stp < steps; stp++) {
      let rx = 0, ry = 0;
      for (let c = 0; c < cents.length; c++) { const dx = x - cents[c][0], dy = y - cents[c][1], d2 = dx * dx + dy * dy; if (d2 < 240) { const inv = 1 / (Math.sqrt(d2) + 4); rx += dx * inv; ry += dy * inv; } }
      const rm = Math.hypot(rx, ry); if (rm > 0.9) { rx = rx / rm * 0.9; ry = ry / rm * 0.9; }
      let vx = fx + rx * 0.5, vy = fy + ry * 0.5; vx = vx * 0.7 + pvx * 0.3; vy = vy * 0.7 + pvy * 0.3;
      const m = Math.hypot(vx, vy) || 1; vx /= m; vy /= m; pvx = vx; pvy = vy;
      x += vx * stepLen; y += vy * stepLen; pts.push([x, y]); dirs.push([vx, vy]);
    }
    const ptStr = pts.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    // soft flow glow underlay
    inner += '<polyline points="' + ptStr + '" fill="none" stroke="' + s.flow + '" stroke-width="2.8" opacity=".13" stroke-linecap="round"/>';
    // crisp streamline
    inner += '<polyline points="' + ptStr + '" fill="none" stroke="' + s.flow + '" stroke-width="1.05" opacity="' + (0.5 + (i % 3) * 0.05).toFixed(2) + '" stroke-linecap="round"/>';
    // flow chevrons sized/brightened by local wind speed (clearance)
    for (let k = 9; k < pts.length - 2; k += 10) { const spd = clr(pts[k][0], pts[k][1]); inner += chev(pts[k][0], pts[k][1], dirs[k][0], dirs[k][1], 2.4 + spd * 2.2, s.arrow, (0.5 + spd * 0.45).toFixed(2)); }
    // a bright gust dash at a fast open stretch
    const gk = Math.min(pts.length - 3, Math.round(steps * (0.35 + 0.3 * ((i * 0.37) % 1))));
    if (clr(pts[gk][0], pts[gk][1]) > 0.55) { inner += '<line x1="' + pts[gk][0].toFixed(1) + '" y1="' + pts[gk][1].toFixed(1) + '" x2="' + pts[gk + 2][0].toFixed(1) + '" y2="' + pts[gk + 2][1].toFixed(1) + '" stroke="' + s.flow + '" stroke-width="2" stroke-linecap="round" opacity=".9"/>'; }
    const e = pts.length - 1; inner += chev(pts[e][0], pts[e][1], dirs[e][0], dirs[e][1], 4.6, s.arrow, 1);
  }
  // wind barb (speed glyph)
  (function () {
    const bx = PAD + 8, by = H - PAD - 8, a = Math.atan2(fy, fx), L = 18;
    const ex = bx + Math.cos(a) * L, ey = by + Math.sin(a) * L;
    inner += '<line x1="' + bx.toFixed(1) + '" y1="' + by.toFixed(1) + '" x2="' + ex.toFixed(1) + '" y2="' + ey.toFixed(1) + '" stroke="' + s.arrow + '" stroke-width="1.7"/>';
    for (let f = 0; f < 2; f++) { const tt = 0.12 + f * 0.2, px = bx + Math.cos(a) * L * tt, py = by + Math.sin(a) * L * tt, fa = a - 1.05; inner += '<line x1="' + px.toFixed(1) + '" y1="' + py.toFixed(1) + '" x2="' + (px + Math.cos(fa) * 5).toFixed(1) + '" y2="' + (py + Math.sin(fa) * 5).toFixed(1) + '" stroke="' + s.arrow + '" stroke-width="1.7"/>'; }
  })();
  const sp = proj(sLat, sLng, b);
  inner += '<circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="4.6" fill="#fff" stroke="' + s.site + '" stroke-width="1.5"/><circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="1.9" fill="' + s.site + '"/>';
  return wrap(inner, [{ c: s.flow, w: 1.4, l: lang === 'zh' ? '风流' : 'WIND FLOW' }, { type: 'rect', c: s.bld, l: lang === 'zh' ? '建筑' : 'BLOCKS' }], lang === 'zh' ? '盛行 SW→NE' : 'PREVAILING SW→NE');
}

/* ──── BUILDING MASSING / 建筑体量 (height colour + drop-shadow over real map) ──── */
function drawMassing(data, sc) {
  const s = getScheme('massing', sc);
  const b = getBounds();
  let inner = vectorBase(s);
  function hx(a, bb, t) { a = a.slice(1); bb = bb.slice(1); function p(o) { return parseInt(a.slice(o, o + 2), 16); } function q(o) { return parseInt(bb.slice(o, o + 2), 16); } const r = Math.round(p(0) + (q(0) - p(0)) * t), g = Math.round(p(2) + (q(2) - p(2)) * t), bl = Math.round(p(4) + (q(4) - p(4)) * t); return '#' + [r, g, bl].map(function (v) { return ('0' + v.toString(16)).slice(-2); }).join(''); }
  function hcol(lv) { const t = Math.max(0, Math.min(1, (lv - 1) / 14)); return t < 0.5 ? hx(s.lo, s.mid, t * 2) : hx(s.mid, s.hi, (t - 0.5) * 2); }
  const polys = [];
  (data.elements || []).forEach(function (el) {
    if (!el.geometry || !el.tags || !el.tags.building) return;
    const pts = el.geometry.map(function (n) { return proj(n.lat, n.lon, b); });
    if (pts.length < 3) return;
    let lv = parseFloat(el.tags['building:levels'] || el.tags.levels || '');
    if (!(lv > 0)) { const ht = parseFloat(el.tags.height || el.tags['building:height'] || ''); lv = ht > 0 ? ht / 3 : 3; }
    let cyv = 0; pts.forEach(function (p) { cyv += p[1]; }); cyv /= pts.length;
    polys.push({ pts: pts, lv: lv, cy: cyv });
  });
  polys.sort(function (a, b) { return a.cy - b.cy; });
  let maxLv = 0;
  polys.forEach(function (p) {
    const off = Math.min(7, p.lv * 0.5);
    inner += '<polygon points="' + p.pts.map(function (q) { return (q[0] + off).toFixed(1) + ',' + (q[1] + off).toFixed(1); }).join(' ') + '" fill="' + s.shadow + '"/>';
    inner += '<polygon points="' + p.pts.map(function (q) { return q[0].toFixed(1) + ',' + q[1].toFixed(1); }).join(' ') + '" fill="' + hcol(p.lv) + '" stroke="' + s.edge + '" stroke-width=".3"/>';
    if (p.lv > maxLv) maxLv = p.lv;
  });
  const sp = proj(sLat, sLng, b);
  inner += '<circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="4.6" fill="#fff" stroke="' + s.site + '" stroke-width="1.5"/><circle cx="' + sp[0] + '" cy="' + sp[1] + '" r="1.9" fill="' + s.site + '"/>';
  return wrap(inner, [{ type: 'rect', c: s.lo, l: lang === 'zh' ? '低层' : 'LOW' }, { type: 'rect', c: s.mid, l: lang === 'zh' ? '中层' : 'MID' }, { type: 'rect', c: s.hi, l: lang === 'zh' ? '高层' : 'HIGH' }], (lang === 'zh' ? '最高 ' : 'MAX ') + Math.round(maxLv) + (lang === 'zh' ? '层' : 'F'));
}

function renderRaw(id, sc) {
  if (!sLat) return blank('NO SITE SELECTED');
  try {
    if (id === 'roads') return drawRoads(lastD.roads || { elements: [] }, sc);
    if (id === 'landuse') return drawLanduse(lastD.landuse || { elements: [] }, sc);
    if (id === 'gw') return drawGW(lastD.gw || { elements: [] }, sc);
    if (id === 'nodes') return drawNodes(lastD.pois || { elements: [] }, lastD.roads || { elements: [] }, sc);
    if (id === 'sun') return drawSun(sc);
    if (id === 'sat') return drawSat(sc);
    if (id === 'context') return drawContext(sc);
    if (id === 'fabric') return drawFabric(lastD.buildings || { elements: [] }, sc);
    if (id === 'orient') return drawOrient(sc);
    if (id === 'noise') return drawNoise(lastD.roads || { elements: [] }, sc);
    if (id === 'vitality') return drawVitality(lastD.pois || { elements: [] }, sc);
    if (id === 'transit') return drawTransit(lastD.transit || { elements: [] }, sc);
    if (id === 'access') return drawAccess(lastD.roads || { elements: [] }, sc);
    if (id === 'density') return drawDensity(lastD.buildings || { elements: [] }, sc);
    if (id === 'pedestrian') return drawPedestrian(lastD.roads || { elements: [] }, sc);
    if (id === 'poiheat') return drawPoiHeat(lastD.pois || { elements: [] }, sc);
    if (id === 'poitype') return drawPoiType(lastD.pois || { elements: [] }, sc);
    if (id === 'combined') return drawCombined(sc);
    if (id === 'climtemp') return climTemp(sc);
    if (id === 'climprecip') return climPrecip(sc);
    if (id === 'climover') return climOver(sc);
    if (id === 'climday') return climDay(sc);
    if (id === 'climsolar') return climSolar(sc);
    if (id === 'contour') return drawContour(sc);
    if (id === 'aspect') return drawAspect(sc);
    if (id === 'location') return drawLocation(sc);
    if (id === 'orientrose') return drawOrientRose(sc);
    if (id === 'voronoi') return drawVoronoi(lastD.pois || { elements: [] }, sc);
    if (id === 'sitemap') return drawSiteMap(lastD.pois || { elements: [] }, sc);
    if (id === 'wind') return drawWind(lastD.buildings || { elements: [] }, sc);
    if (id === 'massing') return drawMassing(lastD.buildings || { elements: [] }, sc);
  } catch (e) { console.warn(id, e); }
  return blank('RENDER ERROR');
}

/* ════════════════════════════════════════
   SIDEBAR LIST
════════════════════════════════════════ */
const PREV = {
  roads: [['#1A1917', '#C8C6C0'], ['#2C4A6E', '#BDD0E4'], ['#080808', '#E8E4DC']],
  landuse: [['#E8C4C4', '#9CC4E8'], ['#D44444', '#2266CC'], ['#FF6B6B', '#4ECDC4']],
  gw: [['#C8E0C4', '#C4D8E8'], ['#B8D4A8', '#A8C8DC'], ['#D4E0CC', '#CCD8E0']],
  nodes: [['#C0392B', '#E07820'], ['#2C4A6E', '#3A6040'], ['#3A3835', '#6B6860']],
  sun: [['#B45309', '#C8C6C0'], ['#1A56DB', '#BDD0E4'], ['#7A3028', '#C8B8B0']],
  sat: [['#A8A69F', '#6B6860'], ['#C8C6C0', '#A8A69F'], ['#8C8A82', '#5A5856']],
  context: [['#F4F2EE', '#C0392B'], ['#2C2A28', '#F0EEE8'], ['#EEF2F8', '#2C4A6E']],
  fabric: [['#1A1917', '#F8F7F5'], ['#2C2A28', '#FAFAF9'], ['#3A3835', '#F0EEE8']],
  orient: [['#1A1917', '#C0392B'], ['#2C4A6E', '#2C4A6E'], ['#3A3835', '#B45309']],
  noise: [['#C0392B', '#F5C842'], ['#8B0000', '#FFAA00'], ['#2C4A6E', '#A8C4DC']],
  vitality: [['#E07820', '#2266CC'], ['#FF6B35', '#4ECDC4'], ['#B45309', '#1A56DB']],
  transit: [['#4A7C59', '#C0392B'], ['#2C4A6E', '#C0392B'], ['#3A3835', '#C0392B']],
  access: [['#4ADE80', '#FB923C'], ['#60A5FA', '#C084FC'], ['#FCD34D', '#EF4444']],
  density: [['#FDB97D', '#C0392B'], ['#93C5FD', '#1D4ED8'], ['#A3E635', '#3F6212']],
  pedestrian: [['#2C4A6E', '#A8C4DC'], ['#1A1917', '#C8C6C0'], ['#B45309', '#F5E6D0']],
  poiheat: [['#F59E0B', '#DC2626'], ['#3B82F6', '#1D4ED8'], ['#E07820', '#FFD27A']],
  poitype: [['#C0392B', '#2266CC'], ['#B45309', '#1A56DB'], ['#7A1010', '#1E3A5F']],
  combined: [['#1A1917', '#8FC878'], ['#2C4A6E', '#A8C888'], ['#080808', '#B8C8A0']],
  location: [['#C0392B', '#ECDFDA'], ['#1A1917', '#E8E6E0'], ['#2C4A6E', '#DCE5EE'], ['#5CC8F0', '#16314A'], ['#9C3B26', '#E6D6BC'], ['#FF3B30', '#FFE0DC']],
  orientrose: [['#C0392B', '#FFFFFF'], ['#1A1917', '#FAFAF9'], ['#2C5E8A', '#F8FAFB'], ['#5CC8F0', '#0E1B2A'], ['#A8642A', '#F3E9D6'], ['#FF3B30', '#FFFFFF']],
  voronoi: [['#4F9D7F', '#C85A3C'], ['#5FB89A', '#DB6A4A'], ['#6CA6C2', '#C77052'], ['#3FB8C0', '#E0573A'], ['#7E9458', '#B05A34'], ['#1FB85A', '#FF3B30']],
  sitemap: [['#C0392B', '#EDECEA'], ['#2C4A6E', '#EEF0F4'], ['#A8642A', '#EFE9DD'], ['#5CC8F0', '#0E1B2A'], ['#9C3B26', '#EFE6D2'], ['#FF3B30', '#FFFFFF']],
  wind: [['#2C7DC0', '#EDECEA'], ['#3AA0A8', '#ECEEEA'], ['#7A8AA8', '#EEEEEC'], ['#5CC8F0', '#0E1B2A'], ['#6E96A0', '#EFE6D2'], ['#0A84FF', '#FFFFFF']],
  massing: [['#8A5A2A', '#D8D2C4'], ['#24527A', '#CFE0EA'], ['#8A5A30', '#E0DACE'], ['#7FE0F0', '#0E1B2A'], ['#6E5A2A', '#D8D0B0'], ['#0E6E3A', '#BFE8D0']],
  climtemp: [['#C0392B', '#5B7A99'], ['#374151', '#8A93A3'], ['#B45309', '#0E7490'], ['#E2603F', '#3E7CA8'], ['#B85C44', '#6E8E6A'], ['#8E4A6E', '#6A6A8E']],
  climprecip: [['#3E6B8C', '#A8C4DC'], ['#6B7280', '#C8CCD0'], ['#0E7490', '#A8D0D8'], ['#2E6E93', '#A8C8DC'], ['#5E8E72', '#BCD0C0'], ['#5E5E86', '#C4C0D4']],
  climover: [['#C0392B', '#3E6B8C'], ['#374151', '#6B7280'], ['#B45309', '#0E7490'], ['#E2603F', '#2E6E93'], ['#B85C44', '#5E8E72'], ['#8E4A6E', '#5E5E86']],
  climday: [['#D89A3A', '#F0D8A8'], ['#A98B6E', '#D8CCC0'], ['#CA8A04', '#EAD8A0'], ['#5AA6B8', '#C0E0E6'], ['#C49A52', '#E6D8B8'], ['#B07AA0', '#E0CCD8']],
  climsolar: [['#D89A3A', '#F0D8A8'], ['#A98B6E', '#D8CCC0'], ['#CA8A04', '#EAD8A0'], ['#5AA6B8', '#C0E0E6'], ['#C49A52', '#E6D8B8'], ['#B07AA0', '#E0CCD8']],
  contour: [['#A8C49A', '#6B4A2E'], ['#C0C4CC', '#46505C'], ['#9CC0D0', '#234C5E'], ['#A8C49A', '#3C4E34'], ['#D8B89A', '#6E3A22'], ['#C8C8C6', '#3A3A3C']],
  aspect: [['#3E6B8C', '#A8C4DC'], ['#46505C', '#C0C4CC'], ['#234C5E', '#A8C8D8'], ['#3C6E4E', '#BCD0C0'], ['#9A4A2E', '#D8B89A'], ['#3A3A3C', '#C8C8C6']],
};

function renderList() {
  document.getElementById('alist').innerHTML = ANALYSES.map(a => {
    const name = lang === 'zh' ? (a.name_zh || a.name) : a.name;
    const sub = lang === 'zh' ? (a.sub_zh || a.sub) : a.sub;
    return '<div class="ai ' + (a.on ? 'on' : '') + '" onclick="tog(\'' + a.id + '\')"><div class="ad"></div><div style="flex:1;min-width:0"><div class="an">' + name + '</div><div class="as">' + sub + '</div></div><div class="abg">' + a.tag + '</div></div>';
  }).join('');
}
function reRenderCards() {
  document.querySelectorAll('.card').forEach(card => {
    const id = card.id.replace('card_', '');
    const sc = cardSch[id] || 0;
    const body = card.querySelector('.cbody');
    if (body) { const s = render(id, sc); if (s) body.innerHTML = s; }
  });
}
function toggleScale(val) {
  globalShowScale = !!val;
  reRenderCards();
}
function toggleNorth(val) {
  globalShowNorth = !!val;
  reRenderCards();
}
function toggleLegendZh(val) {
  legendZh = !!val;
  reRenderCards();
}
function setShape(sh, el) {
  cardShape = sh;
  polyMode = false;
  document.getElementById('polyHint').style.display = 'none';
  document.querySelectorAll('#shpCircle,#shpRect,#shpSquare,#shpPoly').forEach(b => b.classList.remove('on'));
  if (el) el.classList.add('on');
  renderList();
  reRenderCards();
}
// ── Custom polygon site boundary ──
function startPolygon() {
  if (!sLat) { toast(t('ts_pickloc')); return; }
  polyMode = true; sitePolygon = [];
  document.querySelectorAll('#shpCircle,#shpRect,#shpPoly').forEach(b => b.classList.remove('on'));
  document.getElementById('shpPoly').classList.add('on');
  document.getElementById('polyHint').style.display = 'block';
  if (polyLayer) { map.removeLayer(polyLayer); polyLayer = null; }
  toast(t('ts_poly_hint'));
}
function addPolyPoint(lat, lng) {
  sitePolygon.push({ lat: lat, lng: lng });
  redrawPolyLayer();
  const tBox = document.getElementById('polyHintTxt');
  if (tBox) tBox.textContent = sitePolygon.length + ' ' + (lang === 'zh' ? '个点' : 'points') + ' · ' + (sitePolygon.length < 3 ? (lang === 'zh' ? '再加 ' + (3 - sitePolygon.length) + ' 个' : (3 - sitePolygon.length) + ' more points required') : (lang === 'zh' ? '可以点 DONE 完成' : 'can click DONE to finish'));
}
function redrawPolyLayer() {
  if (polyLayer) { map.removeLayer(polyLayer); polyLayer = null; }
  if (!sitePolygon.length) return;
  const latlngs = sitePolygon.map(p => [p.lat, p.lng]);
  polyLayer = L.polygon(latlngs, { color: '#C0392B', weight: 2, fillColor: '#C0392B', fillOpacity: .08, dashArray: '5,4' }).addTo(map);
  sitePolygon.forEach(p => L.circleMarker([p.lat, p.lng], { radius: 4, color: '#C0392B', fillColor: '#fff', fillOpacity: 1, weight: 2 }).addTo(polyLayer));
}
function finishPolygon() {
  if (sitePolygon.length < 3) { toast(t('ts_poly_need3')); return; }
  polyMode = false; cardShape = 'poly';
  // recenter site to polygon centroid + fit radius so diagrams frame the polygon
  let cLat = 0, cLng = 0; sitePolygon.forEach(p => { cLat += p.lat; cLng += p.lng; });
  cLat /= sitePolygon.length; cLng /= sitePolygon.length;
  let maxD = 0; sitePolygon.forEach(p => { const dy = (p.lat - cLat) * 111320, dx = (p.lng - cLng) * 111320 * Math.cos(cLat * Math.PI / 180); maxD = Math.max(maxD, Math.sqrt(dx * dx + dy * dy)); });
  sLat = cLat; sLng = cLng; curR = Math.max(200, Math.round(maxD * 1.15));
  const rs = document.getElementById('radius'); if (rs) { rs.value = Math.min(rs.max, curR); }
  const rv = document.getElementById('radVal'); if (rv) rv.textContent = curR + 'm';
  document.getElementById('polyHint').style.display = 'none';
  toast((lang === 'zh' ? '场地边界已设置 · ' : 'SITE BOUNDARY SET · ') + sitePolygon.length + (lang === 'zh' ? ' 个顶点 · 请重新生成' : ' POINTS · REGENERATE'));
}
function clearPolygon() {
  sitePolygon = []; polyMode = false;
  if (polyLayer) { map.removeLayer(polyLayer); polyLayer = null; }
  setShape('circle', document.getElementById('shpCircle'));
  toast(t('ts_poly_clear'));
}
function tog(id) { const a = ANALYSES.find(x => x.id === id); if (a) { a.on = !a.on; renderList(); } }
function selAll(v) { ANALYSES.forEach(a => a.on = !!v); renderList(); }

function schSwitch(id, sc, ev) {
  ev && ev.stopPropagation();
  cardSch[id] = sc;
  document.querySelectorAll('#card_' + id + ' .dot').forEach((d, i) => d.classList.toggle('on', i === sc));
  const body = document.querySelector('#card_' + id + ' .cbody');
  if (body) { const s = render(id, sc); if (s) body.innerHTML = s; }
}
// Export page format (fixed A4)
const expFormat = 'a4';
const EXP_PAGE = { a4: 'A4 portrait' };
// Rename a card (custom title persists for export)
function renameCard(id, txt) {
  const tVal = (txt || '').trim();
  const a = ANALYSES.find(x => x.id === id);
  const defName = lang === 'zh' ? (a.name_zh || a.name) : a.name;
  if (!tVal || (a && tVal === defName)) { delete cardName[id]; }
  else cardName[id] = tVal;
}
// Custom accent color — recolors site markers, primary roads & highlights across all diagrams
function setAccent(hex) {
  userAccent = hex; // null resets to default
  const pick = document.getElementById('accentPick'); if (pick && hex) pick.value = hex;
  // re-render visible cards
  document.querySelectorAll('.card').forEach(card => {
    const id = card.id.replace('card_', '');
    const body = card.querySelector('.cbody');
    if (body) { const s = render(id, cardSch[id] || 0); if (s) body.innerHTML = s; }
  });
  if (curOvStyle) drawMapOv(curOvStyle);
  toast(hex ? 'ACCENT · ' + hex.toUpperCase() : 'ACCENT RESET');
}
// Global color theme — sets every card to the same scheme index (0 warm / 1 cool / 2 mono)
function setTheme(idx) {
  [0, 1, 2].forEach(i => { const b = document.getElementById('thm' + i); if (b) b.classList.toggle('on', i === idx); });
  ANALYSES.forEach(a => { cardSch[a.id] = idx; });
  // re-render any visible cards
  document.querySelectorAll('.card').forEach(card => {
    const id = card.id.replace('card_', '');
    const body = card.querySelector('.cbody');
    if (body) { const s = render(id, idx); if (s) body.innerHTML = s; }
    card.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === idx));
  });
  if (curOvStyle) drawMapOv(curOvStyle);
}

/* ════════════════════════════════════════
   GENERATE
════════════════════════════════════════ */
async function generate() {
  let sel = ANALYSES.filter(a => a.on);
  if (!sel.length) { toast(t('ts_selone')); return; }
  if (!sLat) { toast(t('ts_pickloc')); return; }
  if (!checkDailyLimit()) return;
  document.querySelector('.gen').classList.remove('ready');
  loadProg(t('ts_locating'), 8);
  // Show placeholder cards immediately so user sees progress
  document.getElementById('emp').style.display = 'none';
  const grid = document.getElementById('rgrid');
  grid.style.display = 'grid';
  grid.innerHTML = sel.map((a, i) => {
    const name = lang === 'zh' ? (a.name_zh || a.name) : a.name;
    const loadingText = lang === 'zh' ? '载入中...' : 'LOADING...';
    const subText = lang === 'zh' ? '正在获取地图数据' : 'querying openstreetmap';
    return '<div class="card" id="card_' + a.id + '"><div class="ch"><span class="cn">' + String(i + 1).padStart(2, '0') + '</span><span class="ct">' + name + '</span><span class="ctag">' + a.tag + '</span></div><div class="cbody" style="height:266px;display:flex;align-items:center;justify-content:center"><div style="font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:9px;color:#C8C6C0;text-align:center">' + loadingText + '<br><span style="font-size:7px;display:block;margin-top:4px">' + subText + '</span></div></div></div>';
  }).join('');
  const D = {};
  const ids = new Set(sel.map(a => a.id));
  const needClim = sel.some(a => CLIM_IDS.indexOf(a.id) >= 0);
  const needTerr = sel.some(a => TERR_IDS.indexOf(a.id) >= 0);
  const b = bbox();
  // Single combined query — one request instead of 4, avoids rate limiting
  loadProg(t('ts_osm_query'), 32);
  const parts = [];
  const needRoads = ids.has('roads') || ids.has('nodes') || ids.has('noise') || true; // always for overlay
  const needLU = ids.has('landuse');
  const needGW = ids.has('gw') || true; // always for overlay
  const needContext = ids.has('context');
  const needFabric = ids.has('fabric') || true; // always for overlay
  const needNodes = ids.has('nodes') || ids.has('vitality') || ids.has('poiheat') || ids.has('poitype') || ids.has('voronoi') || ids.has('sitemap');
  const needTransit = ids.has('transit');
  if (needRoads) parts.push('way["highway"~"motorway|trunk|primary|secondary|tertiary|residential|pedestrian|footway|cycleway|path|service"](' + b + ');');
  if (needFabric || needContext) {
    parts.push('way["building"](' + b + ');');
    parts.push('relation["building"](' + b + ');');
  }
  if (needLU) {
    parts.push('way["building"](' + b + ');');
    parts.push('way["leisure"~"park|garden|pitch|playground"](' + b + ');');
    parts.push('way["shop"](' + b + ');');
    parts.push('way["amenity"~"school|university|hospital|clinic|library|theatre|cinema|police|fire_station|restaurant|cafe|fast_food|bank"](' + b + ');');
  }
  if (needGW) {
    parts.push('way["natural"~"wood|water|scrub"](' + b + ');');
    parts.push('way["waterway"](' + b + ');');
    parts.push('way["leisure"~"park|garden|nature_reserve"](' + b + ');');
    parts.push('way["landuse"~"forest|grass|meadow|recreation_ground"](' + b + ');');
    parts.push('relation["natural"="water"](' + b + ');');
  }
  if (needNodes) {
    parts.push('node["amenity"](' + b + ');');
    parts.push('node["shop"](' + b + ');');
    parts.push('node["public_transport"](' + b + ');');
    parts.push('node["railway"](' + b + ');');
    parts.push('node["highway"="bus_stop"](' + b + ');');
    parts.push('node["leisure"](' + b + ');');
    parts.push('node["tourism"](' + b + ');');
    parts.push('node["office"](' + b + ');');
  }
  if (needTransit) {
    parts.push('node["highway"="bus_stop"](' + b + ');');
    parts.push('node["railway"~"station|tram_stop|subway_entrance|halt"](' + b + ');');
    parts.push('node["public_transport"~"stop_position|station"](' + b + ');');
  }
  const combined = '[out:json][timeout:60];(' + parts.join('') + ');out geom;';
  const raw = await op(combined);
  // Split combined result by type/tags
  const allEls = raw.elements || [];
  // If nothing came back, OSM is busy/unreachable. If climate/terrain diagrams
  // are selected (non-OSM, work anywhere incl. China), keep going and render those.
  if (allEls.length === 0 && !needClim && !needTerr) {
    unload();
    document.querySelector('.gen').classList.add('ready');
    showBusyMsg();
    return;
  }
  const hwRe = /motorway|trunk|primary|secondary|tertiary|residential|pedestrian|footway|cycleway|path|service/;
  D.roads = {
    elements: allEls.filter(e => {
      const hw = e.tags && e.tags.highway;
      return hw && hwRe.test(hw);
    })
  };
  D.landuse = {
    elements: allEls.filter(e => {
      const t = e.tags || {};
      return t.building || t.shop || t.office ||
        t.leisure === 'park' || t.leisure === 'garden' || t.leisure === 'pitch' || t.leisure === 'playground' ||
        ['school', 'university', 'college', 'hospital', 'clinic', 'library', 'theatre', 'cinema',
          'police', 'fire_station', 'restaurant', 'cafe', 'fast_food', 'bank'].includes(t.amenity);
    })
  };
  D.gw = {
    elements: allEls.filter(e => {
      const t = e.tags || {};
      return t.natural === 'water' || t.natural === 'wood' || t.natural === 'scrub' ||
        t.waterway || t.landuse === 'forest' || t.landuse === 'grass' ||
        t.landuse === 'meadow' || t.landuse === 'recreation_ground' ||
        t.leisure === 'park' || t.leisure === 'garden' || t.leisure === 'nature_reserve';
    })
  };
  D.buildings = {
    elements: allEls.filter(e => {
      const t = e.tags || {};
      return e.geometry && t.building;
    })
  };
  D.context = {
    elements: allEls.filter(e => {
      const t = e.tags || {};
      return t.building; // all buildings including large radius
    })
  };
  D.transit = {
    elements: allEls.filter(e => {
      const t = e.tags || {};
      return e.type === 'node' && (t.highway === 'bus_stop' ||
        ['station', 'tram_stop', 'subway_entrance', 'halt'].includes(t.railway) ||
        ['stop_position', 'station'].includes(t.public_transport));
    })
  };
  D.pois = {
    elements: allEls.filter(e => e.type === 'node' && e.tags &&
      (e.tags.amenity || e.tags.shop || e.tags.public_transport ||
        e.tags.railway || e.tags.highway === 'bus_stop' ||
        e.tags.leisure || e.tags.tourism || e.tags.office))
  };
  const tasks = [];
  lastD = D; cardSch = {};
  if (needClim) { loadProg(t('ts_fetch_clim'), 62); await fetchClimate(); }
  if (needTerr) { loadProg(t('ts_fetch_terr'), 68); await fetchTerrain(); }
  loadProg(t('ts_drawing'), 72);
  await new Promise(r => setTimeout(r, 50));

  // Now update cards with real data
  loadProg(t('ts_composing'), 92);
  grid.innerHTML = sel.map((a, i) => {
    const sc = 0, svg = render(a.id, sc);
    const src = _schSrc(a.id);
    const nSchemes = src.kind === 'csch' ? CSCH.length : src.kind === 'tsch' ? TSCH.length : (SCH[src.key] || []).length;
    let dots = '';
    for (let si = 0; si < nSchemes; si++) {
      const pair = _schemePrevPair(a.id, si);
      const isCust = isSchemeCustom(a.id, si);
      dots += '<div class="dot' + (si === 0 ? ' on' : '') + '" style="background:linear-gradient(135deg,' + pair[0] + ' 50%,' + pair[1] + ' 50%);position:relative" onclick="schSwitch(\'' + a.id + '\',' + si + ',event)" title="' + (lang === 'zh' ? '方案 ' : 'Scheme ') + (si + 1) + (isCust ? (lang === 'zh' ? '（已自定义）' : ' (customized)') : '') + '">';
      if (isCust) dots += '<span style="position:absolute;top:-3px;right:-3px;width:7px;height:7px;background:var(--accent);border-radius:50%;border:1px solid var(--sf)"></span>';
      dots += '</div>';
    }
    const defName = lang === 'zh' ? (a.name_zh || a.name) : a.name;
    return '<div class="card" id="card_' + a.id + '">'
      + '<div class="ch"><span class="cn">' + String(i + 1).padStart(2, '0') + '</span><span class="ct" contenteditable="true" spellcheck="false" onblur="renameCard(\'' + a.id + '\',this.textContent)" onkeydown="if(event.key===\'Enter\'){event.preventDefault();this.blur();}" title="Click to rename">' + (cardName[a.id] || defName) + '</span><span class="ctag">' + a.tag + '</span></div>'
      + '<div class="csch">' + dots
      + '<span class="cdl" onclick="openColorEditor(\'' + a.id + '\')" title="' + (lang === 'zh' ? '编辑配色' : 'Edit colors') + '" style="font-weight:700">EDIT ✎</span>'
      + '<span class="cdl" onclick="gate(()=>dlCard(\'' + a.id + '\',\'pdf\'))">PDF</span>'
      + '<span class="cdl" style="margin-left:3px" onclick="gate(()=>dlCard(\'' + a.id + '\',\'png\'))">PNG</span>'
      + '<span class="cdl" style="margin-left:3px" onclick="gate(()=>dlCard(\'' + a.id + '\',\'svg\'))" title="Vector SVG — edit in Illustrator">SVG</span></div>'
      + '<div class="cbody">' + svg + '</div>'
      + '</div>';
  }).join('');
  unload();
  document.getElementById('sdot').className = 'sd live';
  document.getElementById('stxt').textContent = sel.length + ' ' + t('sbar_analyses') + ' · ' + (sName || t('sbar_site')).toUpperCase();
  renderStats();
  toast(sel.length + ' ' + (lang === 'zh' ? '项分析图生成完毕' : 'ANALYSES READY'));
  // Refresh map overlay if one is active
  if (curOvStyle) drawMapOv(curOvStyle);
}


function schSwitch(id, sc, ev) {
  if (ev) ev.stopPropagation();
  cardSch[id] = sc;
  const svg = render(id, sc);
  const card = document.getElementById('card_' + id);
  if (card) {
    const cbody = card.querySelector('.cbody');
    if (cbody) cbody.innerHTML = svg;
    const dots = card.querySelectorAll('.dot');
    dots.forEach((d, i) => {
      if (i === sc) d.classList.add('on');
      else d.classList.remove('on');
    });
  }
}

/* ════════════════════════════════════════
   DATA SUMMARY PANEL
════════════════════════════════════════ */
function renderStats() {
  const bar = document.getElementById('statBar'); if (!bar) return;
  const R = curR;
  const areaKm2 = (Math.PI * R * R) / 1e6;
  // road length (km)
  let roadM = 0;
  (lastD.roads && lastD.roads.elements || []).forEach(el => {
    if (!el.geometry || el.geometry.length < 2) return;
    for (let i = 0; i < el.geometry.length - 1; i++) {
      const a = el.geometry[i], c = el.geometry[i + 1];
      const dy = (c.lat - a.lat) * 111320, dx = (c.lon - a.lon) * 111320 * Math.cos(sLat * Math.PI / 180);
      roadM += Math.sqrt(dx * dx + dy * dy);
    }
  });
  // building count + footprint area
  const blds = (lastD.buildings && lastD.buildings.elements || []).filter(e => e.geometry);
  const bldCount = blds.length;
  function polyArea(geo) { let s = 0; for (let i = 0; i < geo.length - 1; i++) { const a = geo[i], b2 = geo[i + 1]; s += (b2.lon - a.lon) * (b2.lat + a.lat); } return Math.abs(s) / 2 * (111320 * 111320 * Math.cos(sLat * Math.PI / 180)); }
  let bldArea = 0; blds.forEach(e => { if (e.geometry && e.geometry.length > 2) bldArea += polyArea(e.geometry); });
  // green area
  let greenArea = 0;
  (lastD.gw && lastD.gw.elements || []).forEach(e => {
    const t = e.tags || {}; const isG = t.leisure === 'park' || t.leisure === 'garden' || t.natural === 'wood' || t.landuse === 'forest' || t.landuse === 'grass' || t.landuse === 'meadow';
    if (isG && e.geometry && e.geometry.length > 2) greenArea += polyArea(e.geometry);
  });
  const greenPct = Math.min(100, greenArea / (areaKm2 * 1e6) * 100);
  const coverage = Math.min(100, bldArea / (areaKm2 * 1e6) * 100);
  // POI count
  const poiCount = (lastD.pois && lastD.pois.elements || []).length;
  const stats = [
    ['ROAD LENGTH', (roadM / 1000).toFixed(1) + ' km'],
    ['BUILDINGS', bldCount.toLocaleString()],
    ['BUILT COVERAGE', coverage.toFixed(0) + '%'],
    ['GREEN AREA', greenPct.toFixed(0) + '%'],
    ['POINTS OF INTEREST', poiCount.toLocaleString()],
    ['STUDY AREA', areaKm2.toFixed(2) + ' km²'],
  ];
  bar.style.display = 'flex';
  bar.innerHTML = stats.map((s, i) => '<div style="flex:1;min-width:120px;padding:14px 16px;' + (i < stats.length - 1 ? 'border-right:1px solid var(--ln);' : '') + '">'
    + '<div style="font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:8px;letter-spacing:.1em;color:var(--t3);margin-bottom:5px">' + s[0] + '</div>'
    + '<div style="font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:18px;font-weight:700;color:var(--tx);letter-spacing:-.01em">' + s[1] + '</div></div>').join('');
}

/* ════════════════════════════════════════
   EXPORT
════════════════════════════════════════ */
function addPrintPromptHelper(html) {
  const promptHtml = `
<style>
.print-prompt-banner {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 16px 20px;
  width: 90%;
  max-width: 550px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans SC", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #1e293b;
  text-align: left;
}
.print-prompt-header {
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #c0392b;
}
.print-prompt-body {
  font-size: 11.5px;
  line-height: 1.5;
  color: #475569;
}
.print-prompt-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin-top: 4px;
}
.print-prompt-btn {
  padding: 6px 14px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
  transition: all 0.15s ease;
}
.print-prompt-btn-primary {
  background: #c0392b;
  color: #ffffff;
}
.print-prompt-btn-primary:hover {
  background: #a93226;
}
.print-prompt-btn-secondary {
  background: #f1f5f9;
  color: #334155;
  border-color: #cbd5e1;
}
.print-prompt-btn-secondary:hover {
  background: #e2e8f0;
}
@media print {
  .print-prompt-banner {
    display: none !important;
  }
}
</style>
<div class="print-prompt-banner" id="printPrompt">
  <div class="print-prompt-header">💡 How to Export as PDF / 如何导出为 PDF</div>
  <div class="print-prompt-body">
    <strong>中文提示：</strong>当前网页的排版已为打印进行了优化。请在浏览器中按 <strong>Ctrl + P</strong> (Mac 上为 <strong>Cmd + P</strong>)，将目标打印机设为<strong>“另存为 PDF”</strong>，并根据需求在设置中勾选<strong>“背景图形”</strong>以显示背景色或使用透明背景，然后点击“保存”即可。<br>
    <strong>English Guide:</strong> The layout is optimized. Press <strong>Ctrl + P</strong> (<strong>Cmd + P</strong> on Mac), set the printer to <strong>"Save as PDF"</strong>, and optionally check the <strong>"Background graphics"</strong> option to show background colors or use a transparent background.
  </div>
  <div class="print-prompt-actions">
    <button class="print-prompt-btn print-prompt-btn-secondary" onclick="document.getElementById('printPrompt').remove()">Dismiss / 关闭提示</button>
    <button class="print-prompt-btn print-prompt-btn-primary" onclick="window.print()">Print or Save / 立即打印或保存</button>
  </div>
</div>
`;
  return html.replace('</body>', promptHtml + '</body>');
}

/* ════════════════════════════════════════
   ONE-CLICK PORTFOLIO LAYOUT (A3 board)
════════════════════════════════════════ */
function buildSiteDescription(lang) {
  // Compose a professional site description from real data
  const R = curR, areaKm2 = (Math.PI * R * R) / 1e6;
  let roadM = 0; (lastD.roads && lastD.roads.elements || []).forEach(el => { if (!el.geometry || el.geometry.length < 2) return; for (let i = 0; i < el.geometry.length - 1; i++) { const a = el.geometry[i], c = el.geometry[i + 1]; const dy = (c.lat - a.lat) * 111320, dx = (c.lon - a.lon) * 111320 * Math.cos(sLat * Math.PI / 180); roadM += Math.sqrt(dx * dx + dy * dy); } });
  const blds = (lastD.buildings && lastD.buildings.elements || []).filter(e => e.geometry);
  const poi = (lastD.pois && lastD.pois.elements || []).length;
  const km = (roadM / 1000).toFixed(1);
  if (lang === 'zh') {
    return '该场地位于北纬 ' + sLat.toFixed(4) + '°、东经 ' + sLng.toFixed(4) + '°，分析半径 ' + R + ' 米，覆盖面积约 ' + areaKm2.toFixed(2) + ' 平方公里。范围内路网总长约 ' + km + ' 公里，建筑约 ' + blds.length + ' 栋，记录设施点 ' + poi + ' 处。以上数据基于 OpenStreetMap 实时获取，可用于场地认知、周边分析与设计前期研究。';
  }
  return 'The site is located at ' + sLat.toFixed(4) + '°N, ' + sLng.toFixed(4) + '°E, analysed within a ' + R + ' m radius covering approximately ' + areaKm2.toFixed(2) + ' km². The area contains roughly ' + km + ' km of road network, around ' + blds.length + ' buildings, and ' + poi + ' recorded points of interest. Data is sourced live from OpenStreetMap and supports site reading, context analysis and early-stage design research.';
}

function exportPortfolio() {
  const sel = ANALYSES.filter(a => a.on && document.getElementById('card_' + a.id));
  if (sel.length < 1) { toast('GENERATE ANALYSES FIRST'); return; }
  const date = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  const desc = buildSiteDescription(lang);
  // stats
  const R = curR, areaKm2 = (Math.PI * R * R) / 1e6;
  let roadM = 0; (lastD.roads && lastD.roads.elements || []).forEach(el => { if (!el.geometry || el.geometry.length < 2) return; for (let i = 0; i < el.geometry.length - 1; i++) { const a = el.geometry[i], c = el.geometry[i + 1]; const dy = (c.lat - a.lat) * 111320, dx = (c.lon - a.lon) * 111320 * Math.cos(sLat * Math.PI / 180); roadM += Math.sqrt(dx * dx + dy * dy); } });
  const blds = (lastD.buildings && lastD.buildings.elements || []).filter(e => e.geometry).length;
  const poi = (lastD.pois && lastD.pois.elements || []).length;
  const metrics = [['ROAD', (roadM / 1000).toFixed(1) + 'km'], ['BUILDINGS', blds], ['POI', poi], ['AREA', areaKm2.toFixed(2) + 'km²'], ['RADIUS', R + 'm']];
  // diagram cards
  const cells = sel.map((a, i) => {
    const svg = render(a.id, cardSch[a.id] || 0);
    const defName = lang === 'zh' ? (a.name_zh || a.name) : a.name;
    const nm = cardName[a.id] || defName;
    return '<div class="pcell"><div class="pcap"><span class="pnum">' + String(i + 1).padStart(2, '0') + '</span><span class="pname">' + nm.toUpperCase() + '</span><span class="ptag">' + a.tag + '</span></div><div class="psvg">' + svg + '</div></div>';
  }).join('');
  const title = (sName || 'Site').toUpperCase();
  const bgcPortfolio = exportBgColor === 'theme' ? '#fff' : (exportBgColor === 'transparent' ? '#ffffff' : exportBgColor);
  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>AntiMap · ' + title + ' · Portfolio Board</title>'
    + '<style>@import url(\'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Archivo:wght@400;600;700;800;900&display=swap\');'
    + '@page{size:A3 landscape;margin:0}'
    + '*{margin:0;padding:0;box-sizing:border-box}'
    + 'body{font-family:Archivo,sans-serif;background:' + bgcPortfolio + ';color:#16150F}'
    + '.board{width:420mm;height:297mm;padding:18mm 18mm 14mm;display:flex;flex-direction:column;position:relative}'
    + '.bhead{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #16150F;padding-bottom:10px;margin-bottom:6px}'
    + '.bhead h1{font-size:42px;font-weight:900;letter-spacing:-.03em;line-height:.9}'
    + '.bhead h1 span{color:#A8A69F;font-weight:400}'
    + '.bhead .meta{text-align:right;font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:9px;color:#8C8A82;letter-spacing:.08em;line-height:1.7}'
    + '.subrow{display:flex;justify-content:space-between;align-items:center;margin:8px 0 14px;gap:20px}'
    + '.desc{font-size:11px;line-height:1.6;color:#3A3835;max-width:62%}'
    + '.metrics{display:flex;gap:0;border:1px solid #E0DDD8;border-radius:8px;overflow:hidden}'
    + '.metrics .m{padding:8px 14px;border-right:1px solid #E0DDD8;text-align:center}.metrics .m:last-child{border:none}'
    + '.metrics .mk{font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:7px;color:#A8A69F;letter-spacing:.1em}'
    + '.metrics .mv{font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:15px;font-weight:700;margin-top:2px}'
    + '.pgrid{flex:1;display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));gap:10px;align-content:start}'
    + '.pcell{display:flex;flex-direction:column;border:1px solid #EEECE6;border-radius:8px;padding:8px;background:#FCFBF9}'
    + '.pcap{display:flex;align-items:center;gap:6px;margin-bottom:4px}'
    + '.pnum{font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:9px;font-weight:700;color:#C0392B}'
    + '.pname{font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:8.5px;font-weight:700;flex:1;letter-spacing:.02em}'
    + '.ptag{font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:6px;color:#A8A69F;background:#F0EEE8;padding:2px 4px;border-radius:2px}'
    + '.psvg svg{width:100%;height:auto;display:block}'
    + '.bfoot{margin-top:10px;padding-top:8px;border-top:1px solid #E0DDD8;display:flex;justify-content:space-between;font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:8px;color:#A8A69F;letter-spacing:.08em}'
    + '@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}'
    + '</style></head><body><div class="board">'
    + '<div class="bhead"><h1>' + title + '<br><span>SITE ANALYSIS</span></h1>'
    + '<div class="meta">' + sLat.toFixed(5) + '°N · ' + sLng.toFixed(5) + '°E<br>RADIUS ' + R + 'm · ' + sel.length + ' ANALYSES<br>' + date + '</div></div>'
    + '<div class="subrow"><div class="desc">' + desc + '</div>'
    + '<div class="metrics">' + metrics.map(m => '<div class="m"><div class="mk">' + m[0] + '</div><div class="mv">' + m[1] + '</div></div>').join('') + '</div></div>'
    + '<div class="pgrid" style="grid-template-columns:repeat(' + Math.min(sel.length, Math.ceil(Math.sqrt(sel.length * 1.6))) + ',1fr)">' + cells + '</div>'
    + '<div class="bfoot"><span>AntiMap · Architectural Site Analysis</span><span>Data © OpenStreetMap contributors · ' + date + '</span></div>'
    + '</div></body></html>';
  const blob = new Blob([addPrintPromptHelper(html)], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const an = document.createElement('a'); an.href = url; an.target = '_blank'; an.rel = 'noopener';
  document.body.appendChild(an); an.click(); document.body.removeChild(an);
  setTimeout(() => URL.revokeObjectURL(url), 9000);
  toast('PORTFOLIO BOARD OPENED · PRINT TO PDF');
}

function exportPDF() {
  if (!document.querySelector('.card')) { toast('GENERATE ANALYSES FIRST'); return; }
  const cards = document.querySelectorAll('.card');
  let rows = '';
  cards.forEach(card => {
    const title = card.querySelector('.ct')?.textContent || '';
    const tag = card.querySelector('.ctag')?.textContent || '';
    const svg = card.querySelector('.cbody svg');
    // Keep tile images — REPORT PDF is an HTML page, browser loads them live (no canvas/CORS issue)
    const svgStr = svg ? new XMLSerializer().serializeToString(svg) : '';
    rows += `<div class="pc"><div class="ph"><span class="pn">${title}</span><span class="pt">${tag}</span></div><div class="pb">${svgStr}</div></div>`;
  });
  const PW = 900, PH = 380;
  const ovSVG = curOvStyle ? buildOverlaySVG(curOvStyle, PW, PH) : '';
  const isDarkOv = curOvStyle === 'dark';
  const ovLabel = curOvStyle ? `${curOvStyle.toUpperCase()} OVERLAY` : '';
  const bgcPDF = exportBgColor === 'theme' ? '#fff' : (exportBgColor === 'transparent' ? '#ffffff' : exportBgColor);
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>AntiMap · ${sName || 'Site'}</title>
<style>
@page{size:${EXP_PAGE[expFormat] || 'A4 portrait'};margin:12mm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;background:${bgcPDF};color:#1A1917}
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
.header{position:relative;width:100%;height:380px;overflow:hidden;background:${isDarkOv ? '#1A1C20' : '#F0EEE8'}}
.header svg{position:absolute;inset:0;width:100%;height:100%}
.header-meta{position:absolute;bottom:0;left:0;right:0;padding:16px 32px 20px;background:linear-gradient(to top,${isDarkOv ? 'rgba(26,28,32,0.92)' : 'rgba(240,238,232,0.92)'} 0%,transparent 100%)}
.header-meta h1{font-size:22px;font-weight:700;letter-spacing:.06em;color:${isDarkOv ? '#F0EEE8' : '#1A1917'}}
.header-meta h1 span{font-weight:400;opacity:.55}
.header-meta p{font-size:8px;letter-spacing:.1em;color:${isDarkOv ? 'rgba(240,238,232,0.6)' : 'rgba(26,25,23,0.5)'};margin-top:5px}
.header-tag{position:absolute;top:14px;right:18px;font-size:7px;letter-spacing:.12em;color:${isDarkOv ? 'rgba(240,238,232,0.4)' : 'rgba(26,25,23,0.35)'};font-family:monospace}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:22px 26px 36px}
.pc{break-inside:avoid}
.ph{display:flex;justify-content:space-between;align-items:center;padding:0 0 5px;border-bottom:1px solid #E8E6E2;margin-bottom:8px}
.pn{font-size:8px;font-weight:700;letter-spacing:.08em}
.pt{font-size:6px;color:#A8A69F;background:#F0EEE8;padding:2px 5px;border-radius:2px}
.pb svg{width:100%;height:auto;display:block}
@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style></head><body>
<div class="header">
${ovSVG || ''}
<div class="header-meta">
<h1>AntiMap &nbsp;·&nbsp; ${(sName || 'SITE').toUpperCase()}</h1>
<p>${sLat?.toFixed(5)}°N &nbsp;·&nbsp; ${sLng?.toFixed(5)}°E &nbsp;&nbsp;|&nbsp;&nbsp; R=${curR}m &nbsp;&nbsp;|&nbsp;&nbsp; ${new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
</div>
${ovLabel ? `<div class="header-tag">${ovLabel}</div>` : ''}
</div>
<div class="grid">${rows}</div>
</body></html>`;
  const blob = new Blob([addPrintPromptHelper(html)], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 8000);
  toast('PDF REPORT OPENED'); maybeTip();
}

/* ──── LAYERED AXONOMETRIC POSTER ──── */
function openLayerPicker(ev) {
  ev && ev.stopPropagation();
  document.querySelectorAll('.emenu').forEach(m => m.classList.remove('open'));
  const avail = ANALYSES.filter(a => a.on && document.getElementById('card_' + a.id));
  if (avail.length < 2) { toast(t('ts_gen_more')); return; }
  const list = document.getElementById('layerList');
  list.innerHTML = avail.map((a, i) => {
    const nameStr = (lang === 'zh' && a.name_zh) ? a.name_zh : a.name;
    return '<label style="display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid var(--bd);border-radius:8px;margin-bottom:6px;cursor:pointer;font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:10px;color:var(--t1)">'
      + '<input type="checkbox" class="layerChk" value="' + a.id + '" ' + (i < 4 ? 'checked' : '') + ' style="width:15px;height:15px;cursor:pointer"/>'
      + '<span style="flex:1">' + nameStr + '</span>'
      + '<span style="font-size:8px;color:var(--t3)">' + a.tag + '</span>'
      + '</label>';
  }).join('');
  document.getElementById('layerModal').style.display = 'flex';
}
function closeLayerPicker() { document.getElementById('layerModal').style.display = 'none'; }
function runLayered() {
  const ids = Array.from(document.querySelectorAll('.layerChk:checked')).map(c => c.value);
  if (ids.length < 2) { toast(t('ts_select_min2')); return; }
  if (ids.length > 8) { toast(t('ts_select_max8')); return; }
  closeLayerPicker();
  dlLayered(ids);
}
function dlLayered(ids) {
  const sel = ids.map(id => ANALYSES.find(a => a.id === id)).filter(a => a && document.getElementById('card_' + a.id));
  if (sel.length < 2) { toast(t('ts_gen_more')); return; }
  load(t('ts_building_layered'));

  const isRect = cardShape === 'rect' || cardShape === 'square';
  const rxry = (cardShape === 'rect') ? ' rx="14"' : '';
  const PW = 1240, layerGap = isRect ? 188 : 150;
  const topPad = 200, botPad = 90;
  const PH = topPad + sel.length * layerGap + botPad + (isRect ? 260 : 160);
  const cx = PW * 0.42;
  const DS = 300;

  const date = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  const loc = (sName || 'SITE').toUpperCase();

  let svg = '<svg viewBox="0 0 ' + PW + ' ' + PH + '" xmlns="http://www.w3.org/2000/svg" width="' + PW + '" height="' + PH + '">';
  svg += '<rect width="' + PW + '" height="' + PH + '" fill="#F7F6F3"/>';
  svg += '<text x="64" y="70" font-size="30" fill="#1A1917" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700" letter-spacing="-.01em">AntiMap · ' + loc + '</text>';
  const subtitle = lang === 'zh'
    ? (sLat ? sLat.toFixed(4) + 'N · ' + sLng.toFixed(4) + 'E' : '') + '  |  半径=' + curR + 'm  |  ' + sel.length + '层轴测叠加图  |  ' + date
    : (sLat ? sLat.toFixed(4) + 'N · ' + sLng.toFixed(4) + 'E' : '') + '  |  R=' + curR + 'm  |  ' + sel.length + '-LAYER AXONOMETRIC  |  ' + date;
  svg += '<text x="64" y="94" font-size="9" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" letter-spacing=".08em">' + subtitle + '</text>';
  svg += '<line x1="64" y1="112" x2="' + (PW - 64) + '" y2="112" stroke="#1A1917" stroke-width="1.2"/>';

  let defs = '<defs>';
  sel.forEach((a, idx) => {
    // Clip shape per layer to hide the square diagram boundary
    if (isRect) {
      defs += '<clipPath id="Lclip' + idx + '"><rect x="2" y="2" width="264" height="264"' + rxry + '/></clipPath>';
    } else {
      defs += '<clipPath id="Lclip' + idx + '"><circle cx="134" cy="134" r="132"/></clipPath>';
    }
  });
  defs += '</defs>';
  svg = svg.replace('</svg>', '');
  svg = svg.replace(/(<svg[^>]*>)/, '$1' + defs);

  sel.forEach((a, idx) => {
    const layerY = topPad + 40 + idx * layerGap;
    let diag = render(a.id, cardSch[a.id] || 0);
    const vbMatch = diag.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    const vbW = vbMatch ? parseFloat(vbMatch[1]) : 268;
    const vbH = vbMatch ? parseFloat(vbMatch[2]) : 268;
    let inner = diag.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '')
      .replace(/id="([a-z][a-z0-9]+)"/g, (m, id) => 'id="L' + idx + id + '"')
      .replace(/url\(#([a-z][a-z0-9]+)\)/g, (m, id) => 'url(#L' + idx + id + ')');

    const scale = DS / vbW;
    const clipped = '<g clip-path="url(#Lclip' + idx + ')">' + inner + '</g>';
    if (isRect) {
      const s2 = scale;
      const half = vbW * s2 / 2;
      const m = 'matrix(' + (0.707 * s2) + ',' + (0.408 * s2) + ',' + (-0.707 * s2) + ',' + (0.408 * s2) + ',' + cx + ',' + (layerY - half * 0.408) + ')';
      svg += '<g transform="' + m + ' translate(' + (-vbW / 2) + ',' + (-vbH / 2) + ')" opacity="0.97">' + clipped + '</g>';
    } else {
      const tx = cx - DS / 2, ty = layerY - DS * 0.25;
      svg += '<g transform="translate(' + tx + ',' + ty + ') scale(' + scale + ',' + (scale * 0.5) + ')" opacity="0.97">' + clipped + '</g>';
    }

    const labelX = PW - 440, labelY = layerY;
    svg += '<line x1="' + (cx + DS * 0.5) + '" y1="' + layerY + '" x2="' + labelX + '" y2="' + labelY + '" stroke="#C8C6C0" stroke-width=".5" stroke-dasharray="2,2"/>';
    svg += '<line x1="' + labelX + '" y1="' + (labelY - 1) + '" x2="' + (PW - 64) + '" y2="' + (labelY - 1) + '" stroke="#1A1917" stroke-width=".8"/>';
    const nameStr = (lang === 'zh' && a.name_zh) ? a.name_zh : a.name;
    const subStr = (lang === 'zh' && a.sub_zh) ? a.sub_zh : a.sub;
    svg += '<text x="' + labelX + '" y="' + (labelY - 8) + '" font-size="12" fill="#1A1917" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700" letter-spacing=".06em">' + nameStr.toUpperCase() + '</text>';
    svg += '<text x="' + labelX + '" y="' + (labelY + 13) + '" font-size="7.5" fill="#8C8A82" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" letter-spacing=".04em">' + subStr.toUpperCase() + '  ·  ' + a.tag + '</text>';
    svg += '<text x="' + (PW - 64) + '" y="' + (labelY - 8) + '" text-anchor="end" font-size="9" fill="#C0392B" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700">' + String(idx + 1).padStart(2, '0') + '</text>';
  });

  svg += '<text x="64" y="' + (PH - 30) + '" font-size="7.5" fill="#C8C6C0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" letter-spacing=".06em">AntiMap · openstreetmap.org · ' + date + '</text>';
  svg += '</svg>';

  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>AntiMap Layered · ' + (sName || 'Site') + '</title>'
    + '<style>*{margin:0;padding:0}body{background:#F7F6F3}svg{width:100%;height:auto;display:block}'
    + '@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head><body>'
    + svg + '</body></html>';
  const blob = new Blob([addPrintPromptHelper(html)], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 8000);
  unload();
  toast(lang === 'zh' ? sel.length + ' 层轴测叠加海报已打开' : sel.length + '-LAYER POSTER OPENED');
}
function buildOverlaySVG(key, PW, PH) {
  if (!key || !sLat) return '';
  const st = OV[key]; if (!st) return '';
  const b = getBounds();
  const PAD2 = 0;
  function px(lat, lon) {
    const [mx, my] = latLngToMeters(lat, lon);
    const [minX, minY] = latLngToMeters(b.mnLat, b.mnLng);
    const [maxX, maxY] = latLngToMeters(b.mxLat, b.mxLng);
    const x = (mx - minX) / (maxX - minX) * PW;
    const y = (maxY - my) / (maxY - minY) * PH;
    return [isFinite(x) ? x : PW / 2, isFinite(y) ? y : PH / 2];
  }
  function poly(geom) { return geom.map(n => px(n.lat, n.lon).join(',')).join(' '); }

  const clipId = 'pc' + Math.random().toString(36).slice(2, 6);
  let s = '<svg viewBox="0 0 ' + PW + ' ' + PH + '" xmlns="http://www.w3.org/2000/svg" width="' + PW + '" height="' + PH + '">';
  // Ellipse clip — physically crops all data to a soft oval, no rectangular edges
  s += '<defs><clipPath id="' + clipId + '"><ellipse cx="' + (PW / 2) + '" cy="' + (PH / 2) + '" rx="' + (PW * 0.52) + '" ry="' + (PH * 0.62) + '"/></clipPath></defs>';
  s += '<rect width="' + PW + '" height="' + PH + '" fill="' + (st.tile === 'dark' ? '#1A1C20' : '#F0EEE8') + '"/>';
  s += '<g clip-path="url(#' + clipId + ')">';
  s += '<rect width="' + PW + '" height="' + PH + '" fill="' + (st.tile === 'dark' ? '#1A1C20' : '#F0EEE8') + '"/>';

  // Green & Water
  (lastD.gw && lastD.gw.elements || []).forEach(el => {
    const t = el.tags || {};
    const isW = isRealWater(t), isG = isRealGreen(t);
    if (!isW && !isG) return;
    const fill = isW ? st.wFill : st.gFill, strk = isW ? st.wStrk : st.gStrk, op = isW ? st.wOp : st.gOp;
    if (el.geometry && el.geometry.length > 2) s += '<polygon points="' + poly(el.geometry) + '" fill="' + fill + '" stroke="' + strk + '" stroke-width=".8" opacity="' + op + '"/>';
    if (el.members) { el.members.forEach(m => { if (!m.geometry || m.role === 'inner') return; s += '<polygon points="' + poly(m.geometry) + '" fill="' + fill + '" stroke="' + strk + '" stroke-width=".8" opacity="' + op + '"/>'; }); }
  });

  // Buildings
  (lastD.buildings && lastD.buildings.elements || []).forEach(el => {
    if (!el.geometry || el.geometry.length < 3) return;
    s += '<polygon points="' + poly(el.geometry) + '" fill="' + st.bldFill + '" stroke="' + st.bldStrk + '" stroke-width=".4" opacity="' + st.bldOp + '"/>';
  });

  // Roads
  ['residential', 'tertiary', 'secondary', 'primary', 'trunk', 'motorway'].forEach(hw => {
    const col = st.rCol[hw], w = st.rW[hw]; if (!col || !w) return;
    (lastD.roads && lastD.roads.elements || []).forEach(el => {
      if (!el.geometry || (el.tags && el.tags.highway) !== hw) return;
      const pts = el.geometry.map(n => px(n.lat, n.lon).join(',')).join(' ');
      if (pts && !pts.includes('NaN')) s += '<polyline points="' + pts + '" fill="none" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round" opacity=".95"/>';
    });
  });

  // Close the clipped data group
  s += '</g>';

  // Soft fade vignette over the ellipse edge for natural blend
  const uid = 'pv' + Math.random().toString(36).slice(2, 6);
  const bgc = st.tile === 'dark' ? '#1A1C20' : '#F0EEE8';
  s += '<defs><radialGradient id="' + uid + 'r" cx="50%" cy="50%" r="50%" gradientTransform="scale(1.04,0.87) translate(-0.02,0.075)">'
    + '<stop offset="0%" stop-color="' + bgc + '" stop-opacity="0"/>'
    + '<stop offset="68%" stop-color="' + bgc + '" stop-opacity="0"/>'
    + '<stop offset="84%" stop-color="' + bgc + '" stop-opacity="0.35"/>'
    + '<stop offset="94%" stop-color="' + bgc + '" stop-opacity="0.75"/>'
    + '<stop offset="100%" stop-color="' + bgc + '" stop-opacity="1"/>'
    + '</radialGradient></defs>';
  s += '<rect width="' + PW + '" height="' + PH + '" fill="url(#' + uid + 'r)" pointer-events="none"/>';

  // Site marker
  const [sx, sy] = px(sLat, sLng);
  s += '<circle cx="' + sx + '" cy="' + sy + '" r="6" fill="none" stroke="' + (st.tile === 'dark' ? '#FFF' : '#1A1917') + '" stroke-width="2"/>';
  s += '<circle cx="' + sx + '" cy="' + sy + '" r="2.5" fill="' + (st.tile === 'dark' ? '#FFF' : '#1A1917') + '"/>';

  s += '</svg>';
  return s;
}

function toggleMenu(id, e) {
  e.stopPropagation();
  document.querySelectorAll('.emenu').forEach(m => { if (m.id !== id) m.classList.remove('open'); });
  document.getElementById(id).classList.toggle('open');
}
document.addEventListener('click', () => document.querySelectorAll('.emenu').forEach(m => m.classList.remove('open')));

function svgBlob(el) {
  // Use outerHTML for cleaner output, fallback to serializer
  const str = el.outerHTML || new XMLSerializer().serializeToString(el);
  // Ensure proper XML declaration
  const full = '<?xml version="1.0" encoding="UTF-8"?>\n' + str;
  return new Blob([full], { type: 'image/svg+xml;charset=utf-8' });
}
async function svgToPng(el, sc2) {
  return new Promise((res, rej) => {
    const clone = el.cloneNode(true);
    const vb = (clone.getAttribute('viewBox') || '0 0 240 268').split(' ').map(Number);
    const vw = vb[2] || 240, vh = vb[3] || 268;
    const actualScale = sc2 || (1080 / vh);
    clone.setAttribute('width', vw); clone.setAttribute('height', vh);
    // Remove external image refs that cause CORS - replace with grey rect
    clone.querySelectorAll('image').forEach(im => {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const x = im.getAttribute('x') || '0', y = im.getAttribute('y') || '0';
      const w2 = im.getAttribute('width') || '256', h2 = im.getAttribute('height') || '256';
      rect.setAttribute('x', x); rect.setAttribute('y', y);
      rect.setAttribute('width', w2); rect.setAttribute('height', h2);
      rect.setAttribute('fill', '#3A3835');
      im.parentNode.replaceChild(rect, im);
    });
    // Serialize with proper namespace
    const svgStr = '<?xml version="1.0" encoding="UTF-8"?>' + new XMLSerializer().serializeToString(clone);
    // Use data URI (avoids blob URL CORS issues in some browsers)
    const encoded = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgStr);
    const img = new Image();
    img.onload = () => {
      const cv = document.createElement('canvas'); cv.width = Math.round(vw * actualScale); cv.height = Math.round(vh * actualScale);
      const ctx = cv.getContext('2d');
      if (exportBgColor !== 'transparent') {
        ctx.fillStyle = exportBgColor === 'theme' ? (typeof curStyle !== 'undefined' && curStyle === 'dark' ? '#1A1C20' : '#FAFAF9') : exportBgColor;
        ctx.fillRect(0, 0, cv.width, cv.height);
      }
      ctx.scale(actualScale, actualScale); ctx.drawImage(img, 0, 0, vw, vh);
      cv.toBlob(b2 => { if (b2) res(b2); else rej(new Error('toBlob null')); }, 'image/png');
    };
    img.onerror = () => rej(new Error('img load failed'));
    img.src = encoded;
  });
}
function dlBlob(blob, name) { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click(); URL.revokeObjectURL(a.href); }

async function dlCard(id, fmt, ev) {
  ev && ev.stopPropagation();
  const el = document.querySelector('#card_' + id + ' .cbody svg');
  if (!el) { toast('NO DIAGRAM'); return; }
  const a = ANALYSES.find(x => x.id === id);
  const defName = a ? (lang === 'zh' ? (a.name_zh || a.name) : a.name) : id;
  const name = cardName[id] || defName;
  const tag = a ? a.tag : '';
  if (fmt === 'svg') {
    // Vector SVG export — editable in Illustrator
    let elClone = el.cloneNode(true);
    if (exportBgColor !== 'transparent') {
      const bgc = exportBgColor === 'theme' ? (typeof curStyle !== 'undefined' && curStyle === 'dark' ? '#1A1C20' : '#FAFAF9') : exportBgColor;
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '100%');
      rect.setAttribute('height', '100%');
      rect.setAttribute('fill', bgc);
      elClone.insertBefore(rect, elClone.firstChild);
    }
    let s = '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(elClone);
    dlBlob(new Blob([s], { type: 'image/svg+xml' }), name + '.svg');
    toast('VECTOR SVG SAVED');
    return;
  }
  if (fmt === 'png') {
    try {
      const blob = await svgToPng(el);
      dlBlob(blob, name + '.png');
      toast('PNG SAVED');
    } catch (e) {
      toast('PNG EXPORT FAILED');
    }
    return;
  }
  // default: PDF (printable HTML page)
  let svgStr = new XMLSerializer().serializeToString(el);
  const date = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  const bgc = exportBgColor === 'theme' ? '#F5F4F2' : (exportBgColor === 'transparent' ? '#ffffff' : exportBgColor);
  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + name + ' · AntiMap</title>'
    + '<style>@import url(\'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap\');'
    + '*{margin:0;padding:0}body{background:' + bgc + ';font-family:"Noto Sans", "Noto Sans SC", sans-serif;display:flex;flex-direction:column;align-items:center;padding:40px}'
    + '.hd{width:520px;max-width:90vw;display:flex;justify-content:space-between;align-items:baseline;border-bottom:1.5px solid #1A1917;padding-bottom:8px;margin-bottom:16px}'
    + '.hd h1{font-size:16px;font-weight:700;color:#1A1917;letter-spacing:.05em}.hd .t{font-size:8px;color:#A8A69F;background:#F0EEE8;padding:3px 7px;border-radius:3px}'
    + '.meta{width:520px;max-width:90vw;font-size:8px;color:#A8A69F;letter-spacing:.08em;margin-bottom:20px}'
    + 'svg{width:520px;max-width:90vw;height:auto;display:block}'
    + '@media print{body{padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head><body>'
    + '<div class="hd"><h1>' + name.toUpperCase() + '</h1><span class="t">' + tag + '</span></div>'
    + '<div class="meta">' + (sLat ? sLat.toFixed(5) + '°N · ' + sLng.toFixed(5) + '°E' : '') + '  |  ' + (sName || 'SITE').toUpperCase() + '  |  R=' + curR + 'm  |  ' + date + '</div>'
    + svgStr + '</body></html>';
  const blob = new Blob([addPrintPromptHelper(html)], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const an = document.createElement('a'); an.href = url; an.target = '_blank'; an.rel = 'noopener';
  document.body.appendChild(an); an.click(); document.body.removeChild(an);
  setTimeout(() => URL.revokeObjectURL(url), 8000);
  toast('PDF OPENED · USE PRINT TO SAVE');
}

function dlAllSVG() {
  document.querySelectorAll('.emenu').forEach(m => m.classList.remove('open'));
  ANALYSES.filter(a => a.on && document.getElementById('card_' + a.id)).forEach(a => dlCard(a.id, 'svg', null));
  toast('ALL SVGs SAVED');
}
async function dlAllPNG() {
  document.querySelectorAll('.emenu').forEach(m => m.classList.remove('open'));
  const sel = ANALYSES.filter(a => a.on && document.getElementById('card_' + a.id));
  if (!sel.length) { toast('GENERATE FIRST'); return; }
  load('CONVERTING TO PNG...');
  for (const a of sel) { await dlCard(a.id, 'png', null).catch(() => { }); }
  unload(); toast('ALL PNGs SAVED');
}

async function dlBoard(fmt) {
  document.querySelectorAll('.emenu').forEach(m => m.classList.remove('open'));
  const sel = ANALYSES.filter(a => a.on && document.getElementById('card_' + a.id));
  if (!sel.length) { toast('GENERATE FIRST'); return; }
  load('BUILDING POSTER...');
  const COLS = 3, cW = W + 44, cH = H + 28 + 58;
  const ROWS = Math.ceil(sel.length / COLS);
  const mX = 64, mT = 128, mB = 72;
  const bW = COLS * cW + mX * 2;
  const ovH = curOvStyle ? 340 : 0; // overlay map height
  const bH = ovH + mT + ROWS * cH + mB;
  const date = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  const loc = (sName || '—').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').toUpperCase();
  const coord = sLat ? sLat.toFixed(4) + 'N   ' + sLng.toFixed(4) + 'E' : '';

  let svg = '<svg viewBox="0 0 ' + bW + ' ' + bH + '" xmlns="http://www.w3.org/2000/svg" width="' + bW + '" height="' + bH + '">'
    + '<rect width="' + bW + '" height="' + bH + '" fill="#F5F4F2"/>';

  // Overlay map at top
  if (curOvStyle) {
    const ovSvg = buildOverlaySVG(curOvStyle, bW, ovH);
    // Strip outer svg tags and embed
    const inner = ovSvg.replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
    svg += '<g>' + inner + '</g>';
    // Header text over overlay
    const isDarkOv = curOvStyle === 'dark';
    const tc = isDarkOv ? '#F0EEE8' : '#1A1917';
    const ts = isDarkOv ? 'rgba(26,28,32,0.85)' : 'rgba(240,238,232,0.85)';
    svg += '<rect x="0" y="' + (ovH - 90) + '" width="' + bW + '" height="90" fill="url(#hg)"/>';
    svg += '<defs><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="' + (isDarkOv ? '#1A1C20' : '#F0EEE8') + '" stop-opacity="0"/><stop offset="100%" stop-color="' + (isDarkOv ? '#1A1C20' : '#F0EEE8') + '" stop-opacity=".9"/></linearGradient></defs>';
    svg += '<text x="' + mX + '" y="' + (ovH - 44) + '" font-size="28" fill="' + tc + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700" letter-spacing=".05em">SITE ANALYSE</text>';
    svg += '<text x="' + (bW - mX) + '" y="' + (ovH - 44) + '" text-anchor="end" font-size="11" fill="' + tc + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" opacity=".7">' + loc + '</text>';
    svg += '<text x="' + mX + '" y="' + (ovH - 20) + '" font-size="9" fill="' + tc + '" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" opacity=".6">' + coord + (coord ? ' · ' : '') + 'r=' + curR + 'm · ' + date + ' · ' + curOvStyle.toUpperCase() + '</text>';
  } else {
    svg += '<rect x="' + mX + '" y="38" width="' + (bW - mX * 2) + '" height="1.2" fill="#1A1917"/>';
    svg += '<text x="' + mX + '" y="32" font-size="26" fill="#1A1917" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" font-weight="700" letter-spacing=".05em">SITE ANALYSE</text>';
    svg += '<text x="' + (bW - mX) + '" y="32" text-anchor="end" font-size="10" fill="#6B6860" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + loc + '</text>';
    svg += '<text x="' + mX + '" y="56" font-size="8.5" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + coord + (coord ? ' · ' : '') + 'r=' + curR + 'm · ' + date + '</text>';
  }

  const gridY = ovH + mT;
  sel.forEach((a, i) => {
    const col = i % COLS, row = Math.floor(i / COLS);
    const x = mX + col * cW, y = gridY + row * cH;
    svg += '<rect x="' + x + '" y="' + y + '" width="' + (W + 22) + '" height="' + (H + 28 + 42) + '" rx="3" fill="#FFF" stroke="#E8E6E2" stroke-width=".5"/>';
    svg += '<text x="' + (x + 10) + '" y="' + (y + 14) + '" font-size="7" fill="#A8A69F" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + String(i + 1).padStart(2, '0') + '</text>';
    svg += '<text x="' + (x + 26) + '" y="' + (y + 14) + '" font-size="7.5" fill="#1A1917" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif" letter-spacing=".09em">' + a.name.toUpperCase() + '</text>';
    svg += '<text x="' + (x + W + 10) + '" y="' + (y + 14) + '" text-anchor="end" font-size="6.5" fill="#C8C6C0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + a.tag + '</text>';
    svg += '<line x1="' + (x + 6) + '" y1="' + (y + 20) + '" x2="' + (x + W + 16) + '" y2="' + (y + 20) + '" stroke="#F0EEE8" stroke-width=".5"/>';
    let diag = render(a.id, cardSch[a.id] || 0);
    diag = diag
      .replace(/<svg[^>]*>/g, '').replace(/<\/svg>/g, '')
      .replace(/id="([a-z][a-z0-9]+)"/g, (m, id) => 'id="p' + i + 'x' + id + '"')
      .replace(/url\(#([a-z][a-z0-9]+)\)/g, (m, id) => 'url(#p' + i + 'x' + id + ')')
      // Remove external images (xlink:href with http) to avoid CORS in PNG export
      .replace(/<image\b[^>]*?(?:xlink:href|href)="https?:[^"]*"[^>]*?\/?>/g, '<rect x="-200" y="-200" width="640" height="640" fill="#D6D4CE"/>');
    svg += '<g transform="translate(' + (x + 11) + ',' + (y + 24) + '">' + diag + '</g>';
  });

  svg += '<rect x="' + mX + '" y="' + (bH - mB + 8) + '" width="' + (bW - mX * 2) + '" height=".5" fill="#E0DDD8"/>';
  svg += '<text x="' + mX + '" y="' + (bH - mB + 24) + '" font-size="7.5" fill="#C8C6C0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">AntiMap \u00b7 openstreetmap.org \u00b7 ' + date + '</text>';
  svg += '<text x="' + (bW - mX) + '" y="' + (bH - mB + 24) + '" text-anchor="end" font-size="7.5" fill="#C8C6C0" font-family="\'Noto Sans\', \'Noto Sans SC\', sans-serif">' + coord + '</text>';
  svg += '</svg>';

  const fname = 'antimap_board_' + (sName || 'site').toLowerCase().replace(/\s+/g, '_');
  // Output as PDF-ready printable HTML page
  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>AntiMap Poster · ' + (sName || 'Site') + '</title>'
    + '<style>*{margin:0;padding:0}body{background:#F5F4F2;display:flex;justify-content:center;padding:20px}svg{width:100%;height:auto;max-width:1400px;display:block}'
    + '@media print{body{padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head><body>'
    + svg + '</body></html>';
  const blob = new Blob([addPrintPromptHelper(html)], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 8000);
  unload(); toast('POSTER PDF OPENED'); maybeTip();
}

/* ════════════════════════════════════════
   UTILS
════════════════════════════════════════ */
function load(t) { document.getElementById('ltxt').textContent = t; document.getElementById('loader').classList.add('on'); }
function loadProg(t, pct) {
  document.getElementById('ltxt').textContent = t;
  document.getElementById('loader').classList.add('on');
  const w = document.getElementById('lbarWrap'), b = document.getElementById('lbar'), p = document.getElementById('lpct');
  if (w) { w.style.display = 'block'; b.style.width = Math.round(pct) + '%'; p.textContent = Math.round(pct) + '%'; }
  startLoadTips();
}
// Rotating tips shown while data loads — turns the wait into discovery
const LOAD_TIPS_EN = ['Tip: Click any card title to rename it.', 'Tip: Use the Combined Overlay to stack layers in one map.', 'Tip: The layered axonometric poster stacks all analyses in 3D.'];
const LOAD_TIPS_ZH = ['小贴士：点击图卡标题可以重命名。', '小贴士：Combined Overlay 可把多层叠在一张图上。', '小贴士：分层轴测海报会把所有分析叠成 3D 爆炸图。'];
let _tipTimer = null, _tipIdx = 0;
function startLoadTips() {
  if (_tipTimer) return;
  let el = document.getElementById('ltip');
  if (!el) {
    el = document.createElement('div'); el.id = 'ltip';
    el.style.cssText = 'margin-top:14px;font-size:11px;color:#A8A69F;font-family:Inter,system-ui,sans-serif;text-align:center;max-width:300px;line-height:1.5;transition:opacity .4s';
    const lt = document.getElementById('ltxt'); if (lt && lt.parentElement) lt.parentElement.appendChild(el);
  }
  const tips = (typeof lang !== 'undefined' && lang === 'zh') ? LOAD_TIPS_ZH : LOAD_TIPS_EN;
  const show = () => { el.style.opacity = '0'; setTimeout(() => { el.textContent = tips[_tipIdx % tips.length]; _tipIdx++; el.style.opacity = '1'; }, 400); };
  show();
  _tipTimer = setInterval(show, 3500);
}
function stopLoadTips() { if (_tipTimer) { clearInterval(_tipTimer); _tipTimer = null; } const el = document.getElementById('ltip'); if (el) el.textContent = ''; }
function loadDone() { const w = document.getElementById('lbarWrap'); if (w) w.style.display = 'none'; stopLoadTips(); }
function unload() { document.getElementById('loader').classList.remove('on'); loadDone(); }
// Unified toast notification is imported from shared utils.js
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.id === 'locIn') doSearch(); });
renderList();
setTimeout(testNet, 2000);
initLang();

function generateMain() {
  generate();
}
let _pendingDownload = null;
function gate(fn) {
  if (typeof fn === 'function') fn();
}
// ── Onboarding / help tutorial ──
const HELP_STEPS = [
  ['01',
    { en: 'Check OSM connection', zh: '检查 OSM 连接' },
    { en: 'When you close this, wait for the green light "OSM reachable ✓" at the top-left before generating. If many people are online it may be busy — just try again in a moment.', zh: '关闭后，先等左上角亮起绿灯「OSM reachable ✓」再生成。如果同时在线人数多，可能会繁忙出错，稍等片刻再试即可。' }
  ],
  ['02',
    { en: 'Locate your site', zh: '定位场地位置' },
    { en: 'Search an address, or click anywhere on the map to drop a pin. Adjust the radius slider (200 m – 2 km).', zh: '搜索地址，或直接点击地图落点。用滑块调整分析半径。' }
  ],
  ['03',
    { en: 'Choose & Generate', zh: '勾选并生成' },
    { en: 'Tick the analysis types you want, then press GENERATE.', zh: '勾选需要的分析类型，点击 GENERATE。' }
  ],
  ['04',
    { en: 'Export Results', zh: '导出分析图纸' },
    { en: 'Recolor with themes, then download a Report PDF, Portfolio Board, or per-diagram PDF / SVG.', zh: '可换配色，导出报告 PDF、作品集版面，或单张图 of PDF / SVG。' }
  ],
];
function renderHelpSteps() {
  const box = document.getElementById('helpSteps'); if (!box) return;
  box.innerHTML = HELP_STEPS.map(s => {
    const title = lang === 'zh' ? s[1].zh : s[1].en;
    const desc = lang === 'zh' ? s[2].zh : s[2].en;
    return '<div style="display:flex;gap:16px;padding:13px 0;border-top:1px solid #EEECE6">'
      + '<div style="font-family:\'Noto Sans\', \'Noto Sans SC\', sans-serif;font-size:15px;font-weight:700;color:#C0392B;flex-shrink:0;width:24px">' + s[0] + '</div>'
      + '<div><div style="font-size:14px;font-weight:700;color:#1A1917;margin-bottom:3px">' + title + '</div>'
      + '<div style="font-size:12px;color:#6A675E;line-height:1.5">' + desc + '</div></div></div>';
  }).join('');
}
function openHelp() { renderHelpSteps(); var d = document.getElementById('helpDont'); if (d) { try { d.checked = localStorage.getItem('sa_help_optout') === '1'; } catch (e) { } } document.getElementById('helpModal').style.display = 'flex'; }
// One-tap demo: a beautiful site, the 4 free analyses, generate immediately
function tryExample() {
  closeHelp();
  sLat = 48.85664; sLng = 2.34703; sName = lang === 'zh' ? '巴黎西岱岛' : 'Pont au Change, Paris'; curR = 1200; // Île de la Cité, Paris 4e
  try { map.setView([sLat, sLng], 14); } catch (e) { }
  dropPin && dropPin();
  const h = document.getElementById('hint'); if (h) h.style.opacity = '0';
  ANALYSES.forEach(a => a.on = FREE_IDS.indexOf(a.id) >= 0);
  renderList();
  toast(lang === 'zh' ? '示例：巴黎西岱岛 · 正在生成' : 'Demo: Paris, Île de la Cité · generating');
  setTimeout(() => { generate(); }, 600);
}
function closeHelp() {
  const dont = document.getElementById('helpDont');
  try {
    if (dont && dont.checked) localStorage.setItem('sa_help_optout', '1');
    else localStorage.removeItem('sa_help_optout');
  } catch (e) { }
  document.getElementById('helpModal').style.display = 'none';
  // After tutorial: run an OSM connectivity test and nudge the user
  toast(lang === 'zh' ? '测试 OSM 连接中... 生成前请等待绿灯亮起' : 'Testing OSM connection... wait for the green light ✓ before generating');
  setTimeout(testNet, 300);
}
function openContact() { document.getElementById('contactModal').style.display = 'flex'; }
function closeContact() { document.getElementById('contactModal').style.display = 'none'; }
// Auto-show disabled
function closeTip() { _pendingDownload = null; }
function maybeTip() {/* deprecated — support now shown before download via gate() */ }

// Initialize language settings on page load
initLang();
