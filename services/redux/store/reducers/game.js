import { gameTypes } from "../actions/types";

const { GET_ALL_GAMES, GAME_ERROR, VIEW_GAME_PAGE } = gameTypes;

const initialState = {
  currentGame: null,
  games: null,
  error: null,
  loading: true,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GAMES: {
      return {
        ...state,
        games: action.payload,
        error: null,
        loading: false,
      };
    }

    case GAME_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case VIEW_GAME_PAGE: {
      return {
        ...state,
        currentGame: action.payload,
      };
    }

    default:
      return state;
  }
};

export default gameReducer;
