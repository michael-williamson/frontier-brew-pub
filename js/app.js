'use strict'

let $menuIcon = $('.menu-icon');
let $nav = $('nav');
let $tapMenu = $('.tap-menu');
let $tapMenuBtn = $('#tap-menu-btn');
let $backBtn = $("#back-btn");

$tapMenuBtn.on('click',function () {  
    $tapMenu.fadeIn(500); 
});

$backBtn.on('click',function() {
   $tapMenu.fadeOut(500); 
});

$menuIcon.on('click',function () {  
   $nav.fadeToggle();  
   $tapMenu.fadeOut(500); 
});

//Photo Carousel

let $photoCarousel = $("#photo-carousel");
let $nextBtnImg = $("#next");
let $backBtnImg = $("#back");

function moveImageForward() {  
   let $firstImg = $photoCarousel.children().first();
   let $lastImg = $photoCarousel.children().last();
$photoCarousel.children().fadeOut("slow").fadeIn("slow");
   setTimeout(function(){
       $firstImg.insertAfter($lastImg);
   },650);
}

function moveImageBackward() {  
   let $firstImg = $photoCarousel.children().first();
   let $lastImg = $photoCarousel.children().last();
$photoCarousel.children().fadeOut("slow").fadeIn("slow");
   setTimeout(function(){
       $lastImg.insertBefore($firstImg);
   },650);
}

$nextBtnImg.click(function () {  
    moveImageForward(); 
});

$backBtnImg.click(function () {  
    moveImageBackward(); 
});



