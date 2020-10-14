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
    },
  },
  variants: {},
  // plugins: [],
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
