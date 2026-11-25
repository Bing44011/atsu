# 源图智能 ATSU — 工业计算官网模板

一套可直接改用的静态企业官网模板：信息架构参考 [上海炫移 hip-hytech.com](http://www.hip-hytech.com/) 的工业计算产品站，产品与品牌资料来自《源图智能 产品选型手册 2026》，视觉与交互按现代工业科技风重新设计。

- 纯静态：HTML + CSS + 原生 JavaScript，无构建步骤、无第三方依赖
- 8 个页面：首页、产品中心、产品详情、关于我们、解决方案、工程案例、新闻资讯、联系我们
- 数据驱动：产品卡、详情页、选型对比表均由 `assets/js/products.js` 自动渲染
- 响应式：桌面 / 平板 / 手机三档，含移动端抽屉导航
- 内置交互：产品筛选与搜索、旗舰平台切换、FAQ 折叠、滚动入场动画、表单校验（mailto 提交）

> 这是用于演示与二次开发的模板，不是原站的复刻，也未获得原站或品牌方的授权。正式上线前请替换为自己的品牌、图片与文案，并核对所有产品参数。

## 本地预览

任选一种方式：

```bash
# 方式一：Python 静态服务器（推荐）
cd yuantu-web
python -m http.server 8788
# 打开 http://127.0.0.1:8788

# 方式二：直接双击 index.html
```

`file://` 直接打开也可正常浏览，因为没有使用 fetch 请求数据。

## 目录结构

```
yuantu-web/
├─ index.html              首页（Hero / 产品矩阵 / 旗舰平台 / COM / 服务 / 行业 / 案例 / 新闻 / CTA）
├─ products.html           产品中心（筛选、搜索、选型对比表、其他在售机型）
├─ product.html            产品详情模板（?id=s201 由 JS 渲染规格）
├─ about.html              关于我们（企业介绍、品牌大事记、文化、研发制造、生态）
├─ solutions.html          解决方案（场景方案、COM 科普、标准对照、定制服务、流程、FAQ）
├─ cases.html              工程案例（4 个案例）
├─ news.html               新闻资讯（1 篇头条 + 6 条列表）
├─ contact.html            联系我们（双地址、微信二维码、需求表单、服务网络示意）
├─ assets/
│  ├─ css/style.css        全站样式与设计变量（唯一 CSS 文件）
│  ├─ js/products.js       产品数据 + 分类 + 联系方式（主要编辑入口）
│  ├─ js/app.js            页头/页脚注入、目录渲染、交互逻辑
│  ├─ img/                 产品与场景图片（webp / jpg / png）
│  ├─ download/            选型手册 PDF（示例下载）
│  └─ favicon.png
├─ robots.txt
└─ sitemap.xml
```

## 二次开发指南

### 1. 改品牌与导航

- Logo：替换 `assets/img/logo-atsu-blue.png`（浅色页头）与 `assets/img/logo-atsu-white.png`（深色页头/页脚），建议透明 PNG，高度 ≥ 48px。
- 品牌名与导航：`assets/js/app.js` 顶部的 `buildHeader()` / `buildFooter()`，以及 `NAV` 数组。
- 页脚版权、ICP 备案号：`buildFooter()` 中的 `footer-bottom`（当前为占位号 `苏ICP12345678`，请替换为真实备案号）。

### 2. 改产品（最常用）

编辑 `assets/js/products.js`：

```js
const PRODUCTS = [
  {
    id: "s201",                 // 详情页地址 product.html?id=s201
    name: "ATSU-S201",
    cat: "com6",                // 对应 CATEGORIES 的 id
    tagline: "一句话卖点",
    desc: "列表卡片描述",
    image: "assets/img/product-s201.webp",
    badges: ["Type 6", "95 × 95 mm", "28W"],
    form: "COM Express Compact Type 6",
    size: "95 × 95 mm",
    cpuShort: "Intel Core i5-1340P",
    memShort: "2 × DDR5 / 64GB",
    tempShort: "0 ~ 60℃",
    highlights: ["亮点 1", "亮点 2"],
    specs: [
      { group: "处理器系统", icon: "cpu", rows: [["CPU", "i5-1340P"], ["TDP", "28W"]] }
    ]
  }
];
```

- 新增产品只需追加一个对象；分类、筛选、对比表、相关推荐会自动更新。
- `icon` 可选：`cpu` `chip` `monitor` `expand` `network` `power` `box`。
- 首页「旗舰平台」取 `s201 / s301 / s101` 三个 id，可在 `app.js` 的 `picks` 中调整。
- 产品图片建议 4:3、透明底 WebP，最长边 1000px，放 `assets/img/product-<id>.webp`。

### 3. 改联系方式

`assets/js/products.js` 末尾的 `HOME` 对象（电话、邮箱、地址）同时用于页脚、CTA 和右侧悬浮快捷栏。各页面内的地址卡片需在对应 HTML 中修改。

### 4. 改配色与字体

`assets/css/style.css` 顶部 `:root`：

```css
--blue-600: #1b58c4;   /* 主色 */
--cyan-400: #35d3e8;   /* 强调色 */
--navy-900: #050e1c;   /* 深色背景 */
--font: "Segoe UI", "Microsoft YaHei", ...
```

深色区（Hero、COM、CTA、页脚）使用 `--navy-900`，浅色区使用 `--bg` / `#fff`。

### 5. 替换图片

| 文件 | 用途 | 建议尺寸 |
| --- | --- | --- |
| `hero-bg.jpg` | 首页 Hero 背景 | 2200 × 1370 |
| `com-podium.jpg` | COM 模块家族、解决方案配图 | 1200 × 1500 |
| `case-network.jpg` | 案例：通信 / 网络测试 | 1400 × 730 |
| `case-manufacturing.jpg` | 案例：智能制造 | 1200 × 1200 |
| `family-lineup.jpg` | 新闻头条：产品家族 | 1600 × 1000 |
| `case-retail.jpg` | 案例：整机 / 零售 | 1000 × 1000 |
| `case-board.jpg` | 案例：网安主板特写 | 900 × 1200 |
| `product-*.webp` | 产品图 | 1000 × 750 |

### 6. 表单

当前表单不依赖后端：校验通过后调用 `mailto:` 打开本机邮件客户端。接入真实后端时，替换 `app.js` 中 `contactForm` 的 `submit` 处理即可（保留校验与 toast）。

### 7. 部署

目标域名已按 `https://atsu.localhost.cc` 预制：`CNAME`、canonical、Open Graph、`sitemap.xml`、`robots.txt` 都已指向该域名。

详细步骤见 **[DEPLOY.md](DEPLOY.md)**，包含三条路线：

- GitHub Pages（免费，最快）
- 腾讯云 COS 香港 + 自定义域名（企业静态站推荐）
- 腾讯云轻量香港 + 宝塔（后续要接表单/后台）

所有资源使用相对路径，也可直接放进主站的二级目录（如 `example.com/yuantu/`）。

## 已实现的功能清单

- 固定页头：首页透明 → 滚动变白；内页默认白色；产品中心 Mega Menu
- 移动端抽屉导航（含产品分类二级）
- 首页数据条、生态条、四宫格产品矩阵（整卡可点击）
- 旗舰平台 Tab 切换（S201 / S301 / S101）
- 产品中心：分类筛选、关键词搜索、URL 参数（`?cat=com6`）、空结果提示
- 横向选型对比表（首列吸附、横向滚动）
- 详情页：规格分组卡片、亮点清单、相关产品、手册下载
- FAQ 手风琴、表单校验 + toast、右侧悬浮联系栏
- IntersectionObserver 入场动画、`prefers-reduced-motion` 适配
- 基础 SEO：title / description / keywords / 语义化标签 / 图片 alt

## 内容与版权说明

- 公司与产品信息来源：公开站点 hip-hytech.com、用户提供的《源图智能 产品选型手册 2026》；案例中的客户信息已做泛化处理。
- 手册 PDF 仅作为模板的下载示例，版权归原权利人；正式使用请替换为自己的资料或取得授权。
- 图片中的 ATSU 标识、产品照片版权归原权利人，仅用于演示。
- 页面中的备案号、新闻日期、部分案例指标为演示内容，上线前请核实。

## 浏览器支持

Chrome / Edge / Safari / Firefox 最近两年版本。CSS 使用 `aspect-ratio`、`backdrop-filter`、`clamp()`，IE 不支持。
