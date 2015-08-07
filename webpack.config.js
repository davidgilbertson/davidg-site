var path = require('path');
var webpack = require('webpack');

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.min.js');

module.exports = {
    devServer: {
        colors: true,
        contentBase: './build',
        devtool: 'eval',
        historyApiFallback: true,
        host: '10.1.1.2',
        hot: true,
        inline: true,
        port: 80
    },
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './app/main.js')
    ],
    resolve: {
        alias: {
            'react-router': path.resolve(node_modules, 'react-router'),
            'react/lib': path.resolve(node_modules, 'react/lib'),
            'react/addons': pathToReact,
            'react': pathToReact
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
        path: './build',
        filename: 'dev-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [node_modules],
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.s?css$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.gif|svg|png$/,
                loader: 'file'
            }
        ],
        noParse: [
            /react\.min\.js$/,
            /react-with-addons\.min\.js$/
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
