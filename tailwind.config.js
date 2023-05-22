
/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        'first': '#B2A4FF',
        'second': '#FFB4B4',
        'third': '#FFDEB4',
        'fourth': '#FDF7C3',
      },
    },
  },
  plugins: []
}

