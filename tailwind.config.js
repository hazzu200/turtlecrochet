/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'background-beige': "#e3d6be",
        "border-cyan": "#22577a"
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

