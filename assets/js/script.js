var menu = document.querySelector(".mobile-menu");
var close = document.querySelector(".span-wrapper");
var body = document.querySelector(".body");

function show() {
  menu.classList.add("show");
  body.classList.add("block");
}
function hide() {
  menu.classList.remove("show");
  body.classList.remove("block");
}
