# AntiMap · 建筑前期分析与制图工具集 (Developed by ShArch Studio)

> 🚀 **面向建筑、规划与景观设计的一体化轻量级前期分析与概念制图工具**
>
> **AntiMap** 是由 **ShArch Studio (ShArch 工作室)** 开发的一套纯前端运行、免安装、无水印的建筑前期场地分析与概念制图工具箱。**工具集制作的初衷是让 AI 带来的平权回归其本质**，通过将设计权力交还给设计师本身，提供基于 OpenStreetMap 的 2D 场地数据抓取分析、物理力导向泡泡图、三维等轴测概念演变、多层平剖面与总平色彩研究以及作品集排版导出功能，帮助设计师在浏览器中一键完成“场地到图板”的全套前期制图。

---

## 🎨 核心模块与产品功能

本仓库集成九大制图工具，每个工具均遵循统一的视觉语言（冷灰底色 + 经典深蓝 `#2563EB` 品牌色）并深度适配中英双语切换（共享 `localStorage` 偏好设置）。

### 1. 场地分析工具 (Site Analysis)
位于 `studio/general-tool/`，是场地前期分析的核心模块。
- **18 种 2D 分析图层**：包括道路与街道、功能分区、绿化与水体、空间节点、日照风向轨迹、城市肌理、交通可达性等。
- **13 项扩展分析图 (v1.5 新增)**：
  - **气候分析（5 种）**：基于 Open-Meteo Archive API 获取 10 年历史 normals 数据，本地自动聚合生成月均温曲线、降水量、云量百分比、日照时长及太阳短波辐射月度图表。
  - **地形分析（2 种）**：基于 Open-Meteo Elevation API (Copernicus GLO-90 DEM) 提取高程，使用 marching squares 算法与双线性插值平滑，自动生成高精度等高线图及坡向分析。
  - **地理与物理场分析（6 种）**：包含城市区位（GeoJSON 世界边界定位）、街道方位玫瑰图、服务设施沃罗诺伊图、场地平面、建筑流场风向流线积分以及建筑高度体量表达。
- **坐标纠偏与 WGS84 投影**：内置国内火星坐标系 (GCJ-02/BD-09) 转换，使用标准的 Web Mercator (EPSG:3857) 算法，确保矢量路网与卫星瓦片达成 0 误差像素级对齐。
- **全字段配色自定义编辑器**：新增占屏 70% 高度的配色编辑器，支持按 Warm (暖色)、Cool (冷色) 与 Mono (单色) 配色逐字段拾取微调，自动更新卡片及缩略图，且支持方案重置与 LocalStorage 跨会话持久化。

### 2. 交互式场地策略 (Site Strategy)
位于 `studio/strategy/`。
- 支持在真实的 Leaflet 地图底图上直接勾画竞赛级场地策略，自由绘制主次出入口、视线视锥、功能分区与人车流线。
- 可一键导出为矢量 SVG 与高清 PNG。

### 3. 概念泡泡图 (Bubble Diagram)
位于 `studio/bubble-analysis/`。
- 内置物理模拟引擎，基于排斥力、连线引力和库仑定律，自动排列空间 program 的邻接关系。
- 支持气泡属性编辑、色系选择及物理节点拖拽调节，轻松理清平面功能流线。

### 4. parti 概念演变 (Parti Studio)
位于 `studio/parti/`。
- BIG / OMA 风格等轴测体块生成器。支持一键置入方盒、圆柱、多边形等基础体块。
- 支持链式编辑与历史版本记录，可在体块上执行分割、移动、抬升、旋转、缩放、挖中庭、架连桥等高级操作，自动记录概念演变的每一步。

### 5. 多楼层平面绘制 (Floorplan / AXO)
位于 `studio/floorplan/`。
- 纯前端二维墙体、门窗、房间与家具绘制，支持多楼层及轴网对齐。
- 内置 Three.js r128，支持一键将平面方案拉伸为 3D 轴测模型并以不同图形样式导出。

### 6. 总平上色研究 (Plan Render)
位于 `studio/planstudio/`。
- 将总平面底图快速转换为高级色彩研究渲染图。
- 内置智能色彩吸管与图示材质模板，可在浏览器中秒级完成总平氛围渲染。

### 7. 立面与剖面渲染 (Elevation / Section)
位于 `studio/elevation/`。
- 提供墙面材质填充、地面处理、天空背景氛围、远近景配景（树木、人物、车辆）自绘。
- 支持一键组合出层次丰富的立面和剖面分析图。

### 8. 流线分析图绘制 (Flow Analysis)
位于 `studio/flow/`。
- 专门针对人行流线、车行流线、后勤物流、消防通道及景观游线设计的 SVG 绘制板。
- 内置多种箭头线型、粗细与渐变主题。

### 9. 作品集图板排版 (Portfolio Layout)
位于 `studio/layout/`。
- 专业的 A1 / A2 / A3 图纸排版导图面板，内置多种竞赛级排版模板。
- 支持将前面生成的分析图卡片批量拖入排版，直接导出打印就绪的高清 PDF/PNG。

---

## 🏗️ 项目架构与技术亮点

项目遵循标准的前端模块化与“不要重复造轮子”的工程原则进行了结构重构：

```
Architecture-analysis/
├── common/                  # 🌐 共享核心模块
│   ├── css/
│   │   └── theme.css        # 全局 `:root` 设计变量、字体、Toast/Loader/按钮等共享样式
│   └── js/
│   │   └── utils.js         # 共享 js 库 (坐标纠偏、OSM 过滤器、统一 API 请求等)
├── studio/                  # 🏗️ 工作室子项目集合
│   ├── general-tool/        # 主场地分析工具 (HTML, 专属 styles 及 app.js)
│   ├── bubble-analysis/     # 物理力导向气泡分析图
│   ├── strategy/            # 场地策略绘制
│   ├── floorplan/           # 多楼层平面与轴测 Three.js
│   ├── flow/                # 流线分析绘制
│   ├── parti/               # parti 体块演变
│   ├── planstudio/          # 总平面色彩渲染
│   ├── elevation/           # 立剖面氛围渲染
│   └── layout/              # 作品集图板排版
├── index.html               # 🍎 Apple 风格半透明毛玻璃导航门户 (SPA 入口)
├── README.md                # 用户上手手册
└── WIKI.md                  # 开发者技术与调试 Wiki
```

### 💡 模块共享与防重复机制
- 所有的坐标转化（WGS84、火星纠偏等）、OSM 数据过滤（绿地、水体判定）、颜色混合计算与 `toast` 通知逻辑，均已抽离至 `common/js/utils.js` 统一注入全局。
- 界面控件与配色盘共享同一变量体系 `common/css/theme.css`。

### 🌍 统一的网络请求与 API 镜像机制
- 浏览器直连 OpenStreetMap Overpass API 时，若主服务器 `overpass-api.de` 出现 406 CORS 报错或限流，系统会自动启用 `common/js/utils.js` 中的**统一接口镜像调度系统**。
- 请求优先流向高可用、带 `Access-Control-Allow-Origin: *` 头部的 `maps.mail.ru` 镜像源，大幅提高国内和移动网络下的选址生成成功率。

---

## 🚀 快速上手

本程序为纯静态应用，无需任何 Node.js 后端服务。但由于 OSM Nominatim 及 Overpass API 在缺少 Referer 时会返回 406 CORS 错误，**必须使用本地静态服务器启动**（直接双击 HTML 文件仅能浏览门户页面，数据请求将失败）。

### 本地启动步骤
1. 将本仓库克隆至本地：
   ```bash
   git clone https://github.com/OrsonKrennlc/Architecture-analysis.git
   ```
2. 使用 Python 快速拉起本地静态服务器（推荐）：
   ```bash
   # 在项目根目录下执行
   python -m http.server 8000
   ```
   或者使用 VS Code 的 `Live Server` 插件打开根目录。
3. 在浏览器中访问：`http://localhost:8000/index.html`。
4. 在门户主页中选择你需要的工具，点击 `OPEN →` 即可开始制图。

---

## 👥 参与贡献与开发者 Wiki
- 若你想了解 2D/3D 渲染细节、Overpass QL 查询合并机制、地形/气候 API 拼接或本地扩展添加一种新的分析图层，请仔细阅读 [WIKI.md](WIKI.md)。
- 本项目在场地数据分析图的设计思路上参考了 [easymap.uk](https://easymap.uk/)，向开源社区的创作者们致以诚挚的谢意。
