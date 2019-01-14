/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
import { AppContainer } from './container';
import { Provider } from 'react-redux';
import { Listener } from './module';

import React, {Component} from 'react';

export default class Root extends Component {
  render() {
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
