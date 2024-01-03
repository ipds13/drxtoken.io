/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        my: "url('..public/img/Group 25.svg')",
      },
      screens: {
        sm: "255px",
        md: "655px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
