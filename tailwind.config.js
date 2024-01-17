/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor': '#2a68ff',
        'greyIsh': '#d3d3d3',
        'cardshadow': '#f7f8f9',
        'textColor' : '#252b36', 
  
      }
    },
  },
  plugins: [],
}

