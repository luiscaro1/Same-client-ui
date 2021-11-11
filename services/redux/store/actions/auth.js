import { authTypes } from "./types";
import axios from "axios";
import config from "../../../../config";

const { LOGIN_SUCCESSFUL, AUTH_ERROR, SIGNUP_SUCCESSFUL } = authTypes;

const { auth_api } = config;

export const login = (credentials) => async (dispatch) => {
  //TODO: copy and paste the login url

  try {
    const res = await axios.post(
      auth_api.base_url + auth_api.login_route,
      credentials,
      {
        withCredentials: true,
      }
    );

    //succesful
    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data,
    });
  }
};

export const signup = (credentials) => async (dispatch) => {
  //TODO: copy and paste the login url
  try {
    const res = await axios.post(
      auth_api.base_url + auth_api.signup_route,
      credentials,
      {
        withCredentials: true,
      }
    );

    //succesful
    dispatch({
      type: SIGNUP_SUCCESSFUL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data,
    });
  }
};

export const verifyAuth = () => async (dispatch) => {
  try {
    const res = await axios.get(auth_api.base_url + auth_api.verify_auth, {
      withCredentials: true,
    });

    //succesful
    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data,
    });
  }
};
