/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary1: 'hsl(259, 100%, 65%)',
        primary2: 'hsl(0, 100%, 67%)',
        offWhite: 'hsl(0, 0%, 94%)',
        lightgrey: 'hsl(0, 0%, 86%)',
        smokegrey: 'hsl(0, 1%, 44%)'
      },
      fontFamily: {
        pop: ['Poppins']
      }
    },
  },
  plugins: [],
}

