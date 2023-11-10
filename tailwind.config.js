/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        4: "4rem",
        8: "8rem",
      },
    },
  },
  plugins: [],
};
