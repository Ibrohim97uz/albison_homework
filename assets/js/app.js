let countries = document.querySelector(".countries");
let rotate1 = document.querySelector(".rotated1");
let slideImg = document.querySelectorAll(".slide-img");
let images = document.querySelectorAll(".slide-img");
let radios = document.querySelectorAll(".radio");
let menu = document.querySelector(".burger-menu");
let lists = document.querySelector(".burger-lists");

function rotate(param) {
  param.classList.toggle("deleteRotate");
}
function countryShow() {
  countries.classList.toggle("countriesShow");
}

let count = 0;

function showImage(j) {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("showImage");
    radios[i].classList.remove("radioChecked");
  }
  if (j != undefined) {
    count = j;
  }
  radios[count].classList.add("radioChecked");

  images[count].classList.add("showImage");
  count++;
  if (count === 4) {
    count = 0;
  }
}

showImage();
setInterval(showImage, 3000);

function burgerShow() {
  menu.classList.toggle("burger-transform");
  lists.classList.toggle("burgershow");
}
