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
import SearchReceiver from '../screens/SearchReceiver';
import PinConfirm from '../screens/PinConfirm';
import CostumDrawerNav from '../components/CostumDrawerNav';
// import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import TransactionDetail from '../screens/TransactionDetail';
import HeaderFlowTransaction from '../components/HeaderFlowTransaction';
import Confirmation from '../screens/Confirmation';
import ResultTransaction from '../screens/ResultTransaction';
import {useSelector} from 'react-redux';
import Amount from '../screens/Amount';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  const auth = useSelector(state => state.auth);
  return (
    <Drawer.Navigator drawerContent={props => <CostumDrawerNav {...props} />}>
      {auth.token === null ? (
        <Drawer.Screen
          name="Auth"
          component={AuthStack}
          options={{swipeEnabled: false}}
        />
      ) : (
        <React.Fragment>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen
            name="PinConfirm"
            component={PinConfirm}
            options={{
              headerShown: true,
              header: () => (
                <HeaderFlowTransaction title="Enter Your PIN" rounded={true} />
              ),
            }}
          />
          <Drawer.Screen
            name="Search"
            component={SearchReceiver}
            options={{
              headerShown: true,
              header: () => (
                <HeaderFlowTransaction title="Find Receiver" rounded={false} />
              ),
            }}
          />
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
            name="Result"
            component={ResultTransaction}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="TopUp"
            component={TopUp}
            options={{
              headerShown: true,
              header: () => (
                <HeaderFlowTransaction title="Top Up" rounded={false} />
              ),
            }}
          />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="PersonalInfo" component={PersonalInfo} />
          <Drawer.Screen name="ChangePin" component={ChangePin} />
          <Drawer.Screen name="Addphone" component={Addphone} />
          <Drawer.Screen name="ManagePhone" component={ManagePhone} />
          <Drawer.Screen name="ChangePass" component={ChangePass} />
          <Drawer.Screen name="Amount" component={Amount} />
        </React.Fragment>
      )}
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
