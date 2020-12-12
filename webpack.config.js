const path = require('path')
module.exports = {
	mode: 'production',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'index.js',
		// library: 'MyLibrary',
		libraryTarget: 'umd',
	},
	module: {
		// rules: [
		// 	{
		// 		test: /\.jsx?$/,
		// 		include: [path.join(__dirname, 'src')],
		// 		loader: 'babel-loader',
		// 	},
		// ],
	},
}
