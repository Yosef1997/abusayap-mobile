import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fafcff',
  backgroundGradientTo: '#fafcff',
  color: (opacity = 1) => `rgba(143, 143, 143, ${opacity})`,
  strokeWidth: 5, // optional, default 3
  useShadowColorFromDataset: false, // optional
};
const data = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  data: [
    [60, 60, 60],
    [30, 30, 60],
    [30, 30, 60],
    [30, 30, 60],
    [30, 30, 60],
    [30, 30, 60],
  ],
  barColors: ['red', 'yellow', '#a4b0be'],
};

export default class Chart extends Component {
  render() {
    return (
      <StackedBarChart
        // style={graphStyle}
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        withHorizontalLabels={false}
        showLegend={false}
      />
    );
  }
}
