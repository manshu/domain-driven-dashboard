const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./resources/**/*.blade.php', './resources/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
  plugins: [require('@tailwindcss/typography')],
  plugins: [require('@tailwindcss/aspect-ratio')],
}
