import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const swiper = new Swiper(".mySwiper", {
  modules: [Navigation],
  slidesPerView: 1.2,
  spaceBetween: 16,
  navigation: {
    nextEl: ".custom-controls .swiper-button-next", // ✅ ton bloc à toi
    prevEl: ".custom-controls .swiper-button-prev",
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
