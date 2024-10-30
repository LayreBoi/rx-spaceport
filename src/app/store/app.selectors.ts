import {AppState} from "./app.reducers";
import {createSelector} from "@ngrx/store";

export const selectAppState = (state: {appState: AppState}) => state.appState;

export const selectStarted = createSelector(selectAppState, appState => appState.started);
export const selectShots = createSelector(selectAppState, appState => appState.shots);
export const selectHits = createSelector(selectAppState, appState => appState.hits);
export const selectCrits = createSelector(selectAppState, appState => appState.crits);
export const selectMisses = createSelector(selectAppState, appState => appState.misses);
export const selectIsShooting = createSelector(selectAppState, appState => appState.isShooting);
export const selectResponse = createSelector(selectAppState, appState => appState.response);
