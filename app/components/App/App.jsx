import React, {cloneElement} from 'react';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;
import classnames from 'classnames';
import {DGComponent, isWebPack, saveLocal, loadLocal} from '../../utils';

const CSSTransitionGroup = React.addons.CSSTransitionGroup;

if (isWebPack) {
    require('../../styles/_main.scss');
    require('./_app.scss');
}

import Nav from '../Nav/Nav.jsx';
import Header from '../Header/Header.jsx';

class App extends DGComponent {
    constructor(props) {
        super(props);

        this.onToggleNav = this.onToggleNav.bind(this);

        this.state = {
            showNav: loadLocal('showNav')
        };
    }

    onToggleNav() {
        const newNavVisibility = !this.state.showNav;

        this.setAppState({typeOfAnimal: 'cats'});

        saveLocal('showNav', newNavVisibility);

        this.setState({showNav: newNavVisibility});
        console.log('App state:', this.appState);
    }

    render() {
        var key = this.context.router.getCurrentPath();

        const appWrapperClasses = classnames(
            'app__wrapper',
            {'app__wrapper--nav-visible': this.state.showNav}
        );

        return (
            <div className={appWrapperClasses}>
                <Nav />

                <section className="app__container">
                    <Header onToggleNav={this.onToggleNav} />

                    <CSSTransitionGroup component="div" transitionName="app__content">
                        <RouteHandler key={key} />
                    </CSSTransitionGroup>
                </section>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default App;
