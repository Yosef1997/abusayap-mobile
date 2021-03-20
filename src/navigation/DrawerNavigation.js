import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import AuthStack from './AuthStack';
import History from '../screens/History';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Auth"
        component={AuthStack}
        options={{swipeEnabled: false}}
      />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
