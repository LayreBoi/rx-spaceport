import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatSidenav} from "@angular/material/sidenav";
import {NgClass} from "@angular/common";
import {generateShip} from "../../../external/generator";
import {Ship} from "../../model/ship";
import * as _ from 'lodash'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatButton,
    MatSidenav,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  queuedShips = [
    generateShip(),
    generateShip(),
    generateShip(),
    generateShip(),
  ]

  @Input() pageToShow = '';
  @Output() pageToShowChange = new EventEmitter<string>();
  @Output() dockShip = new EventEmitter<Ship>();
  @Input() dockingAllowed!: boolean;
  @Output() unloadAllShips = new EventEmitter<void>();

  dockShipClicked(ship: Ship) {
    _.remove(this.queuedShips, queuedShip => queuedShip.id === ship.id);
    this.dockShip.emit(ship);
    this.queuedShips = _.concat(this.queuedShips, generateShip());
  }

  unloadAllShipsClicked() {
    this.unloadAllShips.emit();
  }
}
