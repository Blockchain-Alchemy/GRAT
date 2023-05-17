import ApiConstants from '../../constants';

// Get the common year list reference
export const setCode = (code) => {
  return {
    type: ApiConstants.SET_CODE,
    code,
  };
};

export const consoleLog = (log) => {
  return {
    type: ApiConstants.ADD_CONSOLE_LOG,
    log,
  };
};

export const updateLessonStateAction = (timeline) => {
  return {
    type: ApiConstants.UPDATE_LESSON_STATE,
    timeline,
  };
};

export const setSessionIdAction = (sessionId) => {
  return {
    type: ApiConstants.SET_SESSION_ID,
    sessionId,
  };
};

export const setContractNameAction = (contractName) => {
  return {
    type: ApiConstants.SET_CONTRACT_NAME,
    contractName,
  };
};

export const setCompiledContractAction = (contract, storage) => {
  return {
    type: ApiConstants.SET_COMPILED_CONTRACT,
    payload: { contract, storage },
  };
};

export const setRecipesDialogVisibilityAction = (value) => {
  return {
    type: ApiConstants.SET_RECIPES_DIALOG_VISIBILITY,
    payload: value,
  }
}

export const setRecipeName = (value) => {
  return {
    type: ApiConstants.SET_RECIPE_NAME,
    payload: value,
  }
}