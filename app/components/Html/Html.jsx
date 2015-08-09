import React, {Component, PropTypes} from 'react';

class Html extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />
                    <link href="http://fonts.googleapis.com/css?family=Roboto+Slab:300,400|Roboto:300,400,700,300italic" rel="stylesheet" type="text/css" />
                    <title>{this.props.title || 'DG | 707'}</title>
                    <style dangerouslySetInnerHTML={{__html: this.props.cssString}}></style>
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
