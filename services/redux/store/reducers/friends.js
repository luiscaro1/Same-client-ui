import { friendTypes } from "../actions/types";

//Attempt 1


const initialState = {
    //uid
    unfriending:false,
    friending:false,
    loading: true,
    error: null,
    data:null,
  };
  
  const { FRIEND_ERROR, ADD_FRIEND_SUCCESSFUL, UNFRIEND_SUCCESSFUL,FRIEND_COUNT } = friendTypes;
  
  export default function friendsReducer(state = initialState, action) {
    switch (action.type) {
      case FRIEND_COUNT:
          return{
            ...state,
            data:action.payload,
            friending:true,
            loading: false,
          };
      case ADD_FRIEND_SUCCESSFUL:
        return {
          ...state,
          friending:true,
          unfriending:false,
          error: null,
          loading: false,
        };
      case UNFRIEND_SUCCESSFUL:
        return {
          ...state,
          unfriending:true,
          friending:false,
          error: null,
          loading: false,
        };
  
      case FRIEND_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  