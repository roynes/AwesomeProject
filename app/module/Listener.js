import React, { Component } from 'react';
import { AppState, Text } from 'react-native';
import { appStateRedux } from '../redux'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        appState: state.appState
    }
};

class Listener extends Component {
    
    state = {
        appState: [ AppState.currentState ]
    }

    componentDidMount() {
        console.log('mounted', this.props.appState);
        AppState.addEventListener('change', this._appStateHandler);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._appStateHandler)
    }

    _appStateHandler = (nextAppState) => {
        //TODO: soon to be history of appstates

        console.log('next app state',nextAppState);

        const { dispatch } = this.props;
        const { appStateActionCreators } = appStateRedux

        dispatch(appStateActionCreators.add(nextAppState));
    }

    render() {
        let { children } = this.props;

        return children;
    }

}

export default connect(mapStateToProps)(Listener);