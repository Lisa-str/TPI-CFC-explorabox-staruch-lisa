import Swiper from "swiper";
import { Navigation } from "swiper/modules";

/* SWIPER CAROUSEL */

const swiper = new Swiper(".swiper-getaway", {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 16,
  navigation: {
    nextEl: ".getaway-button-next",
    prevEl: ".getaway-button-prev",
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    1200: { slidesPerView: 3 },
  },
});

console.log(window.innerWidth);

const testimonialSwiper = new Swiper(".swiper-testimonial", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".testimonial-button-next",
    prevEl: ".testimonial-button-prev",
  },
});

/* BURGER MENU */

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

document.addEventListener("DOMContentLoaded", () => {
  const minusBtn = document.querySelector(".minus");
  const plusBtn = document.querySelector(".plus");
  const quantityInput = document.querySelector(".quantity");
  const datesContainer = document.getElementById("dates-container");

  function updateButtons() {
    const current = parseInt(quantityInput.value);
    const min = parseInt(quantityInput.min);
    const max = parseInt(quantityInput.max);
    minusBtn.disabled = current <= min;
    plusBtn.disabled = current >= max;
  }

  function renderDatePickers(count) {
    datesContainer.innerHTML = "";
    for (let i = 1; i <= count; i++) {
      const wrapper = document.createElement("div");
      wrapper.className = "date-picker mb-3";
      wrapper.innerHTML = `
        <label for="trip-start-${i}" class="form-label">Date ${i}</label>
        <div style="position: relative;">
          <input
            type="date"
            class="date"
            id="trip-start-${i}"
            name="trip-start-${i}"
            value="2025-01-01"
            min="2025-01-01"
            max="2100-12-31"
          />
          <i class="fa-regular fa-calendar calendar-icon"></i>
        </div>
      `;
      datesContainer.appendChild(wrapper);
    }
  }

  updateButtons();
  renderDatePickers(parseInt(quantityInput.value));

  minusBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value);
    if (current > parseInt(quantityInput.min)) {
      quantityInput.value = current - 1;
      updateButtons();
      renderDatePickers(current - 1);
    }
  });

  plusBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value);
    if (current < parseInt(quantityInput.max)) {
      quantityInput.value = current + 1;
      updateButtons();
      renderDatePickers(current + 1);
    }
  });
});
