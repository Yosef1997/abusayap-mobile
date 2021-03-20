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

class Login extends Component {
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
                  <EmailField placeholder="Enter your email" />
                </View>
                <View style={styles.control}>
                  <PasswordField placeholder="Enter your password" />
                </View>
                <TouchableOpacity style={styles.control}>
                  <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.control}>
                  <Button
                    onPress={() => this.props.navigation.navigate('Register')}>
                    Login
                  </Button>
                </View>
              </View>
              <View style={styles.footer}>
                <Text style={styles.textFoot}>
                  Don’t have an account? Let’s{' '}
                  <Text style={styles.link}>Sign Up</Text>
                </Text>
              </View>
            </Container>
          </CardAuth>
        </ScrollView>
      </Fragment>
    );
  }
}

export default Login;

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
