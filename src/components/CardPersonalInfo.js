import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class CardPersonalInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>{this.props.label}</Text>
          <Text style={this.props.textPersonal}>{this.props.text}</Text>
        </View>
        <TouchableOpacity onPress={this.props.onPress} style={styles.row}>
          <Text style={styles.manage}>{this.props.manage}</Text>
          <Icon
            name={this.props.name}
            size={this.props.size}
            color={this.props.color}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#7A7886',
    fontSize: 14,
    fontWeight: 'normal',
  },
  manage: {
    color: '#00D16C',
    fontSize: 14,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
});
