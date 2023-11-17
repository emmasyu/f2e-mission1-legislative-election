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
      'gaegu': ['Gaegu', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}

