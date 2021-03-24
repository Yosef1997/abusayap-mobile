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

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import PasswordField from '../components/PasswordField';
import Button from '../components/Button';

class ResetPassword extends Component {
  state = {
    messagePassword: "Password can't be empty",
    messagePasswordConfirm: "Password confirm can't be empty",
    messageSubmit: null,
    password: null,
    passwordConfirm: null,
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
      formData.append('password', this.state.password);
      const {data} = await http(null).patch(
        'auth/resetPasswordMobile/' + this.props.auth.user.id,
        formData,
      );
      this.setState({
        loading: false,
      });
      this.setState({
        messageSubmit: data.message,
        submit: true,
        type: 'primary',
      });

      setTimeout(() => {
        this.props.navigation.navigate('Login');
      }, 2000);
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
      });
      this.setState({
        messageSubmit: err.response.data.message,
        submit: true,
        type: 'warning',
      });
    }
    console.log(this.props.auth.user.id);
  };

  handleInput = (name, value) => {
    if (name === 'password') {
      if (!value) {
        this.setState({
          messagePassword: "Password can't be empty",
          type: 'warning',
        });
      } else {
        this.setState({
          messagePassword: null,
          type: 'warning',
        });
      }
    }

    if (name === 'passwordConfirm') {
      if (!value) {
        this.setState({
          messagePasswordConfirm: "Form can't be empty",
          type: 'warning',
        });
      } else if (this.state.password !== value) {
        this.setState({
          messagePasswordConfirm: "Password doesn't match",
          type: 'warning',
        });
      } else {
        this.setState({
          messagePasswordConfirm: null,
          type: 'warning',
        });
      }
    }

    this.setState({
      [name]: value,
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
                  Create and confirm your new password so you can login to
                  Abusayap.
                </Text>
              </View>
              <View style={styles.form}>
                <View style={styles.control}>
                  <PasswordField
                    placeholder="Enter your new password"
                    value={this.state.password}
                    onChangeText={value => this.handleInput('password', value)}
                  />
                  {this.state.messagePassword && (
                    <Text style={[styles.alert, styles[this.state.type]]}>
                      {this.state.messagePassword}
                    </Text>
                  )}
                </View>
                <View style={styles.control}>
                  <PasswordField
                    placeholder="Confirm your new password"
                    value={this.state.passwordConfirm}
                    onChangeText={value =>
                      this.handleInput('passwordConfirm', value)
                    }
                  />
                  {this.state.messagePasswordConfirm && (
                    <Text style={[styles.alert, styles[this.state.type]]}>
                      {this.state.messagePasswordConfirm}
                    </Text>
                  )}
                  {this.state.messageSubmit && (
                    <Text style={[styles.alert, styles[this.state.type]]}>
                      {this.state.messageSubmit}
                    </Text>
                  )}
                </View>
                <View style={[styles.control, styles.controlMargin]}>
                  {this.state.loading ? (
                    <ActivityIndicator color="#00D16C" size="large" />
                  ) : (
                    <Button
                      disabled={
                        !this.state.messagePassword &&
                        !this.state.messagePasswordConfirm
                          ? false
                          : true
                      }
                      onPress={this.handleSubmit}>
                      Reset Password
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

const mapStateToProps = states => ({
  auth: states.auth,
});

export default connect(mapStateToProps, null)(ResetPassword);

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
    marginTop: 40,
  },
  control: {
    marginBottom: 30,
  },
  alertSubmit: {
    marginTop: 35,
    textAlign: 'center',
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
