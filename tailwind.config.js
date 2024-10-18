/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        getirColor:"#5D38BE",
        getirBg:"#f5f5f5"
      }
    },
  },
  plugins: [],
}

