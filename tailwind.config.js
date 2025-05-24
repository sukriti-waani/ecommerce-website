/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // REQUIRED for class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#462d86",
        secondary: "#c3b5f5",
        tertiary: "#8a2be2",
        qudraple: "#f5f5f5",
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
