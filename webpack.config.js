const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        path: __dirname + "/",
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    name: "assets/fonts/[name].[ext]",
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            title: "Kaic Bento - Software Developer"
        })
    ]
};