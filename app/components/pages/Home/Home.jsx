import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import isProd from '../../../utils/isProd.js';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

if (!isProd) require('./home.scss');

class Home extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);

        this.state = {value: 22};
    }

    update(e) {
        let value = e.target.value;
        console.log(value);

        this.setState({value});
    }

    render() {
        return (
            <PageWrapper className="home">
                <div className="justify-small">
                    <p className="heading-1">Hello</p>

                    <p className="home__hero-text">I am David Gilbertson. This is my site.</p>

                    <p className="home__hero-text">
                        Over here is <Link className="link" to="fireball">Fireball</Link>, who will make you breakpoints for performance.
                        This here is <Link className="link" to="isolog">isolog</Link>, who loves sending node.js console logs to the browser. And
                        for no reason whatsoever, <Link className="link" to="colors">a color swatch builder</Link> using only CSS named colors.
                        As a special gift for visiting, here is <Link className="link" to="all-the-primes">a list of all the prime numbers</Link>.
                    </p>

                    <p className="home__hero-text">
                        If you're even remotely interested, <a href="https://github.com/davidgilbertson/davidg-site" className="link" target="_blank">here is the sauce</a> for this here site.
                    </p>
                </div>
            </PageWrapper>
        );
    }
}

export default Home;
