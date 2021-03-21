// ===== Container
// import all modules
import React, {Fragment} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

function Container(props) {
  return (
    <Fragment>
      <View style={styles.container(props.width)}>{props.children}</View>
    </Fragment>
  );
}

export default Container;

const styles = StyleSheet.create({
  container: function (value) {
    return {
      width: (value / 100) * Dimensions.get('screen').width,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      marginBottom: 0,
    };
  },
});
