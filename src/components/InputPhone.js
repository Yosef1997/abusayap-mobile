import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class InputPhone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="phone" size={20} color="#A9A9A9" />
        <Text style={styles.codeArea}>+62</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="Enter your phone number"
          onChangeText={this.props.onChangeText}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: '#00D16C',
    alignItems: 'center',
    marginBottom: 50,
  },
  codeArea: {
    color: '#3A3D42',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 15,
  },
  input: {
    color: '#3A3D42',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 15,
    flex: 1,
  },
});
