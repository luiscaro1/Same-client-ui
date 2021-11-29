import { authTypes } from "./types";
import axios from "axios";
import config from "../../../../config";
import cookieCutter from "cookie-cutter";
import { GET_EMAIL } from "./types/auth";

const {
  LOGIN_SUCCESSFUL,
  AUTH_ERROR,
  SIGNUP_SUCCESSFUL,
  GET_BY_USERNAME,
  DELETE_SUCCESSFUL,
  UPDATE_EMAIL_SUCCESSFUL,
  UPDATE_PASSWORD_SUCCESSFUL,
  UPDATE_USERNAME_SUCCESSFUL,
  UPDATE_ERROR,
  USER_ERROR,
  LOGOUT,
} = authTypes;

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

    if (res.data?.token) cookieCutter.set("same", res.data.token);

    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data?.accountInfo,
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

    if (res.data?.token) cookieCutter.set("same", res.data.token);

    //successful
    dispatch({
      type: SIGNUP_SUCCESSFUL,
      payload: res.data?.accountInfo,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data,
    });
  }
};
export const logout = () => (dispatch) => {
  cookieCutter.set("same", null, { expires: new Date(0) });
  dispatch({ type: LOGOUT });
};

export const verifyAuth = () => async (dispatch) => {
  const cookie = cookieCutter.get("same");

  // console.log(cookie);
  try {
    const res = await axios.post(
      auth_api.base_url + auth_api.verify_auth,
      { cookie },
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
    if (err.response.data === "Unauthorized") return;
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data,
    });
  }
};

export const getbyUsername = (user_name) => async (dispatch, getState) => {
  const state = getState();
  const { auth } = state;

  console.log(auth);

  if (auth?.token) {
    try {
      console.log(
        auth_api.base_url + auth_api.get_user_by_username + user_name
      );
      const res = await axios.get(
        auth_api.base_url + auth_api.get_user_by_username + user_name
      );
      dispatch({ type: GET_BY_USERNAME, payload: res.data });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response.data });
    }
  } else dispatch({ type: USER_ERROR, payload: "User does not exist" });
};

export const getEmail = (user_name) => async (dispatch, getState) => {
  const state = getState();
  const { auth } = state;

  if (auth?.token) {
    try {
      const res = await axios.get(
        auth_api.base_url + auth_api.get_email_route + user_name
      );
      dispatch({ type: GET_EMAIL, payload: res.data });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response.data });
    }
  } else dispatch({ type: USER_ERROR, payload: "Oops" });
};

export const deleteAccount = (uid) => async (dispatch, getState) => {
  const state = getState();
  const { auth } = state;

  if (auth.token) {
    try {
      const res = await axios.delete(
        auth_api.base_url + auth_api.delete_account + uid,
        { uid: auth.token.uid }
      );
      dispatch({ type: DELETE_SUCCESSFUL, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.response.data });
    }
  } else dispatch({ type: AUTH_ERROR, payload: "Oops try again later" });
};

export const updateUsername = (user_name) => async (dispatch, getState) => {
  const state = getState();
  const { auth } = state;

  if (auth.token) {
    try {
      const res = await axios.put(
        auth_api.base_url + auth_api.update_user_name,
        { uid: auth.token.uid, user_name }
      );
      dispatch({ type: UPDATE_USERNAME_SUCCESSFUL, payload: res.data });
    } catch (err) {
      dispatch({ type: UPDATE_ERROR, payload: err.response.data });
    }
  } else dispatch({ type: UPDATE_ERROR, payload: "Oops try again later" });
};

export const updateEmail = (email) => async (dispatch, getState) => {
  const state = getState();
  const { auth } = state;

  if (auth.token) {
    try {
      const res = await axios.put(auth_api.base_url + auth_api.update_email, {
        uid: auth.token.uid,
        email,
      });
      dispatch({ type: UPDATE_EMAIL_SUCCESSFUL, payload: res.data });
    } catch (err) {
      dispatch({ type: UPDATE_ERROR, payload: err.response.data });
    }
  } else dispatch({ type: UPDATE_ERROR, payload: "Oops try again later" });
};

export const updatePassword = (password) => async (dispatch, getState) => {
  const state = getState();
  const { auth } = state;

  if (auth.token) {
    try {
      const res = await axios.put(
        auth_api.base_url + auth_api.update_password,
        { uid: auth.token.uid, password }
      );
      dispatch({ type: UPDATE_PASSWORD_SUCCESSFUL, payload: res.data });
    } catch (err) {
      dispatch({ type: UPDATE_ERROR, payload: err.response.data });
    }
  } else dispatch({ type: UPDATE_ERROR, payload: "Oops try again later" });
};
