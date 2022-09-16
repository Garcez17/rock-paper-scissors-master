/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },
      colors: {
        gray: {
          500: 'hsl(217, 16%, 45%)',
          900: 'hsl(229, 25%, 31%)',
        },
        blue: {
          350: 'hsl(230, 89%, 65%)',
          400: 'hsl(230, 89%, 62%)',
          500: 'hsl(229, 64%, 46%)',
          700: 'hsl(230, 89%, 56%)',
          800: 'hsl(214, 47%, 23%)',
          900: 'hsl(229, 25%, 31%)',
          950: 'hsl(237, 49%, 15%)',
        },
        red: {
          450: 'hsl(349, 70%, 56%)',
          500: 'hsl(349, 71%, 52%)',
          700: 'hsl(349, 71%, 45%)',
        },
        amber: {
          450: 'hsl(40, 84%, 53%)',
          500: 'hsl(39, 89%, 49%)',
          700: 'hsl(39, 89%, 35%)',
        }
      }
    },
  },
  plugins: [],
}
