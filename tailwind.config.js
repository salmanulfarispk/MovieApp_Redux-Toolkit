/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f171e',          
        secondary: '#1a242f', 
        fontPrimary: '#FFFFFF',
        fontSecondary: '#79b8f3',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'], 
        secondary: ['Arial', 'sans-serif'],
      },
    },
  },

  plugins: [],
}