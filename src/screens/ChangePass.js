import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../components/Button';
import PasswordField from '../components/PasswordField';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {updateUser} from '../redux/actions/UpdateProfile';

class ChangePass extends Component {
  state = {
    isLoading: false,
    isMessage: false,
  };
  passwordValidation(values) {
    const errors = {};
    const {password, newPassword, validNewPassword} = values;

    if (!password) {
      errors.msg = 'Current Password Required';
    } else if (!newPassword) {
      errors.msg = 'New Password Required';
    } else if (!validNewPassword) {
      errors.msg = 'Repeat your new password';
    } else if (
      password.length < 8 ||
      newPassword.length < 8 ||
      validNewPassword.length < 8
    ) {
      errors.msg = 'Password have at least 8 characters';
    } else if (password === newPassword) {
      errors.msg = 'Cant same with current password';
    } else if (newPassword !== validNewPassword) {
      errors.msg = 'New password & repeat password not same';
    }
    return errors;
  }

  async passwordPush(values) {
    this.setState({isLoading: true});
    const {token, user} = this.props.auth;
    console.log(user);
    await this.props.updateUser(token, user.id, {
      password: values.password,
      newPassword: values.newPassword,
    });
    setTimeout(() => {
      this.setState({isLoading: false, isMessage: true});
    }, 1000);
    setTimeout(() => {
      this.setState({isMessage: false});
    }, 5000);
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <View style={styles.row1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.textheader}>Change Password</Text>
        </View>
        <Text style={styles.text}>
          You must enter your current password and then{'\n'}type your new
          password twice.
        </Text>
        <Formik
          initialValues={{password: '', newPassword: '', validNewPassword: ''}}
          validate={values => this.passwordValidation(values)}
          onSubmit={(values, {resetForm}) => {
            this.setState({isLoading: true});
            this.passwordPush(values);
            setTimeout(() => {
              resetForm();
            }, 500);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <>
              <View style={styles.control}>
                <PasswordField
                  placeholder="Current Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
              </View>
              <View style={styles.control}>
                <PasswordField
                  placeholder="New Password"
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                />
              </View>
              <View style={styles.control}>
                <PasswordField
                  placeholder="Repeat Password"
                  value={values.validNewPassword}
                  onChangeText={handleChange('validNewPassword')}
                  onBlur={handleBlur('validNewPassword')}
                />
                {errors.msg ? (
                  <Text style={styles.textError}>{errors.msg}</Text>
                ) : null}
                {this.props.auth.authMessage && this.state.isMessage ? (
                  <Text style={styles.textsuccess}>
                    {this.props.auth.authMessage}
                  </Text>
                ) : null}
                {this.props.auth.errorMessage && this.state.isMessage ? (
                  <Text style={styles.textError}>
                    {this.props.auth.errorMessage}
                  </Text>
                ) : null}
                {this.state.isLoading ? (
                  <View>
                    <ActivityIndicator size="large" />
                  </View>
                ) : null}
              </View>
              <View style={styles.button}>
                <Button
                  label="Change Password"
                  onPress={handleSubmit}
                  disabled={errors.msg}>
                  Change Password
                </Button>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#00D16C',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 25,
  },
  textheader: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  text: {
    color: '#7A7886',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
    marginTop: 40,
    marginBottom: 20,
  },
  control: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  textError: {
    // fontFamily: 'Roboto-Reguler',
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  textsuccess: {
    fontSize: 16,
    color: '#00D16C',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    marginHorizontal: 10,
  },
});
const mapStateToProps = state => ({
  auth: state.auth,
  update: state.profile,
});
const mapDispatchToProps = {updateUser};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);
