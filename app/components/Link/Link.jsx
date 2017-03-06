import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {history} from '../../utils';

if (process.env.WEBPACK) require('./link.scss');

const Link = (props) => {
    const className = classnames(
        props.className,
        {link: props.theme !== 'no'},
    );

    const onClick = (e) => {
        const aNewTab = e.metaKey || e.ctrlKey;
        const anExternalLink = props.href.startsWith('http');

        if (!aNewTab && !anExternalLink) {
            // is a relative URL, treat it as a route
            e.preventDefault();
            history.push(props.href); // a history onChange event captures this change in App.jsx
        }
    };

    return (
        <a
            className={className}
            href={props.href}
            onClick={onClick}
        >
            {props.children}
        </a>
    );
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    theme: PropTypes.oneOf([
        'no',
        'default',
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    className: PropTypes.string,
};

Link.defaultProps = {
    theme: 'default',
    className: '',
};

export default Link;
