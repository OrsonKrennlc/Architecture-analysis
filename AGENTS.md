# AGENTS.md — AntiMap

## 定位
AntiMap 是 ShArch Studio 开发的纯前端建筑前期分析与制图工具集（9 个 Studio 工具），基于 OSM 数据，部署于 GitHub Pages。

## 启动
```bash
python -m http.server 8000   # 项目根目录执行
# 访问 http://localhost:8000/index.html
```
必须通过本地服务器访问（OSM Overpass/Nominatim 有 CORS 限制，双击 HTML 无法完成数据请求）。

## 技术栈
- 纯静态 HTML/CSS/JS，无构建步骤、无框架
- 地图：Leaflet（strategy）、原生 Canvas/SVG（其余工具）
- 3D：Three.js r128（floorplan 轴测导出）
- API：OSM Overpass、Nominatim、Open-Meteo（气候/高程）
- 部署：GitHub Pages（`.github/workflows/deploy.yml`，push main 自动触发）
- 分析：Vercel Web Analytics（`/_vercel/insights/script.js`）

## 目录与约定
```
common/css/theme.css   → 全局 :root 变量、共享 UI 组件样式
common/js/utils.js     → 坐标纠偏、OSM 过滤器、Overpass 镜像列表、toast、i18n helper
studio/<tool>/         → 各工具独立 HTML（内联或引用专属 JS/CSS）
index.html             → 门户入口（工具卡片目录 + 中英双语切换）
```
- 品牌色 `#2563EB`，冷灰底 `#FAFAFA`
- 中英双语通过 `localStorage('em_lang')` 同步，各页面共享 `getSharedLang()/setSharedLang()`
- Overpass 请求走 `SHARED_OVERPASS_ENDPOINTS` 镜像容灾列表（首选 maps.mail.ru）
- 新增 2D 分析图层流程见 WIKI.md「开发与扩展指南」

## 当前状态
- v1.5 已发布，9 个工具全部可用
- 无测试套件（`npm test` 为占位）
