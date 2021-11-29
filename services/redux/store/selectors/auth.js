import { createSelector } from "reselect";

// auth substate
const selectAuth = (state) => state.auth || {};

export const selectToken = createSelector(selectAuth, (auth) => auth.token);

export const selectAuthError = createSelector(selectAuth, (auth) => auth.error);

export const selectAuthLoading = createSelector(
  selectAuth,
  (auth) => auth.loading
);
//temp
export const selectUpdate=createSelector(selectAuth,(auth)=>auth.updated);
// export const selectUpdatedInfo=createSelector(selectAuth,(auth)=>auth.update_user_name);
export const selectEmail=createSelector(selectAuth,(auth)=>auth.email);
export const selectDeleted=createSelector(selectAuth,(auth)=>auth.deleted);
export const selectOtherUser=createSelector(selectAuth,(auth)=>auth.other_user);
export const selectUserError = createSelector(selectAuth, (auth) => auth.user_error);
export const selectUpdateError=createSelector(selectAuth,(auth)=>auth.update_error);
