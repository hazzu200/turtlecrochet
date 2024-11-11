/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'background-beige': "#c0c1b4",
        "footer-bg": "#896f65",
        "nav-background": "#fff3ea",
        "white-font": "#efe6d3"

      },
      fontFamily:{
        'Faculty-Glyphic': 'Faculty Glyphic',
        'Montserrat': 'Montserrat'
      },
      backgroundImage:{
        'deliveryImage': "url('./assets/delivery.jpg')"
      }
    },
  },
  plugins: [],
}

