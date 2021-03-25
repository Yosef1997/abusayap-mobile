// ===== Header Green
// import all modules
import {useNavigation} from '@react-navigation/core';
import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Pressable,
} from 'react-native';

// import assets
import Icon from 'react-native-vector-icons/Ionicons';

// import all component
import Container from '../components/Container';

export default function HeaderGreen(props) {
  const navigation = useNavigation();
  return (
    <Fragment>
      <StatusBar backgroundColor="#00D16C" />
      <View style={styles.header(props.height)}>
        <Container width={90}>
          <View style={styles.head}>
            <Pressable
              android_ripple={{
                radius: 20,
                color: 'black',
                borderless: true,
              }}
              onPress={() => navigation.goBack()}>
              <Icon name="arrow-back-outline" size={25} color="#FFFFFF" />
            </Pressable>
            <Text style={styles.text}>{props.text}</Text>
          </View>
          <View style={styles.userCard}>{props.children}</View>
        </Container>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  header: function (height) {
    return {
      backgroundColor: '#00D16C',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingTop: 20,
      paddingBottom: 15,
      height: (height / 100) * Dimensions.get('screen').height,
    };
  },
  text: {
    color: 'white',
    fontSize: 19,
    marginLeft: 12,
  },
  head: {
    flexDirection: 'row',
  },
  userCard: {
    marginTop: 30,
  },
});
