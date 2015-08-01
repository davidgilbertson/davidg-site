import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from '../components/App/App.jsx';
import Home from '../components/pages/Home/Home.jsx';
import Fireball from '../components/pages/Fireball/Fireball.jsx';
import AllThePrimes from '../components/pages/AllThePrimes/AllThePrimes.jsx';
import Isolog from '../components/pages/Isolog/Isolog.jsx';

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
