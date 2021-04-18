/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  FlatList,
  Modal,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ListTransaction from '../components/ListTransaction';
import http from '../helpers/http';
import IconSort from 'react-native-vector-icons/MaterialCommunityIcons';
import LoadMore from '../components/LoadMore';

const History = () => {
  const [showModal, setShowModal] = useState(false);
  const [firstDate, setFirstDate] = useState(true);
  const [secondDate, setSecondDate] = useState(false);
  const [dateFirstVal, setDateFirstVal] = useState('');
  const [dateSecondVal, setDateSecondVal] = useState('');
  const [listRefresh, setListRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterBy, setFilterBy] = useState(null);
  const [sort, setSort] = useState('DESC');
  const [switcherSort, setSwitcherSort] = useState(false);
  const [nextPage, setNextPage] = useState('');
  const [historyTransaction, setHistoryTransaction] = useState([]);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const btnActive = data => {
    if (data === 'first') {
      setFirstDate(true);
      setSecondDate(false);
    } else if (data === 'second') {
      setSecondDate(true);
      setFirstDate(false);
    }
  };

  const setDateValue = date => {
    const dateParse = date.split('/');
    const dateFinnaly = dateParse.join('-');
    if (firstDate === true) {
      setDateFirstVal(dateFinnaly);
    } else if (secondDate === true) {
      setDateSecondVal(dateFinnaly);
    }
  };

  const handleBtnFilter = btnFilter => {
    if (filterBy === btnFilter) {
      setFilterBy('');
    } else {
      setFilterBy(btnFilter);
    }
  };

  const handleBtnSort = switcher => {
    if (sort === 'DESC') {
      setSort('ASC');
    } else if (sort === 'ASC') {
      setSort('DESC');
    }
  };

  const fetchNewData = async () => {
    try {
      setListRefresh(true);
      const oldData = historyTransaction;
      const response = await http(token).get(`${nextPage.nextLink}`);
      const resultResponse = response.data.results;
      setNextPage(response.data.pageInfo);
      const newData = [...oldData, ...resultResponse];
      setHistoryTransaction(newData);
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
      setNextPage(response.data.pageInfo);
      const newData = [...oldData, ...resultResponse];
      setHistoryTransaction(newData);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const getDataByCondition = async () => {
    setIsLoading(true);
    const response = await http(token).get(
      `/transaction/history?search=&page=1&limit=6&offset=0&sort=createdAt&order=${sort}&filter=${filterBy}&dateMin=${dateFirstVal}&dateMax=${dateSecondVal}`,
    );
    setHistoryTransaction(response.data.results);
    setNextPage(response.data.pageInfo);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataByCondition();
  }, [sort, filterBy, dateFirstVal, dateSecondVal]);

  return (
    <>
      <Modal
        transparent={true}
        visible={showModal}
        style={{flex: 1}}
        animationType="slide">
        <View style={style.parentModal}>
          <View style={style.bodyModal}>
            <DatePicker
              options={{
                textHeaderColor: '#3A3D42',
                textDefaultColor: '#3A3D42',
                selectedTextColor: '#fff',
                mainColor: '#00D16C',
                textSecondaryColor: '#3A3D42',
                borderColor: 'rgba(99, 121, 244, 0.2)',
              }}
              mode="calendar"
              minuteInterval={30}
              style={{borderRadius: 20}}
              onDateChange={date => setDateValue(date)}
            />
            <View style={style.rowDate}>
              <TouchableOpacity
                onPress={() => btnActive('first')}
                style={
                  firstDate === true
                    ? style.btnRangeDateActive
                    : style.btnRangeDate
                }>
                <Text style={style.textFrom}>From</Text>
                <Text style={style.textDate}>{dateFirstVal}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => btnActive('second')}
                style={
                  secondDate === true
                    ? style.btnRangeDateActive
                    : style.btnRangeDate
                }>
                <Text style={style.textFrom}>To</Text>
                <Text style={style.textDate}>{dateSecondVal}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={style.btnApply}
              onPress={() => setShowModal(false)}>
              <Text style={style.textAppy}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{flex: 1}}>
        <View style={style.flatListWrapper}>
          {isLoading === true ? (
            <View style={style.indicatorWrapper}>
              <ActivityIndicator size="large" color="black" />
            </View>
          ) : (
            <FlatList
              data={historyTransaction}
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
              onEndReachedThreshold={1}
            />
          )}
        </View>
        <View style={style.rowFilter}>
          <TouchableOpacity
            style={filterBy === 'sender' ? style.btnActive : style.btn}
            onPress={() => handleBtnFilter('sender')}>
            <Icon name="arrow-up" style={style.arrowUp} />
          </TouchableOpacity>
          <TouchableOpacity
            style={filterBy === 'receiver' ? style.btnActive : style.btn}
            onPress={() => handleBtnFilter('receiver')}>
            <Icon name="arrow-down" style={style.arrowDown} />
          </TouchableOpacity>
          <TouchableOpacity style={style.btn} onPress={() => handleBtnSort()}>
            {sort === 'ASC' ? (
              <IconSort name="sort-ascending" style={style.arrowDown} />
            ) : (
              <IconSort name="sort-descending" style={style.arrowDownAsc} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnDate}
            onPress={() => setShowModal(true)}>
            <Text style={style.textFilterDate}>Filter By Date</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  flatListWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  indicatorWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  btn: {
    height: 56,
    width: 56,
    elevation: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  btnActive: {
    height: 56,
    width: 56,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  btnDate: {
    elevation: 3,
    height: 56,
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowUp: {
    color: '#FF5B37',
    fontSize: 25,
  },
  arrowDown: {
    color: '#1EC15F',
    fontSize: 25,
  },
  arrowDownAsc: {
    color: '#FF5B37',
    fontSize: 25,
  },
  textFilterDate: {
    color: '#00D16C',
    fontSize: 15,
    fontWeight: 'bold',
  },
  parentModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // position: 'absolute',
  },
  bodyModal: {
    backgroundColor: 'white',
    height: '97%',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    marginTop: 320,
  },
  rowDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnRangeDate: {
    flex: 1,
    padding: 10,
  },
  btnRangeDateActive: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    padding: 10,
  },
  textDate: {
    color: '#4D4B57',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btnApply: {
    height: 56,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00D16C',
    marginTop: 25,
  },
  textAppy: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  textFrom: {
    color: '#7A7886',
    fontSize: 14,
  },
});

export default History;
