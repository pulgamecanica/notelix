module.exports = {
  ...require("./webpack.config"),
  entry: "./src/background.index.js",
  target: "webworker",
  output: {
    ...require("./webpack.config").output,
    filename: "background.dist.js",
  },
};
