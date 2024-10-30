import {AppState} from "./app.reducers";
import {createSelector} from "@ngrx/store";

export const selectAppState = (state: {appState: AppState}) => state.appState;

export const selectStarted = createSelector(selectAppState, appState => appState.started);
