document.addEventListener("DOMContentLoaded", () => {
  /* Top Menu Activation */
  const topMenu = Array.from(document.querySelectorAll(".top, .glass"));
  const body = document.querySelector("body");
  topMenu.forEach((menuArea) => {
    menuArea.addEventListener("click", () => {
      body.classList.toggle("active-menu");
    });
  });
});
