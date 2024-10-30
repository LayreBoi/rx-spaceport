import {createReducer, on} from "@ngrx/store";
import {crit, hit, miss, reset, shoot, startUp} from "./app.actions";
import { Hit } from "../model/target-practice.model";

export type AppState = {
  started: boolean,
  shots: number,
  hits: number,
  crits: number,
  misses: number,
  isShooting: boolean,
  response: string
};

export const initialAppState: AppState = {
  started: false,
  shots: 0,
  hits: 0,
  crits: 0,
  misses: 0,
  isShooting: false,
  response: ''
};

export const appReducer = createReducer(initialAppState,
  on(startUp, state => {
    return {
      ...state,
      started: true
    }
  }),
  on(reset, state => {
    return {
      ...initialAppState,
      started: true,
      response: ''
    }
  }),
  on(shoot, state => {
    return {
      ...state,
      shots: state.shots + 1,
      response: '',
      isShooting: true
    }
  }),
  on(hit, state => {
    return {
      ...state,
      hits: state.hits + 1,
      response: 'hit',
      isShooting: false
    }
  }),
  on(crit, state => {
    return {
      ...state,
      crits: state.crits + 1,
      response: 'critical hit',
      isShooting: false
    }
  }),
  on(miss, state => {
    return {
      ...state,
      misses: state.misses + 1,
      response: 'miss',
      isShooting: false
    }
  })
);
