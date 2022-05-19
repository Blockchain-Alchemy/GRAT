import ApiConstants from '../../constants';

// Get the common year list reference
function setCode(code) {
  return {
    type: ApiConstants.SET_CODE,
    code,
  };
}

function consoleLog(log) {
  return {
    type: ApiConstants.ADD_CONSOLE_LOG,
    log,
  };
}

function updateLessonStateAction(timeline) {
  return {
    type: ApiConstants.UPDATE_LESSON_STATE,
    timeline,
  };
}

function setSessionIdAction(sessionId) {
  return {
    type: ApiConstants.SET_SESSION_ID,
    sessionId,
  };
}

function setContractNameAction(contractName) {
  return {
    type: ApiConstants.SET_CONTRACT_NAME,
    contractName,
  };
}

export {
  setCode,
  consoleLog,
  updateLessonStateAction,
  setSessionIdAction,
  setContractNameAction,
}