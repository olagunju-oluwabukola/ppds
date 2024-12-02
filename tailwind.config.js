/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#f7ede2',
          200: '#e3d5ca',
          300: '#cdb4a1',
          400: '#b5838d',
          500: '#6d4c41',
          600: '#5d4037',
          700: '#4e342e',
          800: '#3e2723',
          900: '#1b1a17',
        },
      },
    },
  },
  plugins: [],
}

