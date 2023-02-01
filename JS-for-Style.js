var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 60,
    // centeredSlides: true,
    // loop: true,
    speed: 500,
    // autoplay:{
    //     delay:3000,
    //     disableOnInteraction:false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 60,
    // centeredSlides: true,
    // loop: true,
    speed: 500,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const menuIcon = document.querySelector('.fa-bars')
const navBar = document.querySelector('.aside-nav-bar')

function menuIconActionHandaler () {
    menuIcon.classList.toggle('fa-bars-open')
    navBar.classList.toggle('nav-btn')
}

menuIcon.addEventListener('click',menuIconActionHandaler)