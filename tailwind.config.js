/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature: ["Great Vibes"],
    },
    screens: {
        'xl-custom': '969px',
        'xl-custom-max': {'max': '1000px'},
      },
  },
  plugins: [],
}

