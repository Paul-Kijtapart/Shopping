var webpack = require('webpack');

var config = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: 'dist/js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};

module.exports = config;