import React from 'react';
import Router from 'react-router';
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

var App = require('../components/App/App.jsx');
var Home = require('../components/Home/Home.jsx');
var Fireball = require('../components/Fireball/Fireball.jsx');
var AllThePrimes = require('../components/AllThePrimes/AllThePrimes.jsx');

const routes = (
    <Route handler={App}>
        <DefaultRoute handler={Home} />

        <Route name="home" handler={Home} />
        <Route name="fireball" path="/fireball" handler={Fireball} />
        <Route name="all-the-primes" handler={AllThePrimes} />
        <Route name="color-swatches" handler={AllThePrimes} />

        <NotFoundRoute handler={Home} />
    </Route>
);

export default routes;
