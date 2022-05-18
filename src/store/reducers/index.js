import { combineReducers } from 'redux';
import BlocklyState from "./blocklyReducer";
import LessonState from "./lessonReducer";

const rootReducer = combineReducers({
  BlocklyState,
  LessonState,
});

export default rootReducer;
