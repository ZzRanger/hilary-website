/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
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
    }
  }
}
}