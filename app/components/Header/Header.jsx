import React, {PropTypes} from 'react';

if (process.env.WEBPACK) require('./header.scss');

const Header = props => (
    <div className="header">
        <span className="header__title">{props.title}</span>
    </div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
