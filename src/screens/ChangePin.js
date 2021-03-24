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
import PinField from '../components/PinField';
import {connect} from 'react-redux';
import {updateUser} from '../redux/actions/UpdateProfile';

class ChangePin extends Component {
  state = {
    pin: '',
  };
  doChangePin = async () => {
    const {pin} = this.state;
    await this.props.updateUser(
      this.props.auth.token,
      this.props.auth.user.id,
      {pin: pin},
    );
    this.setState({pin: ''});
  };
  handlePin = value => {
    this.setState({
      pin: value,
    });
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <View style={styles.row1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.textheader}>Change Pin</Text>
        </View>
        <Text style={styles.text}>
          Type your new 6 digits security PIN to use in{'\n'}Abusayap.
        </Text>
        <View style={styles.control}>
          <PinField value={this.state.pin} onChangeText={this.handlePin} />
        </View>
        <Button label="Change Pin" onPress={this.doChangePin} />
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
  control: {
    alignItems: 'center',
    marginVertical: 50,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {updateUser};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePin);
