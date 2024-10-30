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
          new Audio("/critical-hit.mp3").play();
          return 'critical hit';
        } else if (this.third()) {
          new Audio("/miss.mp3").play();
          throw Error('missed the target!');
        } else {
          new Audio("/hit.mp3").play();
          return 'hit';
        }
      })
    );
  }

  private third() {
    return Math.random() < 0.333;
  }

}
