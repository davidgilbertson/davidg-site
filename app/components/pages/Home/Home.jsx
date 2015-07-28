import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

if (typeof window !== 'undefined') {
    require('./_home.scss');
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);

        this.state = {value: 22};
    }

    update(e) {
        let value = e.target.value;
        console.log(value);

        this.setState({value});
    }

    render() {
        return (
            <section className="app__content home">
                <p className="heading-1">David Gilbertson</p>

                <p className="heading-2">I am, web developer</p>

                <p className="heading-3">Here are some things that I have done...</p>

                <p className="body-text">
                    I have made <Link className="link" to="/">a list of all the prime numbers</Link> and
                    created <Link className="link" to="fireball">Fireball,
                    a thing</Link> and wrote <Link className="link" to="isolog">isolog, for sending
                    node.js console logs to the browser</Link> and
                    also <Link className="link" to="color-swatches">a color swatch builder using named colors</Link>. That last one for no known reason.
                </p>


            </section>
        );
    }
}

export default Home;
