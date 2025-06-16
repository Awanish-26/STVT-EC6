module.exports = [
  // CSS Rules
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  // JSX/JS Rules
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react', '@babel/preset-env']
      }
    }
  },
  // Node files
  {
    test: /\.node$/,
    use: 'node-loader',
  },
];
