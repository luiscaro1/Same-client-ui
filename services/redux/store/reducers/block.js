import { blockTypes } from "../actions/types";
import config from "../../../../config";

//Attempt 1


const initialState = {
    //uid
    token:null,
    //data:null,
    loading: true,
    error: null,
  };
  
  const { BLOCK_ERROR, BLOCK_SUCCESSFUL, UNBLOCK_SUCCESSFUL,GET_ALL_BLOCKED } = blockTypes;
  
  export default function blockReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_BLOCKED:
          return{
            ...state,
            token:action.payload,
            //data:action.payload,
            error: null,
            loading: false,
          };
      case BLOCK_SUCCESSFUL:
        return {
          ...state,
          token: action.payload,
          error: null,
          loading: false,
        };
      case UNBLOCK_SUCCESSFUL:
        return {
          ...state,
          token: action.payload,
          error: null,
          loading: false,
        };
  
      case BLOCK_ERROR:
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
  