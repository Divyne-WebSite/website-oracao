/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      'max': '2000px'
    },
    maxHeight: {
      'max': '2000px'
    },
  },
  plugins: [],
}
