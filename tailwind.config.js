/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        slideDownAnim: {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "16rem", opacity: "1" },
        },
        slideUpAnim: {
          "0%": { height: "16rem", opacity: "1" },
          "100%": { height: "0", display: "none", opacity: "0" },
        },
      },
      animation: {
        slideDown: "slideDownAnim 0.5s ease-in-out",
        slideUp: "slideUpAnim 0.5s ease-in-out forwards",
      },
      width: {
        "475px": "475px",
      },
    },

    plugins: [],
  },
};
