const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const distPath = path.resolve(__dirname, '..', 'dist');
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: { js: 'babel-loader!eslint-loader' },
            extractCSS: true,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..') }),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'public/index.html',
    }),
    new StyleLintPlugin({
      confFile: './.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  output: {
    path: distPath,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
};
