/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,ts,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {},
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1) " },
        },
        letter: {
          "0%": { opacity: "0" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0 " },
        },
      },
      animation: {
        "open-menu": "open-menu .5s ease-in-out forwards",
        letter: "letter .8s  infinite ",
      },
    },
  },
  plugins: [],
};
