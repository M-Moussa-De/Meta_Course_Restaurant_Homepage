const menu_categ_items = document.querySelectorAll(".menu_categ li");
const sections = document.querySelectorAll("section.items");

menu_categ_items.forEach((item) => {
  item.addEventListener("click", (e) => {
    menu_categ_items.forEach((c) => {
      c.classList[e.target === c ? "toggle" : "remove"]("active");
    });
  });
});
