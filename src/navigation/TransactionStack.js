import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionDetail from '../screens/TransactionDetail';

function TransactionStack(props) {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen component={TransactionDetail} name="TransactionDetail" />
      </Stack.Navigator>
    </>
  );
}

export default TransactionStack;
