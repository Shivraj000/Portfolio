"use strict";

/* ================== TOGGLE FUNCTION ================== */
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

/* ================== SIDEBAR ================== */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

/* ================== TESTIMONIALS MODAL ================== */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  elementToggleFunc(modalContainer);
  elementToggleFunc(overlay);
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    if (!modalImg || !modalTitle || !modalText) return;

    modalImg.src =
      this.querySelector("[data-testimonials-avatar]")?.src || "";
    modalImg.alt =
      this.querySelector("[data-testimonials-avatar]")?.alt || "";
    modalTitle.innerHTML =
      this.querySelector("[data-testimonials-title]")?.innerHTML || "";
    modalText.innerHTML =
      this.querySelector("[data-testimonials-text]")?.innerHTML || "";

    testimonialsModalFunc();
  });
});

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

/* ================== CUSTOM SELECT / FILTER ================== */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (
      selectedValue === "all" ||
      selectedValue === item.dataset.category
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    if (!selectValue) return;

    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    if (!selectValue) return;

    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn?.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

/* ================== PAGE NAVIGATION ================== */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    pages.forEach((page, pageIndex) => {
      if (this.innerText.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[pageIndex].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[pageIndex].classList.remove("active");
      }
    });
  });
});
