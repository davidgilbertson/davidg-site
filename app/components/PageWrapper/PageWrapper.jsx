import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {getRouteByUrl} from '../../utils/routeLibrary.js';

class PageWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blurb: null
        };
    }

    componentDidMount() {
        const currentRoute = getRouteByUrl(document.location.pathname);

        if (currentRoute.blurb) this.setState({blurb: currentRoute.blurb});
    }

    render() {
        const classes = classnames(
            this.props.className,
            'app__content',
            {'app__content--narrow': !this.props.wide},
            {'app__content--wide': this.props.wide}
        );

        const blurb = this.state.blurb ? (
            <div className="app__blurb">{this.state.blurb}</div>
        ) : (
            null
        );

        return (
            <div className="app__transition-wrapper">
                {blurb}

                <main className={classes}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

PageWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
    className: PropTypes.string,
    wide: PropTypes.bool
};

export default PageWrapper;
