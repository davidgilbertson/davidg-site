import React from 'react';

import MarkDown from '../../MarkDown/MarkDown';
import PageWrapper from '../../PageWrapper/PageWrapper';

if (process.env.WEBPACK) require('./isolog.scss');

const Isolog = props => (
    <PageWrapper
        {...props}
        className="isolog"
        title="Isolog"
    >
        <MarkDown url="https://raw.githubusercontent.com/davidgilbertson/isolog/master/README.md" />

        <hr />

        <p>
            View the source on <a
                href="https://github.com/davidgilbertson/isolog"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
            >GitHub</a>
        </p>
    </PageWrapper>
);

export default Isolog;
