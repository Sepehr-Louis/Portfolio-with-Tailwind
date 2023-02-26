/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    
    extend: { screens:{
      res_menu:{max:"1025px"},
      mob:{max:"768px"},
      mini:{max:"350px"}
     
    }
  },
  },
  plugins: [],
}
