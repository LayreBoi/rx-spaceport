import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ShipComponent} from "./component/ship-dock/ship/ship.component";
import {ShipDockComponent} from "./component/ship-dock/ship-dock.component";
import {MatButton} from "@angular/material/button";
import {MenuComponent} from "./component/menu/menu.component";
import {HelpPageComponent} from "./component/help-page/help-page.component";
import {Ship} from "./model/ship";
import * as _ from 'lodash';
import {generateShip} from "../external/generator";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    ShipComponent,
    ShipDockComponent,
    MatButton,
    MenuComponent,
    HelpPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rx-spaceport';
  pageToShow = 'ship-dock';

  dockedShips: Ship[] = [];
  dockingAllowed = true;
  unloadEmitter = new EventEmitter<void>();
  stopUnloadingEmitter = new EventEmitter<void>();

  addShip(ship: Ship) {
    this.dockedShips = _.concat(this.dockedShips, ship);
    this.updateDockingAllowance();
  }

  undock(ship: Ship) {
    _.remove(this.dockedShips, dockedShip => dockedShip.id === ship.id);
    this.updateDockingAllowance();
  }

  updateDockingAllowance() {
    this.dockingAllowed = this.dockedShips.length < 3;
  }

  unloadAllShips() {
    this.unloadEmitter.emit();
  }

  stopUnloading() {
    this.stopUnloadingEmitter.emit();
  }
}
