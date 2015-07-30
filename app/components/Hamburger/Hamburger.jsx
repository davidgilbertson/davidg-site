import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import isOnClient from '../../utils/isOnClient.js';

if (isOnClient) {
    require('./_hamburger.scss');
}

class Hamburger extends Component {
    render() {
        const classes = classnames(
            'hamburger',
            this.props.className
        );

        return (
            <a className={classes} onClick={this.props.onToggleNav}>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
            </a>
        );
    }
}

Hamburger.propTypes = {
    className: PropTypes.string,
    onToggleNav: PropTypes.func.isRequired
};

export default Hamburger;
