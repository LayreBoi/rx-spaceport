import {createAction} from "@ngrx/store";

export const startUp = createAction('[Test] start up');

export const shoot = createAction('[Target Practice] shoot');
export const hit = createAction('[Target Practice] hit');
export const crit = createAction('[Target Practice] crit');
export const miss = createAction('[Target Practice] miss');

export const reset = createAction('[Target Practice] reset');
