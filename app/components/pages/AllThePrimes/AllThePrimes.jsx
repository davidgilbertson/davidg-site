import React, {Component, PropTypes} from 'react';
import isProd from '../../../utils/isProd.js';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

if (!isProd) require('./allThePrimes.scss');

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageWrapper className="all-the-primes">
                <h1>All the primes!</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>5</li>
                    <li>7</li>
                    <li>11</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </PageWrapper>
        );
    }
}

export default Home;
