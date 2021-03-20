import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const History = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>History</Text>
    </TouchableOpacity>
  );
};

export default History;
