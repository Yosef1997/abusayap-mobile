const initialState = {
  token: null,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN_NOTIFICATION':
      console.log('=========== JALAN ==========');
      console.log(action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return {
        ...state,
      };
  }
};

export default notificationReducer;
