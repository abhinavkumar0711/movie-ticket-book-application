/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        mainXpadding: '0.5rem',  
        mainBottomPadding: '4rem',    
        mainYgap: '1rem',   
      },
      blur: {
        mainBlur: '12.6px', 
      },
      colors: {
        primary: "#6C47DB",
        secondary: "#000000",
        mainbg: "#0C0C0C"
      },
      width: {
        main: "480px",
      },
    },
  },
  plugins: [],
}