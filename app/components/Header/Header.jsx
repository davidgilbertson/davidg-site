import React, {Component, PropTypes} from 'react';
import isProd from '../../utils/lib/isProd.js';

if (!isProd) require('./header.scss');

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <span className="header__title">{this.props.title}</span>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
