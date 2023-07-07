/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hn-pink': '#F0AECE',
        'hn-blue': '#BEE3E6',
        'hn-yellow': '#FAD67F',
        'hn-green': '#D1E1D6',
        'hn-lezhin': '#D93831',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        ethereal: ['var(--font-ethereal)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
};
