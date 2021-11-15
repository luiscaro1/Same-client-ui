import { authTypes } from "../actions/types";

const initialState = {
  //uid
  token: null,
  loading: true,
  error: null,
};

const { AUTH_ERROR, LOGIN_SUCCESSFUL, SIGNUP_SUCCESSFUL, LOGOUT } = authTypes;

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
