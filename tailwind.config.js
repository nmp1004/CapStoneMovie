/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode:"jit",
  theme: {
    extend: {
      height : {
        120: '480px',
        200:'800px'
      }
    },
  },
  plugins: [],
}

