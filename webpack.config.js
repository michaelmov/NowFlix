var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: __dirname + "/src/app.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap")
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
			},
			{
				test: /\.html$/,
				loaders: ['html-loader']
			}

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('styles.[hash].css')
	],
	devtool: 'source-map',
	devServer: {
		inline: true,
		hot: true,
		port: 3000,
		stats: 'minimal',
		contentBase: './src'
	}
};
