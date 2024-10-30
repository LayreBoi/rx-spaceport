import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ShootingsStatsComponent} from "./shootings-stats/shootings-stats.component";
import { Store } from '@ngrx/store';
import { shoot, reset } from '../../store/app.actions';
import { selectIsShooting, selectResponse } from '../../store/app.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shooting-range',
  standalone: true,
  imports: [
    MatButton,
    ShootingsStatsComponent
  ],
  templateUrl: './shooting-range.component.html',
  styleUrl: './shooting-range.component.scss'
})
export class ShootingRangeComponent {
  private store = inject(Store);

  response = this.store.selectSignal(selectResponse);
  isShooting = this.store.selectSignal(selectIsShooting);

  shoot() {
    this.store.dispatch(shoot());
  }

  reset() {
    this.store.dispatch(reset())
  }
}
