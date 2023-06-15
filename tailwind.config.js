/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        secondary: "#0078d4",
      },
      fontFamily: {
        'custom': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [

  ],
}