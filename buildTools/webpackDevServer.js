import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
const log = require('../app/utils/log.js')('webpack:dev');

const nodeModulesPath = path.resolve(__dirname, '../node_modules');
const reactPath = path.resolve(nodeModulesPath, 'react/dist/react-with-addons.min.js');
const reactLibPath = path.resolve(nodeModulesPath, 'react/lib');

const hostname = '10.1.1.2';
const port = 8081;
const webpackBase = `http://${hostname}:${port}`;

// TODO (davidg): can I just set WEBPACK like this rather than plugin?
//process.env.WEBPACK = true;

const config = {
    entry: [
        'webpack-dev-server/client?' + webpackBase,
        'webpack/hot/only-dev-server',
        './app/main.js'
    ],
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: webpackBase + '/', // trailing slash is required
        filename: 'dev-bundle.js'
    },
    resolve: {
        alias: {
            'react/lib': reactLibPath,
            'react/addons': reactPath,
            'react': reactPath
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [nodeModulesPath],
                loaders: ['react-hot', 'babel']

            },
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'autoprefixer', 'sass']

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
        ],
        noParse: [
            /react\.min\.js$/,
            /react-with-addons\.min\.js$/
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                WEBPACK: JSON.stringify(true),
                LOG_LEVEL: JSON.stringify(process.env.LOG_LEVEL),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    node: {
        fs: 'empty'
    }
};

const serverOptions = {
    contentBase: webpackBase,
    quiet: true,
    noInfo: true,
    hot: true,
    publicPath: config.output.publicPath
};

const compiler = webpack(config);
const webpackDevServer = new WebpackDevServer(compiler, serverOptions);

// TODO (davidg): remove hostname. listen signature?
webpackDevServer.listen(port, hostname, () => {
    log.info(`Webpack serving updates at ${webpackBase}, remember to build before pushing.`);
});
