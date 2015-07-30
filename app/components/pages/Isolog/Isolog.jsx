import React, {Component, PropTypes} from 'react';
import isWebPack from '../../../utils/isWebPack.js';
import DGComponent from '../../../utils/DGComponent.js';

import MarkDown from '../../MarkDown/MarkDown.jsx';

if (isWebPack) {
    require('./_isolog.scss');
}

class Isolog extends DGComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="app__content">
                <MarkDown url="https://raw.githubusercontent.com/davidgilbertson/isolog/master/README.md" />
            </section>
        );
    }
}

export default Isolog;
