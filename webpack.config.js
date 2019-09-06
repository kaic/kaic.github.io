const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const DIST_FOLDER_PATH = path.resolve(__dirname);

module.exports = {
  output: {
    path: DIST_FOLDER_PATH
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          name: "assets/fonts/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      title: "Kaic Bento - Software Developer"
    }),
    new CopyPlugin([
      { from: "./src/manifest.json", to: DIST_FOLDER_PATH },
      { from: "./src/service-worker.js", to: DIST_FOLDER_PATH }
    ])
  ]
};
