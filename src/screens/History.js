import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import ListTransaction from '../components/ListTransaction';
import moment from 'moment';

const History = () => {
  const dateNow = moment(Date()).format('ll');
  const [showModal, setShowModal] = useState(false);
  const [firstDate, setFirstDate] = useState(true);
  const [secondDate, setSecondDate] = useState(false);
  const [dateFirstVal, setDateFirstVal] = useState(dateNow);
  const [dateSecondVal, setDateSecondVal] = useState(dateNow);
  const navigation = useNavigation();
  const historyTransaction = useSelector(state => state.transaction.history);

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
    if (firstDate === true) {
      setDateFirstVal(date);
    } else if (secondDate === true) {
      setDateSecondVal(date);
    }
  };

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
          <FlatList
            data={historyTransaction}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item}) => {
              return (
                <ListTransaction
                  id={item.id}
                  name={item.name}
                  amount={item.amount}
                  isTransfer={item.isTransfer}
                />
              );
            }}
          />
        </View>
        <View style={style.rowFilter}>
          <TouchableOpacity style={style.btn}>
            <Icon name="arrow-up" style={style.arrowUp} />
          </TouchableOpacity>
          <TouchableOpacity style={style.btn}>
            <Icon name="arrow-down" style={style.arrowDown} />
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
  textFilterDate: {
    color: '#00D16C',
    fontSize: 18,
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
