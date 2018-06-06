var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-sample.bundle.js'
        },
        module: {
            rules: [
                { test: /\.css$/, use: ['style-loader','css-loader'] }
            ]
        },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};