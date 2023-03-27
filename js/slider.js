const btnComp1 = document.getElementById("btnslider1")
const btnComp2 = document.getElementById("btnslider2")
const btnComp3 = document.getElementById("btnslider3")
const btnComp4 = document.getElementById("btnslider4")
const btnComp5 = document.getElementById("btnslider5")
const btnComp6 = document.getElementById("btnslider6")


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
