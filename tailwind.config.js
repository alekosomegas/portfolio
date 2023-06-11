/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        mainHighlight: '#ffd400',
        secondaryHighlight: '#5d74d6',
      },
      backgroundColor: {
        main: '#434a95',
        secondary: '#05062c',
      },
      backgroundImage: {
        'landing' : "url('/images/home_bg.png')"
      },
      keyframes: {
        arrow: {
          '0%': { opacity: 1},
          '100%': { opacity: 0, transform: 'translate(-10px, -10px)' },
        }
      },
      animation: {
        'reduce': "arrow 3s infinite"
      },
    },
  },
  plugins: [],
}
