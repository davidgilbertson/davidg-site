'use strict';
import React from 'react';
import Router from 'react-router';
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

var App = require('./components/App/App.jsx');
var Home = require('./components/Home/Home.jsx');
var Fireball = require('./components/Fireball/Fireball.jsx');
var AllThePrimes = require('./components/AllThePrimes/AllThePrimes.jsx');

const routes = (
    <Route handler={App}>
        <DefaultRoute handler={Home} />

        <Route name="home" handler={Home} />
        <Route name="fireball" handler={Fireball} />
        <Route name="all-the-primes" handler={AllThePrimes} />
        <Route name="color-swatches" handler={AllThePrimes} />

        <NotFoundRoute handler={Home} />
    </Route>
);

let rootInstance = null;
Router.run(routes, Router.HashLocation, (Root) => {
//Router.run(routes, Router.HistoryLocation, (Root) => {
    rootInstance = React.render(<Root />, document.getElementById('app'));
});

//const rootInstance = React.render(<App />, document.getElementById('app'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: () => {
            return [rootInstance];
        }
    });
}


//var rootInstance = null;

//router.run(function (Handler, state) {
//var rootInstance = React.render(<App />, document.body);
//});

//if (module.hot) {
//    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
//        getRootInstances: function () {
//            // Help React Hot Loader figure out the root component instances on the page:
//            return [rootInstance];
//        }
//    });
//}
