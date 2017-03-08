import React from 'react';
import Link from '../../Link/Link';

import PageWrapper from '../../PageWrapper/PageWrapper';

if (process.env.WEBPACK) require('./knowItAll.scss');

const Malla = props => (
    <PageWrapper
        {...props}
        className="home"
        title="Know it all"
    >
        <div className="justify-small">
            <p className="know-it-all__blurb">
                I built <Link
                    href="https://know-it-all.io/"
                    target="_blank"
                >know-it-all.io</Link> because I wanted to know
                what I didn't know about web development. I wrote about the thinking
                behind it in <Link
                    href="https://hackernoon.com/master-web-development-with-these-9-985-weird-tricks-77c71d1d96f3#.5z4inxiot"
                    target="_blank"
                >this blog post</Link>.
            </p>

            <p className="know-it-all__blurb">
                The site itself became a personal challenge to make it the fastest site <em>in the world</em>. I wrote about my
                exciting journey in <Link
                    href="https://hackernoon.com/10-things-i-learned-making-the-fastest-site-in-the-world-18a0e1cdf4a7#.ig5bb1afa"
                    target="_blank"
                >this blog post</Link>.
            </p>

            <img
                className="know-it-all__image"
                src="/images/know-it-all-tablet-landscape_1259x878.png"
            />

            <p><strong>Designer:</strong> me</p>
            <p><strong>Developer:</strong> me</p>
            <p><strong>Technology:</strong> React, then Preact, then my own thing, Firebase for the data and static hosting</p>
            <p><strong>Build time (front end):</strong> about 3 weeks</p>
            <p><strong>Build time (reading the specs, typing out the 10,000 items):</strong> a very long time</p>
        </div>
    </PageWrapper>
);

export default Malla;
