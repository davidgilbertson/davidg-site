import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import Header from '../Header/Header';

class PageWrapper extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        const { props } = this;

        const classes = classnames(
            props.className,
            'app__content',
            {'app__content--narrow': !props.wide},
            {'app__content--wide': props.wide},
        );

        const blurb = props.blurb
            ? <div className="app__blurb">{props.blurb}</div>
            : null;

        return (
            <div className="app__transition-wrapper">
                <Header title={props.title} />

                {blurb}

                <main className={classes}>
                    {props.children}
                </main>
            </div>
        );
    }
}

PageWrapper.propTypes = {
    blurb: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    wide: PropTypes.bool,
};

PageWrapper.defaultProps = {
    className: '',
    title: 'DG707',
    wide: false,
};

export default PageWrapper;
