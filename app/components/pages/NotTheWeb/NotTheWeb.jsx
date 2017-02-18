import React from 'react';
import PageWrapper from '../../PageWrapper/PageWrapper';
import Gallery from '../../Gallery/Gallery';

if (process.env.WEBPACK) require('./notTheWeb.scss');

const NotTheWeb = props => (
    <PageWrapper
        className="not-the-web"
        wide
    >
        <Gallery
            className="not-the-web__gallery"
            {...props}
        />
    </PageWrapper>
);

export default NotTheWeb;
