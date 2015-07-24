'use strict';
import React from 'react';

import MainCss from './styles/_main.scss';

var Header = require('./components/Header/Header.jsx');
var Home = require('./components/Home/Home.jsx');
var Nav = require('./components/Nav/Nav.jsx');

class App extends React.Component {
    render() {
        console.log('  --  >  main.jsx:12 > render');
        return (
            <div>
                <Header />
                <Nav />
                <Home />
            </div>
        )
    }
}

React.render(
    <App />,
    document.getElementById('app')
);
