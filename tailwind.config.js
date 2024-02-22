/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/components/*.jsx", 
    "./src/components/*/*.jsx"
  ],
  theme: {
    extend: {
      width: {
        '9/10': "90%", 
        '8.5/10': "85%", 
        '7/10': "70%"

      }
    },
  },
  plugins: [],
}

