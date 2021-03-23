/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ListTransaction from '../components/ListTransaction';
import LoadMore from '../components/LoadMore';
import MainHeader from '../components/MainHeader';
import http from '../helpers/http';
import rupiah from '../helpers/rupiah';
import {
  newHistoryTransaction,
  pageInfoHistoryTransaction,
} from '../redux/actions/transaction';

const TransactionDetail = () => {
  const navigation = useNavigation();
  const historyTransaction = useSelector(state => state.transaction.history);
  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.auth.user);
  const [income, setIncome] = useState(null);
  const nextPage = useSelector(state => state.transaction.pageInfoTransaction);
  const [listRefresh, setListRefresh] = useState(false);
  const dispatch = useDispatch();

  const fetchNewData = async () => {
    try {
      setListRefresh(true);
      const oldData = historyTransaction;
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
    const oldData = historyTransaction;
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

  const getDetailIncome = async () => {
    const response = await http(token).get(
      `/transaction/amountTransaction/${profile.id}`,
    );
    setIncome(response.data.results[0]);
  };

  useEffect(() => {
    getDetailIncome();
  }, []);

  console.log(
    income,
    '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ini income',
  );

  return (
    <>
      <MainHeader>
        <View style={style.row}>
          <View style={style.rowIncomeExpense}>
            <Icon name="arrow-down" style={style.arrowDown} />
            <View>
              <Text style={style.textIncomeExpense}>Income</Text>
              <Text style={style.textAmount}>
                Rp. {income !== null && rupiah(income.income)}
              </Text>
            </View>
          </View>
          <View style={style.rowIncomeExpense}>
            <Icon name="arrow-up" style={style.arrowUp} />
            <View>
              <Text style={style.textIncomeExpense}>Expense</Text>
              <Text style={style.textAmount}>
                Rp. {income !== null && rupiah(income.expense)}
              </Text>
            </View>
          </View>
        </View>
      </MainHeader>
      <View style={style.mainBodyWrapper}>
        <Text style={style.title}>In This Week</Text>
        <View>
          <Text>Chart</Text>
        </View>
        <View style={style.rowTitle}>
          <Text style={style.title}>Transaction History</Text>
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <Text style={style.textSeeAll}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.flatListWrapper}>
        <FlatList
          data={historyTransaction}
          keyExtractor={(item, index) => String(index)}
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
          onEndReachedThreshold={1}
          ListFooterComponent={<LoadMore nextLink={nextPage.nextLink} />}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
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
  rowHeader: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  rowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowDown: {
    fontSize: 25,
    color: '#4CEDB3',
    marginRight: 10,
  },
  arrowUp: {
    fontSize: 25,
    color: '#FF5B37',
    marginHorizontal: 10,
  },
  rowBalance: {
    flex: 1,
  },
  textAmount: {
    fontSize: 18,
    color: '#F1F1F1',
    fontWeight: 'bold',
  },
  rowIncomeExpense: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIncomeExpense: {
    fontSize: 14,
    color: '#88888F',
  },
  mainBodyWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    color: '#514F5B',
    fontWeight: 'bold',
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

export default TransactionDetail;
