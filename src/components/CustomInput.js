/* eslint-disable react-hooks/exhaustive-deps */
// ===== Email Field
// import all modules
import React, {Fragment, useEffect, useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {getContact} from '../redux/actions/transaction';

function UsernameField(props) {
  const [asc, setAsc] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (asc === true) {
      dispatch(getContact(token, textSearch, 'ASC'));
    } else if (asc === false) {
      dispatch(getContact(token, textSearch, 'DESC'));
    }
  }, [textSearch, asc]);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Icon name="search" size={20} color="#60E3A3" />
        <TextInput
          style={styles.textField}
          onChangeText={value => setTextSearch(value)}
        />
        {asc === true ? (
          <TouchableOpacity onPress={() => setAsc(!asc)}>
            <Icon name="sort-amount-desc" size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setAsc(!asc)}>
            <Icon name="sort-amount-asc" size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default UsernameField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00D16C',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  input: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icon: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
  },
  textField: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 18,
  },
});
