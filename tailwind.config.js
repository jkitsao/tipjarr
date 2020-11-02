module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      height: {
        lg: "15.5rem",
        xl: "20rem",
        xxl: "25rem",
        cxl: "23rem",
      },
      width: {
        "p-card": "70%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#14213d",
      secondary: "#023E8A",
      mid: "#0077B6",
      neut: "#0096C7",
      light: "#00B4D8",
      bahama: "#48CAE4",
      sky: "#90E0EF",
      day: "#ADE8F4",
      clear: "#CAF0F8",
    }),
  },
  variants: {},
  // plugins: [],
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
