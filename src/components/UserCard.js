// ====== UserCard
// import all modules
import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {REACT_APP_API_URL as API_URL} from '@env';

// import assets
import photo from '../assets/images/profile.jpg';

import Container from '../components/Container';

export default function UserCard(props) {
  const transactionFocus = useSelector(state => state.transaction.contactFocus);
  return (
    <Fragment>
      <View style={styles.card}>
        <Container width={80}>
          <View style={styles.container}>
            <View style={styles.firstCol}>
              {transactionFocus.picture === null ? (
                <Image source={photo} style={styles.picture} />
              ) : (
                <Image
                  source={{
                    uri: `${API_URL}/upload/profile/${transactionFocus.picture}`,
                  }}
                  style={styles.picture}
                />
              )}
            </View>
            <View style={styles.lastCol}>
              <Text style={styles.title}>{transactionFocus.name}</Text>
              <Text style={styles.subtitle}>
                +62{' '}
                {transactionFocus.phoneNumber === null
                  ? transactionFocus.email
                  : transactionFocus.phoneNumber}
              </Text>
            </View>
          </View>
        </Container>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 15,
  },
  picture: {
    width: 54,
    height: 54,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstCol: {
    flex: 1,
  },
  lastCol: {
    flex: 3.2,
  },
  title: {
    color: '#4D4B57',
    fontSize: 16,
    marginBottom: 5,
  },
  subtitle: {
    color: '#7A7886',
  },
});
