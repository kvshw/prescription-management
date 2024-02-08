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
        primary_dark: "#047562",
        secondary: "#FFCE50",
        light: "#fff",
        patientdashboard_green: "#03A48A",
        patientdashboard_blue: "#4881F0",
        patientdashboard_orange: "#FB9F6C",
        patientdashboard_yellow: "#FFBD11",

        font: "#1A2430",
        fontlight: "#fff",
        dashboard: "#292425",
        error: "#f74f76",
        hovering: "#018a73",
      },
    },
  },
  plugins: [],
};
