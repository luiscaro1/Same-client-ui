import { authTypes } from "../actions/types";

const initialState = {
  //uid
  token: null,
  loading: true,
  error: null,
  deleted:false,
  updated:false,

  other_user:{
    data:null,
    loading:true,
    user_error:null,
  }
};

const { AUTH_ERROR, LOGIN_SUCCESSFUL, SIGNUP_SUCCESSFUL, UPDATE_SUCESSFUL,GET_BY_USERNAME,DELETE_SUCCESSFUL,USER_ERROR } = authTypes;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false,
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false,
      };
    case GET_BY_USERNAME:
      return{
        ...state,
        other_user:{
          ...state.other_user,
          data:action.payload,
          loading:false,
        },
      }

    case DELETE_SUCCESSFUL:
      return{
        ...state,
        token:action.payload,
        error:null,
        loading:false,
        deleted:true,
      }
    case UPDATE_SUCESSFUL:
      return{
        ...state,
        token:action.payload,
        error:null,
        loading:false,
        deleted:false,
        updated:true,
      }
    case USER_ERROR:
      return{
        ...state,
        other_user:{
          ...state.other_user,
          user_error:action.payload,
          loading:false,
        }, 
      }

    case AUTH_ERROR:
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
