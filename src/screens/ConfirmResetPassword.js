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
import http from '../helpers/http';

// import actions
import {setId} from '../redux/actions/auth';

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import EmailField from '../components/EmailField';
import Button from '../components/Button';

class ConfirmResetPassword extends Component {
  state = {
    message: "Email can't be empty",
    email: null,
    submit: false,
    loading: false,
    type: 'warning',
  };

  handleSubmit = async () => {
    this.setState({
      loading: true,
    });
    try {
      const formData = new URLSearchParams();
      formData.append('email', this.state.email);
      const {data} = await http(null).post(
        'auth/forgotPasswordMobile',
        formData,
      );
      this.props.setId(data.results.id);
      this.setState({
        loading: false,
      });
      this.setState({
        message: data.message,
        submit: true,
        type: 'primary',
      });
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
      });
      this.setState({
        message: err.response.data.message,
        submit: true,
        type: 'warning',
      });
    }
  };

  handleInput = value => {
    const isEmail = value.match(/[^@$a-z0-9.]/gi);

    if (!value) {
      this.setState({
        message: "Email can't be empty",
        submit: false,
        type: 'warning',
      });
    } else if (
      isEmail ||
      !value.match(/@\b/g) ||
      value.match(/\s/) ||
      !value.split('@').pop().includes('.')
    ) {
      this.setState({
        message: 'Invalid Email',
        submit: false,
        type: 'warning',
      });
    } else {
      this.setState({
        message: null,
        submit: true,
        type: 'warning',
      });
    }

    this.setState({
      email: value,
    });
  };

  render() {
    return (
      <Fragment>
        <ScrollView>
          <AuthHeader />
          <CardAuth>
            <Container width={90}>
              <View style={styles.header}>
                <Text style={styles.title}>Reset Password</Text>
                <Text style={styles.subtitle}>
                  Enter your Abusayap e-mail so we can send you a password reset
                  link.
                </Text>
              </View>
              <View style={styles.form}>
                <View style={styles.control}>
                  <EmailField
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChangeText={this.handleInput}
                  />
                  {this.state.message && (
                    <Text style={[styles.alert, styles[this.state.type]]}>
                      {this.state.message}
                    </Text>
                  )}
                </View>
                <View style={[styles.control, styles.controlMargin]}>
                  {this.state.loading ? (
                    <ActivityIndicator color="#00D16C" size="large" />
                  ) : (
                    <Button
                      disabled={!this.state.submit ? true : false}
                      onPress={this.handleSubmit}>
                      Confirm
                    </Button>
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

const mapDispatchToProps = {setId};

export default connect(null, mapDispatchToProps)(ConfirmResetPassword);

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
  },
  alert: {
    marginTop: 15,
  },
  primary: {
    color: '#00D16C',
  },
  warning: {
    color: '#FFC107',
  },
});
