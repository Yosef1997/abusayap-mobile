import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileImg from '../components/UploadProfile';
import Card from '../components/CardProfile';

export default class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor="#fafcff" barStyle="dark-content" />
        <ScrollView style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="arrowleft" size={25} color="#000" />
          </TouchableOpacity>
          <ProfileImg />
          <Card
            label="Personal Information"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('PersonalInfo')}
          />
          <Card
            label="Change Password"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('ChangePass')}
          />
          <Card
            label="Change Pin"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('ChangePin')}
          />
          <Card label="Notification" name="arrowright" />
          <Card
            label="Logout"
            name="arrowright"
            onPress={() => this.props.navigation.navigate('Auth')}
          />
        </ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
});
