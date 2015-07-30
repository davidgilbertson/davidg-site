import React, {Component, PropTypes} from 'react';
import isOnClient from '../../utils/isOnClient.js';

import Hamburger from '../Hamburger/Hamburger.jsx';

if (isOnClient) {
    require('./_header.scss');
}

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <Hamburger onToggleNav={this.props.onToggleNav} className="header__hamburger" />

                <span className="header__title">Davidg</span>
            </div>
        );
    }
}

Header.propTypes = {
    onToggleNav: PropTypes.func.isRequired
};

export default Header;
