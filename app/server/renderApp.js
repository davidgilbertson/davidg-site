import React from 'react';
import Router from 'react-router';
import routes from './routes.jsx';
import Html from '../components/Html/Html.jsx';
import assetsHash from './assetsHash.json';

function renderApp(req, res) {
    Router.run(routes, req.path, (Root) => {
        const title = 'DG707'; // TODO (davidg): How to keep that up to date with page name
        let cssFile;
        let jsFile;

        if (process.env.NODE_ENV === 'production') {
            cssFile = `/css/main.${assetsHash}.css`;
            jsFile = `/js/main.${assetsHash}.js`;
        } else {
            jsFile = 'http://10.1.1.2:8081/dev-bundle.js';
        }

        const innerContent = React.renderToString(<Root />);

        const html = React.renderToStaticMarkup(
            <Html
                cssFile={cssFile}
                jsFile={jsFile}
                innerContent={innerContent}
                title={title}
                />
        );

        res.send('<!DOCTYPE html>' + html);
    });
}

export default renderApp;
