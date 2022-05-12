import Constatns from 'constants';

const initialState = {
  loading: false,
  workspace: null,
};

function BlocklyState(state = initialState, action) {
  switch (action.type) {
    case Constatns.WORKSPACE_INIT:
      console.log('workspace_set', action.workspace)
      return { ...state, workspace: action.workspace };

    default:
      return state;
  }
}

export default BlocklyState;
