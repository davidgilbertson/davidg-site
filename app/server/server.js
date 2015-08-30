import path from 'path';
import renderApp from './renderApp.js';
import express from 'express';
const server = express();
const port = process.env.PORT || 80;

server.use(express.static('public'));

server.use('/fireball-js', express.static(path.resolve(__dirname, '../../../fireball-js')));

server.get('*', renderApp);

server.listen(port);

if (process.env.NODE_ENV !== 'production') {
    require('../../buildTools/webpackDevServer.js');
}
