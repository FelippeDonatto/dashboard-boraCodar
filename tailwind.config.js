/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#292738',
        700: '#363447',
        600: "#7367F0",
        500: "#4A4556",
        400: "#A66DE9",
        300: "#CE9FFC"
      },

      green: {
        500: '#81FBB8'
      },

      orange: {
        500: '#DF9780'
      },

      white: '#FFFFFF'
    },
    extend: {}
  },
  plugins: []
}
