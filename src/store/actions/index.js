import ApiConstants from '../../constants';

// Get the common year list reference
function setCode(code) {
  return {
    type: ApiConstants.SET_CODE,
    code,
  };
}

export {
  setCode,
}
