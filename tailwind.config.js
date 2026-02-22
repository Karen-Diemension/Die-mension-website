/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'near-black': '#1B1B1B',
        'accent-gold': '#FCCF8A',
      },
      fontFamily: {
        'heading': ['Cinzel', 'serif'],
        'body': ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
