# ShArch 生成器 (ShArch Generator)

> 🚀 **高效、美观的建筑场地分析与制图工具**  
> 一键获取 OpenStreetMap (OSM) 真实城市数据，快速生成高颜值的 2D 场地分析图与 3D 城市体量模型，支持多种矢量/图片格式导出，助力建筑学、城市规划和景观设计前期研究。

---

## 💡 项目致谢
本仓库在设计与功能思路上参考了制图工具网站 [easymap.uk](https://easymap.uk/)，并在此基础上针对国内制图习惯、中英双语支持、3D 城市体量分析及导出精度进行了本地化重构与功能扩充。

---

## ✨ 核心特性

- **🌍 真实数据源**：基于 OpenStreetMap 实时 API (Overpass API) 抓取全球任何区域的真实路网、绿化、水体、建筑物以及 POI 兴趣点数据。
- **📊 18 种 2D 场地分析类型**：涵盖道路街道、功能分区、绿化水体、节点分析、日照风向、城市区位、城市肌理、噪音分析、交通可达性等。
- **🏙️ 6 种 3D 城市体量分析**：包括素模分析、建筑高度、用地地带分区、建筑密度、阴影分析以及城市天际线剖面计算。
- **📐 灵活的图形范围**：支持圆形、圆角方形、**直角矩形 (New)** 以及鼠标自由绘制的**多边形场地边界**。
- **🎨 极简的配色系统**：内置 Warm (暖色)、Cool (冷色)、Mono (单色) 配色，并支持自定义全局主色 (Accent Color) 实时重绘所有图纸。
- **🎛️ 分析图配色自定义编辑器 (v1.4.2 New)**：general-tool 左侧工具栏的"自定义配色"模块新增 **EDIT ✎** 按钮，弹出占屏 70% 高度的配色编辑器：先选择某项分析图（如道路、绿地、气候、地形等），再选择 Warm/Cool/Mono 方案，即可逐字段拾取该方案下的所有配色（建筑物填充色、边框色、文字色、不透明度等），改动实时重渲染对应卡片并同步 `.dot` 缩略图渐变；自定义方案角标显示红色徽标，支持 **RESET THIS SCHEME**（恢复当前方案默认色）与 **RESET ALL**（一键全部恢复）。所有自定义状态通过 `localStorage['em_custom_sch']` 跨会话持久化，覆盖全部 13 项分析图类型 + 5 项气候图 + 2 项地形图。
- **🌐 general-tool 新增 13 项分析图 (v1.4.2 New)**：参考 `参考.html` 实现，为 [studio/general-tool/](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/general-tool/general-tool.html) 补齐三大类分析图，全部纯前端运行、支持中英双语图例：
  - **气候分析（5 种，基于 Open-Meteo Archive API 10 年 normals）**：`climtemp` 月均温曲线、`climprecip` 月降水柱状、`climover` 月均云量、`climday` 月日照时长、`climsolar` 月太阳辐射。
  - **地形分析（2 种，基于 Open-Meteo Elevation API Copernicus GLO-90 DEM）**：`contour` 等高线图（marching squares 算法）、`aspect` 坡向分析（含坡度计算）。
  - **地理分析（6 种）**：`location` 城市区位图（johan/world.geo.json 国家边界）、`orientrose` 街道方位玫瑰图（极坐标直方图）、`voronoi` 沃罗诺伊图、`sitemap` 场地平面、`wind` 风向流线（streamline 积分）、`massing` 城市体量分析。
- **💾 专业格式输出**：
  - 单张卡片导出：**1080P 高清 PNG (New)**、矢量编辑 SVG（支持 AI 导入二次修改）、PDF。
  - 组合图册导出：**A4 报告 PDF**、**A3 作品集排版图纸**，以及 **3D 爆炸叠合图 (Layered Axonometric PDF)**。
- **🫧 泡泡图场地分析 (Bubble Analysis) (New)**：内置完全独立的泡泡图互动生成引擎，支持物理力导向布局、关系线绘制、多种气泡样式及配色自定义，支持导出高分辨率无水印 PNG，帮助设计师快速梳理建筑功能关系。
- **🏗️ 七大建筑工作室工具 (Studio Tools) (New)**：在 `studio/` 目录下集成从概念到图板的全流程建筑制图子工具，全部纯前端运行、无水印、与主项目配色统一互联：
  - **Site Strategy 场地策略**：在真实底图上绘制竞赛级出入口、视线视锥、分区与流线策略图。
  - **Floorplan / AXO 平面绘制**：绘制墙、房间、家具、多楼层并导出轴测视图。
  - **Flow Analysis 流线分析**：人流、车流、后勤、消防与景观游线表达。
  - **Parti Studio 概念演变**：BIG/OMA 风格的等轴测体块生成序列图，链式操作或一键预设。
  - **Plan Render 总平上色**：将底图快速转换为高级总平色彩研究。
  - **Elevation / Section 立面与剖面渲染**：材质填充、地面、天空氛围与配景表达。
  - **Portfolio Layout 作品集排版**：A1/A2/A3 图板、策略模板与打印就绪导出。
- **🌐 全站中英双语切换 (New)**：主项目与全部 7 个 Studio 工具均已接入统一的 `em_lang` 语言偏好系统，顶栏一键切换中/EN，所有界面文本、按钮、提示、Toast 消息与动态生成的图例标签均实时双语响应，偏好持久化于 `localStorage`，跨页面保持一致。
- **🎨 Studio UI 统一设计语言 (New)**：7 个 Studio 工具的 UI 外观（侧栏、按钮、Toast、字体、品牌标识）全部对齐主项目 `styles.css` 的冷灰 + 深蓝（`#2563EB`）配色系统，品牌统一为 ShArch / SA 标识，同时**完整保留各工具内部的功能绘图配色盘**（THEMES / SCHEMES / PALETTES）不受影响。
- **🏠 全站统一返回主页导航 (v1.4.1 New)**：所有 9 个工具（7 个 Studio 工具 + bubble-analysis + general-tool）均在其左上角标题栏（紧跟 ShArch 品牌标识后）新增蓝色高亮 "← Home 主页" 按钮，取代原 v1.3 的左下角悬浮 "← ShArch" 返回键。按钮接入了各工具的 i18n 系统，切换中英语言时文字自动同步更新。
- **🍎 Apple 风格导航主页 (v1.4 New)**：`index.html` 重写为 Apple 设计语言的工作室导航门户——半透明毛玻璃顶栏、流体弹簧动效（critically-damped spring `cubic-bezier(0.22, 1, 0.36, 1)`）、9 个工具卡片网格（每张卡片携带独立主题色与发光辉光），并完整支持 `prefers-reduced-motion` / `prefers-reduced-transparency` / `prefers-contrast: more` 三档无障碍降级。原主分析工具迁移至 [studio/general-tool/general-tool.html](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/general-tool/general-tool.html)，作为主工具卡片呈现。

---

## 🛠️ 分析图类型一览

### 2D 场地分析
| 分析图 ID | 分析名称 (中/EN) | 包含要素及说明 |
| :--- | :--- | :--- |
| `roads` | **道路与街道** / Roads & Streets | 绘制主干道、次干道、人行通道及步道系统 |
| `landuse` | **功能分区** / Functional Areas | 根据建筑性质渲染居住、商业、工业、绿地等分区 |
| `gw` | **绿地与水体** / Green & Water | 公园、森林、草地、河流、湖泊及海岸线绘制 |
| `nodes` | **节点分析** / Node Analysis | 识别城市枢纽、主要 POI 节点并自动生成关联轴线 |
| `sun` | **日照与风向** / Sun Path & Wind | 计算当地纬度下的冬至、夏至、春秋分太阳轨迹及主导风向 |
| `sat` | **卫星底图** / Satellite View | 航空脱色底图，提供微弱暗色调背景 |
| `context` | **城市区位** / City Context | 突出显示场地在更大城市范围内的几何区位 |
| `fabric` | **城市肌理** / Urban Fabric | 展现建筑实体 (Mass) 与道路外部空间 (Void) 的二元对比 |
| `orient` | **方位分析** / Orientation | 美观的指北针与经纬度元数据定位 |
| `noise` | **噪音分析** / Noise Analysis | 模拟道路交通干线的噪音影响缓冲区范围 |
| `vitality` | **街道活力** / Street Vitality | 统计商业、文化、交通、绿化等公共设施的活动热度 |
| `transit` | **交通可达性** / Transit Access | 模拟步行 5 / 10 / 15 分钟可达的公交、地铁站分布 |
| `access` | **可达性分析** / Access Analysis | 以场地为中心生成步行等时圈 (Isochrone) |
| `density` | **建筑密度** / Building Density | 估算建筑容积率与覆盖密度 |
| `pedestrian` | **步行网络** / Pedestrian Network | 人行步道、广场及自行车道网络分析 |
| `poiheat` | **兴趣点热力** / POI Density Heat | 城市公共服务设施的密度聚类热力图 |
| `poitype` | **兴趣点分类** / POI Type Map | 餐饮、购物、教育、医疗、休闲等 POI 分类落点图 |
| `combined` | **综合叠加** / Combined Overlay | 一键将路网、绿地、水体及建筑足迹合为一张底图 |

### 3D 城市体量分析
- **素模分析 (White Model)**：白模形态与精准日光投影。
- **建筑高度 (Height Model)**：按建筑高度色阶区分低层、多层、高层及超高层地标。
- **地带分区 (Zoning Model)**：三维形态下的功能用地及混用空间表达。
- **密度分析 (Density Model)**：建筑空间占有率及开发强度表达。
- **阴影分析 (Solar Shadow)**：支持自定义一天中 24 小时任意时间点的光影变化。
- **天际线分析 (Skyline Model)**：一键对当前视角范围内的城市三维高度进行切片，生成东西向天际线立面图。

### general-tool 专属扩展分析图 (v1.4.2)
仅在 [studio/general-tool/](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/general-tool/general-tool.html) 中可用，纯前端调用第三方公开 API 实现。

| 分析图 ID | 分析名称 (中/EN) | 数据源 | 说明 |
| :--- | :--- | :--- | :--- |
| `climtemp` | **气候·月均温** / Climate · Monthly Temperature | Open-Meteo Archive API (10 年 normals) | 12 月平均气温曲线图（240×268 SVG） |
| `climprecip` | **气候·月降水** / Climate · Monthly Precipitation | 同上 | 12 月累计降水柱状图 |
| `climover` | **气候·月云量** / Climate · Cloud Cover | 同上 | 12 月平均云量百分比 |
| `climday` | **气候·月日照** / Climate · Daylight Duration | 同上 | 12 月日照时长（小时） |
| `climsolar` | **气候·月辐射** / Climate · Solar Radiation | 同上 | 12 月短波辐射量（W/m²） |
| `contour` | **等高线** / Contour Lines | Open-Meteo Elevation API (Copernicus GLO-90) | DEM 高程数据 marching squares 等高线生成（240×240 SVG） |
| `aspect` | **坡向分析** / Aspect Analysis | 同上 | 坡度方向 + 坡度角计算 |
| `location` | **城市区位** / City Location | johan/world.geo.json | 国家边界轮廓 + 场地定位标记 |
| `orientrose` | **方位玫瑰图** / Orientation Rose | OSM 路网数据 | 街道方位分布极坐标直方图 |
| `voronoi` | **沃罗诺伊图** / Voronoi Diagram | OSM POI 数据 | 网格化最近邻分配算法 |
| `sitemap` | **场地平面** / Site Map | OSM POI + 建筑数据 | 简化场地总平面图 |
| `wind` | **风向流线** / Wind Flow | OSM 建筑数据 | 基于建筑布局的风向流线积分 |
| `massing` | **城市体量** / Urban Massing | OSM 建筑数据 | 平面化的建筑体量高度表达 |

---

## 📈 历代版本更新内容 (Changelog)

### v1.4.2
- **🌐 general-tool 新增 13 项扩展分析图**：参考 `参考.html` 实现，为 [studio/general-tool/general-tool.html](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/general-tool/general-tool.html) 补齐三大类分析图，全部纯前端运行、支持中英双语图例：
  - **气候分析（5 种）**：`climtemp` 月均温、`climprecip` 月降水、`climover` 月云量、`climday` 月日照时长、`climsolar` 月辐射。基于 Open-Meteo Archive API 拉取 2014-2023 共 10 年的历史 normals 数据，本地聚合为 12 月气候图表。`generate()` 新增 `needClim` 判定分支，仅勾选气候图时即使 OSM 路网为空也能成功出图。
  - **地形分析（2 种）**：`contour` 等高线（基于 Open-Meteo Elevation API Copernicus GLO-90 DEM，使用 marching squares 算法生成等高线 + 双线性插值平滑）、`aspect` 坡向分析（计算每点坡度方向与角度）。`generate()` 新增 `needTerr` 判定分支。
  - **地理分析（6 种）**：`location` 城市区位图（johan/world.geo.json 国家边界轮廓 + 场地定位标记）、`orientrose` 街道方位玫瑰图（极坐标直方图统计 OSM 路网街道方位分布）、`voronoi` 沃罗诺伊图（基于 OSM POI 的网格化最近邻分配算法）、`sitemap` 场地平面（简化场地总平面）、`wind` 风向流线（streamline 积分可视化建筑布局对风场的影响）、`massing` 城市体量（平面化建筑体量高度表达）。
- **🎛️ 分析图配色自定义编辑器**：general-tool 左侧工具栏的"自定义配色"模块新增 **EDIT ✎** 按钮，弹出占屏 70% 高度的配色编辑器：
  - **三阶段交互**：选择分析图 → 选择 Warm/Cool/Mono 方案 → 逐字段拾取颜色（如建筑物填充色、边框色、文字色、不透明度等）
  - **实时重渲染**：拖动颜色拾取器即时重绘对应卡片，并同步更新 `.dot` 缩略图渐变
  - **自定义状态指示**：已修改的方案在色点右上角显示红色徽标
  - **双层级重置**：`RESET THIS SCHEME` 仅恢复当前方案默认色；`RESET ALL` 一键清空所有自定义
  - **持久化存储**：所有自定义状态通过 `localStorage['em_custom_sch']` 跨会话保留
  - **统一接管**：新增 `getScheme(id, sc)` 作为全局配色查询入口（自定义优先 → 默认回退），覆盖全部 30+ 处 `SCH/CSCH/TSCH` 引用；`_schemePrevPair(id, si)` 动态生成卡片缩略图渐变（取代原硬编码 PREV 数组）
- **🎨 工具栏字体一致性**：统一了"画面元素控制"、"导出背景颜色"、"配色方案"三个模块的字体大小至 11px（label）与 12px（按钮），与上方其他模块对齐
- **🈚 纯中文标签**：将 `ACCENT COLOR · 主色` / `CUSTOM COLORS · 自定义配色` 等中英混排标签统一为纯中文，去除冗余英文

### v1.4.1
- **🏠 全站统一返回主页导航**：重构所有工具的回链交互，将原 v1.3 的左下角悬浮 "← ShArch" 返回键统一迁移至**左上角标题栏**（紧跟 ShArch 品牌标识后），所有 9 个工具页面（7 个 Studio 工具 + bubble-analysis + general-tool）全部接入：
  - **位置统一**：返回按钮统一放置在标题栏 ShArch 品牌名之后，遵循主流应用 "左上角返回" 的导航惯例，避免悬浮按钮遮挡画布内容
  - **样式统一**：所有按钮采用蓝色高亮样式（`background:var(--accent,#2563EB); color:#fff`），与 Studio UI 统一设计语言保持一致
  - **双语支持**：按钮文字接入各工具的 i18n 系统（`data-xx-i18n="home_btn"`），中文显示 "← 主页"、英文显示 "← Home"，切换语言时自动同步
  - **覆盖扩展**：本次新增了此前未配置返回按钮的 [bubble-analysis.html](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/bubble-analysis/bubble-analysis.html) 与 [general-tool.html](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/general-tool/general-tool.html)，实现全站 9 个工具页面返回导航 100% 覆盖

### v1.4 (当前版本)
- **🍎 `index.html` 重写为 Apple 风格导航门户**：原作为主分析工具入口的 `index.html` 被重写为纯前端的工作室导航门户页，作为 9 项工具的统一入口与品牌封面：
  - **毛玻璃材质层级**：顶栏与卡片均采用 `backdrop-filter: blur() saturate()` 半透明材质，配合 `body::before` 的多层径向渐变 mesh 营造空间深度，遵循 Apple "translucency conveys hierarchy" 原则
  - **流体弹簧动效**：全局采用单一 critically-damped 弹簧曲线 `cubic-bezier(0.22, 1, 0.36, 1)`（对应 damping 1.0 / response ~0.35s 的 Apple 默认 UI 弹簧），卡片入场错峰动画（60ms 间隔），hover 即时 `translateY(-4px)` 反馈，press 即时 `scale(0.985)` 回弹
  - **9 张工具卡片**：每张卡片携带独立 `--card-accent` CSS 变量（蓝/紫/青/绿/红/橙/靛等），驱动图标底色、辉光（`filter: blur(56px)` 的软投影）、`OPEN →` 引导文字配色；主分析工具卡片标记 `featured` 高亮徽章
  - **光学排版**：Hero 标题使用 `clamp(2.5rem, 6vw, 4.5rem)` 流体字号 + 负字距 `-0.03em` + 紧行高 `1.05`；正文 `font-optical-sizing: auto`；品牌副标识、技术元数据、标签使用 Space Mono 等宽字体强化"制图工具"的工程感
  - **三档无障碍降级**：完整支持 `prefers-reduced-motion: reduce`（关闭动画与平滑滚动）、`prefers-reduced-transparency: reduce`（毛玻璃降级为纯白）、`prefers-contrast: more`（加深边框与三级文字色）
  - **共享 i18n 系统**：复用全站 `em_lang` localStorage 键，顶栏中/EN 胶囊开关与所有 Studio 工具保持语言偏好一致，切换时弹出玻璃材质 Toast 提示
  - **修复路径 Bug**：修正原 `index.html` 中泡泡图链接缺少 `studio/` 前缀的路径错误（`bubble-analysis/...` → `studio/bubble-analysis/...`）
- **🏗️ 主分析工具迁移至 `studio/general-tool/`**：原 `index.html + app.js` 的完整场地分析功能（18 种 2D 图层 + 6 种 3D 城市体量 + 多格式导出）正式以 [studio/general-tool/general-tool.html](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/general-tool/general-tool.html) 作为独立入口，与导航门户解耦。`styles.css` 与 `app.js` 仍保留在根目录作为主项目资源（`general-tool` 内为副本）。

### v1.3.1
- **🌐 全站中英双语 i18n 系统**：为全部 7 个 Studio 工具新增独立的中英双语切换控件与翻译字典（`FL_I18N` / `ST_I18N` / `LY_I18N` / `FP_I18N` / `PS_I18N`），加上原有的 `EM_ZH`（立面）与 `T`（Parti）共 7 套子系统，统一共享 `localStorage` 键 `em_lang`，跨页面保持语言偏好一致。所有界面文本、按钮、提示框、Toast 消息与动态生成的图例标签均已双语化。
- **🎨 Studio UI 统一设计语言**：将 7 个 Studio 工具的 UI 外观（`:root` CSS 变量、侧栏、按钮、Toast、字体、品牌标识）全部对齐主项目 `styles.css` 的冷灰 + 深蓝（`#2563EB`）配色系统：
  - 统一品牌标识为 "ShArch" + 32×32 蓝底白字 "SA" 方块
  - 统一字体为 Inter（主体）/ Space Mono（数字与代码）
  - 统一 Toast 样式为 `padding:12px 24px; border-radius:8px; font:500 13px Inter`
  - 统一左下角 "← ShArch" 返回链接为冷灰边框 + Inter 字体（v1.4.1 起已迁移至左上角标题栏，详见 v1.4.1 更新日志）
  - **完整保留各工具内部的功能绘图配色盘**（THEMES / SCHEMES / PALETTES / matInfo）不受影响
- **🔧 OSM API 兼容性修复**：
  - 修正 `strategy.html` 中 Nominatim 与 Overpass API 的请求头，移除导致 406 报错的 `Accept: application/json` 头，仅保留 `Accept-Language`（与主项目 `app.js` 及参考站点一致）
  - 改进 `testNet()` 网络检测函数，遍历尝试所有 Overpass 端点而非仅测首个，任一可用即显示"OSM 连接正常"
  - 所有 OSM API 调用对齐主项目 `app.js` 的格式（GET + `Accept-Language`），添加超时控制与细化的错误提示（403/429/504 分别给出对应建议）
- **🗺️ 底图统一为 OSM 公共 API**：`strategy.html` 底图瓦片源从 CARTO 切换为 OSM 官方标准瓦片 (`{s}.tile.openstreetmap.org`)，Overpass 端点列表更新为 OSM 官方节点。

### v1.3
- **🏗️ 新增七大 Studio 工作室工具**：在 `studio/` 目录下集成从场地策略到作品集排版的完整建筑制图工作流，与主项目左侧工具栏无缝互联：
  - `studio/strategy/strategy.html` 场地策略图（基于 Leaflet 真实底图绘制出入口、视线、分区与流线）
  - `studio/floorplan/floorplan.html` 平面绘制与轴测导出（基于 Three.js 的多楼层墙体、家具与 AXO 视图）
  - `studio/flow/flow.html` 流线分析（人流、车流、后勤、消防、景观多类型流线表达）
  - `studio/parti/parti.html` Parti 概念演变（等轴测体块生成序列与链式操作历史）
  - `studio/planstudio/planstudio.html` 总平上色（底图快速上色为高级总平色彩研究）
  - `studio/elevation/elevation.html` 立面与剖面渲染（材质填充、地面、天空氛围与配景）
  - `studio/layout/layout.html` 作品集排版（A1/A2/A3 图板、策略模板与打印就绪导出）
- **🔗 工具栏入口扩展**：将原“Diagram Tools”区块升级为“Studio Tools”，统一收纳泡泡图与七大新工具的快捷入口，全部支持中英双语切换。
- **🌐 路径与依赖本地化**：所有 Studio 工具的第三方依赖（Leaflet、Three.js）已统一替换为与主项目一致的 CDN 引用；每个工具左下角新增悬浮“← ShArch”返回入口，与主项目形成闭环导航（v1.4.1 起该返回键已迁移至左上角标题栏，详见 v1.4.1 更新日志）。
- **♻️ 重合功能保留原实现**：主项目原有的 2D/3D 分析、A3 作品集导出 (`exportPortfolio`)、轴测叠加图等保留不变，新 `studio/layout/layout.html` 作为独立的高级排版工具并存，互不影响。
- **📁 工具独立目录**：每个 Studio 工具均独立存放在 `studio/<tool-name>/` 子文件夹中，便于后续扩展各工具的独立资源（配景素材、字体、JSON 预设等），目录结构清晰、互不干扰。

### v1.2.2
- **🫧 新增泡泡图场地分析子项目**：在 `studio/bubble-analysis/` 目录下完整复刻了高阶泡泡图 (Bubble Diagram) 生成引擎，支持物理引擎排斥与连线、多种泡泡样式与高阶属性编辑，所有高级功能完全免费解锁且无水印。
- **🎨 配色与 UI 系统融入**：将泡泡图的左侧工具栏、控制面板与主项目配色系统（冷灰色调及深蓝色主色）进行统一设计，保持一致的视觉体验。
- **🔗 工具栏无缝互联**：在主项目的左侧工具栏顶部新增了“Bubble Analysis”快捷跳转入口，支持中英双语国际化切换（v1.4 起该入口已迁移至导航门户 `index.html` 的 `TOOLS` 数组）。
- **📖 泡泡图技术 Wiki**：编写了专门的 [bubble-wiki.md](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/bubble-analysis/bubble-wiki.md)，详细阐述了泡泡图物理引擎（如斥力、引力、库仑定律模型）及 SVG 渲染层实现机制。

### v1.2.1
- **🎨 自定义导出背景**：在图面元素控制区新增“Export Background”选项。用户可为单张导出的 PNG 和 SVG 文件自由选择“Theme Default”、“Transparent (透明)”或任意自定义颜色。同时，PDF 导出页面的底色也会同步应用。
- **🌐 深度国际化支持**：进一步补全了诸如“城市肌理分析”等图纸的底层中文翻译，并优化了 SVG、PNG 与单页 PDF 导出时的文件名与图纸内大标题，使其与当前工具栏所选择的中英双语状态完全一致。
- **🧹 代码结构精简**：移除了冗余的 Help 与 Contact 模态框，清理了不必要的外部分析与追踪脚本，使得单页 HTML 更加轻量纯粹。

### v1.2
- **🗺️ SVG 与底层瓦片像素级精确对齐**：彻底重构了内部的矢量投影函数 `proj`，弃用粗略的线性插值，改为使用标准的 Web Mercator (EPSG:3857) 算法计算投影。并重写了带背景地图（Satellite, Urban Fabric 等）的渲染器 `getTileImagesSVG`，修复了无论缩放层级与偏移如何，矢量路网和背景卫星图均能做到 0 误差像素级对齐。
- **🌐 支持国内坐标系自动纠偏**：底层数据处理内置了 `coordtransform` 算法族。对于接入高德(GCJ-02)/百度(BD-09)等带有国内火星坐标偏移的底图或点位数据，系统现已默认在选点和搜索环节进行坐标清洗，将所有数据统一至绝对的 `WGS1984` 标准，彻底解决图层几百米的漂移问题。
- **☀️ 真实高精度天文日照轨迹**：废弃了原有简易且不考虑地理经度时差的硬编码太阳轨迹公式，2D 日照与风向分析图 (Sun Path & Wind) 现在由权威的 `SunCalc.js` 驱动。精确计算当前经纬度下的真太阳时与方位高度角，全面提升图纸的科研与数据有效性。
- **🎨 图表视觉细节优化**：优化了 Urban Fabric 肌理图纸中的中心场地标注（SITE）比例，将其尺寸缩小了一半，使图面更加精细不过度遮挡肌理信息。
- **🌐 界面与图例多语言完善**：在全局多语言系统基础上，新增了《导出轴测叠加 PDF》相关模态框的全面中文适配；并在左侧操作面板新增了“分析图中文图例 (Chinese Legend)”的全局独立开关，满足中英双语不同制图汇报场景的需求。

### v1.1
- **📸 1080P 高清 PNG 导出**：重构了 `svgToPng` 转换引擎，自适应画布宽高，单张卡片导出 PNG 时垂直分辨率（高度）精确达到 **1080 像素**，消除了导出图片模糊的问题。
- **✍️ 全面适配 Noto Sans 字体**：引入了 `Noto Sans` 与 `Noto Sans SC` 字体，并将所有 2D SVG 矢量图、PDF 图册、3D Skyline 剖面图及太阳高度角文本中的字体由原本粗糙的 Space Mono 升级为 Noto Sans。中英双语显示效果更加圆润、现代。
- **🧭 指南针避让重排**：将指北针从右上角（容易与圆角矩形边界重叠）移至**右下角边距**中，与左下角的比例尺对称，保证了图面整体构图的清爽美观。
- **🔳 新增“直角矩形”裁剪**：在 Diagram Shape 选项中新增 **█ Square** 图形选项，支持纯直角排版。
- **⚙️ 图面元素开关**：在左侧工具栏新增 `Diagram Elements`（图面元素控制）面板，允许用户全局勾选/取消显示**比例尺**与**指北针**，支持实时重绘。

### v1.0
- 实现基于 Leaflet 与 Maplibre GL 的双端地图定位与pin点。
- 支持 2D SVG 精准解析渲染以及 3D 白模生成。
- 引入 Warm / Cool / Mono 三大色系风格与自定义主色实时重绘机制。
- 支持 custom polygon 绘制边界自动剪裁，并实现了 Layered Axon Exploded（三维爆炸叠合图）的 A3/A4 导出。

---

## 🚀 快速上手

本项目为纯前端静态应用，无需配置复杂的后端服务器，即可在浏览器中直接运行。

### 本地运行
1. 克隆本仓库到本地：
   ```bash
   git clone https://github.com/OrsonKrennlc/Architecture-analysis.git
   ```
2. 通过静态服务器启动（推荐，OSM API 需要 HTTP Referer）：
   ```bash
   python -m http.server 8765
   ```
   然后访问 `http://localhost:8765/index.html` 进入**导航门户**，点击任意工具卡片即可进入对应工具。
3. 也可使用 VS Code 的 `Live Server` 等静态服务器插件启动以获得更佳体验。

> ⚠️ 请勿通过 `file://` 协议直接打开页面——OSM Nominatim 与 Overpass API 在无 Referer 时会拒绝请求。

---

## 📖 开发者与 AI 助手 Wiki

如果你是开发者或 AI 助手 (LLM)，请阅读 [WIKI.md](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/WIKI.md) 以快速了解本项目的系统架构、导航门户设计、2D/3D 渲染引擎实现细节、Overpass API 合并查询机制以及如何扩展新的分析图层；阅读 [bubble-wiki.md](file:///c:/Users/HP/Documents/GitHub/Architecture-analysis/studio/bubble-analysis/bubble-wiki.md) 了解泡泡图引擎的物理和图形渲染系统实现。

