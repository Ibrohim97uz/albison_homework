const header = document.querySelector(".header");
const menuIcon = document.querySelector(".menu-icon");
const menuTable = document.querySelector(".nav-links-mobile");

document.addEventListener("scroll", () => {
  if (scrollY > 700) {
    menuTable.classList.remove("show");
  }
});
header.addEventListener("click", () => {
  menuTable.classList.remove("show");
});

menuIcon.addEventListener("click", () => menuTable.classList.toggle("show"));
