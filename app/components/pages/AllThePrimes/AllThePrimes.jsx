import React, {Component} from 'react';
import {isProd} from '../../../utils';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

if (process.env.WEBPACK) require('./allThePrimes.scss');

class AllThePrimes extends Component {
    constructor(props) {
        super(props);

        this.onScroll = this.onScroll.bind(this);
        this.maybeAppendNextPrime = this.maybeAppendNextPrime.bind(this);
        this.appendNextPrime = this.appendNextPrime.bind(this);
        this.getNextPrime = this.getNextPrime.bind(this);

        this.thinking = false;
        this.lastPrime = 293;
    }

    getNextPrime() {
        let candidate = this.lastPrime + 2;
        const sqrt = Math.floor(Math.sqrt(candidate));
        let testNum = 3;

        while (testNum < sqrt) {
            if (candidate % testNum === 0) {
                candidate += 2;
                testNum = Math.floor(Math.sqrt(candidate));
            } else {
                testNum += 2;
            }
        }

        this.lastPrime = candidate;

        return candidate;
    }

    appendNextPrime() {
        // The React loop is too slow, just add elements old skool
        const li = document.createElement('li');
        li.innerHTML = this.getNextPrime().toLocaleString();
        this.primeListEl.appendChild(li);

        this.maybeAppendNextPrime();
    }

    onScroll() {
        if (this.thinking) return;
        this.thinking = true;
        this.maybeAppendNextPrime();
    }

    maybeAppendNextPrime() {
        const listHeight = this.primeListEl.offsetHeight;
        const scrollPos = document.body.scrollTop || window.pageYOffset;
        const spaceBelow = listHeight - scrollPos - this.viewportHeight;

        if (spaceBelow < this.viewportHeight * 10) { // how far to calculate ahead
            this.appendNextPrime();
        } else {
            this.thinking = false;
        }
    }

    componentDidMount() {
        this.primeListEl = React.findDOMNode(this.refs.primeList);

        this.viewportHeight = window.innerHeight;

        setTimeout(() => {
            document.body.scrollTop = 0; // going back/forward might start already scrolled down
            this.appendNextPrime({andTryAgain: true});
        }, 50); // react-router or the browser will do some clever scrolling jazz. Hack away at that.

        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    render() {
        return (
            <PageWrapper className="all-the-primes">
                <ul ref="primeList" className="all-the-primes__list">
                    <li>2</li>
                    <li>3</li>
                    <li>5</li>
                    <li>7</li>
                    <li>11</li>
                    <li>13</li>
                    <li>17</li>
                    <li>19</li>
                    <li>23</li>
                    <li>29</li>
                    <li>31</li>
                    <li>37</li>
                    <li>41</li>
                    <li>43</li>
                    <li>47</li>
                    <li>53</li>
                    <li>59</li>
                    <li>61</li>
                    <li>67</li>
                    <li>71</li>
                    <li>73</li>
                    <li>79</li>
                    <li>83</li>
                    <li>89</li>
                    <li>97</li>
                    <li>101</li>
                    <li>103</li>
                    <li>107</li>
                    <li>109</li>
                    <li>113</li>
                    <li>127</li>
                    <li>131</li>
                    <li>137</li>
                    <li>139</li>
                    <li>149</li>
                    <li>151</li>
                    <li>157</li>
                    <li>163</li>
                    <li>167</li>
                    <li>173</li>
                    <li>179</li>
                    <li>181</li>
                    <li>191</li>
                    <li>193</li>
                    <li>197</li>
                    <li>199</li>
                    <li>211</li>
                    <li>223</li>
                    <li>227</li>
                    <li>229</li>
                    <li>233</li>
                    <li>239</li>
                    <li>241</li>
                    <li>251</li>
                    <li>257</li>
                    <li>263</li>
                    <li>269</li>
                    <li>271</li>
                    <li>277</li>
                    <li>281</li>
                    <li>283</li>
                    <li>293</li>
                </ul>
            </PageWrapper>
        );
    }
}

export default AllThePrimes;
