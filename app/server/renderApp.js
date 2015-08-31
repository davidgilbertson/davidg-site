import fs from 'fs';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';
import Html from '../components/Html/Html.jsx';
import assetsHash from './assetsHash.json';

function renderApp(req, res) {
    Router.run(routes, req.path, (Root) => {
        let styleString;
        let jsFile;

        if (process.env.NODE_ENV === 'production') {
            const cssPath = path.resolve(__dirname, '../../public/css', `main.${assetsHash}.css`);
            // yes, synchronous, but so is import from .json if you think about it.

            styleString = fs.readFileSync(cssPath, 'utf8');

            jsFile = `/js/main.${assetsHash}.js`;
        } else {
            jsFile = 'http://10.1.1.2:8081/dev-bundle.js';
        }

        const innerContent = React.renderToString(<Root />);

        const html = React.renderToStaticMarkup(
            <Html
                styleString={styleString}
                jsFile={jsFile}
                innerContent={innerContent}
                />
        );

        res.send('<!DOCTYPE html>' + html);
    });
}

export default renderApp;
