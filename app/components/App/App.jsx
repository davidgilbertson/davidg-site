'use strict';
import React from 'react';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

import MainCss from '../../styles/_main.scss';

var Nav = require('../Nav/Nav.jsx');
import Header from '../Header/Header';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Nav />

                <section className="app__container">
                    <RouteHandler />
                </section>
            </div>
        );
    }
}

export default App;
