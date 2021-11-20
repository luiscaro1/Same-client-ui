import { feedbackTypes } from "../actions/types";


//Attempt 1


const initialState = {
    //uid
    token: null,
    //data:null,
    loading: true,
    error: null,
  };
  
  const { ADD_FEEDBACK_SUCCESSFUL,FEEDBACK_ERROR } = feedbackTypes;
  
  export default function feedbackReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_FEEDBACK_SUCCESSFUL:
        return {
          ...state,
          token: action.payload,
          error: null,
          loading: false,
        };
  
      case FEEDBACK_ERROR:
        return {
          ...state,
          token: null,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  