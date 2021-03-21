// ===== Password Field
// import all modules
import React, {Fragment, useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function PasswordField(props) {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <View style={styles.input}>
        <View style={styles.icon}>
          <Icon
            name="lock-closed-outline"
            size={25}
            color="#60E3A3"
            style={styles.email}
          />
        </View>
        <View style={styles.textField}>
          <TextInput
            placeholder={props.placeholder}
            placeholderTextColor="#CBCBCB"
            keyboardType="default"
            value={props.value}
            onChangeText={props.onChangeText}
            style={styles.textInput}
            secureTextEntry={show ? false : true}
          />
        </View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShow(currentShow => !currentShow)}>
          {show ? (
            <Icon
              name="eye-outline"
              size={25}
              color="#60E3A3"
              style={styles.email}
            />
          ) : (
            <Icon
              name="eye-off-outline"
              size={25}
              color="#60E3A3"
              style={styles.email}
            />
          )}
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

export default PasswordField;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#60E3A3',
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
