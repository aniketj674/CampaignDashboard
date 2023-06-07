const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js',
    },
    resolve: { extensions: ['.js', '.jsx'] },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import',
                            ],
                            presets: ['@babel/env', '@babel/react'],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
