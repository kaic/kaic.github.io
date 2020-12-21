const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const DIST_FOLDER_PATH = path.join(__dirname, 'dist')

module.exports = env => {
  return {
    output: {
      path: DIST_FOLDER_PATH
    },
    module: {
      rules: [
        {
          test: [/\.html$/],
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: false,
                interpolate: true
              }
            }
          ]
        },
        {
          test: /\.(s*)css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/jpeg',
              },
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
          loader: 'url-loader',
          options: {
            name: 'assets/fonts/[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: 'Kaic Bento - Software Developer',
        template: './src/index.html',
        filename: './index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false
        },
      }),
      new CopyPlugin([
        { from: './README.md', to: DIST_FOLDER_PATH },
        { from: './LICENSE', to: DIST_FOLDER_PATH },
        { from: './src/assets/icons/icons.svg', to: DIST_FOLDER_PATH + '/assets/icons/' },
        { from: './src/assets/images/favicons/', to: DIST_FOLDER_PATH + '/assets/images/favicons' },
        { from: './src/manifest.json', to: DIST_FOLDER_PATH },
        { from: './src/service-worker.js', to: DIST_FOLDER_PATH }
      ]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': env.production
          ? JSON.stringify('production')
          : JSON.stringify('development')
      })
    ]
  }
}
