/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f1f8f5',
          '100': '#ddeee4',
          '200': '#bdddcd',
          '300': '#90c5ae',
          '400': '#61a68a',
          '500': '#3c8067',
          '600': '#2e6d57',
          '700': '#255747',
          '800': '#1f463a',
          '900': '#1b3930',
          '950': '#0e201b',
      },
        secondary: '#f2ebe3',
        dblue: '#1c232b',
        greyblue: '#6c7289',
        white: '#ffffff',

      },
      fontFamily: {
        primary: 'Montserrat',
        secondary: 'Fraunces',

      },
    },
  },
  plugins: [],
}

