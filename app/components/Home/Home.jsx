import React, {Component, PropTypes} from 'react';

require('./home.scss');

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
                <p className="header-1">.heading-1</p>
                <p className="header-2">.heading-2</p>
                <p className="header-3">.heading-3</p>
                <p className="body-text">body Hello, I am HOME now</p>
                <a className="link">a link</a>

                <hr />

                <input
                    defaultValue={this.state.value}
                    onChange={this.update} />
                <hr />
            </div>
        );
    }
}

export default Home;
