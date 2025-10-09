import { SAMLAuthProvider } from "firebase/auth/web-extension"

function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon")
     document.getElementById("nav").classList.toggle("change")
}


var swiper = new Swiper(".slide-content",{
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});