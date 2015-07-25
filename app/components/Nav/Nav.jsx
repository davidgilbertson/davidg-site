import React, {Component, PropTypes} from 'react';

require('./Nav.scss');
import Router from 'react-router';
const Link = Router.Link;

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav">
                <ul>
                    <li><Link className="nav__link" to="home">Home</Link></li>
                    <li><Link className="nav__link" to="fireball">Fireball</Link></li>
                    <li><Link className="nav__link" to="all-the-primes">All the primes</Link></li>
                    <li><Link className="nav__link" to="color-swatches">Color Swatch Picker</Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;
