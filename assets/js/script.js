var menu = document.querySelector(".burger_menu");
var list = document.querySelector(".nav_list_burger");
var toTop = document.querySelector(".to_top");

menu.addEventListener("click", function () {
  menu.classList.toggle("transform");
  list.classList.toggle("show");
});
window.addEventListener("scroll", function () {
  var yonalish = window.scrollY;
  if (yonalish == 400 || yonalish > 400) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
});
//create function for get random color
