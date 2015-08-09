import React, {Component} from 'react';
import {isProd} from '../../../utils';

if (!isProd) require('./notTheWeb.scss');

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';
import Gallery from '../../Gallery/Gallery.jsx';

class NotTheWeb extends Component {
    render() {
        return (
            <PageWrapper className="not-the-web" wide={true}>
                <Gallery className="not-the-web__gallery" {...this.props} />
            </PageWrapper>
        );
    }
}

export default NotTheWeb;
