const intialState = {
  token: null,
  user: null,
  authMessage: '',
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_MESSAGE':
      return {
        ...state,
        authMessage: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
