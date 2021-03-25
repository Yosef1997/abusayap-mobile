import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import MainHeader from '../components/MainHeader';
import UserCard from '../components/UserCard';
import rupiah from '../helpers/rupiah';
import moment from 'moment';

const Confirmation = () => {
  const navigation = useNavigation();
  const transactionInfo = useSelector(
    state => state.transaction.transactionInfo,
  );
  const balanceSelf = useSelector(state => state.auth.user);
  const handlePress = () => {
    navigation.navigate('PinConfirm');
  };
  return (
    <>
      <MainHeader>
        <UserCard />
      </MainHeader>
      <View style={style.parentWrapp}>
        <View style={style.row}>
          <View style={style.card}>
            <Text style={style.textTitle}>Amount</Text>
            <Text style={style.textBodyCard}>
              Rp. {rupiah(transactionInfo.amount)}
            </Text>
          </View>
          <View style={style.card}>
            <Text style={style.textTitle}>Balance Left</Text>
            <Text style={style.textBodyCard}>
              Rp. {rupiah(balanceSelf.balance - transactionInfo.amount)}
            </Text>
          </View>
        </View>
        <View style={style.row}>
          <View style={style.card}>
            <Text style={style.textTitle}>Date</Text>
            <Text style={style.textBodyCard}>
              {moment(transactionInfo.date).format('ll')}
            </Text>
          </View>
          <View style={style.card}>
            <Text style={style.textTitle}>Time</Text>
            <Text style={style.textBodyCard}>
              {moment(transactionInfo.date).format('LT')}
            </Text>
          </View>
        </View>
        <View style={style.row}>
          <View style={style.cardNote}>
            <Text style={style.textTitle}>Notes</Text>
            <Text style={style.textBodyCard}>{transactionInfo.note}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={style.btnContinue}
          onPress={() => handlePress()}>
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
