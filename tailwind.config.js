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
      },
    },
  },
  plugins: [],
}

