import React from 'react';
import path from 'path';
import fs from 'fs';
import Router from 'react-router';
import express from 'express';
import HtmlComponent from '../components/Html/Html.jsx';

import routes from './routes.jsx';
const server = express();
const port = process.env.PORT || 80;


const assets = require('../../webpack-build-stats.json');
const mainAssets = assets.assetsByChunkName.main;

const cssFile = mainAssets.find(item => /css$/.test(item));
const cssString = fs.readFileSync(path.resolve(__dirname, '../../dist/', cssFile), {encoding: 'utf8'});
const scriptFileName = mainAssets.find(item => /js$/.test(item));

server.use(express.static(path.resolve(__dirname, '../../dist')));

server.get('*', (req, res) => {
    Router.run(routes, req.path, (Root) => {
        const title = 'David Gilbertson'; // TODO (davidg): How to keep that up to date with page name

        const innerContent = React.renderToString(<Root />);

        const html = React.renderToStaticMarkup(
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

export default function() {
    server.listen(port, () => {
        console.info('  --  >>  process.env.NODE_ENV:', process.env.NODE_ENV);
        console.info('  --  >>  Server listening on port', port);
    });
}
