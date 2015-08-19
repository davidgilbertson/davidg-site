import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);
global.sinon = sinon;
global.expect = chai.expect;

//Set up the mock dom
const jsdom = require('jsdom').jsdom;

global.document = jsdom('<html><body></body></html>');
global.window = document.parentWindow;
global.navigator = {userAgent: 'node.js'};
