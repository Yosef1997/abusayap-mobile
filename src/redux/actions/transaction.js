import http from '../../helpers/http';

export const historyTransaction = token => {
  return async dispatch => {
    const response = await http(token).get('/transaction/history');
    if (response.data.results) {
      dispatch({
        type: 'HISTORY_TRANSACTION',
        payload: response.data.results,
      });
      dispatch({
        type: 'PAGE_INFO_HISTORY_TRANSACTION',
        payload: response.data.pageInfo,
      });
    } else {
      dispatch({
        type: 'MSG_RESPONSE_HISTORY_TRANSACTION',
        payload: response.data.message,
      });
    }
  };
};

export const getContact = (token, search, sort) => {
  return async dispatch => {
    dispatch({
      type: 'IS_LOADING',
      payload: true,
    });
    const response = await http(token).get(
      `/contact?search=${search}&sort=name&order=${sort}`,
    );
    dispatch({
      type: 'LIST_CONTACT',
      payload: response.data.results,
    });
    dispatch({
      type: 'IS_LOADING',
      payload: false,
    });
  };
};

export const pageInfoHistoryTransaction = data => {
  return async dispatch => {
    dispatch({
      type: 'NEW_DATA_PAGE_INFO_TRANSACTION',
      payload: data,
    });
  };
};

export const newHistoryTransaction = data => {
  return async dispatch => {
    dispatch({
      type: 'HISTORY_TRANSACTION',
      payload: data,
    });
  };
};

export const contactFocus = data => {
  return async dispatch => {
    dispatch({
      type: 'CONTACT_FOCUS',
      payload: data,
    });
  };
};

export const topUp = (token, data) => {
  return async dispatch => {
    try {
      const form = new FormData();
      Object.keys(data).forEach(key => {
        form.append(key, data[key]);
      });
      console.log(form);
      dispatch({
        type: 'TOPUP_MESSAGE',
        payload: '',
      });
      const response = await http(token).post('/topup', form);
      dispatch({
        type: 'TOP_UP',
        payload: response.data.message,
      });
    } catch (err) {
      // console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'TOPUP_MESSAGE',
        payload: message,
      });
    }
  };
};
export const transactionInfo = data => {
  return async dispatch => {
    dispatch({
      type: 'TRANSACTION_INFO',
      payload: data,
    });
  };
};

export const sendAmount = data => {
  return async dispatch => {
    dispatch({
      type: 'SEND',
      payload: data,
    });
  };
};
