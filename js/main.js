// js/main.js

// Fonction pour gérer la classe active dans la navigation
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
