import {Component} from '@angular/core';
import {generateShip} from "../../../external/generator";
import {ShipComponent} from "../ship/ship.component";

@Component({
  selector: 'app-ship-dock',
  standalone: true,
  imports: [
    ShipComponent
  ],
  templateUrl: './ship-dock.component.html',
  styleUrl: './ship-dock.component.scss'
})
export class ShipDockComponent {
  ships = [
    generateShip(),
    generateShip(),
    generateShip(),
    generateShip(),
  ];

}
