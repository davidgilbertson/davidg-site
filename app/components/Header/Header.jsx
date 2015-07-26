import React, {Component, PropTypes} from 'react';

import Hamburger from '../Hamburger/Hamburger.jsx';

if (typeof window !== 'undefined') {
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

                <div className="header__title">Davidg</div>
            </div>
        );
    }
}

Header.propTypes = {
    onToggleNav: PropTypes.func.isRequired
};

export default Header;
