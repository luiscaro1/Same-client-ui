import { createSelector } from "reselect";

const selectReport = (state)=>state.report || {};

export const selectReported = createSelector(selectReport,(report)=>report.reported);
export const selectError=createSelector(selectReport,(report)=>report.error);

export const selectReportLoading=createSelector(selectReport,(report)=>report.loading);