import React from 'react';
import {Route, NotFoundRoute} from 'react-router';

import App from '../components/App/App.jsx';
import Home from '../components/pages/Home/Home.jsx';
import {routeLibrary} from '../utils/routeLibrary.js';

const routeComponents = routeLibrary.map((routeDef, i) => {
    return <Route key={i} name={routeDef.name} path={routeDef.path} handler={routeDef.handler} />;
});

const routes = (
    <Route path="/" handler={App}>
        {routeComponents}

        <NotFoundRoute handler={Home} />
    </Route>
);

export default routes;
