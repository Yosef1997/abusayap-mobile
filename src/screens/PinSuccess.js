// ===== Register
// import all modules
import React, {Fragment, Component} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import Button from '../components/Button';

// import all assest
import Success from '../assets/images/success.svg';

class CreatePin extends Component {
  state = {
    pin: '',
  };

  handlePin = value => {
    this.setState({
      pin: value,
    });
  };

  render() {
    return (
      <Fragment>
        <ScrollView>
          <AuthHeader big />
          <CardAuth big>
            <Container width={90}>
              <View style={styles.logo}>
                <Success />
              </View>
              <View style={styles.header}>
                <Text style={styles.title}>PIN Successfully Created</Text>
                <Text style={styles.subtitle}>
                  Your PIN was successfully created and you can now access all
                  the features in Abusayap. Login to your new account and start
                  exploring!
                </Text>
              </View>
              <View style={styles.control}>
                <Button>Login Now</Button>
              </View>
            </Container>
          </CardAuth>
        </ScrollView>
      </Fragment>
    );
  }
}

export default CreatePin;

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
    width: '90%',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  controlMargin: {
    marginTop: 120,
  },
  control: {
    marginTop: 50,
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
