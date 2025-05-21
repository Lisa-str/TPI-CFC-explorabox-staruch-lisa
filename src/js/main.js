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

/* FORMULAIRE PAGE 1 */

document.addEventListener("DOMContentLoaded", () => {
  const mainQuantityInput = document.querySelector(".quantity");
  const themeCount = document.getElementById("theme-count");
  const datesContainer = document.getElementById("dates-container");

  const quantityInputs = document.querySelectorAll(".quantity");
  const adultInput = quantityInputs[1];
  const childInput = quantityInputs[2];

  const mobilityContainer = document.querySelector(
    ".big-booking-person .l-space-column-mini"
  );

  function updateThemeCount(count) {
    themeCount.textContent = count;
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

  function renderMobilitySections(adultCount, childCount) {
    mobilityContainer.innerHTML = "";

    for (let i = 1; i <= adultCount; i++) {
      mobilityContainer.appendChild(createMobilityBlock("Adulte", i));
    }

    for (let i = 1; i <= childCount; i++) {
      mobilityContainer.appendChild(createMobilityBlock("Enfant", i));
    }
  }

  function createMobilityBlock(type, index) {
    const section = document.createElement("div");
    section.className = "l-space-column-mini";
    section.innerHTML = `
      <h5 class="obligatory">${type} ${index} :</h5>
      <div class="l-space-column-mini">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="${type}-${index}" id="demi-${type}-${index}">
          <label class="form-check-label" for="demi-${type}-${index}">Abonnement demi-tarif</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="${type}-${index}" id="ag-${type}-${index}">
          <label class="form-check-label" for="ag-${type}-${index}">Abonnement général (AG)</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="${type}-${index}" id="pass-${type}-${index}">
          <label class="form-check-label" for="pass-${type}-${index}">Swiss Travel Pass</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="${type}-${index}" id="none-${type}-${index}">
          <label class="form-check-label" for="none-${type}-${index}">Pas d’abonnement</label>
        </div>
      </div>
    `;
    return section;
  }

  function refreshAll() {
    const mainCount = parseInt(mainQuantityInput.value);
    const adultCount = parseInt(adultInput.value);
    const childCount = parseInt(childInput.value);

    updateThemeCount(mainCount);
    renderDatePickers(mainCount);
    renderMobilitySections(adultCount, childCount);
  }

  refreshAll();

  document.querySelectorAll(".quantity-control").forEach((control, index) => {
    const minus = control.querySelector(".minus");
    const plus = control.querySelector(".plus");
    const input = control.querySelector(".quantity");

    const min = parseInt(input.min);
    const max = parseInt(input.max);

    function updateButtons() {
      const val = parseInt(input.value);
      minus.disabled = val <= min;
      plus.disabled = val >= max;
    }

    updateButtons();

    minus.addEventListener("click", () => {
      let val = parseInt(input.value);
      if (val > min) {
        input.value = val - 1;
        updateButtons();
        refreshAll();
      }
    });

    plus.addEventListener("click", () => {
      let val = parseInt(input.value);
      if (val < max) {
        input.value = val + 1;
        updateButtons();
        refreshAll();
      }
    });
  });
});
