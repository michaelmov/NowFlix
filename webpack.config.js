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
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["ng-annotate-loader", "babel-loader"]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?sourceMap!sass-loader?sourceMap"
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback:"style-loader",
					use: "css-loader?sourceMap"
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader']
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: 'styles.[hash].css'
		})
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
