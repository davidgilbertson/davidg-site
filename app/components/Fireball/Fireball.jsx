import React, {Component, PropTypes} from 'react';

require('./Fireball.scss');

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
            <div className="fireball">
                <h1>I am fireball!!!</h1>
            </div>
        );
    }
}

export default Home;
