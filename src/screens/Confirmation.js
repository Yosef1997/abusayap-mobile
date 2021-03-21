import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MainHeader from '../components/MainHeader';
import ProfileSelected from '../components/ProfileSelected';

const Confirmation = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainHeader>
        <ProfileSelected />
      </MainHeader>
      <View style={style.parentWrapp}>
        <View style={style.row}>
          <View style={style.card}>
            <Text style={style.textTitle}>Amount</Text>
            <Text style={style.textBodyCard}>Rp100.000</Text>
          </View>
          <View style={style.card}>
            <Text style={style.textTitle}>Balance Left</Text>
            <Text style={style.textBodyCard}>Rp20.000</Text>
          </View>
        </View>
        <View style={style.row}>
          <View style={style.card}>
            <Text style={style.textTitle}>Date</Text>
            <Text style={style.textBodyCard}>May 11, 2020</Text>
          </View>
          <View style={style.card}>
            <Text style={style.textTitle}>Time</Text>
            <Text style={style.textBodyCard}>12.20</Text>
          </View>
        </View>
        <View style={style.row}>
          <View style={style.cardNote}>
            <Text style={style.textTitle}>Notes</Text>
            <Text style={style.textBodyCard}>For buying some socks</Text>
          </View>
        </View>
        <TouchableOpacity
          style={style.btnContinue}
          onPress={() => navigation.navigate('Result')}>
          <Text style={style.textContinue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  parentWrapp: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  card: {
    width: 155,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  cardNote: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  textTitle: {
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 10,
  },
  textBodyCard: {
    color: '#514F5B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnWrapperRoot: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 16,
  },
  btnContinue: {
    height: 56,
    borderRadius: 10,
    backgroundColor: '#00D16C',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  textContinue: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Confirmation;
