const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackDabUncommentPlugin = require('./webpack-dab-uncomment-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader:{
    modules: ['node_modules', path.resolve(__dirname)]
  },
  module: {
    rules: [
        {test: /\.(js)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new webpackDabUncommentPlugin(),
			new webpack.optimize.UglifyJsPlugin({
                compress: false,
                mangle: false,
                comments: false,
                beautify: true,
                extractComments: {
                  condition: /~/,
                  filename: '../tests/mvp-test-sample.js'
                },
            })
	]

};
