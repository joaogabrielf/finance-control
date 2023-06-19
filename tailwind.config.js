/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      gray: {
        100: '#E1E1E6',
        300: '#C4C4CC',
        400: '#8D8D99',
        500: '#7C7C8A',
        600: '#323238',
        700: '#29292E',
        800: '#202024',
        900: '#121214',
      },
      green: {
        300: '#00B37E',
        500: '#00875F',
        700: '#015F43',
      },
      red: {
        300: '#F75A68',
        500: '#AB222E',
        700: '#7A1921',
      },
      yellow: {
        500: '#FBA94C',
      },
    },
    extend: {
      boxShadow: {
        custom: '0 0 0 2px #00875F',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      gtsm: { min: '640px' },
      // => @media (max-width: 639px) { ... }
    },
    plugins: [],
  },
}
