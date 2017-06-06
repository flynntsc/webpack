const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = path => require('path').resolve(__dirname, path)
const url = require('url')
const publicPath = ''

module.exports = (env = {}) => ({
    entry: {
        vendor: './src/vendor',
        index: './src/main.js'
    },
    output: {
        path: resolve('dist'),
        filename: env.dev ? '[name].js' : 'js/[name].[chunkhash].js',
        chunkFilename: env.dev ? '[id].js' : '[id].[chunkhash].js',
        sourceMapFilename: env.dev ? '[file].map' : 'sourcemaps/[file].map',
        publicPath: env.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: env.dev ? '[name].[ext]' : 'img/[name].[hash:7].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot|ttf|otf|woff2?)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: env.dev ? '[name].[ext]' : 'fonts/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: env.dev ? '[name].css' : 'css/[name].[contenthash].css',
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '~': resolve('src')
        }
    },
    devServer: {
        host: '127.0.0.1',
        port: 8010,
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        historyApiFallback: {
            index: url.parse(env.dev ? '/assets/' : publicPath).pathname
        }
    },
    devtool: env.dev ? '#eval-source-map' : '#source-map'
})