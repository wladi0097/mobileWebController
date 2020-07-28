const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {prod_Path, src_Path} = require('./path');
const path = require('path');

module.exports = merge(common, {
    entry: {
        main: './' + src_Path + '/index.tsx',
        examples: './examples/examples/examples.tsx'
    },
    output: {
        path: path.resolve(__dirname, prod_Path),
        filename: (pathData) => pathData.chunk.name === 'main' ? 'mobileWebController.js': 'example.js',
        libraryTarget: 'umd',
        library: 'mobileWebController',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    devServer: {
        open: false,
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                },
                {
                    loader: 'sass-loader',
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: false,
            template: './examples/index.html',
            filename: 'index.html',
            chunks: ['main', 'examples']
        })
    ]
});
