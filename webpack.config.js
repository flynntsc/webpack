var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var src = {
    js: './src/js/page/'
}

module.exports = {
    entry: {
        'js/index':src.js+'index.js',
        'js/a':src.js+'a.js',
        'js/b':src.js+'b.js',
        'js/c':src.js+'c/c.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        // publicPath: './'
    },
    resolve: {
        extensions: ['','.js','.jsx','.css','.less','.scss','.jpg','.png','.gif']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },{
            test: /\.css$/,
            loader: 'style!css'
        },{
            test: /\.less$/,
            loader: 'style!css!less'
        },{
            test: /\.scss$/,
            loader: 'style!css!sass'
        },{
            test: /\.(woff|eot|ttf)$/i,
            loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
        },{
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'url-loader?limit=10000'
            // loaders: [
            //     'image?{bypassOnDebug: true, progressive:true, \
            //         optimizationLevel: 3, pngquant:{quality: "65-80"}}',
            //     'url?limit=10000&name=img/[hash:8].[name].[ext]',
            // ]
        }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            'js/common.js',
            [
                'js/a',
                'js/b',
                'js/c'
            ]
        ),
        new HtmlWebpackPlugin({
            title: '我是首页',
            template: './src/html/index.html',
            filename: 'index.html',
            inject: 'body',
            hash: true,
            chunks: ['js/index']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/a.html',
            filename: 'a.html',
            inject: 'body',
            hash: true,
            chunks: ['js/common.js', 'js/a']
        })
    ]
};