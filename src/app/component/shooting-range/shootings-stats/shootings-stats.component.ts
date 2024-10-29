import { Component } from '@angular/core';

@Component({
  selector: 'app-shootings-stats',
  standalone: true,
  imports: [],
  templateUrl: './shootings-stats.component.html',
  styleUrl: './shootings-stats.component.scss'
})
export class ShootingsStatsComponent {

  shots = 0;
  hits = 0;
  crits = 0;
  misses = 0;

}
