import axios from "axios";
import { reportTypes } from "./types";
import config from "../../../../config";

const { auth_api } = config;

const {REPORT_SUCCESSFUL,REPORT_ERROR}=reportTypes;

//Attempt1 not sure about it
export const addReport =
  ({ uid,user_name,stalking,spamming,offensive,harrasment,discrimination,
    viruses,violationofIP, pretending
}) =>
  async (dispatch, getState) => {
    const state = getState();
    const { auth } = state;
    const uid2=user_name.data.uid2
    if (auth.token) {

      try {
        const res=await axios.post(auth_api.base_url + auth_api._route,{
            uid,
            uid2,
            stalking,
            spamming,
            offensive,
            harrasment,
            discrimination,
            viruses,
            violationofIP,
            pretending

        });

        dispatch({ type: REPORT_SUCCESSFUL, payload:res.data });
      } catch (err) {
        dispatch({ type: REPORT_ERROR, payload: err.response.data });
      }
    } else dispatch({ type: REPORT_ERROR, payload: "Oops try again later" });
  };

