import { persistReducer, persistStore } from 'redux-persist';

import { composeWithDevTools } from 'remote-redux-devtools';
import storage from 'redux-persist/es/storage';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as loginFormRedux from './loginForm';
import * as appStateRedux from './appState';
import saga from './saga';

const loginFormPersistConfig = {
  key: 'login',
  storage: storage
}

const sagaMiddleware = createSagaMiddleware();

let store = createStore(combineReducers({
  appState: appStateRedux.appStateReducer,
  loginForm: persistReducer(loginFormPersistConfig ,loginFormRedux.loginFormReducers)
}),  composeWithDevTools(applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);

sagaMiddleware.run(saga);

export {
  appStateRedux,
  loginFormRedux,
  store,
  persistor
}