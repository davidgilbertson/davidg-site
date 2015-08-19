import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

// set up the dom
if (typeof document === 'undefined') {
    var jsdom = require('jsdom').jsdom;

    global.document = jsdom('<html><body></body></html>');
    global.window = document.parentWindow;
    global.navigator = {
        userAgent: 'node.js'
    };
}

global.sinon = sinon;
global.expect = chai.expect;
