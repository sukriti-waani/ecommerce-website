/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // REQUIRED for class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#006A71",
        secondary: "#4F959D",
        tertiary: "#205781",
        qudraple: "#F2EFE7",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
