import React, {Component} from 'react';
import {Link} from 'react-router';
import isProd from '../../../utils/lib/isProd.js';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

if (!isProd) require('./home.scss');

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageWrapper className="home">
                <div className="justify-small">
                    <p className="heading-1">Hello</p>

                    <p className="home__hero-text">
                        I am David Gilbertson. This is my site. A haphazard mix of things I've
                        worked on over the years, with varying degrees of polish.
                    </p>

                    <p className="home__hero-text">
                        You'll find <Link className="link" to="fireball">Fireball</Link> designed to help you create 'performance breakpoints' so you can
                        tailor your user's experience to their device's performance just like you would for their screen size.
                        This here is <Link className="link" to="isolog">isolog</Link>, who loves sending node.js console logs to the browser. And
                        for no real reason behold, <Link className="link" to="colors">a color swatch builder</Link> using only CSS named colors.
                    </p>

                    <p className="home__hero-text">
                        <Link className="link" to="guam">GUAM</Link> (Graphical User Access Management) is a concept exploring
                        better ways to manage user permissions in complex systems.
                        A personal favourite is <Link className="link" to="aok">AOK</Link> ('Assessment of Knowledge', if you've got the time).
                        I think it's a neato way to keep track of how much you know about the facets of a particular subject (and charts are cool).
                        And one of my earliest adventures into web development (back when I thought
                        frameworks were for wimps): <Link className="link" to="tk">Time Keeper</Link>. Keep track of where you're spending your time one click at a time.
                    </p>

                    <p className="home__hero-text">
                        As a special gift for reading this far, here is <Link className="link" to="all-the-primes">a list of all the prime numbers</Link>.
                    </p>

                    <p className="home__hero-text">
                        I'm all out of words, but if you're keen for more, <a href="https://github.com/davidgilbertson/davidg-site" className="link" target="_blank">here
                        is the sauce</a> for this site.
                    </p>
                </div>
            </PageWrapper>
        );
    }
}

export default Home;
