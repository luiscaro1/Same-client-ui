import { createSelector } from "reselect";

// auth substate
const selectAuth = (state) => state.auth || {};

export const selectToken = createSelector(selectAuth, (auth) => auth.token);

export const selectAuthError = createSelector(selectAuth, (auth) => auth.error);

export const selectAuthLoading = createSelector(
  selectAuth,
  (auth) => auth.loading
);
