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
        'glass-1':
          'linear-gradient(153deg, rgba(208, 208, 208, 0.25) 0%, rgba(245, 245, 245, 0.50) 100%)',
        'glass-2':
          'radial-gradient(220.77% 112.2% at 42.83% 0%, #CCC9C8 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
};
