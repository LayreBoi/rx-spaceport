import {AppState} from "./app.reducers";
import {createSelector} from "@ngrx/store";

export const selectAppState = (state: AppState) => state;

export const selectStarted = createSelector(selectAppState, appState => appState.started);
