# New

追踪那些**可能产生重大影响的新科技**（以 AI 相关技术为主）。

## 特点

- 纯静态网站，无需构建工具，双击 `index.html` 即可本地打开
- 每条技术包含：名称 / 分类 / 简短介绍 / 可能的影响 / 网址
- 顶部支持按分类筛选

## 目录结构

```
.
├── index.html          # 页面入口
├── css/
│   └── style.css       # 样式
└── js/
    ├── data.js         # 技术条目数据（在此添加内容）
    └── main.js         # 渲染与筛选逻辑
```

## 添加新条目

编辑 `js/data.js`，在 `TECH` 数组中添加一个对象：

```js
{
  name: "技术名称",
  category: "分类",       // 例如：AI / 机器人 / 能源 ...
  desc: "一句话说明这是什么、为什么值得关注。",
  url: "https://example.com",
  impact: "可能带来的影响", // 可选
},
```

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库：
   ```bash
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<用户名>/<仓库名>.git
   git push -u origin main
   ```
2. 打开仓库 **Settings → Pages**，将 **Source** 设为 `main` 分支根目录，保存。
3. 稍等片刻，访问 `https://<用户名>.github.io/<仓库名>/` 即可。

## 本地预览

直接用浏览器打开 `index.html`，或使用任意静态服务器，例如：

```bash
python3 -m http.server 8000
```

然后访问 http://localhost:8000
