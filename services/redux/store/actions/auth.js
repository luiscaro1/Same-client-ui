import { authTypes } from "./types";
import axios from "axios";

const { LOGIN_SUCCESSFUL, LOGIN_FAILED } = authTypes;

export const login = (credentials) => async (dispatch) => {
  //TODO: copy and paste the login url
  try {
    const res = await axios.post("http://localhost:5000/Same/login", credentials);

    //succesful
    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
      payload: err,
    });
  }
};
