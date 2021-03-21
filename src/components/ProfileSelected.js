import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import profile from '../assets/images/profile.jpg';

const ProfileSelected = () => {
  return (
    <View style={style.card}>
      <View style={style.row}>
        <Image source={profile} style={style.imageProfile} />
        <View>
          <Text style={style.textName}>Michael Jordan</Text>
          <Text style={style.textPhoneNumber}>+62 813-8492-9994</Text>
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
