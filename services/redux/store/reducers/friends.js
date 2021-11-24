import { friendTypes } from "../actions/types";

//Attempt 1


const initialState = {
    //uid
    data:null,
    unfriending:false,
    friending:false,
    loading: true,
    error: null,
  };
  
  const { FRIEND_ERROR, ADD_FRIEND_SUCCESSFUL, UNFRIEND_SUCCESSFUL,GET_ALL_FRIENDS } = friendTypes;
  
  export default function friendsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_FRIENDS:
          return{
            ...state,
            data:action.payload,
            unfriending:false,
            friending:true,
            error: null,
            loading: false,
          };
      case ADD_FRIEND_SUCCESSFUL:
        return {
          ...state,
          data:action.payload,
          friending:true,
          unfriending:false,
          error: null,
          loading: false,
        };
      case UNFRIEND_SUCCESSFUL:
        return {
          ...state,
          data:action.payload,
          unfriending:true,
          friending:false,
          error: null,
          loading: false,
        };
  
      case FRIEND_ERROR:
        return {
          ...state,
          unfriending:null,
          friending:null,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  