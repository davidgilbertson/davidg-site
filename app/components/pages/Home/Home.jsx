import React from 'react';
import Link from '../../Link/Link';

import PageWrapper from '../../PageWrapper/PageWrapper';

if (process.env.WEBPACK) require('./home.scss');

const Home = props => (
    <PageWrapper
        {...props}
        className="home"
        title="DG707"
    >
        <div className="justify-small">
            <p className="home__hero-text">Hello</p>

            <p className="home__hero-text">
                I'm David Gilbertson, and this is my site. A haphazard mix of weekend projects I've
                worked on over the years, with varying degrees of polish.
            </p>

            <p className="home__hero-text">
                <Link href="/know-it-all">Know it all</Link> is a list of <em>almost</em> everything from the
                various web specs (ECMAScript, HTML, CSS, and more). <Link href="/malla">Malla</Link> is more of a
                complete product; a visual way to store and serve all of the text required for your site.
            </p>

            <p className="home__hero-text">
                Then there's <Link href="/fireball">Fireball</Link>, designed to help you create 'performance breakpoints' so you can
                tailor your user's experience to their device's
                performance. <Link href="/isolog">Isolog</Link> is a mostly pointless little tool that sends NodeJS console
                logs to the browser. And
                for no real reason, here is <Link href="/all-the-primes">a list of all the prime numbers</Link>.
            </p>

            <p className="home__hero-text">
                Sometimes I'll <Link href="/not-the-web">photograph things or paint things or make things</Link>.
            </p>
        </div>
    </PageWrapper>
);

export default Home;
