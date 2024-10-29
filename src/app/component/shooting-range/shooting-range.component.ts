import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TargetPracticeService} from "../../service/target-practice.service";
import {ShootingsStatsComponent} from "./shootings-stats/shootings-stats.component";

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
  private targetPracticeService = inject(TargetPracticeService);

  response = '';
  isShooting = false;

  shoot() {
    this.isShooting = true;
    this.response = '';
    this.targetPracticeService.shoot().subscribe({
      next: value => {
        this.response = value;
        this.isShooting = false;
      },
      error: () => {
        this.response = "miss";
        this.isShooting = false;
      }
    });
  }

  reset() {
    // TODO
  }
}
