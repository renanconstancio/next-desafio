const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        purple: {
          ligth: "#7652dc",
          strong: "#6149cd",
        },
        gray: {
          ligth: "#e7e9f5",
          regular: "#5f616e"
        },
        rose: {
          ligth: "#ff7c9f",
          strong: "#f96767"
        },
        yellow: {
          regular: "#f9d967"
        },
      },
      fontFamily: {
        "overpass": 'var(--font-overpass)',
      }
    },
  },
  plugins: [],
}
