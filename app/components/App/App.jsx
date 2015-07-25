'use strict';
import React from 'react';

import MainCss from '../../styles/_main.scss';

var Header = require('../Header/Header.jsx');
var Home = require('../Home/Home.jsx');
var Nav = require('../Nav/Nav.jsx');

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

export default App;
