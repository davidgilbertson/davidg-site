import React, {Component, PropTypes} from 'react';
import isProd from '../../utils/isProd.js';
import {Link} from 'react-router';

if (!isProd) require('./nav.scss');

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="/">Home</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="isolog">Isolog</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="fireball">Fireball</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="aok">AOK</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="colors">Colours</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="guam">GUAM</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="tk">Time Keeper</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="all-the-primes">All the primes</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="not-the-web">Not the web</Link></li>
                </ul>
            </nav>
        );
    }
}

Nav.propTypes = {
    hideNavIfSmall: PropTypes.func
};

export default Nav;
