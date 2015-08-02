import React, {Component, PropTypes} from 'react';
import isProd from '../../utils/isProd.js';


if (!isProd) require('./header.scss');

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <span className="header__title">DG | 707</span>
            </div>
        );
    }
}

export default Header;
