import {Component, Input} from '@angular/core';
import {Ship} from "../../model/ship";
import * as _ from 'lodash'
import {MatIcon} from "@angular/material/icon";
import {CargoComponent} from "../cargo/cargo.component";
import {AsyncPipe, NgClass} from "@angular/common";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {filter, interval, map, scan, tap} from "rxjs";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [
    MatIcon,
    CargoComponent,
    NgClass,
    MatButtonToggle,
    MatSlideToggle,
    FormsModule,
    MatProgressBar,
    MatButton,
    AsyncPipe
  ],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.scss'
})
export class ShipComponent {
  @Input() ship!: Ship;

  randomAnimationStyle = `animation-duration: ${_.random(8, 12)}s; animation-delay: ${_.random(0, 3)}s;`;
  unloadingTicker$ = interval(300).pipe(
    filter(() => this.unloading && this.ship.cargoHold.length > 0)
  );
  unloading = false;
  unloadProgress$ = this.unloadingTicker$.pipe(
    map(() => 10),
    scan((a, b) => (a + b > 100) ? 0 : a + b ),
    tap(v => {
      if (v == 100) {
        this.unloadLastCargo();
      }
    }));

  unloadLastCargo() {
    this.ship.cargoHold.splice(-1, 1);
  }

  uuidToSixth(uuid: string): number {
    return Number("0x" + uuid.substring(0, 8)) % 6;
  }

  undock() {
    this.unloadLastCargo();
  }
}
