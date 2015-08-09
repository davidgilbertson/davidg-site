import React, {Component} from 'react';
import {isProd, isOnClient} from '../../../utils';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';
import IFrame from '../../IFrame/IFrame.jsx';

if (!isProd) require('./showcaseWrapper.scss');

// This is a special component that wraps up content from
// davidg.com.au/showcase
// it must only be used as a handler for routes that have a matching route over at davidg.com.au
class ShowcaseWrapper extends Component {
    constructor(props) {
        super(props);
    }

    // TODO (davidg): put setting the iframe src in componentDidMount so it's more declaratively client-side?

    render() {
        const frame = isOnClient ? (
            <IFrame fullScreen={true} src={'http://davidg.com.au/showcase' + document.location.pathname} />
        ) : (
            null
        );

        return (
            <PageWrapper className="showcase-wrapper" wide={true}>
                {frame}
            </PageWrapper>
        );
    }
}

export default ShowcaseWrapper;
