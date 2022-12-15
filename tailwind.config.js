/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            text: {
              blue: "hsl(238, 29%, 16%)",
              red: "hsl(14, 88%, 65%)"
            },
            gradient: {
              violet: "hsl(273, 75%, 66%)",
              blue: "hsl(240, 73%, 65%)"
            }
          },
          neutral: {
            text: {
              blue: "hsl(240, 6%, 50%)",
              veryBlue: "hsl(237, 12%, 33%)"
            },
            dividers: {
              blue: "hsl(240, 5%, 91%)"
            }
          }
        }
      }
    },
  },
  plugins: [],
}
