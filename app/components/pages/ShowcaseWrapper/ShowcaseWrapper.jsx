import React, {Component} from 'react';
import {isProd} from '../../../utils';
import {getRouteByUrl} from '../../../utils/routeLibrary.js';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';
import IFrame from '../../IFrame/IFrame.jsx';

if (!isProd) require('./showcaseWrapper.scss');

// This is a special component that wraps up content from
// davidg.com.au/showcase
// it must only be used as a handler for routes that have a matching route over at davidg.com.au
class ShowcaseWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frameSrc: ''
        };
    }

    componentDidMount() {
        const currentRoute = getRouteByUrl(document.location.pathname);

        this.setState({
            frameSrc: 'http://davidg.com.au/showcase' + document.location.pathname,
            blurb: currentRoute.blurb || null
        });
    }

    render() {
        return (
            <PageWrapper className="showcase-wrapper" wide={true} blurb={this.state.blurb}>
                <IFrame fullScreen={true} src={this.state.frameSrc} />
            </PageWrapper>
        );
    }
}

export default ShowcaseWrapper;
