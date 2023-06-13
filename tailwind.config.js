/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary: "#0078d4",
        third: "005ba1"
      },
      fontFamily: {
        'custom': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [

  ],
}