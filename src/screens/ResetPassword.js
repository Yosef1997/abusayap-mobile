// ===== Register
// import all modules
import React, {Fragment, Component} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import PasswordField from '../components/PasswordField';
import Button from '../components/Button';

class ResetPassword extends Component {
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
                  <PasswordField placeholder="Enter your new password" />
                </View>
                <View style={styles.control}>
                  <PasswordField placeholder="Confirm your new password" />
                </View>
                <View style={[styles.control, styles.controlMargin]}>
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate('ResetPassword')
                    }>
                    Reset Password
                  </Button>
                </View>
              </View>
            </Container>
          </CardAuth>
        </ScrollView>
      </Fragment>
    );
  }
}

export default ResetPassword;

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
});
