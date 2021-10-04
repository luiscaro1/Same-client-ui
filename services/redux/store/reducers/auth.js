import { authTypes } from "../actions/types";

const initialState = {
  //uid
  token: null,
  loading: true,
  error: null,
};

const { LOGIN_FAILED, LOGIN_SUCCESSFUL } = authTypes;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false,
      };

    case LOGIN_FAILED:
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
