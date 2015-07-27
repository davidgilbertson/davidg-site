import React from 'react';
import path from 'path';
import fs from 'fs';
import Router from 'react-router';
import express from 'express';

import routes from './routes.jsx';
const server = express();
var port = process.env.PORT || 80;

import HtmlComponent from '../components/Html/Html.jsx';

function getAsset(assetType) {
    const assets = require('../../webpack-build-stats.json');
    const mainAssets = assets.assetsByChunkName.main;

    if (assetType === 'cssString') {
        const cssFile = mainAssets.find(item => /css$/.test(item));
        return fs.readFileSync(path.resolve(__dirname, '../../dist/', cssFile), {encoding: 'utf8'});
    }

    if (assetType === 'scriptFileName') {
        return mainAssets.find(item => /js$/.test(item));
    }

    return false;
}

server.use(express.static(path.resolve(__dirname, '../../dist')));

server.get('*', (req, res) => {
    Router.run(routes, req.path, function (Root) {
        // TODO (davidg): get the title here? How to keep that up to date with page moves?
        const title = 'David Gilbertson';

        const cssString = getAsset('cssString');
        const scriptFileName = getAsset('scriptFileName');

        var innerContent = React.renderToString(<Root />);

        var html = React.renderToStaticMarkup(
            <HtmlComponent
                cssString={cssString}
                scriptFileName={scriptFileName}
                innerContent={innerContent}
                title={title}
                />
        );

        res.send('<!DOCTYPE html>' + html);
    });
});

function start() {
    server.listen(port, function() {
        console.log('Server listening on port', port);
    });
}

module.exports = {
    start: start
};
