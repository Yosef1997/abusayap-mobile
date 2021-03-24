import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import profile from '../assets/images/profile.jpg';
import rupiah from '../helpers/rupiah';
import moment from 'moment';
import {REACT_APP_API_URL as API_URL} from '@env';

const ListTransaction = props => {
  const amount = props.amount;
  const ConvertRupiah = rupiah(amount);
  return (
    <TouchableOpacity style={style.card} onPress={() => ''}>
      <View style={style.wrapper}>
        {props.picture === null ? (
          <Image source={profile} style={style.photoProfile} />
        ) : (
          <Image
            source={{uri: `${API_URL}/upload/profile/${props.picture}`}}
            style={style.photoProfile}
          />
        )}
        <View style={style.rowName}>
          <Text style={style.textName}>{props.name}</Text>
          <Text style={style.textStatus}>
            {props.isTransfer === 'receiver' ? 'Transfer' : 'Subcription'}
          </Text>
          <Text style={style.textCreatedAt}>
            {moment(props.createdAt).format('ll LT')}
          </Text>
        </View>
        <Text
          style={
            props.isTransfer === 'receiver'
              ? style.textAmountTransfer
              : style.textAmountSubcription
          }>
          {props.isTransfer === 'receiver'
            ? `+Rp${ConvertRupiah}`
            : `-Rp${ConvertRupiah}`}
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
  textCreatedAt: {
    color: '#7A7886',
    fontSize: 11,
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
