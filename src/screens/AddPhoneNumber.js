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
import InputPhone from '../components/InputPhone';
import Button from '../components/ButtonProfile';
import {connect} from 'react-redux';
import {updateUser} from '../redux/actions/UpdateProfile';

class AddPhoneNumber extends Component {
  state = {
    phoneNumber: '',
  };
  doUpdatePhone = async () => {
    const {phoneNumber} = this.state;
    await this.props.updateUser(
      this.props.auth.token,
      this.props.auth.user.id,
      {phoneNumber: phoneNumber},
    );
    this.props.navigation.navigate('PersonalInfo');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <View style={styles.row1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PersonalInfo')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.textheader}>Add Phone Number</Text>
        </View>
        <Text style={styles.text}>
          Add at least one phone number for the transfer{'\n'}ID so you can
          start transfering your money to{'\n'}another user.
        </Text>
        <InputPhone
          onChangeText={phoneNumber => this.setState({phoneNumber})}
        />
        <Button label="Submit" onPress={this.doUpdatePhone} />
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

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoneNumber);
