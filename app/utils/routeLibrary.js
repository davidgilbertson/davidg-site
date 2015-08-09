import Home from '../components/pages/Home/Home.jsx';
import Isolog from '../components/pages/Isolog/Isolog.jsx';
import Fireball from '../components/pages/Fireball/Fireball.jsx';
import AllThePrimes from '../components/pages/AllThePrimes/AllThePrimes.jsx';
import ShowcaseWrapper from '../components/pages/ShowcaseWrapper/ShowcaseWrapper.jsx';
import NotTheWeb from '../components/pages/NotTheWeb/NotTheWeb.jsx';

export const routeLibrary = [
    {
        name: 'home',
        path: '/',
        handler: Home,
        title: 'DG707'
    },
    {
        name: 'isolog',
        path: '/isolog',
        handler: Isolog,
        title: 'Isolog'
    },
    {
        name: 'fireball',
        path: '/fireball',
        handler: Fireball,
        title: 'Fireball'
    },
    {
        name: 'aok',
        path: '/aok',
        handler: ShowcaseWrapper,
        title: 'Assessment of knowledge'
    },
    {
        name: 'colors',
        path: '/colors',
        handler: ShowcaseWrapper,
        title: 'Colors'
    },
    {
        name: 'guam',
        path: '/guam',
        handler: ShowcaseWrapper,
        title: 'GUAM'
    },
    {
        name: 'tk',
        path: '/tk',
        handler: ShowcaseWrapper,
        title: 'Time keeper'
    },
    {
        name: 'all-the-primes',
        path: '/all-the-primes',
        handler: AllThePrimes,
        title: 'All the primes'
    },
    {
        name: 'not-the-web',
        path: '/not-the-web',
        handler: NotTheWeb,
        title: 'Not the web'
    }
];

export function getRouteByUrl(url) {
    return routeLibrary.find(route => route.path === url);
}
