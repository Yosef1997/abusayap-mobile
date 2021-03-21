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
import UsernameField from '../components/UsernameField';
import Button from '../components/Button';

class Register extends Component {
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
                  <UsernameField placeholder="Enter your username" />
                </View>
                <View style={styles.control}>
                  <EmailField placeholder="Enter your email" />
                </View>
                <View style={styles.control}>
                  <PasswordField placeholder="Enter your password" />
                </View>
                <View style={styles.control}>
                  <Button>Sign Up</Button>
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

export default Register;

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
});
