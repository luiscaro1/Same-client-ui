import { combineReducers } from "redux";
import authReducer from "./auth";
import gameReducer from "./game";

export default combineReducers({
  auth: authReducer,
  game: gameReducer,
});
