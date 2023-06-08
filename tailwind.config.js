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
        mainHighlight: '#ffd400'
      },
      backgroundColor: {
        main: '#434a95',
        secondary: '#05062c',
      },
      backgroundImage: {
        'landing' : "url('/images/home_bg.png')"
      },
    },
  },
  plugins: [],
}
