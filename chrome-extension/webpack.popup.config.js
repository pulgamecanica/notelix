module.exports = {
  ...require("./webpack.config"),
  entry: "./src/popup.index.js",
  output: {
    ...require("./webpack.config").output,
    filename: "popup.dist.js",
  },
};
