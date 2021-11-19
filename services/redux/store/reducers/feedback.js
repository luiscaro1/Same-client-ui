import { feedbackTypes } from "../actions/types";

//Attempt 1
const{auth_api}

const initialState = {
    //uid
    token: auth_api.token,
    data:null,
    loading: null,
    error: null,
  };
  
  const { ADD_FEEDBACK_SUCCESSFUL,FEEDBACK_ERROR } = feedbackTypes;
  
  export default function feedbackReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_FEEDBACK_SUCCESSFUL:
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        };
  
      case FEEDBACK_ERROR:
        return {
          ...state,
          data: null,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  