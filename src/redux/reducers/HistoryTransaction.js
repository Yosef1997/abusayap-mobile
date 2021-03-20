const initialState = {
  history: [
    {
      id: 1,
      name: 'Muhammad Zaqi',
      isTransfer: true,
      amount: 'Rp. 10.000',
    },
    {
      id: 2,
      name: 'Yosef Situmorang',
      isTransfer: false,
      amount: 'Rp. 20.000',
    },
  ],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HISTORY':
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
