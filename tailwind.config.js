/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "viewstudycase.html"],
  theme: {
    fontFamily: {
      darker: ["Darker Grotesque", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        body: "var(--body-color)",
        heading: "var(--heading-color)",
        paragraph: "var(--paragraph-color)",
        disable: "var(--disable-color)",
        glass: "var(--glass-color)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
