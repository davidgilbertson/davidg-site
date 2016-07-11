import React from 'react';
import TestUtils from 'react-addons-test-utils';
const shallowRenderer = TestUtils.createRenderer();

import App from './App.jsx';

describe('App', () => {
    let reactComponent;

    before(() => {
        shallowRenderer.render(<App className="some class" />);

        reactComponent = shallowRenderer.getRenderOutput();
    });

    it('should render the App with the correct class', () => {
        const appClass = reactComponent.props.className;
        appClass.should.contain('app__wrapper');
    });

    it('should render a mask ', () => {
        const navMaskClass = reactComponent.props.children[1].props.className;
        navMaskClass.should.equal('nav__mask');
    });

    it('should make a burger', () => {
        const burgerName = reactComponent.props.children[0].type.name;
        burgerName.should.equal('Hamburger');
    });

    it('should make a nav', () => {
        const navName = reactComponent.props.children[2].type.name;
        navName.should.equal('Nav');
    });

    it('should render a header', () => {
        const headerName = reactComponent.props.children[3].type.name;
        headerName.should.equal('Header');
    });
});
