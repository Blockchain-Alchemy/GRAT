import ApiConstants from '../../constants';

const initialState = {
  loading: false,
  code: '',
};

function BlocklyState(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.SET_CODE:
      return { ...state, code: action.code };

    default:
      return state;
  }
}

export default BlocklyState;
