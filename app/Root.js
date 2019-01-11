/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { Listener } from './module';
import { Provider } from 'react-redux';
import { store, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from './container';

export default class Root extends Component {
  render() {
    console.log('root',store.getState());

    return (
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          <Listener>
            <AppContainer></AppContainer>
          </Listener>
        </PersistGate>
      </Provider>
    );
  }
}
