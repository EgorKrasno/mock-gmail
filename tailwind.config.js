module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '650': '650px',
      },
      height: {
        '550': '550px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}