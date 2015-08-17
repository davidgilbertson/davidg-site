var path = require('path');
var webpack = require('webpack');

var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            'tests.webpack.js' //just load this file
        ],
        preprocessors: {
            'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'dots' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
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
                    },
                    {
                        test: /masonry-layout|imagesloaded/,
                        loader: 'imports?define=>false&this=>window'
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};
