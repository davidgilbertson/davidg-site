import React, {Component, PropTypes} from 'react';

require('./Home.scss');

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
            <div className="home">
                <p className="header-1">The Great Gatsby (.heading-1)</p>

                <p className="header-2">A tale of things (.heading-2)</p>

                <p className="header-3">was great (.heading-3)</p>

                <p className="body-text">
                    .body-text: In hac habitasse platea dictumst. In hac habitasse platea dictumst. Vestibulum facilisis, purus nec
                    lacerat accumsan. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
                    venenatis ante odio sit amet eros.
                </p>

                <a className="link">a link</a>

                <hr />

                <input
                    defaultValue={this.state.value}
                    onChange={this.update} />
            </div>
        );
    }
}

export default Home;
