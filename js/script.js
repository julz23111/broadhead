/*
  Broadhead Buddy – Core UI Script
  Purpose:
  - Mobile navigation toggle
  - Header open/close state
  - Click-outside to close menu
*/

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  // Exit safely if required elements are missing
  if (!header || !menuToggle || !nav) return;

  // Toggle mobile menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.toggle("open");
  });

  // Close menu when clicking outside header/nav
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      header.classList.remove("open");
    }
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
    });
  });
});
