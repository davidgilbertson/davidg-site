import React, {Component, PropTypes} from 'react';

require('./nav.scss');

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="nav">
                <h1>Davidg</h1>
                <ul>
                    <li><a href="#someLink">Some Link</a></li>
                    <li><a href="#someLink1">Some Other Link</a></li>
                    <li><a href="#someLink2">Fireball</a></li>
                    <li><a href="#someLink3">Color Swatch Picker</a></li>
                </ul>
            </div>
        );
    }
}

export default Home;
