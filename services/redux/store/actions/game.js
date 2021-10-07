import axios from "axios";
import { gameTypes } from "./types";
import config from "../../../../config";

const { game_api } = config;

const { GET_ALL_GAMES, GAME_ERROR, VIEW_GAME_PAGE } = gameTypes;

export const getAllGames = () => async (dispatch) => {
  try {
    const res = await axios.get(
      game_api.base_url + game_api.get_all_games_route
    );

    dispatch({ type: GET_ALL_GAMES, payload: res.data });
  } catch (err) {
    dispatch({ type: GAME_ERROR, payload: err });
  }
};

export const getGameById = (id) => async (dispatch) => {
   
  try {
    const res = await axios.get(
      game_api.base_url + game_api.get_game_by_id_route+
      id
    );

    dispatch({ type: VIEW_GAME_PAGE, payload: res.data });
  } catch (err) {
    dispatch({ type: GAME_ERROR, payload: err });
  }
};

export const setCurrentGame = (gameData)=>dispatch=>{
    dispatch({ type: VIEW_GAME_PAGE, payload: gameData });
}
