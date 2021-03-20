import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ButtonProfile extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00D16C',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
