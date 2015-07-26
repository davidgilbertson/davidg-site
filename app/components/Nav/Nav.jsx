import React, {Component, PropTypes} from 'react';

import Router from 'react-router';
const Link = Router.Link;

if (typeof window !== 'undefined') {
    require('./_nav.scss');
}

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav">
                <ul className="nav__list">
                    <li><Link className="nav__link" to="/">Home</Link></li>
                    <li><Link className="nav__link" to="fireball">Fireball</Link></li>
                    <li><Link className="nav__link" to="all-the-primes">All the primes</Link></li>
                    <li><Link className="nav__link" to="color-swatches">Color Swatch Picker</Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;
