var path = require('path');
var webpack = require('webpack');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var src = {
    js: './src/js/page/'
}

module.exports = {
    entry: {
      a:src.js+'a.js',
      b:src.js+'b.js',
      c:src.js+'c/c.js'
    },
    output: {
        path: 'build/js/page',
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