import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../components/App/App.jsx';
import Home from '../components/pages/Home/Home.jsx';
import {routeLibrary} from '../utils/routeLibrary.js';

const routeComponents = routeLibrary.map((routeDef, i) => (
    <Route key={i} path={routeDef.path} component={routeDef.handler} />
));

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />

        {routeComponents}
    </Route>
);

export default routes;
