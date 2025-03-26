/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        context: "var(--context-color)"
      },
      animation: {
        'fade-in-up': 'fade-in-up 1.2s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
