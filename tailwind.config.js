/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],

  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        Arch: ["Archivo Black"],
      },
      backgroundImage: {
        "home-page": "url('./imgs/homePage.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        "btn-color": "#8D8D8D",
        main: "#E76F51",
        "links-color": "#D2D2D2",
      },
      backgroundColor: {
        main: "#E76F51",
      },
    },
  },
  plugins: [],
};
