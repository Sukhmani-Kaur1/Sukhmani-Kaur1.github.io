let li = document.querySelectorAll(".links");
let sec = document.querySelectorAll("section");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#link-nav");
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));

  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

let icon = document.querySelector("#icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
};
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll("#link-nav").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*=============== SERVICES MODAL ===============*/

const modelViews = document.querySelectorAll('.services__model'),
        modelBtns = document.querySelectorAll('.services__button'),
        modelClose = document.querySelectorAll('.services__model-close');

let model = function(modelClick) {
    modelViews[modelClick].classList.add('active-model');
}

modelBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        model(i);
    });
});

modelClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modelViews.forEach((mv) => {
            mv.classList.remove('active-model');
        });
    });
});
