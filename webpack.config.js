var webpack = require('webpack');
var path = require('path');

var outputDir = path.resolve(__dirname, 'public');
var srcDir = path.resolve(__dirname, 'ui_src');

console.log('outputDir', outputDir);

var config = {
  entry: srcDir + '/index.jsx',
  module: {
		loaders: [{
      test: /\.jsx?$/,
			include: srcDir,
      loader: 'babel-loader'
    }]
	},
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
  },
};

module.exports = config;