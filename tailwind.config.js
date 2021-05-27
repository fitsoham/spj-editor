module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'spj-red': '#F5296E',
        'spj-yellow': '#F39C12',
      },
      shadows: {
        'spj-red': '0 2px 4px 0 #FFC6C6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
