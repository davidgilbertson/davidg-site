import React, {Component, PropTypes} from 'react';
import {DGComponent, isOnClient, isWebPack, xhr} from '../../utils';
import marked from 'marked';

if (isWebPack) {
    require('./_markdown.scss');
}

class MarkDown extends DGComponent {
    constructor(props) {
        super(props);
        this.state = {markdown: ''};
    }

    componentDidMount() {
        console.log('  --  >  MarkDown.jsx:16 > componentDidMount');
        if (this.state.markdown) return;

        if (this.props.markdown) {
            this.setState({markdown: this.props.markdown});
        } else if (this.props.url && isOnClient) {
            xhr(this.props.url).then((markdown) => {
                this.setAppState({markdown});

                this.setState({markdown});
            });
        }
    }

    render() {
        return (
            <div
                className="markdown"
                dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}
                />
        );
    }
}

MarkDown.propTypes = {
    url: PropTypes.string,
    markdown: PropTypes.string
};

export default MarkDown;
