
import flowbite from "flowbite/plugin";

module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", 
     "node_modules/flowbite/**/*.js", 
  ],
 theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translateY(0) scale(1.1)" },
          "50%": { transform: "translateY(-10px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [flowbite],

};







