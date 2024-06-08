/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clinic-color': '#797aec',
        'clinic-color-bg': '#e7e8fa',
      }
    },
  },
  plugins: [],
}

