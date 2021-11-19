import { blockTypes } from "../actions/types";

//Attempt 1
const{auth_api}

const initialState = {
    //uid
    token: auth_api.token,
    data:null,
    loading: null,
    error: null,
  };
  
  const { BLOCK_ERROR, BLOCK_SUCCESSFUL, UNBLOCK_SUCCESSFUL,GET_ALL_BLOCKED } = blockTypes;
  
  export default function blockReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_BLOCKED:
          return{
            ...state,
            data: action.payload,
            error: null,
            loading: false,
          };
      case BLOCK_SUCCESSFUL:
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        };
      case UNBLOCK_SUCCESSFUL:
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        };
  
      case BLOCK_ERROR:
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
  