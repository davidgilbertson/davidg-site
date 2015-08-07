import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

class PageWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classnames(
            this.props.className,
            'app__content',
            {'app__content--narrow': !this.props.wide},
            {'app__content--wide': this.props.wide}
        );

        return (
            <div className="app__transition-wrapper">
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
