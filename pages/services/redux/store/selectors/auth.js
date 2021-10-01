import { createSelector } from "reselect";

// auth substate
const selectAuth = (state) => state.auth || {};

export const selectToken = createSelector(selectAuth, (auth) => {
  return auth.token;
});

export const selectAuthError = createSelector(selectAuth, (auth) => {
  return auth.error;
});

export const selectAuthLoading = createSelector(selectAuth, (auth) => {
  return auth.loading;
});
