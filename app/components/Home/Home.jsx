import React, {Component, PropTypes} from 'react';

require('./_Home.scss');

class Home extends Component {
    constructor(props) {
        console.log('  --  >  Home.jsx:7 > constructor');
        super(props)
    }

    render() {
        return (
            <div className="Home">Hello, I am HOME</div>
        );
    }
}

export default Home;
