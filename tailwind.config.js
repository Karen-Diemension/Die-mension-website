/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FCCF8A',
          light: '#F8CE8E',
          dark: '#8F7145',
          darker: '#8A6C3F',
        },
        dm: {
          dark: '#1B1B1B',
          darker: '#161616',
          body: '#5E5E5E',
          muted: '#808080',
          warm: '#433C32',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          off: '#FAF9F5',
          light: '#F6F6F6',
        },
        separator: '#E2E2E2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        button: '1px',
      },
    },
  },
  plugins: [],
};
