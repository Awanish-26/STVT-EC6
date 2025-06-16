module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/preload.js',
  target: 'electron-preload',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js'],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
}; 