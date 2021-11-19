import { friendTypes } from "../actions/types";

//Attempt 1
const{auth_api}

const initialState = {
    //uid
    token: auth_api.token,
    data:null,
    loading: null,
    error: null,
  };
  
  const { FRIEND_ERROR, ADD_FRIEND_SUCCESSFUL, UNFRIEND_SUCCESSFUL,GET_ALL_FRIENDS } = friendTypes;
  
  export default function friendsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_FRIENDS:
          return{
            ...state,
            data: action.payload,
            error: null,
            loading: false,
          };
      case ADD_FRIEND_SUCCESSFUL:
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        };
      case UNFRIEND_SUCCESSFUL:
        return {
          ...state,
          data: action.payload,
          error: null,
          loading: false,
        };
  
      case FRIEND_ERROR:
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
  