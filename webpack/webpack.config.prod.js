const ProgressBarWebpackPlugin = require("progress-bar-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");
const utils = require("./utils");
module.exports = merge(baseConfig,{
    mode:'production',
    devtool:false,
    module:{
        rules:[{
            test:/\.(css|less)/,
            use:[
                {
                    loader:MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                {
                    loader: 'less-loader'
                },
                'postcss-loader'
            ]
        }]
    },
    plugins:[
        new ProgressBarWebpackPlugin(),
        new CleanWebpackPlugin(['dist'],{
            root:utils.assetPath()
        })
    ]
})