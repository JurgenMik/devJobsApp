const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'texture': "url('../public/assets/bg-pattern-header.svg')",
      }
    },
      fontFamily: {
        'sans' : ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  plugins: [],
}