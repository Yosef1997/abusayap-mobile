import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ConfirmResetPassword from '../screens/ConfirmResetPassword';
import ResetPassword from '../screens/ResetPassword';
import CreatePin from '../screens/CreatePin';
import PinSuccess from '../screens/PinSuccess';

function AuthStack(props) {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Register}
          name="Register"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CreatePin}
          name="CreatePin"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={ConfirmResetPassword}
          name="Confirm"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ResetPassword}
          name="ResetPassword"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={PinSuccess}
          name="PinSuccess"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}

export default AuthStack;
