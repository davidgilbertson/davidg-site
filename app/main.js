import React from 'react';
import Router from 'react-router';

// TODO (davidg): remove these
//const Route = Router.Route;
//const DefaultRoute = Router.DefaultRoute;
//const NotFoundRoute = Router.NotFoundRoute;
//import App from './components/App/App.jsx';
//import Home from './components/Home/Home.jsx';
//import Fireball from './components/Fireball/Fireball.jsx';
//import AllThePrimes from './components/AllThePrimes/AllThePrimes.jsx';

import routes from './server/routes.jsx';

let rootInstance = null;
//Router.run(routes, Router.HashLocation, (Root) => {
Router.run(routes, Router.HistoryLocation, (Root) => {
    rootInstance = React.render(<Root />, document.getElementById('app'));
});

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: () => {
            return [rootInstance];
        }
    });
}
