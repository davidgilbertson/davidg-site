require('babel/register')({
    extensions: [".jsx", ".js"]
});

var server = require('./app/server/server.js');
var port = process.env.PORT || 80;

global.__BROWSER__ = typeof window !== 'undefined';
global.__SERVER__ = !__BROWSER__;

server.start(port);
