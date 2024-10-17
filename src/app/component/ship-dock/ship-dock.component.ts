import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShipComponent} from "../ship/ship.component";
import {ConveyorBeltComponent} from "../conveyor-belt/conveyor-belt.component";
import {Ship} from "../../model/ship";

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
}
