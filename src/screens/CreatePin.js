// ===== Register
// import all modules
import React, {Fragment, Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import PinField from '../components/PinField';
import Button from '../components/Button';
import {Formik} from 'formik';

import http from '../helpers/http';

class CreatePin extends Component {
  state = {
    pin: '',
    isDisabled: true,
    loading: false,
  };

  handlePin = value => {
    if (value.match(/[^0-9]/gi) !== null || value.length < 6) {
      this.setState({
        isDisabled: true,
      });
    } else {
      this.setState({
        isDisabled: false,
      });
    }
    this.setState({
      pin: value,
    });
  };

  handleSubmit = async () => {
    this.setState({
      loading: true,
    });
    try {
      const data = new URLSearchParams();
      data.append('pin', this.state.pin);
      await http(this.props.auth.token).patch(
        '/auth/pin/' + this.props.auth.user.id,
        data,
      );
      this.setState({
        loading: true,
      });
      this.props.navigation.navigate('PinSuccess', {
        title: 'PIN Successfully Created',
        success: true,
        message:
          'Your PIN was successfully created and you can now access all the features in Abusayap. Login to your new account and start exploring',
      });
    } catch (err) {
      console.log(err.response.data);
      this.setState({
        loading: true,
      });
      this.props.navigation.navigate('PinSuccess', {
        title: 'Failed to Create PIN',
        success: false,
        message: 'Failed to create PIN, please try again',
      });
    }
  };

  render() {
    return (
      <Fragment>
        <ScrollView>
          <AuthHeader />
          <CardAuth>
            <Container width={90}>
              <View style={styles.header}>
                <Text style={styles.title}>Create Security PIN</Text>
                <Text style={styles.subtitle}>
                  Create a PIN that’s contain 6 digits number for security
                  purpose in Abusayap.
                </Text>
              </View>
              <View style={styles.form}>
                <View style={styles.control}>
                  <PinField
                    value={this.state.pin}
                    onChangeText={this.handlePin}
                  />
                </View>
                <View style={[styles.control, styles.controlMargin]}>
                  {!this.state.isDisabled ? (
                    this.state.loading ? (
                      <ActivityIndicator color="#00D16C" size="large" />
                    ) : (
                      <Button onPress={() => this.handleSubmit()}>
                        Confirm
                      </Button>
                    )
                  ) : (
                    <Button disabled>Confirm</Button>
                  )}
                </View>
              </View>
            </Container>
          </CardAuth>
        </ScrollView>
      </Fragment>
    );
  }
}

const mapStateToProps = states => ({
  auth: states.auth,
});

export default connect(mapStateToProps, null)(CreatePin);

const styles = StyleSheet.create({
  title: {
    color: '#6B6E71',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    color: '#989A9C',
    fontSize: 16,
    textAlign: 'center',
    width: '89%',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  controlMargin: {
    marginTop: 120,
  },
  control: {
    marginBottom: 30,
    alignItems: 'center',
  },
});
