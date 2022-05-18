import ApiConstants from '../../constants';

const initialState = {
  loading: false,
  timeline: -1,
};

function LessonState(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.UPDATE_LESSON_STATE:
      const timeline = Math.max(state.timeline, action.timeline);
      return { ...state, timeline };

    default:
      return state;
  }
}

export default LessonState;
