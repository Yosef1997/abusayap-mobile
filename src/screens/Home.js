import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('History')}>
      <Text>Home</Text>
    </TouchableOpacity>
  );
};

export default Home;
