/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'azo':["Azo Sans Uber W01 Regular"],
      'Montserrat':["'Montserrat', sans-serif "],
    },
    cursor:{
      cursor: ["pointer"],
    }
  },
  plugins: [],
}