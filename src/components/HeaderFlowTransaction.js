import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderFlowTransaction = props => {
  const navigation = useNavigation();
  return (
    <View
      style={props.rounded === true ? style.rowHeaderRounded : style.rowHeader}>
      <Pressable
        android_ripple={{radius: 20, color: 'black', borderless: true}}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" style={style.arrowLeft} />
      </Pressable>
      <Text style={style.textHeader}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  rowHeaderRounded: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#00D16C',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  rowHeader: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#00D16C',
  },
  arrowLeft: {
    fontSize: 27,
    color: 'white',
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 22,
  },
});

export default HeaderFlowTransaction;
