/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "712px",
      desktop: "1260px",
    },
    fontFamily: { sans: ["Jost", "sans-serif"] },
    colors: {
      white: "#FFF",
      peach: "#E7816B",
      lightPeach: "#FFAD9B",
      black: "#1D1C1E",
      darkGrey: "#333136",
      lightGrey: "#F1F3F5",
    },
    fontSize: {
      h1: ["48px", { lineHeight: "48px", fontWeight: 500 }],
      h2: [
        "40px",
        { lineHeight: "48px", fontWeight: 500, letterSpacing: "2px" },
      ],
      h3: [
        "20px",
        { lineHeight: "26px", fontWeight: 500, letterSpacing: "5px" },
      ],
      body: ["16px", { lineHeight: "26px" }],
    },
    extend: {
      backgroundImage: {
        cercle:
          "linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);",
      },
    },
  },
  plugins: [],
};
