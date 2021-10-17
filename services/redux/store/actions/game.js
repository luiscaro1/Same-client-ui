import axios from "axios";
import { gameTypes } from "./types";
import config from "../../../../config";

const { game_api } = config;

const {
  GET_ALL_GAMES,
  GAME_ERROR,
  VIEW_GAME_PAGE,
  GET_LFG_LOBBIES,
  ADD_LOBBY,
  GET_FEED_POSTS,
  ADD_POST,
  JOIN_LOBBY,
} = gameTypes;

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

export const getPostsById = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      game_api.base_url + game_api.get_feed_posts_route + id
    );

    dispatch({ type: GET_FEED_POSTS, payload: res.data });
  } catch (err) {
    dispatch({ type: GAME_ERROR, payload: err });
  }
};

export const getGameById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      game_api.base_url + game_api.get_game_by_id_route + id
    );

    dispatch({ type: VIEW_GAME_PAGE, payload: res.data });
  } catch (err) {
    dispatch({ type: GAME_ERROR, payload: err });
  }
};

export const setCurrentGame = (gameData) => (dispatch) => {
  dispatch({ type: VIEW_GAME_PAGE, payload: gameData });
};

export const getLfgLobbies = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      game_api.base_url + game_api.get_lfg_lobbies_route + id
    );

    dispatch({ type: GET_LFG_LOBBIES, payload: res.data });
  } catch (err) {
    dispatch({ type: GAME_ERROR, payload: err });
  }
};

export const addLfgLobby = (lobby) => async (dispatch, getState) => {
  const state = getState();

  const { auth, game } = state;

  if (auth.token && game.currentGame) {
    try {
      await axios.post(game_api.base_url + game_api.create_lfg_lobby_route, {
        ...lobby,
        gid: game.currentGame.data.gid,
        uid: auth.token.uid,
      });

      dispatch({ type: ADD_LOBBY });
    } catch (err) {
      dispatch({ type: GAME_ERROR, payload: err });
    }
  } else dispatch({ type: GAME_ERROR, payload: "Missing user or game data" });
};

export const addFeedPost =
  ({ text, files }) =>
  async (dispatch, getState) => {
    const state = getState();

    const { auth, game } = state;

    if (auth.token && game.currentGame) {
      console.log(files);
      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      formData.append("text", text);
      formData.append("gid", game.currentGame.data.gid);
      formData.append("uid", auth.token.uid);

      try {
        await axios.post(game_api.base_url + game_api.add_post_route, formData);

        dispatch({ type: ADD_POST });
      } catch (err) {
        dispatch({ type: GAME_ERROR, payload: err });
      }
    } else dispatch({ type: GAME_ERROR, payload: "Missing user or game data" });
  };

export const joinLobby = (lid) => async (dispatch, getState) => {
  const state = getState();

  const { auth, game } = state;

  if (auth.token && game.currentGame) {
    try {
      await axios.post(game_api.base_url + game_api.join_lobby_route, {
        lid,
        gid: game.currentGame.data.gid,
        uid: auth.token.uid,
      });

      dispatch({ type: JOIN_LOBBY });
    } catch (err) {
      dispatch({ type: GAME_ERROR, payload: err });
    }
  } else dispatch({ type: GAME_ERROR, payload: "Missing user or game data" });
};
