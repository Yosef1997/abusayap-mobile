const intialState = {
  token: null,
  user: null,
  authMessage: '',
  errorMsg: '',
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        authMessage: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...state,
        token: action.payload,
        user: action.user,
      };
    case 'SET_MESSAGE':
      return {
        ...state,
        errorMsg: action.payload,
      };
    case 'SIGNOUT':
      return {
        ...state,
        token: null,
        user: null,
        authMessage: '',
      };
    default:
      return state;
  }
};

export default authReducer;
