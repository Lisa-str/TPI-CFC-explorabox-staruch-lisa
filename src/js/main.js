import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "../scss/main.scss";

const swiper = new Swiper(".mySwiper", {
  modules: [Navigation],
  slidesPerView: 1.2,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-controls .swiper-button-next", // ← ici le bon sélecteur
    prevEl: ".swiper-controls .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
