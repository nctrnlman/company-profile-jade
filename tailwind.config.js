/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '280px',
      md: '480px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {},
  },
  plugins: [],
};
