const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common');

module.exports = merge.smart(common, {
  entry: [
    './src/index.js',
  ],

  devtool: 'source-map',

  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: { ecma: 8 },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
