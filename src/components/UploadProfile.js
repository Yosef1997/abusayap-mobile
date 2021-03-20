import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ProfilImg from '../assets/images/profile.jpg';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={ProfilImg} style={styles.img} />
          <View style={styles.row}>
            <Icon name="edit-2" size={13} color="#7A7886" />
            <Text style={styles.text}>Edit</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>Robert Chandler</Text>
        <Text style={styles.number}>+62 813-9387-7946</Text>
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
