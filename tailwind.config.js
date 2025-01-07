/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "#8C2B32",
        green: "#7192AE",
        darkGreen: "#399179",
        blue: "#1274B5",
        pink: "#CC2B52",
        "lighter-green": "#EAF9F6",
        "navy-blue": "#161A42",
      },
    },
  },
  plugins: [],
};
