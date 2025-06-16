'use strict';
const path = require('path');
const rules = require('./webpack.rules');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(__dirname, './src/renderer/renderer.js'),
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'electron-renderer',
  // Disable hot module replacement for Electron
  devServer: {
    hot: false,
    liveReload: false
  },
  optimization: {
    // Disable hot module replacement
    moduleIds: 'named',
  }
};