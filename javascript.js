// $(window).scroll( () => {
//     var windowTop = $(window).scrollTop();
//     windowTop > 200 ? $('header').addClass('sticky-top') : $('header').removeClass('sticky-top');
//     windowTop > 200 ? $('.header-top').addClass('d-none') : $('.header-top').removeClass('d-none');
//     alert(0);
// });
$(document).ready(function () {
  const swiper1 = new Swiper(".pic4-swiper", {
    loop: true,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
  const swiper2 = new Swiper(".pic5-swiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    autoplay: {
      delay: 2000
    },

    breakpoints: {

      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      
    }
  });
});
