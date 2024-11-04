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

const modelViews = document.querySelectorAll(".services__model"),
  modelBtns = document.querySelectorAll(".services__button"),
  modelClose = document.querySelectorAll(".services__model-close");

let model = function (modelClick) {
  modelViews[modelClick].classList.add("active-model");
};

modelBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    model(i);
  });
});

modelClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modelViews.forEach((mv) => {
      mv.classList.remove("active-model");
    });
  });
});
// -------------------------------
function buttonReload() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define email details
    const recipientEmail = "sukhmani.dev006@gmail.com"; // Replace with your email
    const subject = `New Project Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AProject Details:%0D%0A${message}`;

    // Construct the mailto URL and open it
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // window.location.reload();
}
