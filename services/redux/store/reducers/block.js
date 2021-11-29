import { blockTypes } from "../actions/types";
import config from "../../../../config";

//Attempt 1


const initialState = {
    //uid
    count:null,
    blocking:false,
    unblocking:false,
    loading: true,
    error: null,
  };
  
  const { BLOCK_ERROR, BLOCK_SUCCESSFUL, UNBLOCK_SUCCESSFUL,BLOCK_COUNT } = blockTypes;
  
  export default function blockReducer(state = initialState, action) {
    switch (action.type) {
      case BLOCK_COUNT:
          return{
            ...state,
            count:action.payload,
            blocking:true,
            error: null,
            loading: false,
          };
      case BLOCK_SUCCESSFUL:
        return {
          ...state,
          blocking:true,
          unblocking:false,
          error: null,
          loading: false,
        };
      case UNBLOCK_SUCCESSFUL:
        return {
          ...state,
          unblocking:true,
          blocking:false,
          token: action.payload,
          error: null,
          loading: false,
        };
  
      case BLOCK_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  