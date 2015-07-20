var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('hello');
});

app.listen(port, function() {
    console.log('  --  >  start.js:14 > server running on port:', port);
});
