var assert = require('assert');

describe('Hamburger', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Hamburger = require('./Hamburger.jsx');
    var domEl;

    var mockOnToggleNav = function() { return null; };

    it('should render the burger', function() {
        var HamburgerComponent = TestUtils.renderIntoDocument(
            <Hamburger
                className="some class"
                onToggleNav={mockOnToggleNav}
                />
        );

        domEl = React.findDOMNode(HamburgerComponent);
    });

    it('should have three bars', function() {
        var bars = domEl.querySelectorAll('.hamburger__bar');
        assert.equal(bars.length, 3);
    });
});

describe('Array', function() {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});
