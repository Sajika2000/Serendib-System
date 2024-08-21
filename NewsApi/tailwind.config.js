/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      colors :{
        brightColor: "#ABB5C4",
        backgroundColor: "#83AFF4",
      }
    },
  },
  plugins: [],
}

