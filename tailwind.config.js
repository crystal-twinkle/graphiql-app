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
        'dark-50': 'rgba(18, 21, 31, 0.8)',
        'medium': '#242b3b',
        'light': '#2f3946',
        'text': '#bab79d',
      },
    },
  },
  plugins: [],
}