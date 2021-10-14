import { gameTypes } from "../actions/types";

const {
  GET_ALL_GAMES,
  GAME_ERROR,
  VIEW_GAME_PAGE,
  GET_LFG_LOBBIES,
  GET_FEED_POSTS,
} = gameTypes;

const initialState = {
  currentGame: {
    data: null,
    lobbies: null,
    posts: null,
  },
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
        currentGame: { ...state.currentGame, data: action.payload },
      };
    }

    case GET_LFG_LOBBIES: {
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          lobbies: action.payload,
        },
      };
    }

    case GET_FEED_POSTS: {
      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          posts: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default gameReducer;
