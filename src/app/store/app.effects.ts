import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {startUp} from "./app.actions";
import {tap} from "rxjs";

export const logStartup$ = createEffect((
    actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(startUp),
      tap(() => {
        console.log('APP STARTED!!!')
      })
    )
  },
  {functional: true, dispatch: false}
);
