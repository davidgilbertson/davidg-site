import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../components/App/App';
import RadioAndCheckboxes from '../components/pages/RadioAndCheckboxes/RadioAndCheckboxes';
import Home from '../components/pages/Home/Home';
import {routeLibrary} from '../utils/routeLibrary';

const routeComponents = routeLibrary.map(routeDef => (
    <Route key={routeDef.path} path={routeDef.path} component={routeDef.handler} />
));

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />

        {routeComponents}
        <Route path="radio-and-checkboxes" component={RadioAndCheckboxes} />
    </Route>
);

export default routes;
