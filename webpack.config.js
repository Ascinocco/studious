var webpack = require('webpack');
var babel = require('babel-core');
var path = require('path');

module.exports = {
    target: 'electron-main',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }, 
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions: [ ".ts", ".js" ]
    },

    plugins: [],

    devtool: 'inline-source-map'
};

