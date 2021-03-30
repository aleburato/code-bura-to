module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: ["./hugo_stats.json"],
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return [...els.tags, ...els.classes, ...els.ids, "dark"];
      },
    },
    autoprefixer: {},
    cssnano: { preset: "default" },
  },
};
