import axios from "axios";
import { feedbackTypes } from "./types";
import config from "../../../../config";

const { auth_api } = config;

const {ADD_FEEDBACK_SUCCESSFUL,FEEDBACK_ERROR}=feedbackTypes;

//Attempt1
export const addFeedBack =
  ({ email,webdesign,ratedesign,websitefunctionality,
ratefunctionality,gameavailable,rategames,
generalinformation,rateoverall
}) =>
  async (dispatch, getState) => {
    const state = getState();
    const { auth } = state;

    if (auth.token) {
        const formData = new FormData();
        formData.append("email",email);
        formData.append("webdesign",webdesign);
        formData.append("ratedesign",ratedesign);
        formData.append("websitefunctionality",websitefunctionality);
        formData.append("ratefunctionality",ratefunctionality);
        formData.append("gameavailable",gameavailable);
        formData.append("rategames",rategames);
        formData.append("generalinformation",generalinformation);
        formData.append("rateoverall",rateoverall);
      try {
        const res=await axios.post(auth_api.base_url + auth_api.add_feedback_route,formData);

        dispatch({ type: ADD_FEEDBACK_SUCCESSFUL, payload:res.data });
      } catch (err) {
        dispatch({ type: FEEDBACK_ERROR, payload: err.response.data });
      }
    } else dispatch({ type: FEEDBACK_ERROR, payload: "Missing one of the required fields" });
  };

