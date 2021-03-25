import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MainHeader from '../components/MainHeader';
import success from '../assets/images/success.png';
import moment from 'moment';
import ProfileSelected from '../components/ProfileSelected';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import rupiah from '../helpers/rupiah';

const ResultTransaction = () => {
  const navigation = useNavigation();
  const transactionInfo = useSelector(
    state => state.transaction.transactionInfo,
  );
  const contactFocus = useSelector(state => state.transaction.contactFocus);
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <MainHeader>
        <Text style={style.titleHeader}>Transfer Details</Text>
      </MainHeader>
      <ScrollView>
        <View style={style.rowIcon}>
          <Image source={success} style={style.iconSuccess} />
          <Text style={style.textTransfer}>Transfer Success</Text>
        </View>
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
              <Text style={style.textBodyCard}>Rp. {rupiah(user.balance)}</Text>
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
          <View style={style.rowProfileSelected}>
            <Text style={style.textFrom}>From</Text>
            <ProfileSelected
              name={`${user.firstname} ${user.lastname}`}
              email={user.email}
              picture={user.picture}
              phoneNumber={user.phoneNumber}
            />
          </View>
          <View style={style.rowProfileSelected}>
            <Text style={style.textFrom}>To</Text>
            <ProfileSelected
              name={contactFocus.name}
              email={contactFocus.email}
              picture={contactFocus.picture}
              phoneNumber={contactFocus.phoneNumber}
            />
          </View>
          <TouchableOpacity
            style={style.btnContinue}
            onPress={() => navigation.navigate('Home')}>
            <Text style={style.textContinue}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  titleHeader: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  paragraph: {
    textAlign: 'center',
    color: '#7A7886',
    fontSize: 13,
  },
  rowProfileSelected: {
    marginVertical: 15,
  },
  rowIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 16,
  },
  textTransfer: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4D4B57',
    marginTop: 10,
    marginBottom: 10,
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
    marginVertical: 30,
  },
  textContinue: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  textFrom: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#514F5B',
    marginBottom: 15,
  },
});

export default ResultTransaction;
