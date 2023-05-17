import ApiConstants from '../../constants';

const initialState = {
  loading: false,
  timeline: -1,
  showRecipesDialog: false,
  recipeName: 'donate',
};

function LessonState(state = initialState, action) {
  switch (action.type) {
    case ApiConstants.UPDATE_LESSON_STATE:
      if (action.timeline > state.timeline && action.timeline - state.timeline === 1) {
        return { ...state, timeline: action.timeline };
      }
      return state;

    case ApiConstants.SET_RECIPES_DIALOG_VISIBILITY:
      return {
        ...state,
        showRecipesDialog: action.payload,
      }

    case ApiConstants.SET_RECIPE_NAME:
      return {
        ...state,
        recipeName: action.payload,
      }

    default:
      return state;
  }
}

export default LessonState;
