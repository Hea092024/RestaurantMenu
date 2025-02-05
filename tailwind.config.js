/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkseagreen: "#8fbc8f",
        pricegreen: "#3f9f3f", // Custom price green
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
