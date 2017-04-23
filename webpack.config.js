const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: __dirname + "/src/app.module.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	externals: {
	    "angular": "angular",
        "angular-material": "ngMaterial"
    },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["ng-annotate-loader", "babel-loader"]
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader",
					"css-loader?sourceMap!sass-loader?sourceMap")
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
			},
			{
				test: /\.html$/,
				loaders: ['html-loader']
			},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'file-loader'
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
		contentBase: '/src',
		historyApiFallback: true
	}
};
