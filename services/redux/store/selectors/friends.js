import { createSelector } from "reselect";

//Attempt 1

const selectFriend = (state) => state.friend || {};

export const selectFriendship = createSelector(selectFriend, (friend) => friend.friending);

export const selectFriendError = createSelector(selectFriend, (friend) => friend.error);

export const selectFriendLoading = createSelector(
  selectFriend,
  (friend) => friend.loading
);

export const selectNoFriend=createSelector(selectFriend,(friend)=>friend.unfriending);
export const selectFriendCount=createSelector(selectFriend,(friend)=>friend.count);