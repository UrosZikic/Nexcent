const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const responsiveMenu = document.querySelector(".responsive-menu");
openMenu.addEventListener("click", () => {
  responsiveMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  responsiveMenu.style.display = "none";
});
