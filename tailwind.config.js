/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#12151f',
        'medium': '#242b3b',
        'light': '#2f3946',
        'text': '#bab79d',
      },
    },
  },
  plugins: [],
}