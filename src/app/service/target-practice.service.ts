import { Injectable } from '@angular/core';
import {delay, map, Observable, of} from "rxjs";
import {Hit} from "../model/target-practice.model";

@Injectable({
  providedIn: 'root'
})
export class TargetPracticeService {

  constructor() { }

  shoot(): Observable<Hit> {
    new Audio("/laser-shot.mp3").play();
    return of(1).pipe(
      delay(1000),
      map(() => {
        if (this.third()) {
          return 'critical hit';
        } else if (this.third()) {
          throw Error('missed the target!');
        } else {
          return 'hit';
        }
      })
    );
  }

  private third() {
    return Math.random() < 0.333;
  }

}
