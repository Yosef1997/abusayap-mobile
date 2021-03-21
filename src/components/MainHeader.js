import React from 'react';
import {View, StyleSheet} from 'react-native';

const MainHeader = ({children}) => {
  return <View style={style.mainHeader}>{children}</View>;
};

const style = StyleSheet.create({
  mainHeader: {
    width: '100%',
    backgroundColor: '#00D16C',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});

export default MainHeader;
