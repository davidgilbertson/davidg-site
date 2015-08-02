import React, {cloneElement, Component} from 'react/addons';
import {RouteHandler} from 'react-router';
import classnames from 'classnames';
import debounce from 'lodash/function/debounce';
import throttle from 'lodash/function/throttle';
import {isProd, isOnClient, saveLocal, loadLocal} from '../../utils';

const CSSTransitionGroup = React.addons.CSSTransitionGroup; // TODO (davidg): inport with react on line 1?
import Hamburger from '../Hamburger/Hamburger.jsx';

// TODO (davidg): somehow share variables between JS/CSS
// This one should match $med-large-breakpoint = 55em * 16 = 880
const MED_LARGE_BREAKPOINT = 55; // must match $med-large-breakpoint
const NAV_WIDTH_EMS = 15; // must match $sidebar-width
const MIN_NAV_POS = NAV_WIDTH_EMS * -1;
const MAX_NAV_POS = 0;
const NAV_MASK_OPACITY = 0.4; // must match $nav-mask-alpha

if (!isProd) {
    require('./app.scss');
    require('./fontFace.scss');
    require('./resets.scss');
    require('./theme.scss');
    require('./typography.scss');
}

import Nav from '../Nav/Nav.jsx';
import Header from '../Header/Header.jsx';

function contain(num, min, max) {
    return Math.min(Math.max(min, num), max);
}

class App extends Component {
    constructor(props) {
        super(props);

        this.hideNav = this.hideNav.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.onResize = debounce(this.onResize.bind(this), 50);
        this.hideNavIfSmall = this.hideNavIfSmall.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = throttle(this.onTouchMove.bind(this), 16);
        this.onTouchEnd = this.onTouchEnd.bind(this);

        this.state = {
            showNav: false,
            navTranslate: 0
        };

        this.touchStartPos = 0;

        this.navEl = undefined;
        this.navMaskEl = undefined;
        this.navTranslate = undefined;

        this.movingNav = false;
    }

    onResize() {
        this.hideNavIfSmall();
    }

    onTouchStart(e) {
        this.movingNav = true;
        const dims = e.touches ? e.touches[0] : e;
        this.touchStartPos = dims.clientX;

        this.navEl.style.transition = 'none';
        this.navMaskEl.style.transition = 'none';

        window.removeEventListener('touchstart', this.onTouchStart, false); // it will be added again depending on touch end
        window.addEventListener('touchmove', this.onTouchMove, false);
        window.addEventListener('touchend', this.onTouchEnd, false);
    }

    onTouchMove(e) {
        if (!this.movingNav) return; // sometimes a touchMove can fire AFTER the touch end. Bad touchMove

        const dims = e.touches ? e.touches[0] : e;
        const currentLeft = dims.clientX;

        const distanceMoved = (currentLeft - this.touchStartPos) / 16; // in ems now

        this.navTranslate = contain(distanceMoved, MIN_NAV_POS, MAX_NAV_POS);

        this.navEl.style.transform = `translateX(${this.navTranslate}rem)`;

        let navMaskOpacity = NAV_MASK_OPACITY * (1 - (this.navTranslate / MIN_NAV_POS));

        navMaskOpacity = contain(navMaskOpacity, 0, NAV_MASK_OPACITY);

        this.navMaskEl.style.backgroundColor = `rgba(0, 0, 0, ${navMaskOpacity})`;
    }

    onTouchEnd() {
        this.movingNav = false;

        this.navEl.style.transition = '';
        this.navEl.style.transform = '';

        this.navMaskEl.style.transition = '';
        this.navMaskEl.style.background = '';

        if (this.navTranslate < (MIN_NAV_POS / 2)) {
            this.hideNav();
        } else {
            this.showNav();
        }

        window.removeEventListener('touchmove', this.onTouchMove, false);
        window.removeEventListener('touchend', this.onTouchEnd, false);
    }

    toggleNav() {
        if (this.state.showNav) {
            this.hideNav();
        } else {
            this.showNav();
        }
    }

    showNav() {
        this.setState({showNav: true});

        saveLocal('showNav', true);

        if (window.innerWidth < (MED_LARGE_BREAKPOINT * 16)) {
            window.addEventListener('touchstart', this.onTouchStart, false);
        }
    }

    hideNav() {
        this.setState({showNav: false});

        saveLocal('showNav', false);

        window.removeEventListener('touchstart', this.onTouchStart, false);
    }

    hideNavIfSmall() {
        if (this.state.showNav && window.innerWidth < (MED_LARGE_BREAKPOINT * 16)) {
            this.hideNav();
        }
    }

    componentDidMount() {
        if (isOnClient && loadLocal('showNav') !== false && window.innerWidth > (MED_LARGE_BREAKPOINT * 16)) {
            this.toggleNav();
        }

        this.navEl = document.querySelector('.nav');
        this.navMaskEl = document.querySelector('.nav__mask');

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
                <Hamburger onToggleNav={this.toggleNav} className="header__hamburger" />

                <div className="nav__mask" onClick={this.hideNav}></div>

                <Nav hideNav={this.hideNav} hideNavIfSmall={this.hideNavIfSmall}/>

                <Header />

                <CSSTransitionGroup component="div" transitionName="app__transition-wrapper">
                    <RouteHandler key={key} />
                </CSSTransitionGroup>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default App;
