import React, {Component, PropTypes} from 'react';
import {isOnClient, xhr} from '../../utils';
import marked from 'marked';

if (isOnClient) {
    require('./markdown.scss');
}

class MarkDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: props.markdown || ''
        };
    }

    componentDidMount() {
        if (this.state.markdown) return;

        if (!this.props.markdown && this.props.url) {
            xhr(this.props.url).then((markdown) => {
                this.setState({markdown});
            });
        }
    }

    render() {
        return (
            <div
                className="markdown"
                dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}
            ></div>
        );
    }
}

MarkDown.propTypes = {
    url: PropTypes.string,
    markdown: PropTypes.string
};

export default MarkDown;
