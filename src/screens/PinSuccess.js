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
import Failed from '../assets/images/failed.svg';

class CreatePin extends Component {
  state = {
    pin: '',
  };

  handlePin = value => {
    this.setState({
      pin: value,
    });
  };

  handlePush = screen => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <Fragment>
        <ScrollView>
          <AuthHeader big />
          <CardAuth big>
            <Container width={90}>
              <View style={styles.logo}>
                {this.props.route.params.success ? <Success /> : <Failed />}
              </View>
              <View style={styles.header}>
                <Text style={styles.title}>
                  {this.props.route.params.title}
                </Text>
                <Text style={styles.subtitle}>
                  {this.props.route.params.message}
                </Text>
              </View>
              <View style={styles.control}>
                {this.props.route.params.success ? (
                  <Button onPress={() => this.handlePush('Login')}>
                    Login Now
                  </Button>
                ) : (
                  <Button onPress={() => this.handlePush('CreatePin')}>
                    Retry Now
                  </Button>
                )}
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
