/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#1D1D1D",
      },
    },
    screens: {
      xs: "300px",
      sm: "640px",
    },
  },
  plugins: [],
};
