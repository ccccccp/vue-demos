const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const loaderFileConfig = {
    exclude: /node_modules/,
    include:[path.resolve(__dirname,'src')],
}
module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        index:['babel-polyfill',path.resolve(__dirname,'src/index.js')]
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].[hash:8].js',
        chunkFilename:'js/[name].[chunkhash:8].chunk.js'
    },
    devServer:{
        port:8085,
        hot: true,
        host: '127.0.0.1',
        historyApiFallback: {
            disableDotRule: true
        },
        overlay: true,
        inline: true,
        open:true,
        stats: "errors-only"
    },
    module:{
        rules:[{
            test:/\.js$/,
            ...loaderFileConfig,
            use:[{
                loader:'babel-loader'
            }]
        },{
            test:/\.vue$/,
            ...loaderFileConfig,
            use:[{
                loader:'vue-loader'
            }]
        },{
            test:/\.(css|less)/,
            use:[
                {
                    loader:MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap:true
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap:true
                    }
                },
                'postcss-loader'
            ]
        },{
            test:/\.(png|jpe?g|gif|svg)/,
            use:[{
                loader:'file-loader',
                options:{
                    name:'[name].[hash:7].[ext]',
                    outputPath:'assets/images'
                }
            }]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: 'assets/fonts'
                    }
            }]
        }]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[hash:8].css',
            chunkFilename:'[name].[hash:8].chunk.css'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'public/index.html')
        }),
        new VueLoaderPlugin(),

    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}