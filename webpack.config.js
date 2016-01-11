var path = require('path');
var webpack = require('webpack');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: [
      path.resolve(__dirname, 'src/js/page/a.js'),
      path.resolve(__dirname, 'src/js/page/b.js'),
      path.resolve(__dirname, 'src/js/page/c/c.js'),
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
    ],
    output: {
        path: path.resolve(__dirname, 'build/js/page'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    plugins: [commonPlugin]
};