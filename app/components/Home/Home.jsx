import React, {Component, PropTypes} from 'react';

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
            <div className="app__content home">
                <p className="header-1">I am, David Gilbertson</p>

                <p className="header-2">I am, web developer</p>

                <p className="header-3">Here are some things that I have done...</p>

                <p className="body-text">
                    I have made <a className="link" href="/">a list of all prime numbers</a> and <a className="link" href="/">Fireball, a thing</a>
                     and <a className="link" href="/">isolog, for sending NODE's console to the browser</a>
                    and also <a className="link" href="/">a color swatch builder using only named colors</a>
                    In hac habitasse platea dictumst. In hac habitasse platea dictumst. Vestibulum facilisis, purus nec
                    lacerat accumsan. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                    venenatis ante odio sit amet eros.
                </p>


            </div>
        );
    }
}

export default Home;
