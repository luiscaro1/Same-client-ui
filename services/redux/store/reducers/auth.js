import { authTypes } from "../actions/types";

const initialState = {
  //uid
  token: null,
  loading: true,
  error: null,
  deleted: false,
  updated: false,
  email: null,
  // update_user_name:null,

  other_user: {
    data: null,
    loading: true,
    user_error: null,
  },

  update_error: null,
};

const {
  AUTH_ERROR,
  LOGIN_SUCCESSFUL,
  SIGNUP_SUCCESSFUL,
  UPDATE_EMAIL_SUCCESSFUL,
  UPDATE_PASSWORD_SUCCESSFUL,
  UPDATE_USERNAME_SUCCESSFUL,
  GET_BY_USERNAME,
  DELETE_SUCCESSFUL,
  UPDATE_ERROR,
  USER_ERROR,
  GET_EMAIL,
  LOGOUT,
} = authTypes;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT: {
      return {
        ...state,
        token: null,
      };
    }
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
      return {
        ...state,
        other_user: {
          ...state.other_user,
          data: action.payload,
          loading: false,
        },
      };
    case GET_EMAIL:
      return {
        ...state,
        email: action.payload,
        error: null,
      };

    case DELETE_SUCCESSFUL:
      return {
        ...state,
        error: null,
        loading: false,
        deleted: true,
      };
    case UPDATE_EMAIL_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        deleted: false,
        updated: true,
      };
    case UPDATE_PASSWORD_SUCCESSFUL:
      return {
        ...state,
        update_error: null,
        loading: false,
        deleted: false,
        updated: true,
      };
    case UPDATE_USERNAME_SUCCESSFUL:
      return {
        ...state,
        // updated_user_name:payload.action,
        loading: false,
        deleted: false,
        updated: true,
      };
    case USER_ERROR:
      return {
        ...state,
        other_user: {
          ...state.other_user,
          user_error: action.payload,
          loading: false,
        },
      };

    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        error: action.payload,
        loading: false,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
