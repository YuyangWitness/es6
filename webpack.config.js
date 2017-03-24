const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './js/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'script.js'
	},
	module:{
		rules: [
			{   
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/,
				include: /js/,
				query: {
					presets: ['env']
				}  
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			}
		]
	},
	 plugins: [
     new HtmlWebpackPlugin({
     	template: './index.html',
     	inject: 'body'
     })
  ]
}