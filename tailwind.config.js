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
        lgx: "17rem",
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
    lineHeight: {
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
    },
  },
  colors: {
    code: {
      green: "#b5f4a5",
      yellow: "#ffe484",
      purple: "#d9a9ff",
      red: "#ff8383",
      blue: "#93ddfd",
      white: "#fff",
    },
  },
  typography: (theme) => ({
    default: {
      css: {
        color: theme("colors.gray.700"),
        h2: {
          fontWeight: "700",
          letterSpacing: theme("letterSpacing.tight"),
          color: theme("colors.gray.900"),
        },
        h3: {
          fontWeight: "600",
          color: theme("colors.gray.900"),
        },
        "ol li:before": {
          fontWeight: "600",
          color: theme("colors.gray.500"),
        },
        "ul li:before": {
          backgroundColor: theme("colors.gray.400"),
        },
        code: {
          color: theme("colors.gray.900"),
        },
        a: {
          color: theme("colors.blue.400"),
        },
        pre: {
          color: theme("colors.gray.200"),
          backgroundColor: theme("colors.gray.800"),
        },
        blockquote: {
          color: theme("colors.gray.900"),
          borderLeftColor: theme("colors.gray.200"),
        },
      },
    },
  }),
  variants: {},
  // plugins: [],
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
