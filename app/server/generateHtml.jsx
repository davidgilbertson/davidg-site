import fs from 'fs';
import path from 'path';
import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import Html from '../components/Html/Html';
import App from '../components/App/App';

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
    const innerContent = renderToString(<App pathname={req.url} />);

    const html = renderToStaticMarkup(
        <Html
            styleString={styleString}
            jsFile={jsFile}
            innerContent={innerContent}
        />,
    );

    res.send(`<!DOCTYPE html>${html}`);
}

export default generateHtml;
