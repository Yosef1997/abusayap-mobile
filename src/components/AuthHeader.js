// ===== AuthHeader
// import all modules
import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

function AuthHeader(params) {
  return (
    <Fragment>
      <View style={styles.header}>
        <Text style={styles.title}>Abusayap</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    height: (25 / 100) * Dimensions.get('screen').height,
    backgroundColor: '#FAFCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    color: '#00D16C',
    fontWeight: 'bold',
  },
});

export default AuthHeader;
