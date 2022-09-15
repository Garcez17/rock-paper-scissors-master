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
          500: 'hsl(229, 64%, 46%)',
          900: 'hsl(229, 25%, 31%)',
        }
      }
    },
  },
  plugins: [],
}
