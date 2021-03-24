// ===== Register
// import all modules
import React, {Fragment, Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';
import UsernameField from '../components/UsernameField';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {signup} from '../redux/actions/auth';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    messageUsername: "Username can't be empty",
    messageEmail: "Email can't be empty",
    messagePassword: "Password can't be empty",
    type: 'warning',
  };
  doRegister = async () => {
    const {username, email, password} = this.state;
    console.log(username, email, password);
    try {
      await this.props.signup(username, email, password);
      if (!this.props.auth.authMessage && !this.props.auth.errorMessage) {
        this.props.navigation.navigate('CreatePin');
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleInput = (name, value) => {
    if (name === 'username') {
      if (!value) {
        this.setState({
          messageUsername: "Username can't be empty",
          type: 'warning',
        });
      } else {
        this.setState({
          messageUsername: null,
          type: 'warning',
        });
      }
    }
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

    if (name === 'email') {
      const isEmail = value.match(/[^@$a-z0-9.]/gi);
      if (!value) {
        this.setState({
          messageEmail: "Form can't be empty",
          type: 'warning',
        });
      } else if (
        isEmail ||
        !value.match(/@\b/g) ||
        value.match(/\s/) ||
        !value.split('@').pop().includes('.')
      ) {
        this.setState({
          messageEmail: 'Invalid Email',
          type: 'warning',
        });
      } else {
        this.setState({
          messageEmail: null,
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
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>
                  Create your account to access Abusayap.
                </Text>
              </View>
              <View style={styles.form}>
                <View style={styles.control}>
                  <UsernameField
                    placeholder="Enter your username"
                    onChangeText={username =>
                      this.handleInput('username', username)
                    }
                  />
                  {this.state.messageUsername && (
                    <Text style={[styles.alert, styles[this.state.type]]}>
                      {this.state.messageUsername}
                    </Text>
                  )}
                </View>
                <View style={styles.control}>
                  <EmailField
                    placeholder="Enter your email"
                    onChangeText={email => this.handleInput('email', email)}
                  />
                  {this.state.messageEmail && (
                    <Text style={[styles.alert, styles[this.state.type]]}>
                      {this.state.messageEmail}
                    </Text>
                  )}
                </View>
                <View style={styles.control}>
                  <PasswordField
                    placeholder="Enter your password"
                    onChangeText={password =>
                      this.handleInput('password', password)
                    }
                  />
                  {this.state.messagePassword && (
                    <Text style={[styles.alert, styles[this.state.type]]}>
                      {this.state.messagePassword}
                    </Text>
                  )}
                  {(this.props.auth.authMessage ||
                    this.props.auth.errorMessage) && (
                    <Text
                      style={[
                        styles.alert,
                        styles.alertSubmit,
                        styles[this.props.auth.alertType],
                      ]}>
                      {this.props.auth.authMessage ||
                        this.props.auth.errorMessage}
                    </Text>
                  )}
                </View>
                <View style={styles.control}>
                  {this.props.auth.loading ? (
                    <ActivityIndicator color="#00D16C" size="large" />
                  ) : (
                    <Button
                      disabled={
                        !this.state.messagePassword &&
                        !this.state.messagePasswordConfirm &&
                        !this.state.messageUsername
                          ? false
                          : true
                      }
                      onPress={this.doRegister}>
                      Sign Up
                    </Button>
                  )}
                </View>
              </View>
              <TouchableOpacity
                style={styles.footer}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.textFoot}>
                  Already have an account? Let’s{' '}
                  <Text style={styles.link}>Sign In</Text>
                </Text>
              </TouchableOpacity>
            </Container>
          </CardAuth>
        </ScrollView>
      </Fragment>
    );
  }
}

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
  form: {},
  control: {
    marginBottom: 30,
  },
  footer: {
    marginTop: 15,
  },
  textFoot: {
    textAlign: 'center',
  },
  link: {
    color: '#00D16C',
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

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {signup};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
