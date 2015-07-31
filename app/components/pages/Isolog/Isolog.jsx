import React, {Component, PropTypes} from 'react';
import isWebPack from '../../../utils/isWebPack.js';

import MarkDown from '../../MarkDown/MarkDown.jsx';

if (isWebPack) {
    require('./isolog.scss');
}

class Isolog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="app__content">
                <div className="isolog__demo">
                    <button className="button">Log something</button>
                    <button className="button">Cause an error</button>
                    <button className="button">Information</button>
                </div>

                <MarkDown url="https://raw.githubusercontent.com/davidgilbertson/isolog/master/README.md" />
            </section>
        );
    }
}

export default Isolog;
