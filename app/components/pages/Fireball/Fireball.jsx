import React, {Component} from 'react';
if (process.env.WEBPACK) require('./fireball.scss');
import Fireball from 'fireball-js';

import PageWrapper from '../../PageWrapper/PageWrapper.jsx';
import MarkDown from '../../MarkDown/MarkDown.jsx';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0,
            fireballDone: false
        };
    }

    componentDidMount() {
        Fireball.getScore();

        Fireball.onSuccess(score => {
            this.setState({
                score,
                fireballDone: true
            });
        });
    }

    render() {
        const subTitle = this.state.fireballDone ? (
            <p className="fireball__sub-title">Your Fireball score is {this.state.score.toLocaleString()}</p>
        ) : (
            <p className="fireball__sub-title">Your Fireball score is being calculated...</p>
        );

        return (
            <PageWrapper className="fireball">
                {subTitle}
                <p className="speed-text show-for-sloth">Your machine would rather be sleeping in a tree than processing this web page.</p>
                <p className="speed-text show-for-tortoise">Your machine resembles a tortoise that is pretty excited to be somewhere.</p>
                <p className="speed-text show-for-puppy">Your machine has the energy of a frisky puppy.</p>
                <p className="speed-text show-for-cheetah">Your machine has the spirit of a cheetah.</p>

                <hr />
                <MarkDown url="https://raw.githubusercontent.com/davidgilbertson/fireball/master/README.md" />

                <hr />

                <p>
                    View the source on <a href="https://github.com/davidgilbertson/fireball" className="link" target="_blank">GitHub</a>
                </p>
            </PageWrapper>
        );
    }
}

export default Home;
