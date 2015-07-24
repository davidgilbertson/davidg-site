import React, {Component, PropTypes} from 'react';

require('./home.scss');

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home">
                <p className="header-1">H1 Hello, I am HOME now</p>
                <p className="header-2">H2 Hello, I am HOME now</p>
                <p className="header-3">H3 Hello, I am HOME now</p>
                <p className="body-text">body Hello, I am HOME now</p>
                <a className="link">a link</a>
            </div>
        );
    }
}

export default Home;
