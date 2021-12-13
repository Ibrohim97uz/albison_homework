window.addEventListener('scroll',function(){
    navbar();
});
    var bar = document.querySelector('.site-header');

function navbar(){
    bar.style.display = 'none';
    if(window.scrollY == 0){
        bar.style.display = 'flex';
        bar.style.boxShadow = 'none'
    }
   
}

var collectionCards = document.querySelector('.collection__cards');
collectionCards.addEventListener('mouseenter',function(){
    show();
})


var text_1 = document.querySelector('.textcard_1');
var text_2 = document.querySelector('.textcard_2');
var text_3 = document.querySelector('.textcard_3');
var text_4 = document.querySelector('.textcard_4');
var text_5 = document.querySelector('.textcard_5');
var text_6 = document.querySelector('.textcard_6');
var text_7 = document.querySelector('.textcard_7');
var text_8 = document.querySelector('.textcard_8');



 collectionCards.addEventListener('mouseleave',function(){
    remove();
});
 function remove(){
    text.classList.remove('show');
 };



