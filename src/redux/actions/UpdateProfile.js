import http from '../../helpers/http';

export const updateUser = (id, data) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_UPDATE_MESSAGE',
        payload: '',
      });
      const results = await http().patch(`/user/${id}`, data);
      dispatch({
        type: 'UPDATE_USER',
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
