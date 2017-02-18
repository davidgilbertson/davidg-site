import fs from 'fs';
import path from 'path';
import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import routes from './routes';
import Html from '../components/Html/Html';

import assetsHash from './assetsHash.json';

let styleString;
let jsFile;

if (process.env.NODE_ENV === 'production') {
    const cssPath = path.resolve(__dirname, '../../public/css', `main.${assetsHash}.css`);

    styleString = fs.readFileSync(cssPath, 'utf8');

    jsFile = `/js/main.${assetsHash}.js`;
} else {
    jsFile = 'http://localhost:8081/dev-bundle.js';
}

function generateHtml(req, res) {
    match({routes, location: req.url}, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message);
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            const innerContent = renderToString(<RouterContext {...props} />);

            const html = renderToStaticMarkup(
                <Html
                    styleString={styleString}
                    jsFile={jsFile}
                    innerContent={innerContent}
                />,
            );

            res.send(`<!DOCTYPE html>${html}`);
        } else {
            res.status(404).send('Not Found');
        }
    });
}

export default generateHtml;
