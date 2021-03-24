// ===== Amount
// import all modules
import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import helpers
import rupiah from '../helpers/rupiah';
import {connect} from 'react-redux';
import {transactionInfo} from '../redux/actions/transaction';
import Icon from 'react-native-vector-icons/Ionicons';

// import all component
import HeaderGreen from '../components/HeaderGreen';
import UserCard from '../components/UserCard';
import Container from '../components/Container';
// import AmountField from '../components/AmountFIeld';

class Amount extends Component {
  state = {
    amount: 0,
    amountNum: 0,
    note: '',
  };

  handleInput = (name, value) => {
    const removeRp = value.substring(4);
    const splitDot = removeRp.split('.');
    const mergeSplit = splitDot.join('');
    const convertToNumber = Number(mergeSplit);
    this.setState({
      [name]: value,
      amountNum: convertToNumber,
    });
  };

  doSubmit = () => {
    this.props.transactionInfo({
      amount: this.state.amountNum,
      note: this.state.note,
      date: Date(),
    });
    this.props.navigation.navigate('Confirmation');
  };

  render() {
    console.log(this.state.note);
    return (
      <Fragment>
        <ScrollView style={styles.bodyParent}>
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
                    <Text style={styles.text}>
                      Rp. {rupiah(this.props.profile.user.balance)} availabled
                    </Text>
                    {this.props.profile.user.balance < this.state.amountNum && (
                      <Text style={styles.textAmount}>Money is not enough</Text>
                    )}
                  </View>
                </View>
              </Container>
            </View>
            <View style={styles.footInput}>
              <Container width={90}>
                <View style={styles.inputNote}>
                  <View style={styles.icon}>
                    <Icon
                      name="pencil-outline"
                      size={25}
                      color="#E8E9EC"
                      style={styles.email}
                    />
                  </View>
                  <View style={styles.textField}>
                    <TextInput
                      placeholder="Add some notes"
                      placeholderTextColor="#CBCBCB"
                      keyboardType="email-address"
                      style={styles.textInput}
                      onChangeText={e => this.setState({note: e})}
                    />
                  </View>
                </View>
              </Container>
            </View>
          </KeyboardAwareScrollView>
          <View style={styles.wrapperBtn}>
            {this.props.profile.user.balance < this.state.amountNum ||
            this.state.amountNum === 0 ? (
              <>
                <TouchableOpacity style={styles.btnSubmitDisable} disabled>
                  <Text style={styles.textBtn}>Next</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.btnSubmit}
                  onPress={() => this.doSubmit()}>
                  <Text style={styles.textBtn}>Next</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: (60 / 100) * Dimensions.get('screen').height,
    backgroundColor: '#FAFCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyParent: {
    backgroundColor: '#FAFCFF',
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
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textAmount: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footInput: {
    backgroundColor: '#FAFCFF',
    height: (12 / 100) * Dimensions.get('screen').height,
  },
  inputNote: {
    borderBottomColor: '#E8E9EC',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: 50,
    flexDirection: 'row',
  },
  icon: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
  },
  textField: {
    height: 50,
    flex: 9,
  },
  textInput: {
    height: 50,
  },
  btnSubmit: {
    height: 50,
    width: '100%',
    backgroundColor: '#00D16C',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 15,
  },
  btnSubmitDisable: {
    height: 50,
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 15,
  },
  wrapperBtn: {
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  transaction: state.transaction,
  profile: state.auth,
});
const mapDispatchToProps = {transactionInfo};
export default connect(mapStateToProps, mapDispatchToProps)(Amount);
