/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import persistedStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App = () => {
  const {persistore, store} = persistedStore();
  return (
    <PersistGate persistor={persistore}>
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;
