import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import authReducer from './auth';
import transactionReducer from './transaction';
import profileReducer from './UpdateProfile';
import notificationReducer from './notification';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  transaction: transactionReducer,
  profile: profileReducer,
  notification: notificationReducer,
});

export default reducer;
