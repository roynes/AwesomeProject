import { AppState } from 'react-native';
import { updateObject } from '../utility';
export const ADD_APP_STATE = "ADD_APP_STATE";

const initialState = {
    appState: [ AppState.currentState ]
};

export const appStateActionCreators = {
    add: (currentState) => {
        return {
            type: ADD_APP_STATE,
            payload: currentState
        }
    }
}

export const appStateReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case ADD_APP_STATE:
            return updateObject(prevState, { appState: [...prevState.appState, action.payload] })
    }

    return prevState;
}