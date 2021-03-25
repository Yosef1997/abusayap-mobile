/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import profile from '../assets/images/profile.jpg';
import ListTransaction from '../components/ListTransaction';
import MainHeader from '../components/MainHeader';
import http from '../helpers/http';
import rupiah from '../helpers/rupiah';
import {REACT_APP_API_URL as API_URL} from '@env';
import {
  historyTransaction,
  newHistoryTransaction,
  pageInfoHistoryTransaction,
} from '../redux/actions/transaction';

const Home = () => {
  const navigation = useNavigation();
  const [listRefresh, setListRefresh] = useState(false);
  const historyTransactionData = useSelector(
    state => state.transaction.history,
  );
  const nextPage = useSelector(state => state.transaction.pageInfoTransaction);
  const profileInfo = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const balanceUser = rupiah(profileInfo.balance);
  const dispatch = useDispatch();

  const fetchNewData = async () => {
    try {
      setListRefresh(true);
      const oldData = historyTransactionData;
      const response = await http(token).get(`${nextPage.nextLink}`);
      const resultResponse = response.data.results;
      dispatch(pageInfoHistoryTransaction(response.data.pageInfo));
      const newData = [...oldData, ...resultResponse];
      dispatch(newHistoryTransaction(newData));
      setListRefresh(false);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const nextData = async () => {
    const oldData = historyTransactionData;
    try {
      const response = await http(token).get(`${nextPage.nextLink}`);
      const resultResponse = response.data.results;
      dispatch(pageInfoHistoryTransaction(response.data.pageInfo));
      const newData = [...oldData, ...resultResponse];
      dispatch(newHistoryTransaction(newData));
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  console.log(historyTransactionData, '<<<<<<<<<<<<<<<<<<< ini history');

  useEffect(() => {
    dispatch(historyTransaction(token));
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#00D16C" />
      <MainHeader>
        <View style={style.row}>
          {profileInfo.picture === null ? (
            <Image source={profile} style={style.photoProfile} />
          ) : (
            <Image
              source={{uri: `${API_URL}/upload/profile/${profileInfo.picture}`}}
              style={style.photoProfile}
            />
          )}
          <View style={style.rowBalance}>
            <Text style={style.textBalance}>Balance</Text>
            <Text style={style.textAmount}>Rp. {balanceUser}</Text>
          </View>
          <Pressable
            android_ripple={{color: 'black', radius: 30, borderless: true}}>
            <Icon name="bell" style={style.iconBell} />
          </Pressable>
        </View>
      </MainHeader>
      <View style={style.mainBody}>
        <View style={style.rowBtn}>
          <TouchableOpacity
            style={style.btnTransfer}
            onPress={() => navigation.navigate('Search')}>
            <Icon name="arrow-up" style={style.iconPlus} />
            <Text style={style.textBtn}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnTransfer}
            onPress={() => navigation.navigate('TopUp')}>
            <Icon name="plus" style={style.iconPlus} />
            <Text style={style.textBtn}>Top Up</Text>
          </TouchableOpacity>
        </View>
        <View style={style.rowText}>
          <Text style={style.textBtn}>Transaction History</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
            <Text style={style.textSeeAll}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.flatListWrapper}>
        {historyTransactionData === 'No transactions' ? (
          <View />
        ) : (
          <FlatList
            data={historyTransactionData}
            keyExtractor={(item, index) => String(item.id)}
            renderItem={({item}) => {
              return (
                <ListTransaction
                  id={item.id}
                  name={item.name}
                  amount={item.amount}
                  isTransfer={item.userAs}
                  picture={item.picture}
                  createdAt={item.createdAt}
                />
              );
            }}
            refreshing={listRefresh}
            onRefresh={fetchNewData}
            onEndReached={nextData}
            onEndReachedThreshold={0.5}
            // ListFooterComponent={<LoadMore nextLink={nextPage.nextLink} />}
          />
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  photoProfile: {
    height: 52,
    width: 52,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 20,
  },
  mainHeader: {
    height: 140,
    width: '100%',
    backgroundColor: '#00D16C',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  mainBody: {
    paddingBottom: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
  },
  rowBalance: {
    flex: 1,
  },
  textBalance: {
    fontSize: 14,
    color: '#88888F',
  },
  textAmount: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  iconBell: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  rowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  btnTransfer: {
    width: 152,
    height: 57,
    backgroundColor: '#E5E8ED',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  iconPlus: {
    fontSize: 18,
    color: '#608DE2',
    marginRight: 10,
    fontWeight: 'bold',
  },
  textBtn: {
    color: '#514F5B',
    fontWeight: 'bold',
  },
  rowText: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  textSeeAll: {
    fontSize: 14,
    color: '#00D16C',
  },
  flatListWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
