const filtersEl = document.getElementById("filters");
const cardsEl = document.getElementById("cards");
const emptyEl = document.getElementById("empty");

let activeCategory = "全部";

function getCategories() {
  const set = new Set(TECH.map((t) => t.category));
  return ["全部", ...set];
}

function renderFilters() {
  const categories = getCategories();
  filtersEl.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderFilters();
      renderCards();
    });
    filtersEl.appendChild(btn);
  });
}

function renderCards() {
  const items =
    activeCategory === "全部"
      ? TECH
      : TECH.filter((t) => t.category === activeCategory);

  cardsEl.innerHTML = "";
  emptyEl.hidden = items.length > 0;

  items.forEach((t) => {
    const card = document.createElement("article");
    card.className = "card";

    const head = document.createElement("div");
    head.className = "card-head";

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = t.name;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = t.category;

    head.appendChild(title);
    head.appendChild(badge);

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = t.desc;

    card.appendChild(head);
    card.appendChild(desc);

    if (t.impact) {
      const impact = document.createElement("p");
      impact.className = "card-desc";
      impact.textContent = "影响：" + t.impact;
      card.appendChild(impact);
    }

    if (t.url) {
      const link = document.createElement("a");
      link.className = "card-link";
      link.href = t.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = t.url;
      card.appendChild(link);
    }

    cardsEl.appendChild(card);
  });
}

renderFilters();
renderCards();
