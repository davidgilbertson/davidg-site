var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './app/main.js')
    ],
    resolve: {
        alias: {
            'react-router': path.resolve(node_modules, 'react-router'),
            'react/lib': path.resolve(node_modules, 'react/lib'),
            'react': pathToReact
        },
        extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
        //path: path.resolve(__dirname, 'build'),
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [node_modules],
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ],
        noParse: /react\.min\.js$/
    }
};
