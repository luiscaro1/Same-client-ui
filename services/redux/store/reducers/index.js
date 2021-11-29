import { combineReducers } from "redux";
import authReducer from "./auth";
import gameReducer from "./game";
import friendsReducer from "./friends";
import blockReducer from "./block";
import reportReducer from "./report";
import feedbackReducer from "./feedback";

export default combineReducers({
  auth: authReducer,
  game: gameReducer,
  friends: friendsReducer,
  block: blockReducer,
  report: reportReducer,
  feedback: feedbackReducer,
});
