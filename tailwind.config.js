const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors: {
        primary: {
          100: "#037145",
          200: "#005f35",
          50: "#0ba675",
        },
        secondary: {
          100: "#90979e",
          200: "#798086",
          50: "#bfc6cd",
        },
        alert: {
          100: "#f3eca4",
          200: "#efe68b",
          50: "#f7f3bd",
        },
        warning: {
          100: "#f3eca4",
          200: "#efe68b",
          50: "#f7f3bd",
        },
        info: {
          100: "#84cae7",
          200: "#71b7d4",
          50: "#97dcfa",
        },
        danger: {
          100: "#d12b4e",
          200: "#bc1d3f",
          50: "#e6395d",
        },
        buy: {
          100: "#cb46e5 ",
          200: "#b128d8",
          50: "#e565f2",
        },
        ...defaultTheme.colors,
      },
      fontFamily: {
        "lato": 'var(--font-lato)',
      }
    },
  },
  plugins: [],
}
