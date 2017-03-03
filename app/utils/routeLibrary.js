import find from 'lodash/find';
import Home from '../components/pages/Home/Home';
import Isolog from '../components/pages/Isolog/Isolog';
import Fireball from '../components/pages/Fireball/Fireball';
import AllThePrimes from '../components/pages/AllThePrimes/AllThePrimes';
import NotTheWeb from '../components/pages/NotTheWeb/NotTheWeb';

export default {
    '/': {
        handler: Home,
        title: 'DG707',
    },
    '/isolog': {
        handler: Isolog,
        title: 'Isolog',
    },
    '/fireball': {
        handler: Fireball,
        title: 'Fireball',
    },
    '/all-the-primes': {
        handler: AllThePrimes,
        title: 'All the primes',
        blurb: 'TODO: add a button to \'sort descending\'; call the EFF',
    },
    '/not-the-web': {
        handler: NotTheWeb,
        title: 'Not the web',
        blurb: `On rare occasions I will emerge from behind the keyboard, spread my wings and fly.
            Here is the output from some of those wing-spreading moments.`,
    },
};
