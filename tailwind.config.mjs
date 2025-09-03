/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      
      },
      fontFamily: {
        brand: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
