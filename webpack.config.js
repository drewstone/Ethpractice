var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'app/views/post');
var APP_DIR = path.resolve(__dirname, 'app/views/pre');
console.log("BUILD_DIR: " + BUILD_DIR);
console.log("APP_DIR: " + APP_DIR);

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;

