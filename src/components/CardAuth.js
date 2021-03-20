// ===== CardHeader
// import all modules
import React, {Fragment} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

function CardAuth(props) {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.card}>{props.children}</View>
      </View>
    </Fragment>
  );
}

export default CardAuth;

const styles = StyleSheet.create({
  container: {
    minHeight: (75 / 100) * Dimensions.get('screen').height,
    backgroundColor: '#FAFCFF',
    width: Dimensions.get('screen').width,
  },
  card: {
    paddingVertical: 45,
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
});
