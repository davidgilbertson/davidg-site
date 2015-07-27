import React, {Component, PropTypes} from 'react';

class Html extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <title>{this.props.title || 'David Gilbertson'}</title>
                    <style>{this.props.cssString}</style>
                </head>

                <body>
                    <div
                        id="app"
                        className="app"
                        dangerouslySetInnerHTML={{__html: this.props.innerContent}}
                        />

                    <script src={this.props.scriptFileName}></script>
                </body>
            </html>
        );
    }
}

Html.propTypes = {
    cssString: PropTypes.string.isRequired,
    innerContent: PropTypes.string.isRequired,
    scriptFileName: PropTypes.string.isRequired,
    title: PropTypes.string
};

export default Html;
