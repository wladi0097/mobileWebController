const webpack = require('webpack')

module.exports = {
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            h: ['preact', 'h'],
        })
    ]
};
