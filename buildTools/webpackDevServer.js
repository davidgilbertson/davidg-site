import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const hostname = 'localhost';
const port = 8081;
const webpackBase = `http://${hostname}:${port}`;

const config = {
    devtool: 'eval-source-map',
    entry: [
        `webpack-dev-server/client?${webpackBase}`,
        // 'webpack/hot/only-dev-server',
        './app/client.jsx',
    ],
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: `${webpackBase}/`, // trailing slash is required
        filename: 'dev-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader',
                ],

            },
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],

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
        // new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                WEBPACK: JSON.stringify(true),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    node: {
        fs: 'empty',
    },
};

const serverOptions = {
    // contentBase: path.join(__dirname, 'dev-bundle.js'),
    // quiet: true,
    // noInfo: true,
    // hot: true,
    // publicPath: config.output.publicPath,
};

const compiler = webpack(config);
const webpackDevServer = new WebpackDevServer(compiler, serverOptions);

webpackDevServer.listen(port, hostname, () => {
    console.info(`Webpack serving updates at ${webpackBase}, remember to build before pushing.`);
});
