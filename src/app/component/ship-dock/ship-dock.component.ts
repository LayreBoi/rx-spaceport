import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {ShipComponent} from "./ship/ship.component";
import {ConveyorBeltComponent} from "./conveyor-belt/conveyor-belt.component";
import {Cargo, Ship} from "../../model/ship";
import {UnloadService} from "../../service/unload.service";
import {IncomingProtocolsComponent} from "./incoming-protocols/incoming-protocols.component";
import {TasksComponent} from "./tasks/tasks.component";
import { StateService } from '../../service/state.service';

@Component({
  selector: 'app-ship-dock',
  standalone: true,
  imports: [
    ShipComponent,
    ConveyorBeltComponent,
    IncomingProtocolsComponent,
    TasksComponent
  ],
  templateUrl: './ship-dock.component.html',
  styleUrl: './ship-dock.component.scss'
})
export class ShipDockComponent implements OnInit {
  ships: Ship[] = [];

  unloadService = inject(UnloadService);
  stateService = inject(StateService);
  @Input() unloadEmitter!: EventEmitter<void>;
  @Input() stopUnloadingEmitter!: EventEmitter<void>;

  ngOnInit(): void {
    this.updateDockedShips();
    this.stateService.updatedDockingEmitter.subscribe(() => {
      this.updateDockedShips();
    });
  }

  updateDockedShips() {
    this.ships = this.stateService.getDockedShips();
  }

  unload(cargo: Cargo, index: number) {
    this.unloadService.addCargo(cargo, index);
  }
}
