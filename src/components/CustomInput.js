// ===== Email Field
// import all modules
import React, {Fragment} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function UsernameField(props) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Icon name="search" size={25} color="#60E3A3" />
        <TextInput style={styles.textField} />
        <Icon name="sort-amount-desc" size={25} />
      </View>
    </View>
  );
}

export default UsernameField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00D16C',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  input: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icon: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
  },
  textField: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 18,
  },
});
