import React from 'react';

if (process.env.WEBPACK) require('./notTheWeb.scss');

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';
import Gallery from '../../Gallery/Gallery.jsx';

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
