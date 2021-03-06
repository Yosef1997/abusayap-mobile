import http from '../../helpers/http';
import jwt from 'jwt-decode';

export const signup = (username, email, password) => {
  return async dispatch => {
    dispatch({
      type: 'SET_LOADING',
    });
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('email', email);
    params.append('password', password);
    try {
      const results = await http().post('/auth/sign-up', params);
      dispatch({
        type: 'REMOVE_MESSAGE',
      });
      dispatch({
        type: 'SET_ID',
        payload: {
          id: results.data.results.id,
        },
      });
      dispatch({
        type: 'SET_LOADING',
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_LOADING',
      });
      if (err.response) {
        const {message} = err.response.data;
        dispatch({
          type: 'SET_MESSAGE',
          payload: {
            message,
            type: 'warning',
          },
        });
      } else {
        dispatch({
          type: 'SET_MESSAGE',
          payload: {
            message: 'Server error',
            type: 'warning',
          },
        });
      }
    }
  };
};

export const signin = (email, password, notificationToken) => {
  return async dispatch => {
    dispatch({
      type: 'SET_LOADING',
    });
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);
    params.append('token', notificationToken);

    try {
      const results = await http().post('/auth/login', params);
      const token = results.data.results.token;
      const user = jwt(token);
      const profile = await http(token).get(`/user/${user.id}`);
      dispatch({
        type: 'REMOVE_MESSAGE',
      });
      dispatch({
        type: 'SIGN_IN',
        payload: token,
        user: profile.data.results,
      });
      dispatch({
        type: 'SET_LOADING',
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'SET_LOADING',
      });
      if (err.response) {
        const {message} = err.response.data;
        dispatch({
          type: 'SET_MESSAGE',
          payload: {
            message,
            type: 'warning',
          },
        });
      }
    }
  };
};

export const signout = token => {
  return async dispatch => {
    try {
      await http(token).post('/auth/logout');
      dispatch({
        type: 'SIGNOUT',
      });
      dispatch({
        type: 'CLEAN',
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const updateProfile = data => ({
  type: 'UPDATE_PROFILE',
  payload: data,
});

export const setId = id => ({
  type: 'SET_ID',
  payload: {id},
});

export const getUserDetail = (token, id) => {
  return async dispatch => {
    try {
      const {data} = await http(token).get('/user/' + id);
      console.log('====== DATA =====', data);
      dispatch({
        type: 'SET_USER',
        user: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'SET_MESSAGE',
        payload: {
          message: err.response.data.message,
          type: 'warning',
        },
      });
      console.log(err.response.data.message);
    }
  };
};
