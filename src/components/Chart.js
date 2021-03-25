import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackedBarChart} from 'react-native-svg-charts';

export default class Chart extends Component {
  render() {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [
      {
        expense: 2000,
        income: 1920,
      },
      {
        expense: 1600,
        income: 1440,
      },
      {
        expense: 640,
        income: 960,
      },
      {
        expense: 3320,
        income: 480,
      },
      {
        expense: 3320,
        income: 480,
      },
      {
        expense: 3320,
        income: 480,
      },
      {
        expense: 3320,
        income: 480,
      },
    ];
    const colors = ['#9DA6B5', '#00D16C'];
    const keys = ['expense', 'income'];
    return (
      <>
        <StackedBarChart
          style={{height: 250}}
          keys={keys}
          colors={colors}
          data={data}
          showGrid={false}
          contentInset={{top: 30, bottom: 10}}
        />
        <View style={styles.wrapper}>
          {labels.map((item, index) => {
            return <Text style={styles.label}>{item}</Text>;
          })}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  label: {
    marginLeft: -5,
  },
});
