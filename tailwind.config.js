/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#344e41',
        'golden-brown': '#3a5a40',
        'golden-light': '#588157',
        'sunset': '#a3b18a',
        'french-gray': '#dad7cd',
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