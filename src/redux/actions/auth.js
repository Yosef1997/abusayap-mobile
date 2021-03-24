import http from '../../helpers/http';
import jwt from 'jwt-decode';

export const signup = (username, email, password) => {
  return async dispatch => {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('email', email);
    params.append('password', password);
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http().post('/auth/sign-up', params);
      dispatch({
        type: 'SIGN_UP',
        payload: results.data.message,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const signin = (email, password) => {
  return async dispatch => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http().post('/auth/login', params);
      const token = results.data.results.token;
      const user = jwt(token);
      const profile = await http(token).get(`/user/${user.id}`);
      dispatch({
        type: 'SIGN_IN',
        payload: token,
        user: profile.data.results,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const signout = () => ({
  type: 'SIGNOUT',
});
