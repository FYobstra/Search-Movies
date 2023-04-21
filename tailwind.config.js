/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary" : "#34d399",
        "color-primary-transparent" : "#34d39933",
        "black-bg" : "#18181B",
        "white-bg" : "#fafafa"
      }
    },
  },
  plugins: [],
}