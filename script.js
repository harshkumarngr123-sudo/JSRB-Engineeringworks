// toggle button
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// const navItems = navLinks.querySelectorAll("a");

// navItems.forEach(link => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("active");
//   });
// });


// LANGUAGE HANDLING
const popup = document.getElementById("language-popup");

function setLanguage(lang) {
  applyLanguage(lang);
  popup.style.display = "none";
}

function applyLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
}

// HAR PAGE LOAD PAR POPUP DIKHEGA
window.addEventListener("DOMContentLoaded", () => {
  popup.style.display = "flex";
});







