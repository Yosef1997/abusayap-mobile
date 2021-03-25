// ===== Email Field
// import all modules
import React, {Fragment} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function AmountField(props) {
  return (
    <Fragment>
      <View style={styles.input}>
        <View style={styles.icon}>
          <Icon
            name="pencil-outline"
            size={25}
            color="#E8E9EC"
            style={styles.email}
          />
        </View>
        <View style={styles.textField}>
          <TextInput
            placeholder={props.placeholder}
            placeholderTextColor="#CBCBCB"
            keyboardType="email-address"
            style={styles.textInput}
            value={props.value}
            onChangeText={props.onChangeText}
          />
        </View>
      </View>
    </Fragment>
  );
}

export default AmountField;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#E8E9EC',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: 50,
    flexDirection: 'row',
  },
  icon: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
  },
  textField: {
    height: 50,
    flex: 9,
  },
  textInput: {
    height: 50,
  },
});
