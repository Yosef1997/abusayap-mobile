// ===== Amount
// import all modules
import React, {Component, Fragment} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import helpers
import rupiah from '../helpers/rupiah';

// import all component
import HeaderGreen from '../components/HeaderGreen';
import UserCard from '../components/UserCard';
import Container from '../components/Container';
import AmountField from '../components/AmountField';

class Amount extends Component {
  state = {
    amount: 0,
  };

  handleInput = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <KeyboardAwareScrollView>
          <HeaderGreen text="Transfer" height={28}>
            <UserCard />
          </HeaderGreen>
          <View style={styles.body}>
            <Container width={80}>
              <View style={styles.form}>
                <View style={styles.control}>
                  <TextInput
                    placeholder="0.00"
                    placeholderTextColor="#B5BDCC"
                    style={styles.inputAmount}
                    keyboardType="number-pad"
                    onChangeText={e => this.handleInput('amount', e)}
                    value={
                      this.state.amount === '' || this.state.amount === 'Rp. '
                        ? ''
                        : `Rp. ${rupiah(this.state.amount)}`
                    }
                  />
                </View>
                <View style={styles.control}>
                  <Text style={styles.text}>Rp. 120.000 availabled</Text>
                </View>
              </View>
            </Container>
          </View>
          <View style={styles.footInput}>
            <Container width={90}>
              <AmountField placeholder="Add Some Notes" />
            </Container>
          </View>
        </KeyboardAwareScrollView>
      </Fragment>
    );
  }
}

export default Amount;

const styles = StyleSheet.create({
  body: {
    height: (60 / 100) * Dimensions.get('screen').height,
    backgroundColor: '#FAFCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputAmount: {
    fontSize: 35,
  },
  input: {
    borderBottomColor: '#E8E9EC',
    borderBottomWidth: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FAFCFF',
  },
  control: {
    marginBottom: 10,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#9B99AF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footInput: {
    backgroundColor: '#FAFCFF',
    height: (12 / 100) * Dimensions.get('screen').height,
  },
});
