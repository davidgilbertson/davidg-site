import React, {PropTypes} from 'react';

const analyticsSnippet = (
    `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-66646815-1', 'auto');
    ga('send', 'pageview');`
);

const Html = (props) => {
    const styleString = props.styleString ? (
        <style dangerouslySetInnerHTML={{__html: props.styleString}} />
    ) : (
        null
    );

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no" />

                <title>DG707</title>

                {styleString}

            </head>

            <body>
                <div
                    id="app"
                    className="app"
                    dangerouslySetInnerHTML={{__html: props.innerContent}}
                />

                <script src={props.jsFile} />

                <script dangerouslySetInnerHTML={{__html: analyticsSnippet}} />
            </body>
        </html>
    );
};

Html.propTypes = {
    innerContent: PropTypes.string.isRequired,
    styleString: PropTypes.string,
    jsFile: PropTypes.string.isRequired,
};

Html.defaultProps = {
    styleString: '',
};

export default Html;
