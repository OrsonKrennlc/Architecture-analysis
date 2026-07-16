# AntiMap Developer Wiki (Developed by ShArch Studio)

这是面向开发者和 AI 大语言模型的项目技术设计与开发 Wiki，涵盖了 **AntiMap** 的系统架构、地图投影、数据接口 API 以及各小工具的技术实现方式。

---

## 📂 项目目录结构概览 (Project Structure)

项目为纯前端静态 Web 应用，所有的数据处理、投影计算、图形绘制和图纸导出均在客户端（浏览器）中完成。

```
Architecture-analysis/
├── common/                  # 🌐 共享核心模块
│   ├── css/
│   │   └── theme.css        # 全局设计变量 (:root)、公共组件 (Toast/Loader/Switch) 样式
│   └── js/
│   │   └── utils.js         # 共享 JS 函数 (WGS84 纠偏、OSM 过滤、API 镜像列表、toast)
├── studio/                  # 🏗️ 工作室子工具集合
│   ├── general-tool/        # 主场地分析工具 (2D only, 13项扩展气候/地形分析)
│   │   ├── general-tool.html
│   │   ├── app.js           # 2D 绘图渲染核心引擎
│   │   └── styles.css       # 场地分析专用样式
│   ├── bubble-analysis/     # 物理力导向气泡功能分区图
│   ├── strategy/            # 场地策略图绘制 (基于 Leaflet 真实底图)
│   ├── floorplan/           # 墙体平面绘制与 Three.js 3D 轴测导出
│   ├── flow/                # 人行/车行流线分析
│   ├── parti/               # parti 概念体块演变序列
│   ├── planstudio/          # 总平面色彩氛围渲染
│   ├── elevation/           # 立剖面配景与空气感渲染
│   └── layout/              # 作品集 A1/A2/A3 图板排版与打印
├── index.html               # 🍎 Apple 风格半透明毛玻璃导航门户入口
├── README.md                # 面向最终用户的上手手册
└── WIKI.md                  # 开发者技术 Wiki
```

### 💡 模块复用机制 (No Reinventing the Wheel)
- **CSS 规范共享**：各工作室子工具通过 `<link rel="stylesheet" href="../../common/css/theme.css">` 共享配色体系、字体（Inter/Space Mono/Noto Sans）和基本 UI 构件（返回主页 `.home-btn`、国际化切换 `.lang-switch`、弹出框 `.toast`）。
- **JS 工具共享**：通过 `<script src="../../common/js/utils.js"></script>` 共享坐标投影变换、OSM 标签特征过滤、以及统一的 Overpass 镜像网络请求。

---

## 📐 地图投影与坐标系统一 (Map Projection)

为了保证分析图卡片、Leaflet 地图以及导出的 SVG 叠合图纸之间 **0 误差像素级对齐**，项目统一采用标准 Web 墨卡托投影 (WGS84 / EPSG:3857)。

### 1. 墨卡托坐标转换公式
核心转换函数为 `latLngToMeters(lat, lng)`，将球面经纬度转换为平面墨卡托投影平面坐标（单位：米）：
$$x = R \cdot \lambda = R \cdot \text{lng} \cdot \frac{\pi}{180}$$
$$y = R \cdot \ln\left[\tan\left(\frac{\pi}{4} + \frac{\phi}{2}\right)\right]$$
其中地球半径 $R \approx 6378137.0$ 米。代码中通过 `20037508.34`（即 $R \cdot \pi$）来实现高精度拟合：
```javascript
function latLngToMeters(lat, lng) {
  const x = lng * 20037508.34 / 180;
  let y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
  y = y * 20037508.34 / 180;
  return [x, y];
}
```

### 2. 画布投影射
在通用绘制函数 `proj(lat, lng, b)` 与图纸叠加渲染函数 `px(lat, lon)` 中，利用选定场地半径对应的边界盒 `b` (Bounding Box)，通过极差归一化计算像素坐标：
```javascript
// 场地渲染投影 (带 PAD 避让外框)
function proj(lat, lng, b) {
  const [mx, my] = latLngToMeters(lat, lng);
  const [minX, minY] = latLngToMeters(b.mnLat, b.mnLng);
  const [maxX, maxY] = latLngToMeters(b.mxLat, b.mxLng);
  const x = PAD + (mx - minX) / (maxX - minX) * (W - PAD * 2);
  const y = PAD + (maxY - my) / (maxY - minY) * (H - PAD * 2);
  return [x, y];
}
```

### 3. 国内火星坐标纠偏
若输入源（如国内地图或地址搜索）包含 GCJ-02 偏移，可开启 `gcj02towgs84(lat, lng)` 纠偏函数，反解出真实的 WGS84 坐标，防止与严格要求 WGS84 的 OSM 数据产生几百米的平移错位。

---

## 🌐 数据 API 接口

### 1. OpenStreetMap (Overpass API)
- **作用**：获取场地的建筑轮廓、道路线网、水体绿化及 POI 设施。
- **合并查询 (Bundled Query)**：为避免 Rate Limit，在 `general-tool/app.js` 的 `generate()` 中，根据勾选的图层拼接为一条 Overpass QL。例如：
  `[out:json][timeout:60];(way["highway"](bbox);node["amenity"](bbox););out geom;`
- **CORS 镜像容灾**：定义于 `common/js/utils.js` 中的 `SHARED_OVERPASS_ENDPOINTS` 列表，首选配置了对跨域支持最完备且返回 200 OK 的 **`maps.mail.ru` 镜像源**，自动绕过官方 `overpass-api.de` 常发的 406 阻断。

### 2. Nominatim Geocoding API
- **作用**：提供地名搜索坐标以及逆地理编码（解析大头针所在城市/区域名称）。
- **注意**：请求头中必需携带 `Accept-Language` 且**禁止**手动协商 `Accept: application/json`，否则会被 Nominatim 服务器层拦截。

### 3. Open-Meteo Climate Archive API
- **作用**：驱动气候分析图（温度 `climtemp`、降水 `climprecip`、云量 `climover`、日照 `climday`、辐射 `climsolar`）。
- **实现**：拉取该坐标点 2014-2023 共 10 年的历史气象档案，本地自动计算 12 个月的均值 norms，渲染为美观的折线与柱状 SVG 图表。

### 4. Open-Meteo Elevation API (Copernicus DEM)
- **作用**：获取等高线图 (`contour`) 和坡向分析 (`aspect`)。
- **等高线算法**：请求 10 $\times$ 10 的高程格网，在前端利用 **Marching Squares (行进立方格/等值线生成)** 算法根据高程断点插值生成闭合折线，实现无后端、轻量级等高线图。

---

## 🏗️ 9 个工作室小工具的实现方式 (Studio Tools)

### 1. 场地策略 (Site Strategy)
- **架构**：Leaflet.js + SVG 叠加画布。
- **机制**：在真实墨卡托瓦片上加载数据。通过绘制状态机，捕获鼠标指针在屏幕坐标上的拖拽，生成对应的轴线矢量、视锥扇形、流线箭头，最终转换为 SVG 节点进行输出。

### 2. 概念泡泡图 (Bubble Diagram)
- **架构**：纯前端 JS 物理力导向引擎。
- **机制**：在画布内部利用库仑定律计算气泡间的排斥力，利用胡克定律计算连线气泡间的吸引力。通过 `requestAnimationFrame` 不断更新气泡 $(x, y)$，直到力系达到动平衡后静止。支持导出带透明通道的 2K 高清 PNG。

### 3. parti 概念演变 (Parti Studio)
- **架构**：等轴测投影几何变换 (Isometric Math)。
- **机制**：将三维方盒或圆柱的 8 个顶点三维坐标 $(X, Y, Z)$，通过 $30^\circ$ 等轴测变换矩阵投影至二维屏幕：
  $$x_{\text{screen}} = (x - y) \cdot \cos(30^\circ)$$
  $$y_{\text{screen}} = (x + y) \cdot \sin(30^\circ) - z$$
  记录每一步的操作类型（分割、升起、桥接）和操作前后的体块拓扑，形成有序的步骤数组。

### 4. 平面绘制 (Floorplan / AXO)
- **架构**：Three.js + 2D SVG。
- **机制**：2D 视图下利用网格捕获墙体控制点画线；3D 视图下调用 Three.js 的 `ExtrudeGeometry`，将 2D 闭合轮廓沿着 Z 轴挤出为立体墙壁，并加载标准三维家具网格 (GLTF/JSON)，支持平行光正交投影导出 AXO 轴测。

### 5. 总平上色 (Plan Render)
- **架构**：HTML5 Canvas 2D。
- **机制**：提供基于图层混合的油漆桶工具。在 Canvas 像素矩阵上执行 **Flood Fill (种子填充算法)** 识别线条闭合区域，进行指定十六进制颜色或贴图花纹填充。

### 6. 立剖面渲染 (Elevation / Section)
- **架构**：Canvas 2D 笔触渲染。
- **机制**：内置简易立剖面线稿识别，允许用户在指定高度绘制剖切线，加载树木、人物、云彩等配景笔触贴图，并进行多层线性渐变渲染，模拟空气透视感 (Atmospheric Perspective)。

### 7. 作品集排版 (Portfolio Layout)
- **架构**：SVG 容器排版 + Print Stylesheets。
- **机制**：预置 A1/A2/A3 画幅比例。用户拖入的分析图以 `<image>` 或直接内联 `<svg>` 形式拼装。在 CSS 中定义 `@media print { body { width: A3_width } }`，绕过浏览器的导出限制，实现高清矢量的 PDF 打印。

---

## 💡 开发与扩展指南

### 如何添加一个新的 2D 分析图层
1. **注册 ID**：在 `studio/general-tool/app.js` 的 `ANALYSES` 数组中添加你的新图层（如 `my_layer`），配置 `id`, `name`, `name_zh` 并打上 `tag: 'OSM'`。
2. **色板配置**：在 `SCH` 配色字典中，为你的图层 ID 配置 `Warm`、`Cool`、`Mono` 状态下的配色方案（包括建筑物填充色、边线色、不透明度等）。
3. **编写绘制函数**：在 `app.js` 中编写 `drawMyLayer(data, sc)`，利用 `proj` 计算点位，拼接 SVG 路径，并返回经过 `wrap()` 包装后的 SVG 字符串。
4. **添加分发分支**：在 `renderRaw()` 分发器中拦截你的图层 ID，分发调用 `drawMyLayer`。
