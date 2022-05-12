import { combineReducers } from 'redux';
import BlocklyState from "./blocklyReducer";

const rootReducer = combineReducers({
  BlocklyState,
});

export default rootReducer;
