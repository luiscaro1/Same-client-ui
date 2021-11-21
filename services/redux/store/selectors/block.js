import { createSelector } from "reselect";

//Attempt 1
// auth substate
const selectBlock = (state) => state.block || {};

export const selectBlocked = createSelector(selectBlock, (block) => auth.blocked);

export const selectBlockError = createSelector(selectBlock, (block) => block.error);

export const selectBlockLoading = createSelector(
  selectBlock,
  (block) => block.loading
);