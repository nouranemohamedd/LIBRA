var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
//   var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });