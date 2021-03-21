import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import AuthStack from './AuthStack';
import History from '../screens/History';
import TopUp from '../screens/TopUp';
import Profile from '../screens/Profile';
import PersonalInfo from '../screens/PersonalInfo';
import ChangePass from '../screens/ChangePass';
import ChangePin from '../screens/ChangePin';
import Addphone from '../screens/AddPhoneNumber';
import ManagePhone from '../screens/MangePhoneNumber';

import CostumDrawerNav from '../components/CostumDrawerNav';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => <CostumDrawerNav {...props} />}>
      <Drawer.Screen
        name="Auth"
        component={AuthStack}
        options={{swipeEnabled: false}}
      />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="TopUp" component={TopUp} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="PersonalInfo" component={PersonalInfo} />
      <Drawer.Screen name="ChangePin" component={ChangePin} />
      <Drawer.Screen name="Addphone" component={Addphone} />
      <Drawer.Screen name="ManagePhone" component={ManagePhone} />
      <Drawer.Screen name="ChangePass" component={ChangePass} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
