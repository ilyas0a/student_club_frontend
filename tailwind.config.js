/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./src/pages/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B71F2",
        secondary: "#FF6347",
        tertiary: "#FFD700",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}