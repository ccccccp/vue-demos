const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const utils = require('./utils');
const config = require('./config');


module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8085,
        hot: true,
        host: '127.0.0.1',
        historyApiFallback: {
            disableDotRule: true
        },
        contentBase:'/dist/',
        overlay: true,
        inline: true,
        open: true,
        stats: 'errors-only',
        proxy:config.proxy
    },
    module: {
        rules: [{
            test: /\.(css|less)/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: true
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'postcss-loader'
            ]
        }
    ].concat((config.eslint ? [Object.assign({
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        options: {
            formatter: require('eslint-friendly-formatter')
        }
    },utils.loaderFileConfig)] : [])) },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
