import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import profileImg from '../assets/images/profile.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {signout} from '../redux/actions/auth';
import {DrawerActions} from '@react-navigation/core';
import {REACT_APP_API_URL as API_URL} from '@env';

const CostumDrawerNav = props => {
  const profile = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(signout(token));
    props.navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <>
      {token !== null ? (
        <>
          <View style={style.background}>
            <View style={style.row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Profile')}>
                <Image
                  source={
                    profile.picture !== null
                      ? {
                          uri: API_URL.concat(
                            `/upload/profile/${profile.picture}`,
                          ),
                        }
                      : profileImg
                  }
                  style={style.imageProfile}
                />
              </TouchableOpacity>
              <View>
                <View style={style.rowName}>
                  <Text
                    style={
                      style.textName
                    }>{`${profile.firstname} ${profile.lastname}`}</Text>
                  <Text style={style.textPhoneNumber}>{profile.balance}</Text>
                </View>
              </View>
            </View>
          </View>
          <DrawerContentScrollView style={{paddingTop: 0}}>
            <DrawerItem
              icon={({color, size}) => (
                <LineIcon name="grid" size={size} color={color} />
              )}
              label="Dashboard"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <LineIcon name="arrow-up-circle" size={size} color={color} />
              )}
              label="Transfer"
              onPress={() => props.navigation.navigate('Search')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <LineIcon name="plus" size={size} color={color} />
              )}
              label="Top Up"
              onPress={() => props.navigation.navigate('TopUp')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <LineIcon name="user" size={size} color={color} />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate('Profile')}
            />
          </DrawerContentScrollView>
          <View style={style.rowSignOut}>
            <DrawerItem
              icon={({color, size}) => (
                <LineIcon name="logout" size={size} color={color} />
              )}
              label="Log Out"
              onPress={() => handlePress()}
            />
          </View>
        </>
      ) : (
        <View />
      )}
    </>
  );
};

const style = StyleSheet.create({
  rowSignOut: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  background: {
    backgroundColor: '#00D16C',
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    height: 150,
    paddingHorizontal: 20,

    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textName: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  textPhoneNumber: {
    color: 'white',
    marginTop: 5,
  },
});

export default CostumDrawerNav;
