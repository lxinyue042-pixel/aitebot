# AITEBOT MODEL HUB｜建筑打印模型社区

筑墙智匠（ZH-01）建筑打印机器人模型社区 —— 纯静态站点，可直接部署到 GitHub + Vercel。

## 目录结构

```
├── index.html              首页（单页应用）
├── tokens-v27.css          设计令牌（颜色/间距/字体变量）
├── maker-v26.css           基础样式
├── maker-v27.css           组件样式
├── app.js                  前端逻辑（三维预览 / 搜索 / 收藏 / STL 下载）
├── sw.js                   Service Worker（离线缓存 / PWA）
├── manifest.webmanifest    PWA 清单
├── assets/                 图片与字体资源
│   ├── robot-overview.png
│   └── fonts/SourceHanSansSC-Subset.woff2
├── vercel.json             Vercel 配置（安全响应头 + 缓存策略）
├── .gitignore
└── README.md
```

> 无需构建步骤：这是一个纯静态站点，没有框架依赖，`index.html` 就是入口文件。

## 一、上传到 GitHub

### 方式 A：网页端（最简单）

1. 登录 [github.com](https://github.com)，点击右上角 **+ → New repository**。
2. 仓库名填 `aitebot-model-hub`，选择 **Public**（公开）或 Private（私有）。
3. 不要勾选 "Add a README"（本目录已包含 README）。
4. 点击 **Create repository**。
5. 在出现的页面上点击 **uploading an existing file**（上传已有文件）。
6. 把本目录里的 **所有文件和文件夹** 拖进去（包含 `assets` 文件夹）。
7. 点击 **Commit changes** 提交。

### 方式 B：命令行（Git）

```bash
# 进入本目录（把路径替换成你桌面上的实际位置）
cd ~/Desktop/aitebot-model-hub

git init
git add .
git commit -m "Initial commit: AITEBOT model hub"

# 替换成你自己的仓库地址
git branch -M main
git remote add origin https://github.com/<你的用户名>/aitebot-model-hub.git
git push -u origin main
```

## 二、部署到 Vercel

1. 登录 [vercel.com](https://vercel.com)（推荐直接用 GitHub 账号登录）。
2. 点击 **Add New… → Project**。
3. 在 Import 列表里选择刚才的 `aitebot-model-hub` 仓库，点击 **Import**。
4. 保持默认设置（Framework Preset 会显示 **Other**，Build Command 留空，Output Directory 留空），直接点击 **Deploy**。
5. 部署完成后，Vercel 会给你一个地址，形如 `https://aitebot-model-hub.vercel.app`，点击即可访问。

## 三、上线后必改（重要）

`index.html` 第 8、14、15 行目前写的是旧服务器的绝对地址，部署后请替换成你的 Vercel 域名（影响 SEO 与社交分享预览图）：

```html
<link rel="canonical" href="https://你的项目.vercel.app/">
<meta property="og:url" content="https://你的项目.vercel.app/">
<meta property="og:image" content="https://你的项目.vercel.app/assets/robot-overview.png">
```

改完后重新 `git push`，Vercel 会自动重新部署。

## 说明

- **STL 下载**：站内模型由 `app.js` 在浏览器本地实时生成 STL，无需后端接口。
- **离线能力**：`sw.js` 会把核心资源缓存到本地，支持离线访问（需 HTTPS，Vercel 已默认开启）。
- **安全响应头**：`vercel.json` 已配置 CSP、X-Frame-Options 等安全头，与原服务器（IIS `web.config`）保持一致。
- 若某功能被 CSP 拦截导致异常，可临时删除 `vercel.json` 中的 `Content-Security-Policy` 头后再排查。
