// ===== Pin Field
// import all modules
import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

function EmailField(props) {
  return (
    <Fragment>
      <SmoothPinCodeInput
        codeLength={6}
        placeholder="_"
        cellStyle={styles.input}
        cellStyleFocused={styles.input}
        onTextChange={props.onChangeText}
        value={props.value}
        cellSpacing={10}
      />
    </Fragment>
  );
}

export default EmailField;

const styles = StyleSheet.create({
  input: {
    borderColor: '#60E3A3',
    borderWidth: 1,
    borderStyle: 'solid',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
