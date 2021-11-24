import { createSelector } from "reselect";

//Attempt 1
// auth substate
const selectBlock = (state) => state.block || {};

export const selectBlocked = createSelector(selectBlock, (block) => block.blocked);

export const selectBlockError = createSelector(selectBlock, (block) => block.error);

export const selectBlockLoading = createSelector(
  selectBlock,
  (block) => block.loading
);

export const selectUnblocked=createSelector(selectBlock,(block)=>block.unblocked);