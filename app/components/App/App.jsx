import React, {cloneElement, Component} from 'react/addons';
import Router, {RouteHandler} from 'react-router';
import classnames from 'classnames';
import debounce from 'lodash/function/debounce';
import {isProd, isOnClient, saveLocal, loadLocal} from '../../utils';

const CSSTransitionGroup = React.addons.CSSTransitionGroup;

const MED_LARGE_BREAKPOINT = 880;
// TODO (davidg): somehow share breakpoints.
// This one should match $med-large-breakpoint = 55em * 16 = 880

if (!isProd) {
    require('./app.scss');
    require('./fontFace.scss');
    require('./resets.scss');
    require('./theme.scss');
    require('./typography.scss');
}

import Nav from '../Nav/Nav.jsx';
import Header from '../Header/Header.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.hideNav = this.hideNav.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.onResize = debounce(this.onResize.bind(this), 500);
        this.hideNavIfSmall = this.hideNavIfSmall.bind(this);

        this.state = {showNav: false};
    }

    onResize() {
        this.hideNavIfSmall();
    }

    toggleNav() {
        const newNavVisibility = !this.state.showNav;

        saveLocal('showNav', newNavVisibility);

        this.setState({showNav: newNavVisibility});
    }

    hideNav() {
        this.setState({showNav: false});
    }

    hideNavIfSmall() {
        if (this.state.showNav && window.innerWidth < MED_LARGE_BREAKPOINT) {
            this.setState({showNav: false});
        }
    }

    componentDidMount() {
        //const localNavSetting = loadLocal('showNav'); // might be unset, might be true or false
        if (isOnClient && loadLocal('showNav') !== false && window.innerWidth > MED_LARGE_BREAKPOINT) {
            this.toggleNav();
        }

        window.addEventListener('resize', this.onResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize, false);
    }

    render() {
        const key = this.context.router.getCurrentPath();

        const appWrapperClasses = classnames(
            'app__wrapper',
            {'app__wrapper--nav-visible': this.state.showNav}
        );

        return (
            <div className={appWrapperClasses}>
                <Nav hideNav={this.hideNav} hideNavIfSmall={this.hideNavIfSmall}/>

                <section className="app__container">
                    <Header onToggleNav={this.toggleNav} />

                    <CSSTransitionGroup component="div" transitionName="app__transition-wrapper">
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
