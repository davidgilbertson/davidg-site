import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {isProd} from '../../../utils';

if (!isProd) require('./fireball.scss');

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';
import MarkDown from '../../MarkDown/MarkDown.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageWrapper className="fireball">
                <MarkDown url="https://raw.githubusercontent.com/davidgilbertson/fireball/master/README.md" />
            </PageWrapper>
        );
    }
}

export default Home;
