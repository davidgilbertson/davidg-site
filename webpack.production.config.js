var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, './app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [nodeModulesPath],
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            //{
            //    test: /\.scss$/,
            //    loader: 'style!css!sass'
            //},
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ]
};
