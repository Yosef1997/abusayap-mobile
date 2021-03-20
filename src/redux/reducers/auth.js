const intialState = {
  token: null,
  profile: [],
  authMessage: '',
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.token,
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profile: action.payload,
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
