// ===== Register
// import all modules
import React, {Fragment, Component} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';

// import all components
import AuthHeader from '../components/AuthHeader';
import CardAuth from '../components/CardAuth';
import Container from '../components/Container';
import PinField from '../components/PinField';
import Button from '../components/Button';

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
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate('PinSuccess')
                    }>
                    Confirm
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
