import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatSidenav} from "@angular/material/sidenav";
import {NgClass} from "@angular/common";
import {generateShip} from "../../../external/generator";
import {Ship} from "../../model/ship";
import * as _ from 'lodash'
import { StateService } from '../../service/state.service';

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
export class MenuComponent implements OnInit {
  queuedShips: Ship[] = [];
  dockingAllowed = false;
  stateService = inject(StateService);

  @Input() pageToShow = '';
  @Output() pageToShowChange = new EventEmitter<string>();
  // @Output() dockShip = new EventEmitter<Ship>();
  // @Input() dockingAllowed!: boolean;
  @Output() unloadAllShips = new EventEmitter<void>();
  @Output() stopUnloading = new EventEmitter<void>();

  ngOnInit(): void {
    this.stateService.updatedDockingEmitter.subscribe(() => {
      this.updateDocking();
    });

    this.updateDocking();
  }

  updateDocking(): void {
    this.dockingAllowed = this.stateService.isDockingAllowed;
    this.queuedShips = this.stateService.getUndockedShips();
  }

  dockShipClicked(ship: Ship) {
    // _.remove(this.queuedShips, queuedShip => queuedShip.id === ship.id);
    // this.dockShip.emit(ship);
    // this.queuedShips = _.concat(this.queuedShips, generateShip());

    this.stateService.dockShip(ship.id);
  }

  unloadAllShipsClicked() {
    this.unloadAllShips.emit();
  }

  stopUnloadingClicked() {
    this.stopUnloading.emit();
  }
}
