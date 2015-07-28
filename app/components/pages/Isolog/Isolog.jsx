import React, {Component, PropTypes} from 'react';
import {isOnClient} from '../../../utils';
import marked from 'marked';
//import {isWebPack} from '../../../utils';
//
//if (isWebPack) {
//    require('./_isolog.scss');
//}

//function goGet(url) {
//    let xhr = new XMLHttpRequest();
//
//    return new Promise((resolve) => {
//        xhr.open('GET', url, true);
//
//        xhr.onreadystatechange = function () {
//            if (xhr.readyState != 4 || xhr.status != 200) return;
//            return resolve(xhr.responseText);
//        };
//
//        xhr.send();
//    });
//}

class Isolog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readme: 'no readme'
        };
    }

    //componentDidMount() {
    //    if (isOnClient) {
    //        let readmeUrl = 'https://raw.githubusercontent.com/davidgilbertson/isolog/master/README.md';
    //
    //        goGet(readmeUrl).then(readme => this.setState({readme}));
    //    }
    //}

    render() {
        return (
            <section className="app__content">
                <div
                    className="markdown"
                    dangerouslySetInnerHTML={{__html: marked(this.state.readme)}}
                    />
            </section>
        );
    }
}

export default Isolog;
