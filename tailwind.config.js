module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
      },
    },
  },

  plugins: [require('tailwindcss'), require('autoprefixer'), require('@tailwindcss/forms')],
}
