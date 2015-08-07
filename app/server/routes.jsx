import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from '../components/App/App.jsx';
import Home from '../components/pages/Home/Home.jsx';
import Fireball from '../components/pages/Fireball/Fireball.jsx';
import AllThePrimes from '../components/pages/AllThePrimes/AllThePrimes.jsx';
import ShowcaseWrapper from '../components/pages/ShowcaseWrapper/ShowcaseWrapper.jsx';
import Isolog from '../components/pages/Isolog/Isolog.jsx';
import NotTheWeb from '../components/pages/NotTheWeb/NotTheWeb.jsx';

// TODO (davidg): do I need names and paths in the routes? Does the path not inherit from the name?

const routes = (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Home} />

        <Route name="home" path="/home" handler={Home} />
        <Route name="isolog" path="/isolog" handler={Isolog} />
        <Route name="fireball" path="/fireball" handler={Fireball} />
        <Route name="aok" path="/aok" handler={ShowcaseWrapper} />
        <Route name="colors" path="/colors" handler={ShowcaseWrapper} />
        <Route name="guam" path="/guam" handler={ShowcaseWrapper} />
        <Route name="tk" path="/tk" handler={ShowcaseWrapper} />
        <Route name="all-the-primes" path="/all-the-primes" handler={AllThePrimes} />
        <Route name="not-the-web" path="/not-the-web" handler={NotTheWeb} />

        <NotFoundRoute handler={Home} />
    </Route>
);

export default routes;
