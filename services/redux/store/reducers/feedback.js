import { feedbackTypes } from "../actions/types";


//Attempt 1


const initialState = {
    //uid
    submit_feedback:false,
    loading: true,
    error: null,
  };
  
  const { ADD_FEEDBACK_SUCCESSFUL,FEEDBACK_ERROR } = feedbackTypes;
  
  export default function feedbackReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_FEEDBACK_SUCCESSFUL:
        return {
          ...state,
          submit_feedback:true,
          error: null,
          loading: false,
        };
  
      case FEEDBACK_ERROR:
        return {
          ...state,
          submit_feedback:false,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  