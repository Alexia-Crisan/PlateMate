/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ogreen: {
          300: "#a7c957",
          400: "#6a994e",
          500: "#386641",
          600: "#2d4e34",
          700: "#27402d",
          900: "#112215",
        },
        ored: {
          500: "#bc4749",
          600: "#9c3438",
          700: "#832e34",
        },
        oyellow: {
          200: "#f2e8cf",
          500: "#c98f46",
        },
      },
    },
  },
  plugins: [],
};
