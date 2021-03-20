import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../components/CardPersonalInfo';
// import {connect} from 'react-redux';

export default class PersonalInfo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <View style={styles.row1}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <Text style={styles.textheader}>Personal Information</Text>
        </View>
        <Text style={styles.text}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
        <Card
          label="First Name"
          text="John"
          textPersonal={styles.textPersonal}
        />
        <Card
          label="Last Name"
          text="Cena"
          textPersonal={styles.textPersonal}
        />
        <Card
          label="Verified E-mail"
          text="pewdiepie1@gmail.com"
          textPersonal={styles.textPersonal}
        />
        <Card
          label="Phone Number"
          text="+62 813-9387-7946"
          textPersonal={styles.textPersonal}
          manage="manage"
          onPress={() => this.props.navigation.navigate('ManagePhone')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Addphone')}>
          <Card
            label="Phone Number"
            text="Add Phone Number"
            textPersonal={styles.textAddNumber}
          />
        </TouchableOpacity>
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
  textPersonal: {
    color: '#514F5B',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textAddNumber: {
    color: '#00D16C',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

//Connect Redux
// const mapStateToProps =(state) => ({
//   auth:state.auth
// })
// const mapDispatchToProps = {}
// export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
