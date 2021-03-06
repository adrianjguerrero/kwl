const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const OptimizeCssAsset = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization:{
    minimizer:[
      new OptimizeCssAsset(),
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']},
      {test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: 'url-loader?limit=1000000' }
    ]
  },
  plugins : [new MiniCssExtractPlugin()],
  devServer: {
    stats: {
        children: false, // Hide children information
        maxModules: 0 // Set the maximum number of modules to be shown
    },
    port: 3001
}
};