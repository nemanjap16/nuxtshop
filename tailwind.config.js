/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      colors: {
        'primary-red': 'hsl(5, 77%, 33%)',
      },
      fontWeight: {
        'kumbh-100': '100',
        'kumbh-200': '200',
        'kumbh-300': '300',
        'kumbh-400': '400',
        'kumbh-500': '500',
        'kumbh-600': '600',
        'kumbh-700': '700',
      },
    },
    fontFamily: {
      kumbh: ['Kumbh Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
