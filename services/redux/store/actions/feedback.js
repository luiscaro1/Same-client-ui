import axios from "axios";
import { feedbackTypes } from "./types";
import config from "../../../../config";

const { auth_api } = config;

const {ADD_FEEDBACK_SUCCESSFUL,FEEDBACK_ERROR}=feedbackTypes;

//Attempt1
export const addFeedBack =
  ({ email,websitedesign,ratedesign,websitefunctionality,
ratefunctionality,gameavailable,rategames,
generalinformation,rateoverall
}) =>
  async (dispatch, getState) => {
    const state = getState();
    const { auth} = state;

    if (auth.token) {
        
      try {
        const res=await axios.post(auth_api.base_url + auth_api.add_feedback_route,
          {email,
          websitedesign,
          ratedesign,
          websitefunctionality,
          ratefunctionality,
          gameavailable,
          rategames,
          generalinformation,
          rateoverall}
          );
        dispatch({ type: ADD_FEEDBACK_SUCCESSFUL, payload:res.data });
      } catch (err) {
        dispatch({ type: FEEDBACK_ERROR, payload: err.response.data });
      }
    } else dispatch({ type: FEEDBACK_ERROR, payload: "Missing one of the required fields" });
  };

