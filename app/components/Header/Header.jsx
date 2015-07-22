import React, {Component, PropTypes} from 'react';

require('./_header.scss');

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <h1>Davidg</h1>
            </div>
        );
    }
}

export default Home;
