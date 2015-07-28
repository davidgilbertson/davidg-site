import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
//import {isWebPack} from '../../../utils';

//if (isWebPack) {
//    require('./_fireball.scss');
//}

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="app__content">
                <h1 className="fireball__title">I am fireball!!!</h1>
            </section>
        );
    }
}

export default Home;
