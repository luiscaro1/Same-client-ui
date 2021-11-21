import { createSelector } from "reselect";

//Attempt 1

const selectFriend = (state) => state.friend || {};

export const selectFriendship = createSelector(selectFriend, (friend) => friend.friendship);

export const selectFriendError = createSelector(selectFriend, (friend) => friend.error);

export const selectFriendLoading = createSelector(
  selectFriend,
  (friend) => friend.loading
);