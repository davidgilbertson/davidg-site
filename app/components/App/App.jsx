import React from 'react';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;
import classnames from 'classnames';
import {isWebPack} from '../../utils';

if (isWebPack) {
    require('../../styles/_main.scss');
    require('./_app.scss');
}

import Nav from '../Nav/Nav.jsx';
import Header from '../Header/Header.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onToggleNav = this.onToggleNav.bind(this);

        this.state = {
            showNav: true
        };
    }

    onToggleNav() {
        const prevShowNav = this.state.showNav;

        this.setState({showNav: !prevShowNav});
    }

    render() {
        const appWrapperClasses = classnames(
            'app__wrapper',
            {'app__wrapper--nav-visible': this.state.showNav}
        );

        return (
            <div className={appWrapperClasses}>
                <Nav />

                <section className="app__container">
                    <Header onToggleNav={this.onToggleNav} />

                    <RouteHandler />
                </section>
                {/*
                */}
            </div>
        );
    }
}

export default App;
