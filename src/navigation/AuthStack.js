import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

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
      </Stack.Navigator>
    </>
  );
}

export default AuthStack;
