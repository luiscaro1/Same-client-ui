import { reportTypes } from "../actions/types";

//Attempt 1
const{auth_api}

const initialState = {
    //uid
    token: auth_api.token,
    data:null,
    loading: null,
    error: null,
  };
  
  const { REPORT_SUCCESSFUL,REPORT_ERROR } = reportTypes;
  
  export default function reportReducer(state = initialState, action) {
    switch (action.type) {
      case REPORT_SUCCESSFUL:
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        };
  
      case REPORT_ERROR:
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
  