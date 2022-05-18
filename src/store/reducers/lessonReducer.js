import ApiConstants from '../../constants';

const initialState = {
  loading: false,
  timeline: -1,
};

function LessonState(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.UPDATE_LESSON_STATE:
      if (action.timeline > state.timeline && action.timeline - state.timeline === 1) {
        return { ...state, timeline: action.timeline };
      }
      return state;

    default:
      return state;
  }
}

export default LessonState;
