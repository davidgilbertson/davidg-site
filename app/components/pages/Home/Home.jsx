import React from 'react';
import Link from '../../Link/Link';

import PageWrapper from '../../PageWrapper/PageWrapper';

if (process.env.WEBPACK) require('./home.scss');

const Home = props => (
    <PageWrapper className="home" {...props}>
        <div className="justify-small">
            <p className="home__hero-text">Hello</p>

            <p className="home__hero-text">
                I am David Gilbertson. This is my site. A haphazard mix of weekend projects I've
                worked on over the years, with varying degrees of polish.
            </p>

            <p className="home__hero-text">
                You'll find <Link href="/fireball">Fireball</Link>, designed to help you create 'performance breakpoints' so you can
                tailor your user's experience to their device's performance just like you would for their screen size.
                This here is <Link href="/isolog">isolog</Link>, who loves sending node.js console logs to the browser. And
                for no real reason behold, <Link href="/all-the-primes">a list of all the prime numbers</Link>.
            </p>

            <p className="home__hero-text">
                Sometimes I'll <Link href="/not-the-web">photograph things or paint things or make things</Link>.
            </p>
        </div>
    </PageWrapper>
);

export default Home;
