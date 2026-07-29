/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        't-brown': { 50:'#fdf8f4', 100:'#faeee4', 200:'#f3d7c2', 300:'#e9bc9a', 400:'#da986d', 500:'#c97a48', DEFAULT:'#7e5233', 600:'#bc6137', 700:'#9d4c2e', 800:'#7e5233', 900:'#66422b' },
        't-green': { 50:'#f1f7f4', 100:'#dceae3', 200:'#bcd6ca', 300:'#91bbaa', 400:'#659d88', 500:'#45816d', DEFAULT:'#153e2d', 600:'#326756', 700:'#285346', 800:'#224339', 900:'#153e2d' },
        cream:   { DEFAULT:'#fbf8f1', 50:'#ffffff', 100:'#fbf8f1', 200:'#f2ead3', 300:'#e6d7b0' },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from:{ opacity:0 }, to:{ opacity:1 } },
        slideUp: { from:{ opacity:0, transform:'translateY(20px)' }, to:{ opacity:1, transform:'translateY(0)' } },
        float: { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-8px)' } },
      },
    },
  },
  plugins: [],
}
