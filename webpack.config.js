webpack = require('webpack');

module.exports = {
    entry: "./src/client.js",
    output: {
        path: __dirname + '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.styl$/, loader: "style!css!stylus" }, //!css!autoprefixer
            { test: /\.jpg$/, loader: "file?name=[path][name].[ext]?[hash]"},
            { test: /\.png$/, loader: "file?name=[path][name].[ext]?[hash]"},
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel'
            }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
          "process.env": {
            IS_BUNDLING_FOR_BROWSER: true
          }
        }),
      ]
};
