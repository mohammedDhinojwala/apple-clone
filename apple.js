const storeElem =document.querySelector('.js-store');
const macElem =document.querySelector('.js-mac');
const ipadElem =document.querySelector('.js-ipad');
const iphoneElem =document.querySelector('.js-iphone');
const watchElem =document.querySelector('.js-watch');
const visionElem =document.querySelector('.js-vision');
const airpodElem =document.querySelector('.js-airpod');
const tvElem =document.querySelector('.js-tv');
const entertainmentElem =document.querySelector('.js-entertainment');
const accessoriesElem =document.querySelector('.js-accsessories'); 
const supportElem =document.querySelector('.js-support');
const colorCHange = document.querySelector('.js-navBar')

const submenuElem =document.querySelector('.js-submenu');
const submenuBottomElem =document.querySelector('.js-submenu-bottom');



function dropdown(n){

    
n.addEventListener("mousemove",function(){
    submenuElem.style.top ="5.7vh"; 
  setTimeout(() => {
        submenuBottomElem.style.opacity ="100%";
        
    }, 500);

    setTimeout(() => {
        
        colorCHange.style.backgroundImage = "url(background.png)";
    }, 50);
})


n.addEventListener("mouseleave",function(){
    submenuElem.style.top ="-100vh"; 
    setTimeout(() => {
        submenuBottomElem.style.opacity ="0";
        colorCHange.style.backgroundImage = "none";
    }, 100);
})
}

// slider js


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2900,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop:true,
});