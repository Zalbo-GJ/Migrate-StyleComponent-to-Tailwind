/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8AC1A",
        white: "#ffffff",
        transparent: "transparent",
        black: "#000000",
        darkGray: "#262626",
        gray: "#A0A0A0",
        midLightGray: "#71747A",
        lightGray: "#EBEBEB",
        lightBlue: "rgba(36,139,242,0.1)",
        lighterBlue: "#F2F3F5",
        lagoonBlue: "#035667",
        kashmirBlue: "#5a6782",
        skyBlue: "#36bed9",
        orange: "#F8AC1A",
        purple: "#cf54cf",
        success: "#43b581",
        foregroundPrimary: "#171A1F",
      },
    },
  },
  plugins: [],
};
