// import { SAMLAuthProvider } from "firebase/auth/web-extension"

// function onClickMenu(){
//     document.getElementById("menu").classList.toggle("icon")
//      document.getElementById("nav").classList.toggle("change")
// }


// var swiper = new Swiper("slide-container",{
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true, 
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const slides = document.querySelectorAll ('.testimonial-slide');
const dots = document.querySelectorAll ('.dot');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentSlide = 0;
 
function showSlide(index){
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);   
    });
    currentSlide = index;
}

dots.forEach((dot, i) =>{
    dot.addEventListener('click', () => showSlide(i));
});
  
leftArrow.addEventListener('click', () => {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
});
rightArrow.addEventListener('click', () => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
});

showSlide(0);

