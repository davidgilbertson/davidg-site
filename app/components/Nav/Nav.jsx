import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

if (process.env.WEBPACK) require('./nav.scss');

class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleNav = this.handleNav.bind(this);
    }

    handleNav(e) {
        this.props.handleNav(e.target.getAttribute('href'));
    }

    render() {
        return (
            <nav className="nav">
                <ul className="nav__list">
                    <li><Link onClick={this.handleNav} className="nav__link" to="/">Home</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="isolog">Isolog</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="fireball">Fireball</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="aok">AOK</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="colors">Colours</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="guam">GUAM</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="tk">Time Keeper</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="all-the-primes">All the primes</Link></li>
                    <li><Link onClick={this.handleNav} className="nav__link" to="not-the-web">Not the web</Link></li>
                </ul>
            </nav>
        );
    }
}

Nav.propTypes = {
    handleNav: PropTypes.func
};

export default Nav;
