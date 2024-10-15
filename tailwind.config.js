/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue : '#0E2442',
        tomato: '#ff6347',
        jsBlack: '#323330'
      },
      screens: {
        'max-xl' : { 'max': '1050px' },
        'max-lg' : { 'max': '1100px' },
        'max-md' : { 'max': '860px' },
        'max-sm' : { 'max': '550px' },
      }
    },
  },
  plugins: [],
}

