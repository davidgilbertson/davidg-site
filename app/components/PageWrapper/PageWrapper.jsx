import React, {PropTypes} from 'react';
import classnames from 'classnames';
import routeLibrary from '../../utils/routeLibrary';

const PageWrapper = (props) => {
    const classes = classnames(
        props.className,
        'app__content',
        {'app__content--narrow': !props.wide},
        {'app__content--wide': props.wide},
    );

    const blurb = props.route.blurb
        ? <div className="app__blurb">{props.route.blurb}</div>
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
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    className: PropTypes.string,
    wide: PropTypes.bool,
    route: PropTypes.shape({
        blurb: PropTypes.string,
    })
};

PageWrapper.defaultProps = {
    className: '',
    wide: false,
};

export default PageWrapper;
