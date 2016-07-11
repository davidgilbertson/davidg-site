import React, {Component} from 'react';

import MarkDown from '../../MarkDown/MarkDown.jsx';
import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

if (process.env.WEBPACK) require('./isolog.scss');

class Isolog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageWrapper className="isolog">
                {/*
                <section className="isolog__demo">
                    <h1 className="heading-1">Isolog demo</h1>

                    <div className="isolog__column">
                        <button className="button">Log something</button>
                    </div>

                    <div className="isolog__column">
                        <button className="button">Cause an error</button>
                    </div>

                    <div className="isolog__column">
                        <button className="button">Information</button>
                    </div>
                </section>

                <section>
                    <h1 className="heading-2">Read some words about it</h1>
                </section>

                */}

                <MarkDown url="https://raw.githubusercontent.com/davidgilbertson/isolog/master/README.md" />

                <hr />

                <p>
                    View the source on <a href="https://github.com/davidgilbertson/isolog" className="link" target="_blank">GitHub</a>
                </p>
            </PageWrapper>
        );
    }
}

export default Isolog;
