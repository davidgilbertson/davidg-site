const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.WEBPACK = true;

rimraf.sync(path.resolve(__dirname, '../public/js'));
rimraf.sync(path.resolve(__dirname, '../public/css'));

const config = {
    entry: [
        path.resolve(__dirname, '../app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, '../public/js'),
        filename: 'main.[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
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
            // {
            //     test: /masonry-layout|imagesloaded/,
            //     loader: 'imports?define=>false&this=>window'
            // }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('../css/main.[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

function handleResults(err, stats) {
    if (err) {
        console.log('Error compiling:', err);
        return;
    }

    const statsFilepath = path.resolve(__dirname, '../app/server/assetsHash.json');

    const jsonStats = stats.toJson({
        modules: false,
        chunks: false
    });

    fs.writeFileSync(statsFilepath, JSON.stringify(jsonStats.hash));
    console.timeEnd('build');
}

webpack(config, handleResults);

console.log('building...');
console.time('build');
