import Constants from '../../constants';

// Get the common year list reference
function setWorkspace(workspace) {
  return {
    type: Constants.WORKSPACE_INIT,
    workspace,
  };
}

export {
  setWorkspace,
}
