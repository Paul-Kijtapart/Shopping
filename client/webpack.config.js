var webpack = require('webpack');

var config = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
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