module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: __dirname.replace('config', 'dist'),
		filename: "./app/temp/scripts/App.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["es2015"]
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};


// A megoldas a fenti "path" valtozo bevezetese es
// a "filename" valtozo kibovitese az eleresi uttal
// (adding ./ to the path flips it to a relative path)

/* **************************************************************************
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.output.path: The provided value "./app/temp/scripts" is not an absolute path!
 ************************************************************************** */
/*module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: "./app/temp/scripts",
		filename: "App.js"
	}
};*/