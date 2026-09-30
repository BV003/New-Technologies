# New Technologies

用时间轴追踪那些**可能产生重大影响的新科技**（以 AI 为主）。纯静态页面，直接用浏览器打开 `index.html` 即可。

## 添加新条目

1. 在 `index.html` 的 `.timeline` 中添加一个 `<details>`，class 取一个唯一名字：

   ```html
   <details class="example-event">
     <summary><span class="dot" aria-hidden="true"></span><span class="name">技术名称 <small>Sep 2026</small></span></summary>
     <div class="info"><p>一句话说明它是什么。</p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Read the original announcement ↗</a></div>
   </details>
   ```

2. 在页面底部脚本中设置它的位置（年份、月份）：

   ```js
   positionEvent(".example-event", 2026, 9);
   ```
