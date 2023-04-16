import autoTyping from "./autoTyping";
import "./style.css";

const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-open-button")!;
  const darkButton = document.getElementById("dark-btn")!;
  const mobileMenu = document.getElementById("mobile-menu")!;
  const typeElement = document.getElementById("type-element")!;
  const currentYear = document.getElementById("current-year")!;

  const toggleMenu = () => {
    hamburgerBtn.classList.toggle("toggle-btn");
    mobileMenu?.classList.toggle("flex");
    mobileMenu?.classList.toggle("hidden");
  };

  const getWebMode = () => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (!isDarkMode) return;
    const parsedMode = JSON.parse(isDarkMode);

    if (parsedMode) document.documentElement.classList.add("dark");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);

  darkButton.addEventListener("click", () => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      localStorage.setItem("isDarkMode", "false");
    } else {
      localStorage.setItem("isDarkMode", "true");
    }
    document.documentElement.classList.toggle("dark");
  });

  autoTyping(typeElement, ["Developer", "Designer", "Author"], {
    typeSpeed: 100,
    deleteSpeed: 100,
    // shouldStopAfterComplete: true,
  });

  getWebMode();

  currentYear.innerText = new Date().getFullYear().toString();
};

document.addEventListener("DOMContentLoaded", initApp);
