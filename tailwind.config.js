/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', fontFamily.sans],
        urbanist: ['var(--font-urbanist)', fontFamily.sans],
        jost: ['var(--font-jost)', fontFamily.sans]
      },
      colors: {
        'off-white' : '#EDEFF4',
        'primary-black': '#18181c',
        'secondary-white': '#c7c7c7',
        'purple' : '#6446A3',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
