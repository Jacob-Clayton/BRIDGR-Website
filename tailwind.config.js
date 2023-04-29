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
        rubik: ['var(--font-rubik)', ...fontFamily.sans],
        britanica: ['var(--font-britanica)', fontFamily.sans],
        
      },
      colors: {
        'off-white' : '#fafafa',
        'primary-black': '#18181c',
        'secondary-white': '#c7c7c7',
        'cetecean-blue' : '#180D4C',
        'violet' : '#8769EB',
        'lavender' : '#B395F5',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
