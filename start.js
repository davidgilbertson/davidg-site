var express = require('express');
var React = require('react');
var path = require('path');
//var Home = require('./app/components/Home.jsx');

var app = express();

var port = 80;

app.get('/', function(req, res) {
    //var html = React.renderToString(Home);
    //res.send('Server is running, sweet.');
    res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen(port, function() {
    console.log('  --  >  start.js:14 > server running on port:', port);
});
