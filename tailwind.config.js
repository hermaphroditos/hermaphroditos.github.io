/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2CBCE9',
        red: '#DC4492',
        "deep-blue": "#010026",
        'opaque-black': 'rbga(0,0,0,0,35) '
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": 
        "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.0%)",
        "gradient-rainblue": 
        "linear-gradient(90deg, #24CBFF 14.21%, #FC59FF 69.05%, #FFBD0C 78.0%)"
      }),
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url(./assets/person-1.png')"
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}

