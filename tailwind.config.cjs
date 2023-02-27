const { createThemes } = require('tw-colors');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    createThemes({
      emerald: { 
        'primary': colors.indigo[600],
      },
      emerald: { 
        'primary': colors.emerald[600],
      },
      blue: {
        'primary': colors.blue[600],
      },
      red: {
        'primary': colors.red[600],
      },
   })
  ],
}
