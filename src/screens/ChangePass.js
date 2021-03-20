import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../components/ButtonProfile';

export default class ChangePass extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <View style={styles.row1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.textheader}>Change Password</Text>
        </View>
        <Text style={styles.text}>
          You must enter your current password and then{'\n'}type your new
          password twice.
        </Text>
        <Button label="Change Password" />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#00D16C',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 25,
  },
  textheader: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  text: {
    color: '#7A7886',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
    marginTop: 40,
    marginBottom: 20,
  },
});
