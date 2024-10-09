const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  // Breakpoints for responsive behavior
  breakpoints: {
    1440: {
      slidesPerView: 4.2,
      spaceBetween: 30,
    },
    1330: {
      slidesPerView: 3.6,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 3.2,
      spaceBetween: 30,
    },
    970: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    830: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    730: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    470: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
  },
});
