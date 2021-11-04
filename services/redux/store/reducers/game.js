import { sendMessage } from "../actions/game";
import { gameTypes } from "../actions/types";

const {
  GET_ALL_GAMES,
  GAME_ERROR,
  VIEW_GAME_PAGE,
  GET_LFG_LOBBIES,
  GET_FEED_POSTS,
  GET_USER_LFG_LOBBIES,
  VIEW_LOBBY_PAGE,
  GET_LOBBY_MESSAGES,
  SEND_MESSAGE,
} = gameTypes;

const initialState = {
  currentGame: {
    data: null,
    lobbies: null,
    posts: null,
    loadingLobbies: true,
    loadingPosts: true,
  },
  games: null,
  error: null,
  userLobbies: null,
  loading: true,

  currentLobby: {
    loadingMessages: true,
    loadingLobby: true,
    data: null,
    messages: [],
  },
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
          loadingLobbies: false,
          ...state.currentGame,
          lobbies: action.payload,
        },
      };
    }

    case GET_FEED_POSTS: {
      return {
        ...state,
        currentGame: {
          loadingPosts: false,
          ...state.currentGame,
          posts: action.payload,
        },
      };
    }

    case GET_USER_LFG_LOBBIES: {
      return {
        ...state,
        userLobbies: action.payload,
      };
    }

    case VIEW_LOBBY_PAGE: {
      return {
        ...state,
        currentLobby: {
          ...state.currentLobby,
          loadingLobby: false,
          data: action.payload,
        },
      };
    }

    case GET_LOBBY_MESSAGES: {
      return {
        ...state,
        currentLobby: {
          ...state.currentLobby,
          loadingMessages: false,
          messages: action.payload,
        },
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        currentLobby: {
          ...state.currentLobby,
          messages:
            action.payload.constructor === Array
              ? state.currentLobby.messages.concat(action.payload)
              : state.currentLobby.messages.concat([action.payload]),
        },
      };
    }

    default:
      return state;
  }
};

export default gameReducer;
