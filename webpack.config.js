var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    src = {
        js: './src/js/page/'
    };

module.exports = {
    // entry: [
    //     'webpack/hot/dev-server',
    //     'webpack-dev-server/client?http://localhost:8080',
    // ],

    // multiple entry
    entry: {
        'js/index':src.js+'index.js',
        'js/a':src.js+'a.jsx',
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
            test: /\.js[x]?$/,
            exclude: /node_modules/,

            // way 1
            loader: 'babel?presets[]=es2015&presets[]=react'

            /*// way 2
            loader: 'babel',
            query: {
                presets: ['es2015','react']
            }*/
        },{
            test: /\.css$/,
            loader: 'style!css?module'
        },{
            test: /\.less$/,
            loader: 'style!css?module!less'
        },{
            test: /\.scss$/,
            loader: 'style!css?module!sass'
        },{
            test: /\.(woff|eot|ttf)$/i,
            loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
        },{
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'url?limit=10000'
            // loaders: [
            //     'image?{bypassOnDebug: true, progressive:true, \
            //         optimizationLevel: 3, pngquant:{quality: "65-80"}}',
            //     'url?limit=10000&name=img/[hash:8].[name].[ext]',
            // ]
        }
        ]
    },
    plugins: [
        new CommonsChunkPlugin(
            'js/common.js',
            [
                'js/a',
                'js/b',
                'js/c'
            ]
        ),
        /*new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),*/
        new HtmlWebpackPlugin({
            title: '我是首页',
            template: './src/html/index.html',
            filename: 'index.html',
            inject: true,
            // hash: true,
            chunks: ['js/index']
        }),
        new HtmlWebpackPlugin({
            title: '自动生成title A',
            template: './src/html/a.html',
            filename: 'a.html',
            inject: true,
            // hash: true,
            chunks: ['js/common.js', 'js/a']
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/a.html'
        })
    ]
};