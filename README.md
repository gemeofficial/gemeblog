# GEME Blog（gemeblog）

GEME  composters 的官方博客与资讯站点，发布产品动态、行业与微生物技术相关文章、用户通讯与优惠信息等。基于 [Docusaurus](https://docusaurus.io/) 构建。线上站点与主站同域：<https://www.geme.bio/>（`baseUrl` 为 `/`，博客列表为 <https://www.geme.bio/blog>）。

## 环境要求

- **Node.js**：`>= 20`（见 `package.json` 中 `engines`）
- **包管理器**：本项目使用 **pnpm**（`packageManager` 字段已锁定版本，建议用 [Corepack](https://nodejs.org/api/corepack.html) 启用：`corepack enable`）

## 安装依赖

在项目根目录执行：

```bash
pnpm install
```

## 本地开发

```bash
pnpm start
```

会启动开发服务器，默认端口为 **3002**（在 `package.json` 的 `start` 脚本中配置，并监听 `0.0.0.0`）。浏览器访问：<http://localhost:3002/>。多数编辑会热更新，无需反复重启。

## 生产构建

```bash
pnpm build
```

静态文件输出到项目根目录下的 **`build/`**。线上由 **Vercel** 在推送至 **GitHub** 后自动执行构建与发布，本地构建主要用于自检。项目根目录的 `vercel.json` 中包含部分重写与 SEO 相关响应头配置。

## 本地预览构建结果

```bash
pnpm serve
```

用于在本地检查构建后的页面与资源路径是否与线上（`url` / `baseUrl`）一致。

## 部署说明

代码推送到 GitHub 后，**Vercel** 会按项目配置自动打包并部署，无需在本机执行 `yarn deploy` 或 `pnpm deploy` 推送到 `gh-pages`。

**请后来者养成习惯：每次向仓库提交并推送后，到 [Vercel 控制台](https://vercel.com/dashboard) 查看对应部署是否成功**（构建日志中是否有报错、部署状态是否为 Ready）。若 CI/CD 失败，线上可能未更新或仍为上一版成功构建，应及时修复后再合并或继续推送。

## 其他脚本

| 命令 | 说明 |
|------|------|
| `pnpm clear` | 清理 Docusaurus 缓存 |
| `pnpm swizzle` | 覆盖主题组件（慎用，见官方文档） |
| `pnpm write-translations` | 写入 i18n 翻译模板 |
| `pnpm write-heading-ids` | 为标题写入/同步锚点 ID |

## 文档与内容

- **博客文章**：`blog/`（通过自定义 `plugin-content-blog` 插件加载，支持数学公式等）
- **资讯页**：`src/pages/news/`
- **少量文档页**：`docs/`（例如入门类页面）

---

Copyright © ROKH SRL（与站点页脚一致）。
