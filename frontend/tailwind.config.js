/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: '#292F36',
          hover: '#CDA274',
        },
      },
    },
  },
}