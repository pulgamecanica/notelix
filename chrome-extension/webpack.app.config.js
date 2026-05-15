module.exports = {
  ...require("./webpack.config"),
  entry: "./src/app.index.js",
  output: {
    ...require("./webpack.config").output,
    filename: "app.dist.js",
  },
};
