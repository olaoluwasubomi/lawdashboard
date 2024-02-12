/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background':"#e6e6e6",
        'text' : "#999999",
        'login' : "#59b847",
        'bodybackground': "#f9f9f9",
        'piecolor' :"#428a7a",
        'lawbarchat':"#b3b3b3"
      },

      background:{
        "loginbg": "url('/images/Symbol-of-Law-and-Justice.jpg')",
        "newaccount":"url('/images/photo-lady-justice-holds-a-scale-with-law-books bg-in-the-background-61553.jpg')"
      },
      screens:{
        'sm':"300px",
        'md':"700px",
        'lg':"1024px"
      },
    },
  },
  plugins: [],
}