import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

function AuthStack(props) {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
      </Stack.Navigator>
    </>
  );
}

export default AuthStack;
