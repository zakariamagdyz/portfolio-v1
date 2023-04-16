import autoTyping from "./autoTyping";
import "./style.css";

const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-open-button")!;
  const darkButton = document.getElementById("dark-btn")!;
  const mobileMenu = document.getElementById("mobile-menu")!;
  const typeElement = document.getElementById("type-element")!;

  const toggleMenu = () => {
    hamburgerBtn.classList.toggle("toggle-btn");
    mobileMenu?.classList.toggle("flex");
    mobileMenu?.classList.toggle("hidden");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);

  darkButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  autoTyping(typeElement, ["Developer", "Designer", "Author"], {
    typeSpeed: 100,
    deleteSpeed: 100,
    // shouldStopAfterComplete: true,
  });
};

document.addEventListener("DOMContentLoaded", initApp);
