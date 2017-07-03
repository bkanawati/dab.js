const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackCommentExtractionPlugin = require('./webpack-comment-extraction-plugin.js');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {test: /\.(js)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
      new webpackCommentExtractionPlugin(),
			new webpack.optimize.UglifyJsPlugin({
                compress: false,
                mangle: false,
                comments: true,
                beautify: true,
                extractComments: {
                  condition: /ß∂dNß0j1/,
                  filename: '../tests/tape-test-sample.js'
                },
            }),    
	]
};