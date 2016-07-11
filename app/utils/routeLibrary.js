import find from 'lodash/find';
import Home from '../components/pages/Home/Home.jsx';
import Isolog from '../components/pages/Isolog/Isolog.jsx';
import Fireball from '../components/pages/Fireball/Fireball.jsx';
import AllThePrimes from '../components/pages/AllThePrimes/AllThePrimes.jsx';
import NotTheWeb from '../components/pages/NotTheWeb/NotTheWeb.jsx';

export const routeLibrary = [
    {
        path: '/',
        handler: Home,
        title: 'DG707'
    },
    {
        path: '/isolog',
        handler: Isolog,
        title: 'Isolog'
    },
    {
        path: '/fireball',
        handler: Fireball,
        title: 'Fireball'
    },
    {
        path: '/all-the-primes',
        handler: AllThePrimes,
        title: 'All the primes',
        blurb: 'TODO: add a button to \'sort descending\'; call the EFF'
    },
    {
        path: '/not-the-web',
        handler: NotTheWeb,
        title: 'Not the web',
        blurb: `On rare occasions I will emerge from behind the keyboard, spread my wings and fly.
            Here is the output from some of those wing-spreading moments.`
    }
];

export function getRouteByUrl(url) {
    const matchingRoute = find(routeLibrary, {path: url});
    return matchingRoute || {}; // So I can use the result of this safely, e.g. thisRoute.name ( = undefined)
}
