import React from 'react';
import {xhr} from '../../../utils';

if (process.env.WEBPACK) require('./radioAndCheckboxes.scss');

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';

function getSafariVersion(webkitVersion) {
    const versionNumber = parseFloat(webkitVersion.match(/(\d*\.\d*)/)[0]);
    if (versionNumber >= 601.5) return '9.1';
    if (versionNumber >= 601) return '9';
    if (versionNumber >= 538.35) return '8';
    if (versionNumber >= 537.71) return '7';
    if (versionNumber >= 536.25) return '6';
    return '';
}

function getBrowserString(data) {
    const version = data.browser_name === 'Safari'
        ? getSafariVersion(data.browser_version)
        : parseInt(data.browser_version, 10);

    return `${data.browser_name} ${version} on ${data.platform_name}`;
}

// function runTests() {
//     const tests = [
//         {
//             actual: getSafariVersion('1.1'),
//             expected: '',
//         },
//         {
//             actual: getSafariVersion('602.0.5.123'),
//             expected: '9.1',
//         },
//         {
//             actual: 'false',
//             expected: 'true',
//         },
//     ];
//
//     tests.forEach(test => {
//         console.assert(test.actual === test.expected, `${test.actual} should be ${test.expected}`);
//     });
// }

class RadioAndCheckboxes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            browserData: {},
            browserString: '',
        };
    }

    componentDidMount() {
        const API_KEY = 'a59df868';
        const USER_AGENT = encodeURIComponent(navigator.userAgent);

        const URL = `https://useragentapi.com/api/v3/json/${API_KEY}/${USER_AGENT}`;

        xhr(URL).then(data => {
            const browserData = JSON.parse(data).data;
            this.setState({
                browserData,
                browserString: getBrowserString(browserData),
            });
        });
    }

    render() {
        return (
            <PageWrapper className="radio-and-checkboxes" wide>
                <div className="radio-and-checkboxes__wrapper">
                    <h1 className="heading-1 radio-and-checkboxes__title">{this.state.browserString}</h1>
                    <div className="radio-and-checkboxes__size-set">
                        <p><code>transform: scale(1);</code></p>

                        <input type="radio" style={{transform: 'scale(1)', WebkitTransform: 'scale(1)'}} />
                        <input type="radio" style={{transform: 'scale(1)', WebkitTransform: 'scale(1)'}} checked />
                        <input type="checkbox" style={{transform: 'scale(1)', WebkitTransform: 'scale(1)'}} />
                        <input type="checkbox" style={{transform: 'scale(1)', WebkitTransform: 'scale(1)'}} checked />
                    </div>


                    <div className="radio-and-checkboxes__size-set">
                        <p><code>transform: scale(1.3);</code></p>

                        <input type="radio" style={{transform: 'scale(1.3)', WebkitTransform: 'scale(1.3)'}} />
                        <input type="radio" style={{transform: 'scale(1.3)', WebkitTransform: 'scale(1.3)'}} checked />
                        <input type="checkbox" style={{transform: 'scale(1.3)', WebkitTransform: 'scale(1.3)'}} />
                        <input type="checkbox" style={{transform: 'scale(1.3)', WebkitTransform: 'scale(1.3)'}} checked />
                    </div>

                    <div className="radio-and-checkboxes__size-set">
                        <p><code>transform: scale(2);</code></p>

                        <input type="radio" style={{transform: 'scale(2)', WebkitTransform: 'scale(2)'}} />
                        <input type="radio" style={{transform: 'scale(2)', WebkitTransform: 'scale(2)'}} checked />
                        <input type="checkbox" style={{transform: 'scale(2)', WebkitTransform: 'scale(2)'}} />
                        <input type="checkbox" style={{transform: 'scale(2)', WebkitTransform: 'scale(2)'}} checked />
                    </div>
                </div>

                <div>
                    <pre>{JSON.stringify(this.state.browserData, null, 2)}</pre>
                </div>
            </PageWrapper>
        );
    }
}

export default RadioAndCheckboxes;
