import ApiConstants from '../../constants';

const initialState = {
  loading: false,
  code: '',
  messages: [],
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

    default:
      return state;
  }
}

export default BlocklyState;
