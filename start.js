//var express = require('express');
//var React = require('react');
//var path = require('path');
//var Home = require('./app/components/Home.jsx');

require('babel/register');

var server = require('./app/server/server.js');

server.start(80);

//var app = express();
//
//
//app.get('/', function(req, res) {
//    //var html = React.renderToString(Home);
//    //res.send('Server is running, sweet.');
//    res.sendFile(path.resolve(__dirname, 'build/index.html'));
//});
//
//app.listen(port, function() {
//    console.log('  --  >  start.js:14 > server running on port:', port);
//});
