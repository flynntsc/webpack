var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    ProvidePlugin = webpack.ProvidePlugin,
    UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    entryJsPath = path.join(__dirname,'./src/js/page/'),
    nodeModulesPath = path.join(__dirname,'./node_modules/');

module.exports = {
    entry: {
        'js/index':[
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.join(entryJsPath,'index.js')
        ],
        'js/a':[
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.join(entryJsPath,'a.jsx')
        ],
        'js/b':[
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            path.join(entryJsPath,'b.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        // name、hash、chunkhash
        filename: '[name].js',
        // publicPath: './'
    },
    resolve: {
        extensions: ['','.js','.jsx','.css','.less','.scss','.jpg','.png','.gif'],
        alias: {
            'react': path.join(nodeModulesPath,'react/dist/react.min'),
            'react-dom': path.join(nodeModulesPath,'react-dom/dist/react-dom.min'),
            'jquery': path.join(nodeModulesPath,'jquery/dist/jquery.min')
        }
    },
    module: {
        noParse: [
            path.join(nodeModulesPath,'react/dist/react.min'),
            path.join(nodeModulesPath,'react/dist/react-dom.min'),
            path.join(nodeModulesPath,'react/dist/jquery.min')
        ],
        loaders: [{
            test: /\.js[x]?$/,
            exclude: [nodeModulesPath],

            // way 1
            loader: 'babel?presets[]=es2015&presets[]=react'

            /*// way 2
            loader: 'babel',
            query: {
                presets: ['es2015','react']
            }*/
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader','css!postcss')
            // loader: 'style!css?module'
        },{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader','css?module!postcss!less')
            // loader: 'style!css?module!less'
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader','css?module!postcss!sass')
            // loader: 'style!css?module!sass'
        },{
            test: /\.(woff|eot|ttf)$/i,
            loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
        },{
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'url?limit=10000'
            /*loaders: [
                'image?{bypassOnDebug: true, progressive:true, \
                    optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                'url?limit=10000&name=img/[hash:8].[name].[ext]',
            ]*/
        }
        ]
    },
    externals: {
        // Exposing global variables，easy to require
        // '$': './jquery/js/lib/jquery'
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name]" + ".[chunkhash].css"),
        /*
        // Vendor chunk,dispense with require.what is necessary?
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),*/

        new CommonsChunkPlugin(
            'js/common.js',
            [
                'js/a',
                'js/b'
            ]
        ),
        /*new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),*/
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
            inject: true,
            // hash: true,
            chunks: ['js/index']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/a.html',
            filename: 'a.html',
            inject: true,
            // hash: true,
            chunks: ['js/common.js', 'js/a']
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/a.html'
        })
    ],
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 2 versions']}),
            precss
        ];
    }
};