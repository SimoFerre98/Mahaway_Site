/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#413620',
        'golden-brown': '#9C6615',
        'golden-light': '#9F7833',
        'sunset': '#FFD791',
        'french-gray': '#CDD1DE',
        'white': '#ffffff',
        'black': '#000000',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}