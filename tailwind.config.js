/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "hn-pink": "#F0AECE",
        "hn-blue": "#BEE3E6",
        "hn-yellow": "#FAD67F",
        "hn-green": "#D1E1D6"
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
      ethereal: ['var(--font-ethereal)']
    }
  }
}
}