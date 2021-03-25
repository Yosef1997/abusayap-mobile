import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PinField from '../components/PinField';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {
  sendAmount,
  newHistoryTransaction,
  historyTransaction,
} from '../redux/actions/transaction';
import {updateProfile} from '../redux/actions/auth';
import http from '../helpers/http';

class PinConfirm extends Component {
  state = {
    pin: '',
    messageRes: '',
    isLoading: false,
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

  sendAmountFix = async () => {
    try {
      this.setState({isLoading: true});
      const form = new URLSearchParams();
      form.append('idReceiver', this.props.transaction.contactFocus.id);
      form.append('amount', this.props.transaction.transactionInfo.amount);
      form.append('notes', this.props.transaction.transactionInfo.note);
      form.append('status', 'transfer');
      form.append('dateTransaction', new Date());
      form.append('pin', this.state.pin);
      await http(this.props.profile.token).post('/transaction', form);
      const profile = await http(this.props.profile.token).get(
        `/user/${this.props.profile.user.id}`,
      );
      const historyTrans = await http(this.props.profile.token).get(
        '/transaction/history?search=&page=1&limit=4&offset=0&sort=createdAt&order=DESC',
      );
      this.props.newHistoryTransaction(
        historyTrans.data.results,
        historyTrans.data.pageInfo,
      );
      this.props.updateProfile(profile.data.results);
      this.setState({isLoading: false});
      this.props.navigation.navigate('Result');
    } catch (err) {
      this.setState({messageRes: err.response.data.message});
      this.setState({isLoading: false});
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <Text style={styles.title}>Enter PIN to Transfer</Text>
        <Text style={styles.info}>
          Enter your 6 digits PIN for confirmation to{'\n'}continue transferring
          money.
        </Text>
        {this.state.messageRes !== '' && (
          <Text style={styles.info}>{this.state.messageRes}</Text>
        )}
        <View style={styles.control}>
          <PinField value={this.state.pin} onChangeText={this.handlePin} />
        </View>
        <View style={styles.btn}>
          {this.state.isLoading === true ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Button onPress={() => this.sendAmountFix()}>Transfer Now</Button>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4D4B57',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  info: {
    color: '#7A7886',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  control: {
    marginBottom: 30,
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    marginHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  transaction: state.transaction,
  profile: state.auth,
});
const mapDispatchToProps = {sendAmount, updateProfile, newHistoryTransaction};
export default connect(mapStateToProps, mapDispatchToProps)(PinConfirm);
