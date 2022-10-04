/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#4916b2',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'midgray': '#19191a',
      'deepblue': '#10062a',
      'darkblue': '#131426',
      'neonblue' : '#17b2b8',
      'tankblue' : '#4d8be6',
      'greyblue':'#4b70a7',
      'healgreen':'#61ce7e',
    },
    extend: {
      textShadow: {
        sm: '1px 0px 10px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        neonblue: '0 0 0px #fff, 0 0 5px #fff, 0 0 10px #006cdb, 0 0 20px #006cdb, 0 0 30px #006cdb, 0 0 50px #006cdb, 0 0 70px #006cdb',
        neonHeal : '0 0 0px #fff, 0 0 5px #fff, 0 0 10px #61ce7e, 0 0 20px #61ce7e, 0 0 30px #61ce7e, 0 0 50px #61ce7e, 0 0 70px #61ce7e',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}