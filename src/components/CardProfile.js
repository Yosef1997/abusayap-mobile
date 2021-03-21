import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class index extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
          <Text style={styles.text}>{this.props.label}</Text>
          <Icon name={this.props.name} size={20} color="#7E7D84" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E8ED',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4D4B57',
  },
});
