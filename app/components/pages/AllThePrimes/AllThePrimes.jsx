import React, {Component, PropTypes} from 'react';
import {isProd, isOnClient} from '../../../utils';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

if (!isProd) require('./allThePrimes.scss');

class Home extends Component {
    constructor(props) {
        super(props);

        this.maybeAppendNextPrime = this.maybeAppendNextPrime.bind(this);
        this.appendNextPrime = this.appendNextPrime.bind(this);
        this.getNextPrime = this.getNextPrime.bind(this);

        this.state = {primeList: []};

        this.primeListString = '1\n2\n3\n';

        this.lastPrime = 3;

        let count = 100;
        while (count --> 0) { // The mythical 'goes to' operator
            this.appendNextPrime({andTryAgain: false});
        }
    }

    getNextPrime() {
        let candidate = this.lastPrime + 2;
        let testNum = Math.floor(Math.sqrt(candidate));
        let result = 0;

        while (testNum < candidate) {
            result = (candidate / testNum);

            if (parseInt(result, 10) === result) { // TODO (davidg):  is the 10 required in ES2015?
                candidate += 2;
                testNum = Math.floor(Math.sqrt(candidate));
            } else {
                testNum++;
            }
        }

        this.lastPrime = candidate;
        return candidate;
    }

    appendNextPrime(options = {}) {
        const primeList = this.state.primeList;
        primeList.push(this.getNextPrime());

        this.setState({primeList});

        //this.primeListString += this.getNextPrime() + '\n';

        if (options.andTryAgain) this.maybeAppendNextPrime();
    }

    maybeAppendNextPrime() {
        const listHeight = this.primeListEl.offsetHeight;
        const scrollPos = document.body.scrollTop;
        const spaceBelow = listHeight - scrollPos - this.viewportHeight;

        //console.log('  --  >  AllThePrimes.jsx:64 > maybeAppendNextPrime > spaceBelow < this.viewportHeight:', spaceBelow, this.viewportHeight);
        if (spaceBelow < this.viewportHeight * 1) {
            this.appendNextPrime({andTryAgain: true});
        }
    }

    componentDidMount() {
        this.primeListEl = React.findDOMNode(this.refs.primeList);

        if (isOnClient) {
            window.addEventListener('scroll', this.maybeAppendNextPrime, false);

            this.viewportHeight = window.innerHeight;
        }
    }

    render() {
        const primeItems = this.state.primeList.map((item, i) => {
            return <li key={i}>{item}</li>;
        });

        return (
            <PageWrapper ref="primeList" className="all-the-primes">
                <h1 className="heading-1">All the primes!</h1>
                <pre>{this.primeListString}</pre>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    {primeItems}
                </ul>
            </PageWrapper>
        );
    }
}

export default Home;
