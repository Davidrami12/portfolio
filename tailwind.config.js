/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary: "#00f6ff"
      },
      fontFamily: {
        'custom': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [

  ],
}