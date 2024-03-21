/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily : {
        "lora" : ['lora'],
        "poppins" : ['poppins'],
      },
      colors : {
        "ungu" : '#8B52FF',
        "pink" : '#FF52AE',
        "dark-title-color" : '#D1C0F1',
        "text-color-light" : '#A197B4',
        "dark-body-color" : '#14092A',
        "dark-container-color" : '#14092A',
      }
      
    },
  },
  plugins: [],
}

