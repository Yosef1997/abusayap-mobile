import http from '../../helpers/http';

export const updateUser = (token, id, data) => {
  return async dispatch => {
    try {
      const form = new FormData();
      Object.keys(data).forEach(key => {
        form.append(key, data[key]);
      });
      dispatch({
        type: 'SET_MESSAGE',
        payload: '',
      });
      const results = await http(token).patch(`/user/${id}`, form);
      dispatch({
        type: 'UPDATE_USER',
        payload: results.data.results,
        message: results.data.message,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_MESSAGE',
        payload: message,
      });
    }
  };
};

export const deletePicture = (token, id) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_UPDATE_MESSAGE',
        payload: '',
      });
      const results = await http(token).delete(`/user/${id}`);
      dispatch({
        type: 'DELETE_PICTURE',
        payload: results.data.results,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_UPDATE_MESSAGE',
        payload: message,
      });
    }
  };
};
