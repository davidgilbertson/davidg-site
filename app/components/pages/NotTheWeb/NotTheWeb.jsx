import React from 'react';
import PageWrapper from '../../PageWrapper/PageWrapper';
import Gallery from '../../Gallery/Gallery';

if (process.env.WEBPACK) require('./notTheWeb.scss');

const NotTheWeb = props => (
    <PageWrapper
        {...props}
        className="not-the-web"
        title="Not the web"
        blurb="On rare occasions I will emerge from behind the keyboard, spread my wings and fly.
            Here is the output from some of those wing-spreading moments."
        wide
    >
        <Gallery
            className="not-the-web__gallery"
            {...props}
        />
    </PageWrapper>
);

export default NotTheWeb;
