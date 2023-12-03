/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: "Oswald, ui-serif",
      //   sans: ['Graphik', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
    },
    screens: {
      // From XXX => @media (min-width: XXXpx) { ... }
      fsm: "640px",
      fmd: "768px",
      flg: "1024px",
      fxl: "1280px",
      f2xl: "1536px",
      // To XXX => @media (max-width: XXX-1px) { ... }
      tsm: { max: "639px" },
      tmd: { max: "767px" },
      tlg: { max: "1023px" },
      txl: { max: "1279px" },
      t2xl: { max: "1535px" },
    },
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
      },
      colors: {
        primary: {
          50: "#fef8ee",
          100: "#fdefd7",
          200: "#fbdbad",
          300: "#f7c17a",
          400: "#f39d44",
          500: "#f0811f",
          600: "#d76214",
          700: "#bb4e13",
          800: "#953e17",
          900: "#783516",
        },
      },
    },
  },
  plugins: [],
};
