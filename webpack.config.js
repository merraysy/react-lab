const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        pathinfo: true,
        filename: 'static/js/bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '.sass', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        'stage-0',
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'public/index.html'),
        })
    ],
    bail: true,
    cache: false,
};