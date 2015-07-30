import React, {Component, PropTypes} from 'react';
import merge from 'lodash/object/merge';

class DGComponent extends Component {
    constructor(props) {
        super(props);
        this.setAppState = this.setAppState.bind(this); // TODO (davidg): required?
        //this.state = {};

        this.appState = {};

        //this.setAppState = (obj) => {
        //    merge(this.appState, obj);
        //    console.log('Just set app state, state is now:', this.appState);
        //}
    }

    setAppState(obj) {
        merge(this.appState, obj);
        console.log('Just set app state, state is now:', this.appState);
    }
    //saveToAppState(obj) {
    //    console.log('  --  >  DGComponent.js:14 > saveToAppState > obj:', obj);
    //    this.setState(obj);
    //}
}

export default DGComponent;
