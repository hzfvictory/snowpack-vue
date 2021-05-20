module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("@csstools/postcss-sass")({
      includePaths: ["./node_modules"],
    }),
    require("autoprefixer")({ overrideBrowserslist: ["> 0.15% in CN"] }),
  ],
};
