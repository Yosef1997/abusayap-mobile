const initialState = {
  updateUser: null,
  message: '',
  errorMsg: '',
};

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return {
        ...state,
        updateUser: action.payload,
      };
    }
    case 'DELETE_PICTURE': {
      return {
        ...state,
        message: action.payload,
      };
    }
    case 'SET_UPDATE_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export default updateReducer;
