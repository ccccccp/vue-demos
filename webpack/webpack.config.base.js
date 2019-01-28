const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const utils = require("./utils");
module.exports = {
    entry: {
        vendor:['vue','vue-router','vuex'],
        index: ['babel-polyfill', utils.assetPath('src/index.js')]
    },
    output: {
        path: utils.assetPath('dist'),
        filename: 'js/[name].[hash:8].js',
        publicPath:'/',
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
    },
    module: {
        rules: [Object.assign({
            test: /\.js$/,
            use: [{
                loader: 'babel-loader?cacheDirectory'
            }]
        },utils.loaderFileConfig), Object.assign({
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader'
            }]
        },utils.loaderFileConfig),
        {
            test: /\.(png|jpe?g|gif|svg)/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:7].[ext]',
                    outputPath: 'assets/images'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:7].[ext]',
                    outputPath: 'assets/fonts'
                }
            }]
        }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: "vendor",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[name].[chunkhash:8].chunk.css'
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: utils.assetPath('public/index.html')
        }),
        new VueLoaderPlugin(),

    ],
    resolve: {
        alias: {
            '@': utils.assetPath('src')
        }
    }
}