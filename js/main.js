const filtersEl = document.getElementById("filters");
const cardsEl = document.getElementById("cards");
const timelineEl = document.getElementById("timeline");
let activeCategory = "全部";

function makeLink(url, label) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `${label} ↗`;
  return link;
}

function renderFilters() {
  const categories = ["全部", ...new Set(TECH.map((item) => item.category))];
  filtersEl.replaceChildren();
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = category === activeCategory ? "active" : "";
    button.setAttribute("aria-pressed", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderCards();
    });
    filtersEl.appendChild(button);
  });
}

function renderCards() {
  const items = activeCategory === "全部" ? TECH : TECH.filter((item) => item.category === activeCategory);
  cardsEl.replaceChildren();
  items.forEach((item, index) => {
    const article = document.createElement("article");
    const number = document.createElement("p");
    number.className = "number";
    number.textContent = String(index + 1).padStart(2, "0");

    const content = document.createElement("div");
    content.className = "item-content";
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = `${item.category} · ${item.date}`;
    const title = document.createElement("h3");
    title.textContent = item.name;
    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = item.desc;
    const impact = document.createElement("p");
    impact.className = "impact";
    impact.textContent = item.impact;
    content.append(meta, title, desc, impact);
    article.append(number, content, makeLink(item.url, item.source));
    cardsEl.appendChild(article);
  });
}

function renderHistory() {
  timelineEl.replaceChildren();
  HISTORY.forEach((item) => {
    const article = document.createElement("article");
    const year = document.createElement("strong");
    year.textContent = item.year;
    const name = document.createElement("span");
    name.textContent = item.name;
    article.append(year, name, makeLink(item.url, "资料"));
    timelineEl.appendChild(article);
  });
}

renderFilters();
renderCards();
renderHistory();
