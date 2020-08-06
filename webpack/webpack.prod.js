const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const {prod_Path, src_Path} = require('./path');
const path = require('path');

module.exports = merge(common, {
    entry: {
        main: './' + src_Path + '/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, prod_Path),
        filename: 'mobileWebController.js',
        libraryTarget: 'umd',
        library: 'mobileWebController',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: path.resolve(__dirname, prod_Path),
            root: process.cwd()
        }),
        // new BundleAnalyzerPlugin()
    ]
});
