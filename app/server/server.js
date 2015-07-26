var React = require('react');
var path = require('path');
var Router = require('react-router');
var express = require('express');

var routes = require('./routes.jsx');
var server = express();

var HtmlComponent = require('../components/Html/Html.jsx');

server.use(express.static(path.resolve(__dirname, '../../dist')));

server.get('*', (req, res) => {
    Router.run(routes, req.path, function (Root) {
        //var html = React.renderToString(<HtmlComponent><Root /></HtmlComponent>);

        //res.send(`<!DOCTYPE html>${html}`);

        var html = React.renderToString(<Root />);
        let output = (
            `<!doctype html>
            <html lang="en-us">
                <head>
                    <meta charset="utf-8">
                    <title>Some title</title>
                    <link href="main.css" rel="stylesheet">
                </head>
                <body>
                    <div id="app" class="app">${html}</div>

                    <script src="bundle.js"></script>
                </body>
            </html>`
        );

        res.send(output);
    });
});

function start(port) {
    server.listen(port, function() {
        console.log('  --  >  start.js:14 > server running on port:', port);
    });
}

module.exports = {
    start: start
};
