import React from 'react';
import Link from '../../Link/Link';

import PageWrapper from '../../PageWrapper/PageWrapper';

if (process.env.WEBPACK) require('./malla.scss');

const Malla = props => (
    <PageWrapper
        {...props}
        className="home"
        title="Malla"
        blurb=""
    >
        <div className="justify-small">
            <p className="home__hero-text">
                I wrote <Link href="https://www.malla.io">malla.io</Link> because I thought it would be kinda cool
                to combine a CMS and a wireframe tool. If you want a nice intro,
                the <Link href="https://www.malla.io/docs/getting-started">getting started guide</Link> is a good
                place to get started.
            </p>

            <p className="home__hero-text">
                <p><strong>Designer:</strong> me</p>
                <p><strong>Developer:</strong> me</p>
                <p><strong>Technology:</strong> React, CSS in JS, Firebase for the data, Heroku for the hosting</p>
                <p><strong>Build time:</strong> about 10 weeks</p>
            </p>

            <div>
                <iframe
                    className="malla__video-iframe"
                    src="https://www.youtube.com/embed/aHzVmEWxek8?rel=0"
                    frameBorder="0"
                    allowFullScreen=""
                />
            </div>
        </div>
    </PageWrapper>
);

export default Malla;
