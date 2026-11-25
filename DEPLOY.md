# 部署到 atsu.localhost.cc

目标域名：`https://atsu.localhost.cc`（localhost.cc 免费二级域名）
站点文件：本目录全部内容，入口 `index.html`。

> 当前 `atsu.localhost.cc` 还没有任何 DNS 记录，解析不到。部署的本质是：**先让站点跑在一个地址上，再把域名的 CNAME/A 记录指过去**。

## 先选路线

| 路线 | 费用 | HTTPS | 备案 | 国内访问 | 适合 |
| --- | --- | --- | --- | --- | --- |
| A. GitHub Pages | 免费 | 自动 | 不需要 | 一般，偶尔慢 | 演示、作品集、临时上线 |
| B. 腾讯云 COS（香港） | 几元/月 | 免费证书 | 不需要 | 较快 | 企业静态站，推荐 |
| C. 腾讯云轻量（香港）+ 宝塔 | 约 ¥24/月起 | Let's Encrypt | 不需要 | 较快 | 以后要加表单/后台 |

**不要选**：腾讯云大陆地域的 CVM / COS 自定义域名。`localhost.cc` 不是你拥有的主域名，无法做 ICP 备案，大陆节点绑定自定义域名会被拦截。

---

## 路线 A：GitHub Pages（最快）

### 1. 建仓库并上传

仓库建议设为 **Public**（免费版 Pages 要求公开）。

方式一（不装 Git）：GitHub 网页 → New repository → 名称 `atsu-web` → Create。进入仓库 → Add file → Upload files → 把 `yuantu-web` 里的**所有文件和文件夹**拖进去（注意保持 `assets/` 目录结构）→ Commit。

方式二（命令行，本目录已经 init 并 commit 过）：

```bash
cd yuantu-web
git remote add origin https://github.com/<你的用户名>/atsu-web.git
git branch -M main
git push -u origin main
```

推送时会弹出浏览器登录，或用 Personal Access Token 作为密码。**不要**把账号密码发给任何人。

### 2. 开启 Pages

仓库 → Settings → Pages：

- Source：`Deploy from a branch`
- Branch：`main` / `(root)` → Save
- 等 1–2 分钟，得到 `https://<用户名>.github.io/atsu-web/`

### 3. 绑定自定义域名

同一页 Custom domain 填 `atsu.localhost.cc` → Save。
仓库根目录已放好 `CNAME` 文件（内容就是 `atsu.localhost.cc`），不要删。

### 4. 在 localhost.cc 加解析

到 [localhost.cc 控制台](https://localhost.cc/domains/atsu.localhost.cc) 添加记录：

| 类型 | 主机记录 | 记录值 | TTL |
| --- | --- | --- | --- |
| CNAME | `atsu` | `<用户名>.github.io` | 600 |

保存后等待 5–30 分钟，用下面命令确认：

```powershell
Resolve-DnsName atsu.localhost.cc
```

### 5. 开 HTTPS

DNS 生效后回到 Settings → Pages，等 `Enforce HTTPS` 可勾选（证书签发通常几分钟到 24 小时）。勾上后强制跳转 HTTPS。

### 注意

- GitHub Pages 明确不建议用于以商业交易为主的站点；企业展示站一般可用，但长期建议走 B/C。
- 自定义域名建议做 GitHub 域名验证（TXT 记录 `_github-pages-challenge-<用户名>`），防止域名被他人抢占。
- 仓库公开意味着 PDF 手册、图片都会公开；手册版权不属于你时请先移除。

---

## 路线 B：腾讯云 COS（香港）+ 自定义域名

### 1. 创建存储桶

腾讯云控制台 → 对象存储 COS → 存储桶列表 → 创建存储桶：

- 名称：`atsu-web-<任意数字>`（全局唯一）
- 地域：**中国香港**
- 访问权限：**公有读私有写**
- 其余默认

### 2. 开启静态网站

桶 → 基础配置 → 静态网站 → 开启：

- 索引文档：`index.html`
- 错误文档：`404.html`（本模板已提供）
- 强制 HTTPS：开启

### 3. 上传文件

桶 → 文件列表 → 上传文件/文件夹，把 `yuantu-web` 里的内容传到桶根目录（`index.html` 必须在根）。用 [COSBrowser](https://cloud.tencent.com/document/product/436/11366) 拖拽更省事。

先用默认域名测试：
`https://atsu-web-<数字>.cos.ap-hongkong.myqcloud.com/`

### 4. 绑定自定义域名

桶 → 域名与传输管理 → 自定义源站域名 → 添加域名 `atsu.localhost.cc`：

- 证书：选“腾讯云托管证书”，先到 [SSL 证书控制台](https://console.cloud.tencent.com/ssl) 申请免费 DV 证书（DNS 验证时在 localhost.cc 加一条 TXT）
- 或上传已有证书
- 保存后会给出 CNAME 目标地址

### 5. 回 localhost.cc 加 CNAME

| 类型 | 主机记录 | 记录值 |
| --- | --- | --- |
| CNAME | `atsu` | COS 给出的 CNAME 目标 |

等待生效，访问 `https://atsu.localhost.cc`。

### 6. 可选：CDN 加速

COS 默认域名在国内速度一般，可加腾讯云 CDN（加速域名 `atsu.localhost.cc`，源站选 COS）。**注意**：CDN 选“中国境内”加速需要域名备案；免费二级域名备不了，只能选“全球（不含中国大陆）”或香港节点。

---

## 路线 C：轻量应用服务器（香港）+ 宝塔

1. 购买轻量应用服务器，地域选**香港**，镜像 Ubuntu 22.04，防火墙放行 80/443。
2. 安装宝塔面板，新建站点，域名填 `atsu.localhost.cc`。
3. 上传 `yuantu-web` 内容到站点根目录。
4. 宝塔 → SSL → Let's Encrypt 一键申请，开启强制 HTTPS。
5. localhost.cc 添加 **A 记录**：`atsu` → 服务器公网 IP。
6. 以后要接表单接口、加后台，都在这台机器上扩展。

---

## 部署后检查

```powershell
# 解析
Resolve-DnsName atsu.localhost.cc

# HTTP 状态与跳转
curl.exe -I https://atsu.localhost.cc/
curl.exe -I https://atsu.localhost.cc/products.html
curl.exe -I https://atsu.localhost.cc/assets/download/yantu-selection-2026.pdf
```

- [ ] 首页、产品、详情、关于、联系均 200
- [ ] `https://` 正常，证书有效，HTTP 自动跳转
- [ ] 手机端菜单、筛选、FAQ、表单可见可用
- [ ] 图片无 404（控制台 Network）
- [ ] `canonical` / `og:url` 已是 `https://atsu.localhost.cc/...`
- [ ] 提交百度/必应站长平台，提交 `https://atsu.localhost.cc/sitemap.xml`

## 常见问题

**Q：域名解析不生效？**
A：先确认 localhost.cc 控制台记录已保存；`Resolve-DnsName` 无结果就是没生效。CNAME 生效通常几分钟，最长 24 小时。

**Q：GitHub Pages 显示 404？**
A：确认 Pages 分支是 `main`、目录是 `/ (root)`，且 `index.html` 在仓库根目录，不是 `yuantu-web/index.html`。

**Q：HTTPS 打不开/证书错误？**
A：证书签发有延迟；GitHub Pages 需等 DNS 生效后才会签发。COS 需确认证书已绑定到该域名。

**Q：国内访问慢？**
A：GitHub Pages 在国内不稳定；换 COS 香港 + 全球 CDN，或轻量香港。

**Q：以后想接真实表单？**
A：在 `assets/js/app.js` 的 `contactForm` 提交处改成 `fetch('/api/contact')`，后端可用腾讯云函数 SCF 或轻量服务器上的 PHP/Node 接口。

---

## 安全提醒

- 不要把邮箱密码、GitHub 密码发到聊天或工单里；本次对话中的密码请立即修改。
- GitHub 已不支持密码推送代码，请使用 **Personal Access Token**（Settings → Developer settings → Fine-grained tokens，只勾选目标仓库的 Contents 读写）或 SSH Key。
- 开启 GitHub 两步验证（2FA），并检查 Security log 是否有异常登录。
- 免费二级域名没有 SLA，可能被回收或限速；正式对外建议尽快换成自有域名。
