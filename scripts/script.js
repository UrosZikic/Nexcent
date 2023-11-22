const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const responsiveMenu = document.querySelector(".responsive-menu");
const body = document.body;
openMenu.addEventListener("click", () => {
  responsiveMenu.style.display = "block";

  body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  responsiveMenu.style.display = "none";
  body.style.overflow = "auto";
});




