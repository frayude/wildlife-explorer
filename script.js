document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");

    // Tambahin animasi ke tiap menu item
    const navItems = navMenu.querySelectorAll("li");

    navItems.forEach((item, index) => {
      if (item.style.animation) {
        // Kalau animasi udah ada, hapus
        item.style.animation = "";
      } else {
        // Kalau belum ada, tambahin animasi
        item.style.animation = `navItemFade 0.5s ease backwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    hamburger.innerHTML = hamburger.classList.contains("toggle")
      ? "&#9776;"
      : "X";

    // Animasi toggle hamburger
    hamburger.classList.toggle("toggle");
  });
});

console.log(hamburger);
