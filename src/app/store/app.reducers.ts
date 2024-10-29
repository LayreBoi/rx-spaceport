import {createReducer, on} from "@ngrx/store";
import {startUp} from "./app.actions";

export type AppState = {
  started: boolean
};

export const initialAppState: AppState = {
  started: false
};

export const appReducer = createReducer(initialAppState,
  on(startUp, state => {
    return {
      ...state,
      started: true
    }
  }));
