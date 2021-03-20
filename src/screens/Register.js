import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Register = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Register</Text>
    </TouchableOpacity>
  );
};

export default Register;
