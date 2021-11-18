import axios from "axios";
import { feedbackTypes } from "./types";
import config from "../../../../config";

const { auth_api } = config;

const {ADD_FEEDBACK_SUCCESSFUL,FEEDBACK_ERROR}=feedbackTypes;

//Attempt1
// export const addFeedBack =
//   ({ email,webdesign,ratedesign,}) =>
//   async (dispatch, getState) => {

//     const { auth } = state;

//     if (auth.token) {
//        something

//       try {
//         await axios.post(auth_api.base_url + auth_api.add_feedback_route, formData);

//         dispatch({ type: ADD_FEEDBACK_SUCCESSFUL });
//       } catch (err) {
//         dispatch({ type: FEEDBACK_ERROR, payload: err });
//       }
//     } else dispatch({ type: FEEDBACK_ERROR, payload: "Missing one of the required fields" });
//   };

