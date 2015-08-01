import React, {Component, PropTypes} from 'react';

class PageWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app__transition-wrapper">
                <main className={`app__content ${this.props.className}`}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

PageWrapper.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string
};

export default PageWrapper;
