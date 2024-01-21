const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        // Test for Sass/SCSS files
        test: /\.s[ac]ss$/i,
        // Use MiniCssExtractPlugin loader to extract CSS into separate files
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // Load CSS
          "sass-loader", // Convert Sass to CSS
        ],
      },
      {
        // Test for image files
        test: /\.(png|jpe?g|gif|svg)$/i,
        // For image types, we'll use asset/resource.
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
   new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8080,
  },
};
