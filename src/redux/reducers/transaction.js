const initialState = {
  history: [],
  pageInfoTransaction: null,
  listContact: [],
  contactFocus: null,
  isLoading: false,
  messageResponse: null,
  topUpMessage: null,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HISTORY_TRANSACTION':
      return {
        ...state,
        history: action.payload,
      };
    case 'PAGE_INFO_HISTORY_TRANSACTION':
      return {
        ...state,
        pageInfoTransaction: action.payload,
      };
    case 'NEW_DATA_PAGE_INFO_TRANSACTION':
      return {
        ...state,
        pageInfoTransaction: action.payload,
      };
    case 'MSG_RESPONSE_HISTORY_TRANSACTION':
      return {
        ...state,
        history: action.payload,
      };
    case 'LIST_CONTACT':
      return {
        ...state,
        listContact: action.payload,
      };
    case 'CONTACT_FOCUS':
      console.log(action.payload, '<<<<<<<<<<<<<<<<ini kontak');
      return {
        ...state,
        contactFocus: action.payload,
      };
    case 'TOPUP_MESSAGE':
      return {
        ...state,
        topUpMessage: action.payload,
      };
    case 'TOP_UP':
      return {
        ...state,
        topUpMessage: action.payload,
      };
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
