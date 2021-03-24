/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import persistedStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';
import linking from './src/helpers/linking';

const App = () => {
  const {persistore, store} = persistedStore();
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <PersistGate persistor={persistore}>
      <Provider store={store}>
        <NavigationContainer linking={linking}>
          <DrawerNavigation />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export default App;
