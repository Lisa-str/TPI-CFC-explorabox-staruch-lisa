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

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const overlay = document.getElementById("menu-overlay");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.documentElement.classList.add("no-scroll");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.documentElement.classList.remove("no-scroll");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.documentElement.classList.remove("no-scroll");
});
