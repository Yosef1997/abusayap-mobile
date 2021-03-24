import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const LoadMore = props => {
  return (
    <>
      {props.nextLink !== null ? (
        <View style={style.row}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View />
      )}
    </>
  );
};

const style = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
});

export default LoadMore;
