const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './index.js',
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        environment: {
            arrowFunction: false
        }
    },
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2)$/i,
                use: ['file-loader']
            }

        ]
    },
    devServer: {
        contentBase: './build',
        open: true,
    }
}