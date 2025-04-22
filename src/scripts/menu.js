const menuButton = document.getElementById("menu-button");
const menuLinks = document.getElementById("menu-links");
const icons = document.querySelectorAll("svg");

const toggleMenu = () => {
  icons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
  menuLinks?.classList.toggle("open");
};

// Toggle menu on button click
menuButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

// Close menu when Esc is pressed
document.documentElement.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuLinks?.classList.contains("open")) {
    toggleMenu();
  }
});
