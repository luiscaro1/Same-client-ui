import { createSelector } from "reselect";

//Attempt 1
// auth substate
const selectBlock = (state) => state.auth || {};

export const selectToken = createSelector(selectBlock, (auth) => auth.token);

export const selectBlockError = createSelector(selectBlock, (auth) => auth.error);

export const selectBlockLoading = createSelector(
  selectBlock,
  (auth) => auth.loading
);