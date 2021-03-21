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

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#00D16C" />
        <View style={styles.header}>
          <View style={styles.row1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrowleft" size={25} color="white" />
            </TouchableOpacity>
            <Text style={styles.textheader}>Top Up</Text>
          </View>
          <View style={styles.row2}>
            <TouchableOpacity style={styles.btn}>
              <Icon name="plus" size={25} color="#00D16C" />
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>Virtual Account Number</Text>
              <Text style={styles.number}>2389 081393877946</Text>
            </View>
          </View>
        </View>
        <View style={styles.contain}>
          <Text style={styles.cardtitle}>How to Top-Up</Text>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>1</Text>
            <Text style={styles.cardText}>
              Go to the nearest ATM or you can{'\n'}use E-Banking.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>2</Text>
            <Text style={styles.cardText}>
              Type your security number on the{'\n'}ATM or E-Banking.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>3</Text>
            <Text style={styles.cardText}>Select “Transfer” in the menu</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>4</Text>
            <Text style={styles.cardText}>
              Type the virtual account number that{'\n'}
              we provide you at the top.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>5</Text>
            <Text style={styles.cardText}>
              Type the amount of the money you{'\n'}want to top up.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>6</Text>
            <Text style={styles.cardText}>Read the summary details</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>7</Text>
            <Text style={styles.cardText}>Press transfer / top up</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>8</Text>
            <Text style={styles.cardText}>
              You can see your money in Zwallet{'\n'}within 3 hours.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafcff',
  },
  header: {
    backgroundColor: '#00D16C',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 16,
  },
  textheader: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
  },
  row2: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#EBEEF2',
    marginHorizontal: 16,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7886',
  },
  number: {
    color: '#4D4B57',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 9,
  },
  contain: {
    marginHorizontal: 16,
    marginVertical: 40,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 17,
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  cardNumber: {
    color: '#00D16C',
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 20,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#7A7886',
  },
  cardtitle: {
    color: '#514F5B',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
