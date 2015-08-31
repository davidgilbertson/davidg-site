import path from 'path';
import renderApp from './renderApp.js';
import express from 'express';
import compression from 'compression';
const server = express();
const port = process.env.PORT || 80;

server.use(compression());
server.use(express.static('public'));

server.use('/fireball-js', express.static(path.resolve(__dirname, '../../node_modules/fireball-js')));

server.get('*', renderApp);

server.listen(port, () => {
    console.log('Node running on port', port);
});

if (process.env.NODE_ENV !== 'production') {
    require('../../buildTools/webpackDevServer.js');
}
