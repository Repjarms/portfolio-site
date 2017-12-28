require ('dotenv').config({ silent: true });
const path = require('path');
const express = require('express');

module.exports = (app) => {
  if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('./webpack.config.dev.js');
    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    }));

    app.use(webpackHotMiddleware(compiler, {
      reload: true,
    }));
  } else {
    app.use(express.static(path.resolve(__dirname, '..', 'dist')));
  }
};
