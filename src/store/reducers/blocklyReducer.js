import ApiConstants from '../../constants';

const initialState = {
  loading: false,
  code: '',
  messages: [],
  contractName: '',
  sessionId: null,
};

function BlocklyState(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.SET_CODE:
      return { ...state, code: action.code };

    case ApiConstants.ADD_CONSOLE_LOG:
      return {
        ...state,
        messages: [...state.messages, action.log]
      };

    case ApiConstants.SET_SESSION_ID:
      return {
        ...state,
        sessionId: action.sessionId
      };

    case ApiConstants.SET_CONTRACT_NAME:
      return {
        ...state,
        contractName: action.contractName
      };
      
    default:
      return state;
  }
}

export default BlocklyState;
