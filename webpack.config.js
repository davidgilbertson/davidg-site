var path = require('path');
var nodeModules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(nodeModules, 'react/dist/react.min.js');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './app/main.jsx')
    ],
    resolve: {
        alias: {
            'react': pathToReact
            //react: path.resolve(__dirname, 'node_modules/react/dist/react.min.js')
        }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ],
        noParse: /react\.min\.js$/
    }
};
