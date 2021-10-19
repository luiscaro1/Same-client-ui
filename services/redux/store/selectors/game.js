import { createSelector } from "reselect";

const selectGame = (state) => state.game || {};

export const selectGames = createSelector(selectGame, (game) => game.games);
export const selectError = createSelector(selectGame, (game) => game.Error);
export const selectGameLoading = createSelector(
  selectGame,
  (game) => game.loading
);

export const selectCurrentGame = createSelector(
  selectGame,
  (game) => game.currentGame
);
export const selectUserLobbies = createSelector(
  selectGame,
  (game) => game.userLobbies
);
export const selectCurrentLobby = createSelector(
  selectGame,
  (game) => game.currentLobby
);
