import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {isProd} from '../../../utils';

if (!isProd) require('./notTheWeb.scss');

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';
import Gallery from '../../Gallery/Gallery.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageWrapper className="not-the-web">
                <Gallery className="not-the-web__gallery" />
            </PageWrapper>
        );
    }
}

export default Home;
