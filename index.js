// Ensure that all requires from here on in are babelified.
require('babel-register');
var args = require('yargs').argv;

process.env.NODE_ENV = args.env || 'production';

require('./app/server/server.js');
