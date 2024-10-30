import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {crit, hit, miss, shoot, startUp} from "./app.actions";
import {catchError, exhaustMap, map, of, switchMap, tap} from "rxjs";
import { TargetPracticeService } from "../service/target-practice.service";

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

export const shooting$ = createEffect((
  (
    action$ = inject(Actions),
    targetPracticeService = inject(TargetPracticeService)
  ) => {
    return action$.pipe(
      ofType(shoot),
      exhaustMap(() =>
        targetPracticeService.shoot().pipe(
          map(result => result === 'critical hit' ? crit() : hit()),
          catchError(() => of(miss()))
        )
      )
    )
  }),
  {functional: true}
);
