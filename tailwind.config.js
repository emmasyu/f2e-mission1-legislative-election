const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    fontFamily:{
      'sans': ['"Noto Sans TC"', ...defaultTheme.fontFamily.sans],
      'serif': ['"Noto Serif TC"', ...defaultTheme.fontFamily.sans],
      'gaegu': ['Gaegu', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'primary': '#00A199',
        'primary-light': '#14C3BB',
        'secondary': '#FFDC9E',
        'secondary-dark': '#14C3BB',
        'secondary-light': '#FFE9C3',
        'secondary-tint': '#FCF9E9'
      },
    },
  },
  plugins: [],
}

