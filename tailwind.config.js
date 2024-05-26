/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blackColor: {
        DEFAULT: "#0d0c0f",
        foreground: "#28262D",
      },
      greenColor: {
        DEFAULT: "#00925D",
      },
      whiteColor: {
        DEFAULT: "#F9F9F9",
        foreground: "#9CA4AB",
      },
      yellowColor: {
        DEFAULT: "#FFCD1A",
      },
    },
    fontFamily: {
      sans: ["Inter"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
