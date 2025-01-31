module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
  plugins: [], // Keep this empty unless adding official Tailwind plugins
};
