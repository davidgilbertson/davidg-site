import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {getRouteByUrl} from '../../utils/routeLibrary.js';

const PageWrapper = props => {
    const url = props.location ? props.location.pathname : '/';
    const currentRoute = getRouteByUrl(url);

    const classes = classnames(
        props.className,
        'app__content',
        {'app__content--narrow': !props.wide},
        {'app__content--wide': props.wide}
    );

    const blurb = currentRoute.blurb
        ? <div className="app__blurb">{currentRoute.blurb}</div>
        : null;

    return (
        <div className="app__transition-wrapper">
            {blurb}

            <main className={classes}>
                {props.children}
            </main>
        </div>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
    className: PropTypes.string,
    wide: PropTypes.bool,
    location: PropTypes.object
};

export default PageWrapper;
