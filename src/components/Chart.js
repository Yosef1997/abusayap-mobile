import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackedBarChart} from 'react-native-svg-charts';
import http from '../helpers/http';
import {connect} from 'react-redux';

class Chart extends Component {
  state = {
    day: [],
    amount: [],
  };
  componentDidMount() {
    this.fetchData();
  }

  async fetchData ()  {
    try {
      const {token} = this.props.auth;
      const response = await http(token).get('chart');
      await this.setState({
        day: response.data.results.map(item => item.day),
        amount: response.data.results.map(item => ({
          expense: item.asSender,
          income: item.asReceiver,
        })),
      });
      console.log(this.state.day);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const labels = this.state.day;
    const data = this.state.amount;
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

const mapStateToProps = props => ({
  auth: props.auth,
});

export default connect(mapStateToProps)(Chart);
