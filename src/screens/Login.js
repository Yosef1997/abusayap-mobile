// ===== Register
// import all modules
import React, {Fragment, Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';
import Button from '../components/Button';

// Connect Redux
import {connect} from 'react-redux';
import {signin} from '../redux/actions/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  doLogin = async () => {
    const {email, password} = this.state;
    console.log(email, password);
    await this.props.signin(email, password);
    if (this.props.auth.token) {
      this.props.navigation.navigate('Home');
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
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>
                  Login to your existing account to access all the features in
                  Abusayap.
                </Text>
              </View>
              <View style={styles.form}>
                <View style={styles.control}>
                  <EmailField
                    placeholder="Enter your email"
                    onChangeText={email => this.setState({email})}
                  />
                </View>
                <View style={styles.control}>
                  <PasswordField
                    placeholder="Enter your password"
                    onChangeText={password => this.setState({password})}
                  />
                </View>
                <TouchableOpacity
                  style={styles.control}
                  onPress={() => this.props.navigation.navigate('Confirm')}>
                  <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.control}>
                  <Button onPress={this.doLogin}>Login</Button>
                </View>
              </View>
              <TouchableOpacity
                style={styles.footer}
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.textFoot}>
                  Don’t have an account? Let’s{' '}
                  <Text style={styles.link}>Sign Up</Text>
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
  forgot: {
    marginTop: 5,
    color: '#888B8E',
    textAlign: 'right',
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
});

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {signin};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
