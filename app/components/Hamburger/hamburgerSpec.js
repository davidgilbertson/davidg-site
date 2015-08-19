import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
import Hamburger from './Hamburger.jsx';

describe('Hamburger', () => {
    let domElement;
    let reactComponent;
    const mockOnToggleNav = sinon.spy();

    it('should render the burger', () => {
        reactComponent = TestUtils.renderIntoDocument(
            <Hamburger
                className="some class"
                onToggleNav={mockOnToggleNav}
                />
        );

        domElement = React.findDOMNode(reactComponent);
    });

    it('should have three bars', () => {
        const bars = domElement.querySelectorAll('.hamburger__bar');
        bars.should.have.length(3);
    });

    it('should toggle nav when clicked', () => {
        TestUtils.Simulate.click(domElement);
        mockOnToggleNav.should.have.been.calledOnce;
    });
});
