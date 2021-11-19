import { createSelector } from "reselect";

//Attempt 1
// auth, friend substate
const selectFriend = (state) => state.auth || {};

export const selectToken = createSelector(selectFriend, (auth) => auth.token);

export const selectFriendError = createSelector(selectFriend, (auth) => auth.error);

export const selectFriendLoading = createSelector(
  selectFriend,
  (auth) => auth.loading
);