import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import profile from '../assets/images/profile.jpg';

const ListTransaction = props => {
  return (
    <TouchableOpacity style={style.card}>
      <View style={style.wrapper}>
        <Image source={profile} style={style.photoProfile} />
        <View style={style.rowName}>
          <Text style={style.textName}>{props.name}</Text>
          <Text style={style.textStatus}>
            {props.isTransfer === false ? 'Transfer' : 'Subcription'}
          </Text>
        </View>
        <Text
          style={
            props.isTransfer === false
              ? style.textAmountTransfer
              : style.textAmountSubcription
          }>
          {props.isTransfer === false ? `+${props.amount}` : `-${props.amount}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginVertical: 10,
    borderRadius: 15,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoProfile: {
    height: 56,
    width: 56,
    borderRadius: 10,
    marginRight: 16,
  },
  rowName: {
    flex: 1,
  },
  textName: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textStatus: {
    color: '#7A7886',
    fontSize: 14,
  },
  textAmountTransfer: {
    color: '#1EC15F',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textAmountSubcription: {
    color: '#FF5B37',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ListTransaction;
