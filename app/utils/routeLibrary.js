import find from 'lodash/find';
import Home from '../components/pages/Home/Home.jsx';
import Isolog from '../components/pages/Isolog/Isolog.jsx';
import Fireball from '../components/pages/Fireball/Fireball.jsx';
import AllThePrimes from '../components/pages/AllThePrimes/AllThePrimes.jsx';
// import ShowcaseWrapper from '../components/pages/ShowcaseWrapper/ShowcaseWrapper.jsx';
import NotTheWeb from '../components/pages/NotTheWeb/NotTheWeb.jsx';

// TODO (davidg): all names can go?
// named routes in the new react-router
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
    //{
    //    name: 'aok',
    //    path: '/aok',
    //    handler: ShowcaseWrapper,
    //    title: 'AOK',
    //    blurb: `AOK ('Assessment of Knowledge', if you've got the time) is a personal favourite.
    //        I think it's a neato way to keep track of how much you know about the facets of a particular subject.
    //        It uses lovingly hand-crafted SVG and JavaScript for the interactive charts and BackboneJS for the data models.`
    //},
    //{
    //    name: 'colors',
    //    path: '/colors',
    //    handler: ShowcaseWrapper,
    //    title: 'Colors',
    //    blurb: `One of the earliest and certainly the most pointless of my creations...
    //        Click a color to add it to the swatch at the top of the screen.
    //        Who would have known that bisque, chocolate, salmon, mint cream and plum would go so well together.`
    //},
    //{
    //    name: 'guam',
    //    path: '/guam',
    //    handler: ShowcaseWrapper,
    //    title: 'GUAM',
    //    blurb: `GUAM (Graphical User Access Management) is a concept exploring
    //        better ways to manage user permissions in complex systems. Select a user to see what they have access to
    //        or select a folder/file and see which groups and users have what access.`
    //},
    //{
    //    name: 'tk',
    //    path: '/tk',
    //    handler: ShowcaseWrapper,
    //    title: 'Time keeper',
    //    blurb: `Keep track of where you're spending your time one click at a time`
    //},
    {
        name: 'all-the-primes',
        path: '/all-the-primes',
        handler: AllThePrimes,
        title: 'All the primes',
        blurb: `TODO: add a button to 'sort descending'; call the EFF`
    },
    {
        name: 'not-the-web',
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
