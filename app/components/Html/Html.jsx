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
                    <title>The Title</title>
                </head>

                <body>
                    <div id="app" className="app">
                        {this.props.children}
                    </div>

                    <script src="http://localhost:8080/webpack-dev-server.js"></script>
                    <script src="bundle.js"></script>
                </body>
            </html>
        );
    }
}

Html.propTypes = {
    children: PropTypes.object
};

export default Html;
