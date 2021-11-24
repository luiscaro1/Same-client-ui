import { createSelector } from "reselect";

//Attempt 1

const selectFriend = (state) => state.friend || {};

export const selectFriends=createSelector(selectFriend,(friend)=>friend.data);

export const selectFriendship = createSelector(selectFriend, (friend) => friend.friending);

export const selectFriendError = createSelector(selectFriend, (friend) => friend.error);

export const selectFriendLoading = createSelector(
  selectFriend,
  (friend) => friend.loading
);

export const selectNofriend=createSelector(selectFriend,(friend)=>friend.unfriending);