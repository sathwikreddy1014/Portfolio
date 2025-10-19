/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // 🔵 Fade-in animation
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // 🟢 Slide-up animation
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        // 🟣 Loading bar animation (used in Loader)
        "loading": {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "loading-bar": "loading 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
