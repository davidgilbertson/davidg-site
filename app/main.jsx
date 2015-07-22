'use strict';
import React from 'react';

var Header = require('./components/Header/Header.jsx');
var Home = require('./components/Home/Home.jsx');
var Nav = require('./components/Nav/Nav.jsx');

import MainCss from './_main.scss';

class App extends React.Component {
    render() {
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
