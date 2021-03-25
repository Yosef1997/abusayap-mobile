import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import profile from '../assets/images/profile.jpg';
import {REACT_APP_API_URL as API_URL} from '@env';

const ProfileSelected = props => {
  return (
    <View style={style.card}>
      <View style={style.row}>
        {props.picture === null ? (
          <Image source={profile} style={style.imageProfile} />
        ) : (
          <Image
            source={{uri: `${API_URL}/upload/profile/${props.picture}`}}
            style={style.imageProfile}
          />
        )}
        <View>
          <Text style={style.textName}>{props.name}</Text>
          <Text style={style.textPhoneNumber}>
            {props.phoneNumber === null
              ? props.email
              : `+62 ${props.phoneNumber}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {
    height: 56,
    width: 56,
    borderRadius: 10,
    marginRight: 15,
  },
  textName: {
    fontSize: 16,
    color: '#4D4B57',
    fontWeight: 'bold',
  },
  textPhoneNumber: {
    fontSize: 14,
    color: '#7A7886',
  },
});

export default ProfileSelected;
