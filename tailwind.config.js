const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    customForms: () => ({
      default: {
        checkbox: {
          icon: '<svg  viewBox="-5 -5 30 30" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
        },
      },
    }),
    fontFamily: {
      poppins: ['Poppins', 'system-ui', 'sans-serif'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      // amber: colors.amber,
      // yellow: colors.yellow,
      // lime: colors.lime,
      green: colors.green,
      // emerald: colors.emerald,
      // teal: colors.teal,
      // cyan: colors.cyan,
      // sky: colors.sky,
      blue: colors.blue,
      // indigo: colors.indigo,
      // violet: colors.violet,
      // purple: colors.purple,
      // fuchsia: colors.fuchsia,
      // pink: colors.pink,
      // rose: colors.rose,
    },
    extend: {
      borderWidth: ['last', 'first'],
      colors: {
        'spj-red': '#F5296E',
        'spj-yellow': '#F39C12',
      },
      shadows: {
        'spj-red': '0 2px 4px 0 #FFC6C6',
      },
      minWidth: {
        75: '70%',
        65: '65%',
      },
      height: {
        '60s': '60vh',
      },
      minHeight: {
        75: '70%',
        65: '65%',
      },
      maxHeight: {
        '60s': '60vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/custom-forms'), require('@tailwindcss/line-clamp')],
};
