import { authTypes } from "./types";
import axios from "axios";
import config from '../../../../config'
import path from 'path'



const { LOGIN_SUCCESSFUL, LOGIN_FAILED } = authTypes;

const{auth_api} = config


export const login = (credentials) => async (dispatch) => {
  //TODO: copy and paste the login url
  try {
    const res = await axios.post(path.join(auth_api.base_url,auth_api.login_route), credentials);

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
