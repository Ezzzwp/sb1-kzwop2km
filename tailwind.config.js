/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'dark': '#3A4A5C',
          'teal': '#5CBDB4',
          'light-teal': '#7DD3CA',
        }
      }
    },
  },
  plugins: [],
};
