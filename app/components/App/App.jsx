import React, {cloneElement, Component} from 'react/addons';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;
import classnames from 'classnames';
import {isOnClient, isWebPack, saveLocal, loadLocal} from '../../utils';

const CSSTransitionGroup = React.addons.CSSTransitionGroup;

if (isOnClient) {
    // TODO (davidg): what order guarantee is there here?
    // Will the magic render this component's CSS first, or start at the lowest component?
    require('./app.scss');
    require('./fontFace.scss');
    require('./resets.scss');
    require('./typography.scss');
}

import Nav from '../Nav/Nav.jsx';
import Header from '../Header/Header.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.onToggleNav = this.onToggleNav.bind(this);

        this.state = {
            showNav: loadLocal('showNav')
        };
    }

    onToggleNav() {
        const newNavVisibility = !this.state.showNav;

        saveLocal('showNav', newNavVisibility);

        this.setState({showNav: newNavVisibility});
    }

    render() {
        const key = this.context.router.getCurrentPath();

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
