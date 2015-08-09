import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {isOnClient, isProd} from '../../utils';
import debounce from 'lodash/function/debounce';

if (!isProd) require('./iframe.scss');

class IFrame extends Component {
    constructor(props) {
        super(props);

        this.onResize = debounce(this.onResize.bind(this), 50); // TODO (davidg): Make a DGComponent with this built in?

        this.state = {
            frameHeight: 0
        };
    }

    onResize() {
        this.setState({frameHeight: window.innerHeight});
    }

    componentDidMount() {
        if (isOnClient) {
            setTimeout(() => {
                document.body.classList.add('hosting-iframe');
            }, 301); // So hacky, but because of the cross fade, the unmounting of the previous component will remove the 'hosting-iframe' class

            document.body.classList.add('hosting-iframe');

            this.setState({frameHeight: window.innerHeight});

            window.addEventListener('resize', this.onResize, false);
        }
    }

    componentWillUnmount() {
        document.body.classList.remove('hosting-iframe');
        window.removeEventListener('resize', this.onResize, false);
    }

    render() {
        const classNames = classnames(
            'iframe',
            {'iframe--full-screen': this.props.fullScreen}
        );

        const frameStyle = {
            height: this.state.frameHeight
        };

        return (
            <div className={classNames}>
                <iframe style={frameStyle} src={this.props.src} frameBorder="no"></iframe>
            </div>
        );
    }
}

IFrame.propTypes = {
    src: PropTypes.string.isRequired,
    fullScreen: PropTypes.bool
};

export default IFrame;
