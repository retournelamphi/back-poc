var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/server.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname)
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }};