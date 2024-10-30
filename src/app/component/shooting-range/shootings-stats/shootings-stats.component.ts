import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCrits, selectHits, selectMisses, selectShots } from '../../../store/app.selectors';

@Component({
  selector: 'app-shootings-stats',
  standalone: true,
  imports: [],
  templateUrl: './shootings-stats.component.html',
  styleUrl: './shootings-stats.component.scss'
})
export class ShootingsStatsComponent {

  private store = inject(Store);

  shots = this.store.selectSignal(selectShots);
  hits = this.store.selectSignal(selectHits);
  crits = this.store.selectSignal(selectCrits);
  misses = this.store.selectSignal(selectMisses);

}
