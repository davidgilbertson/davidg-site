import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import isProd from '../../utils/lib/isProd.js';

if (!isProd) require('./hamburger.scss');

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
