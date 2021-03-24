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
import Card from '../components/CardPersonalInfo';
import {connect} from 'react-redux';
import {updateUser} from '../redux/actions/UpdateProfile';

class MangePhoneNumber extends Component {
  state = {
    phoneNumber: this.props.auth.user.phoneNumber,
  };
  deletePhone = async () => {
    await this.props.updateUser(
      this.props.auth.token,
      this.props.auth.user.id,
      {phoneNumber: this.state.phoneNumber},
      this.props.navigation.navigate('PersonalInfo'),
    );
  };
  render() {
    const {user} = this.props.auth;
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <View style={styles.row1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PersonalInfo')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.textheader}>Manage Phone Number</Text>
        </View>
        <Text style={styles.text}>
          You can only delete the phone number and then{'\n'}you must add
          another phone number.
        </Text>
        <Card
          label="Primary"
          text={`+62 ${user.phoneNumber}`}
          textPersonal={styles.textPersonal}
          name="trash"
          size={25}
          color="#BBBBBE"
          onPress={this.deletePhone}
        />
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
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'normal',
    marginTop: 40,
    marginBottom: 20,
  },
  textPersonal: {
    color: '#514F5B',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(MangePhoneNumber);
