import React from 'react';
import Router from 'react-router';

import routes from './server/routes.jsx';

let rootInstance = null;
Router.run(routes, Router.HistoryLocation, (Root) => {
    rootInstance = React.render(<Root />, document.getElementById('app'));
});

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: () => {
            return [rootInstance];
        }
    });
}
