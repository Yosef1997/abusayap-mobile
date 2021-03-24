import React, {Component} from 'react';
import {Text, View, ScrollView, StatusBar, StyleSheet} from 'react-native';
import PinField from '../components/PinField';
import Button from '../components/Button';
import Chart from '../components/Chart';

export default class PinConfirm extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <Text style={styles.title}>Enter PIN to Transfer</Text>
        <Text style={styles.info}>
          Enter your 6 digits PIN for confirmation to{'\n'}continue transferring
          money.
        </Text>
        <View style={styles.control}>
          <PinField />
        </View>
        <View style={styles.btn}>
          <Button>Transfer Now</Button>
        </View>
        <View>
          <Chart />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4D4B57',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  info: {
    color: '#7A7886',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  control: {
    marginBottom: 30,
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    marginHorizontal: 16,
  },
});
