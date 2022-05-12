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

export {
  setCode,
  consoleLog,
}
