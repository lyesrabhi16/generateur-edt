/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // the app is designed for the light theme only; without this daisyUI
  // follows the browser's dark mode and turns inputs/backgrounds black
  daisyui: {
    themes: ["light"],
    darkTheme: "light",
  },
}

