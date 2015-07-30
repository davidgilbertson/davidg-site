import React from 'react';
import Router from 'react-router';
// TODO (davidg): shorthand import all these
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

var App = require('../components/App/App.jsx');
var Home = require('../components/pages/Home/Home.jsx');
var Fireball = require('../components/pages/Fireball/Fireball.jsx');
var AllThePrimes = require('../components/pages/AllThePrimes/AllThePrimes.jsx');
var Isolog = require('../components/pages/Isolog/Isolog.jsx');

const routes = (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Home} />

        <Route name="home" path="/home" handler={Home} />
        <Route name="fireball" path="/fireball" handler={Fireball} />
        <Route name="all-the-primes" path="/all-the-primes" handler={AllThePrimes} />
        <Route name="color-swatches" path="/color-swatches" handler={Home} />
        <Route name="isolog" path="/isolog" handler={Isolog} />

        <NotFoundRoute handler={Home} />
    </Route>
);

export default routes;
