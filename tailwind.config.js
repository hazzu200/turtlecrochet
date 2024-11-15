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
        "white-font": "#efe6d3",
        "border-cyan": "#2f394d",
        "background-color": "#fffffc",
        "item-card-bg": "#f6f6f6"

      },
      fontFamily:{
        'Faculty-Glyphic': 'Faculty Glyphic',
        'Montserrat': 'Montserrat'
      },
      backgroundImage:{
        'deliveryImage': "url('./assets/delivery.jpg')"
      },
      gridTemplateColumns:{
        "autofill" : "repeat(auto-fill, minmax(450px, 1fr));"
      }
    },
  },
  plugins: [],
}

