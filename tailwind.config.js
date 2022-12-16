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
      },
      fontFamily: {
        kumbhSans: "var(--font-kumbh-sans)"
      },
      dropShadow: {
        // illustration: "0px 31px 0px rgba(0, 0, 0, 0.06)"
        illustration: "0px 31px 0px rgba(101, 101, 231, .2)"
      },
      boxShadow: {
        card: [
          "0px 2.8px 2.2px rgba(0, 0, 0, 0.037)",
          "0px 6.7px 5.3px rgba(0, 0, 0, 0.053)",
          "0px 12.5px 10px rgba(0, 0, 0, 0.065)",
          "0px 22.3px 17.9px rgba(0, 0, 0, 0.077)",
          "0px 41.8px 33.4px rgba(0, 0, 0, 0.093)",
          "0px 100px 80px rgba(0, 0, 0, 0.13)"
        ]
      }
    },
  },
  plugins: [],
}
