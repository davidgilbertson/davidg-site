import React from 'react';
import TestUtils from 'react-addons-test-utils';
const shallowRenderer = TestUtils.createRenderer();

import Hamburger from './Hamburger.jsx';

describe('Hamburger', () => {
    let reactComponent;
    const mockOnToggleNav = sinon.spy();

    before(() => {
        shallowRenderer.render(
            <Hamburger
                className="some class"
                onToggleNav={mockOnToggleNav}
            />
        );
        reactComponent = shallowRenderer.getRenderOutput();
    });

    it('should render an <a>', () => {
        const componentType = reactComponent.type;
        componentType.should.equal('a');
    });

    it('should have three bars', () => {
        const bars = reactComponent.props.children;
        bars.should.have.length(3);
    });

    it('should toggle nav when clicked', () => {
        reactComponent.props.onClick();
        mockOnToggleNav.should.have.been.calledOnce;
    });
});
