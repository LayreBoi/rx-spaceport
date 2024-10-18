/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '18': '4.5rem',
        '38': '9.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      height: {
        '34': '8.5rem',
        '54': '13.5rem',
        '100': '25rem',
        '232': '58rem',
      }
    },
  },
  plugins: [],
}

