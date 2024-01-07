var swiper = new Swiper(".swiper-our-service", {
    slidesPerView: 4.5,
    spaceBetween: 55,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        1440: {
          slidesPerView: 4.5,
          spaceBetween: 55,
        },
        834: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        315: {
          slidesPerView: 1.5,
          spaceBetween: 50,
        },
    }
  });

  Fancybox.bind("[data-fancybox]", {
  });
