/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wallet-rgba": "rgba(66, 135, 245, 0.1)",
        "phone-rgba": "rgba(128,128,128, 0.1)",
        "data-rgba": "rgba(74, 222, 128, 0.1)",
        "elect-rgba": "rgba(248, 113, 113, 0.1)",
        "tv-rgba": "rgba(30, 58, 138, 0.1)",
        "bet-rgba": "rgba(131, 24, 67, 0.1)"
      },
    },
    fontFamiy: {
      poppins: ["poppins"],
    },
  },
  plugins: [],
};
