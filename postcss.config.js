module.exports = {
  map: false,
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ["./themes/**/*.html"],
    },
    autoprefixer: {},
    cssnano: { preset: "default" },
  },
};
