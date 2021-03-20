import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
};

export default Login;
