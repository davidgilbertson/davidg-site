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
        path.resolve(__dirname, '../app/client.jsx'),
    ],
    output: {
        path: path.resolve(__dirname, '../public/js'),
        filename: 'main.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.woff$/,
                use: 'url-loader?limit=100000',
            },
            {
                test: /\.gif|svg|png$/,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('../css/main.[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
};

function handleResults(err, stats) {
    if (err) {
        console.log('Error compiling:', err);
        return;
    }

    const statsFilePath = path.resolve(__dirname, '../app/server/assetsHash.json');

    const jsonStats = stats.toJson({
        modules: false,
        chunks: false,
    });

    fs.writeFileSync(statsFilePath, JSON.stringify(jsonStats.hash));
    console.timeEnd('build');
}

webpack(config, handleResults);

console.log('building...');
console.time('build');
