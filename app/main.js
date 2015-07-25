'use strict';
import React from 'react';

const App = require('./components/App/App.jsx');

const rootInstance = React.render(<App />, document.getElementById('app'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: () => {
            return [rootInstance];
        }
    });
}


//var rootInstance = null;

//router.run(function (Handler, state) {
//var rootInstance = React.render(<App />, document.body);
//});

//if (module.hot) {
//    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
//        getRootInstances: function () {
//            // Help React Hot Loader figure out the root component instances on the page:
//            return [rootInstance];
//        }
//    });
//}
