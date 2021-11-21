import { createSelector } from "reselect";

const selectFeedback = (state)=>state.feedback || {};

export const selectSubmittedFeed = createSelector(selectFeedback,(feedback)=>feedback.submit_feed);
export const selectError=createSelector(selectFeedback,(feedback)=>feedback.error);

export const selectLoading=createSelector(selectFeedback,(feedback)=>feedback.loading);