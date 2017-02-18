import React, {PropTypes} from 'react';
import classnames from 'classnames';

if (process.env.WEBPACK) require('./hamburger.scss');

const Hamburger = (props) => {
    const classes = classnames(
        'hamburger',
        props.className,
    );

    return (
        <a className={classes} onClick={props.onToggleNav}>
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
        </a>
    );
};

Hamburger.propTypes = {
    className: PropTypes.string.isRequired,
    onToggleNav: PropTypes.func.isRequired,
};

export default Hamburger;
