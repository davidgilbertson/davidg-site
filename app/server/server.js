import express from 'express';
import compression from 'compression';
import generateHtml from './generateHtml';

const server = express();
const port = process.env.PORT || 8080;

server.use(compression());
server.use(express.static('public', {maxAge: 31536000})); // 31536000 = one year

server.get('*', generateHtml);

server.listen(port, () => {
    console.info(`Node's running on port ${port}`);
});

if (process.env.NODE_ENV !== 'production') {
    require('../../buildTools/webpackDevServer.js');
}
