module.exports = {
  ...require("./webpack.config"),
  entry: "./src/content-script.index.js",
  output: {
    ...require("./webpack.config").output,
    filename: "content-script.dist.js",
  },
};
