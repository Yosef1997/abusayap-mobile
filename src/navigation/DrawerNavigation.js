import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import AuthStack from './AuthStack';
import History from '../screens/History';
import CostumDrawerNav from '../components/CostumDrawerNav';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import TransactionDetail from '../screens/TransactionDetail';
import HeaderFlowTransaction from '../components/HeaderFlowTransaction';
import Confirmation from '../screens/Confirmation';
import ResultTransaction from '../screens/ResultTransaction';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => <CostumDrawerNav {...props} />}>
      <Drawer.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          headerShown: true,
          header: () => (
            <HeaderFlowTransaction title="Confirmation" rounded={false} />
          ),
        }}
      />
      <Drawer.Screen
        name="Auth"
        component={AuthStack}
        options={{swipeEnabled: false}}
      />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Transaction"
        component={TransactionDetail}
        options={{
          headerShown: true,
          header: () => (
            <HeaderFlowTransaction title="Transaction" rounded={false} />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={History}
        options={{
          headerShown: true,
          header: () => (
            <HeaderFlowTransaction title="History" rounded={true} />
          ),
        }}
      />
      <Drawer.Screen
        name="Result"
        component={ResultTransaction}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
