var path = require('path');
var fs = require('fs');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var pathToStats = path.join(__dirname, 'webpack-build-stats.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function spitOutStats() {
    this.plugin('done', function(stats) {
        fs.writeFileSync(
            pathToStats,
            JSON.stringify(stats.toJson({modules: false, children: false})));
    });
}

module.exports = {
    entry: [
        path.resolve(__dirname, './app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts.[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [nodeModulesPath],
                loader: 'babel'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            },
            {
                test: /\.gif|svg|png$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.[hash].css'),
        spitOutStats
    ]
};
