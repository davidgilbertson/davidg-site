var assert = require('assert');

describe('App', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var stubContext = require('react-stub-context');
    var App = require('./App.jsx');
    var domElement;
    function noop() {}
    var Router = noop;

    it('should render the burger', function() {
        Router.makeHref = noop;
        Router.isActive = noop;
        Router.getCurrentPath = noop;
        Router.getRouteAtDepth = noop;
        Router.setRouteComponentAtDepth = noop;

        var AppWithContext = stubContext(App, {router: Router});

        var reactComponent = TestUtils.renderIntoDocument(
            <AppWithContext
                className="some class"
                />
        );

        domElement = React.findDOMNode(reactComponent);
    });

    it('should have three bars', function() {
        var bars = domElement.querySelectorAll('.hamburger__bar');
        assert.equal(bars.length, 3);
    });
});
