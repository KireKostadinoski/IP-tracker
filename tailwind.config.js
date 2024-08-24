/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '375px',
      lg: '950px',
      xl: '1440px'
    },
    extend: {
      colors:{
        VeryDarkGray: 'hsl(0, 0%, 17%)',
        DarkGray: 'hsl(0, 0%, 59%)',
      },
      fontFamily:{
        sans: ["Rubik", 'sans-serif']
      },
      backgroundImage: () =>({
        bgPatternMobile: "url('../images/pattern-bg-mobile.png')",
        bgPatternDesktop: "url('../images/pattern-bg-desktop.png')", 
        
      })
    },
  },
  plugins: [],
}

