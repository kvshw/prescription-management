/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        30: "30%",
        70: "70%",
      },
      height: {
        90: "90%",
      },
      colors: {
        primary: "#03A48A",
        secondary: "#FFCE50",
        font: "#1A2430",
        dashboard: "#292425",
        error: "#f74f76",
        hovering: "#018a73",
      },
    },
  },
  plugins: [],
};
