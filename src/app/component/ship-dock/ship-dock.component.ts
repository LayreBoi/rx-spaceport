import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {ShipComponent} from "../ship/ship.component";
import {ConveyorBeltComponent} from "../conveyor-belt/conveyor-belt.component";
import {Cargo, Ship} from "../../model/ship";
import {UnloadService} from "../../service/unload.service";

@Component({
  selector: 'app-ship-dock',
  standalone: true,
  imports: [
    ShipComponent,
    ConveyorBeltComponent
  ],
  templateUrl: './ship-dock.component.html',
  styleUrl: './ship-dock.component.scss'
})
export class ShipDockComponent {
  @Input() ships: Ship[] = [];
  @Output() undock = new EventEmitter<Ship>();

  unloadService = inject(UnloadService);

  unload(cargo: Cargo, index: number) {
    this.unloadService.addCargo(cargo, index);
  }
}
