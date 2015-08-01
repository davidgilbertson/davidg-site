import React, {Component, PropTypes} from 'react';
import isProd from '../../utils/isProd.js';
import {Router, Link} from 'react-router';

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
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="fireball">Fireball</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="all-the-primes">All the primes</Link></li>
                    <li><Link onClick={this.props.hideNavIfSmall} className="nav__link" to="isolog">Isolog</Link></li>
                </ul>
                <div className="nav__mask" onClick={this.props.hideNav}></div>
            </nav>
        );
    }
}

Nav.propTypes = {
    hideNav: PropTypes.func
};

export default Nav;
