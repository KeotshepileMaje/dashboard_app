/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#29221d",
        primaryLight: "#473b33",
        secondary: "#1e1611",
        white: "#fff",
        black: "#000",
        pumpkin: "#fe6c00",
        silver: "#a8a5a6",
        silverV1: "#bdbabb",
        scarlet: "#fe1e00",
        scarletV1: "rgba(254, 30, 0, 0.79)",
        green: "#00fe93",
        yellow: "#fec80a",
        jet: "#302924",
        peach: "#ffc397",
      },
      fontFamily: {
        bai: ["Bai Jamjuree", "sans-serif"],
      },
      transitionProperty: {
        default: "all 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
