import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
import stubContext from 'react-stub-context';
import App from './App.jsx';

describe('App', function() {
    let reactComponent;
    let domElement;
    function noop() {}
    const Router = noop;
    let AppWithContext;

    it('should render the App', () => {
        Router.makeHref = noop;
        Router.isActive = noop;
        Router.getCurrentPath = noop;
        Router.getRouteAtDepth = noop;
        Router.setRouteComponentAtDepth = noop;

        AppWithContext = stubContext(App, {router: Router});

        reactComponent = TestUtils.renderIntoDocument(
            <AppWithContext
                className="some class"
                />
        );

        domElement = React.findDOMNode(reactComponent);
    });
});
