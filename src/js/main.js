import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const swiper = new Swiper(".swiper-getaway", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".getaway-button-next",
    prevEl: ".getaway-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const testimonialSwiper = new Swiper(".swiper-testimonial", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
});
