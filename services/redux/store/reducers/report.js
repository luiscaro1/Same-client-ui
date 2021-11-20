import { reportTypes } from "../actions/types";

//Attempt 1


const initialState = {
    //uid
    // data:null,
    reported:false,
    data:null, //temp
    loading: false,
    error: null,
  };
  
  const { REPORT_SUCCESSFUL,REPORT_ERROR,SUBMITTED_REPORT } = reportTypes;
  
  export default function reportReducer(state = initialState, action) {
    switch (action.type) {
      case REPORT_SUCCESSFUL:
        return {
          ...state,
          reported:true,
          data:action.payload,
          error: null,
          loading: false,
        };
  
      case REPORT_ERROR:
        return {
          ...state,
          reported: false,
          data:null,
          error: action.payload,
          loading: false,
        };
      case SUBMITTED_REPORT:
        return {
          ...state,
          loading:true,
          data:null
        }
  
      default:
        return state;
    }
  }
  