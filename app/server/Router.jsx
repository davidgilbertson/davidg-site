import Router from 'react-router';
const Route = Router.Route;

var Home = require('../components/Home/Home.jsx');
var App = require('../components/App/App.jsx');
var Fireball = require('../components/Fireball/Fireball.jsx');

const routes = (
    <Route hander={App}>
        <Route path="home" handler={Home} />
        <Route path="fireball" handler={Fireball} />
    </Route>
);
