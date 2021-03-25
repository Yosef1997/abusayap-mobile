import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image source={this.props.source} style={styles.img} />
          <View style={styles.row}>
            <Icon name="edit-2" size={13} color="#7A7886" />
            <Text style={styles.text}>Edit</Text>
          </View>
        </TouchableOpacity>
        {this.props.loading && (
          <ActivityIndicator size="large" color style={styles.loading} />
        )}
        {this.props.error && (
          <Text style={styles.textErro}>{this.props.error}</Text>
        )}
        {this.props.success && (
          <Text style={styles.success}>{this.props.success}</Text>
        )}
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.number}>+62{this.props.phone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: '#7A7886',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },
  textErro: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },
  loading: {
    margin: 10,
  },
  success: {
    color: '#60E3A3',
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 10,
  },
  name: {
    color: '#4D4B57',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  number: {
    color: '#7A7886',
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 10,
    marginBottom: 20,
  },
});
