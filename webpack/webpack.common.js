const path = require('path');
const {
    prod_Path,
    src_Path
} = require('./path');

module.exports = {
    entry: {
        main: './' + src_Path + '/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
        alias: {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
        }
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
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ],
            },
        ]
    },
    plugins: []
};
