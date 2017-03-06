import React from 'react';

import Link from '../Link/Link';

if (process.env.WEBPACK) require('./nav.scss');

const Nav = () => (
    <nav className="nav">
        <ul className="nav__list">
            <li><Link className="nav__link" theme="no" href="/">Home</Link></li>
            <li><Link className="nav__link" theme="no" href="/malla">Malla</Link></li>
            <li><Link className="nav__link" theme="no" href="/isolog">Isolog</Link></li>
            <li><Link className="nav__link" theme="no" href="/fireball">Fireball</Link></li>
            {/*
            <li><Link className="nav__link" theme="no" href="/aok">AOK</Link></li>
            <li><Link className="nav__link" theme="no" href="/colors">Colours</Link></li>
            <li><Link className="nav__link" theme="no" href="/guam">GUAM</Link></li>
            <li><Link className="nav__link" theme="no" href="/tk">Time Keeper</Link></li>
            */}
            <li><Link className="nav__link" theme="no" href="/all-the-primes">All the primes</Link></li>
            <li><Link className="nav__link" theme="no" href="/not-the-web">Not the web</Link></li>
        </ul>
    </nav>
);

export default Nav;
