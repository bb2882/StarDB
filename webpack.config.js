const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            // CSS loader here
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    'css-loader'
                ]
            }
        ]
    },
    mode: 'development',
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        port: 4200,
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", ////3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns scss into css
                ]
            }
        ]
    },

    //shows where you made mistake in console, helpful while debugging
    devtool: 'eval',
    //starting webpack again everytime you make changes in code
    watch: true,
}