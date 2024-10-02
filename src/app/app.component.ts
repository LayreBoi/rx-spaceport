import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {ShipComponent} from "./component/ship/ship.component";
import {ShipDockComponent} from "./component/ship-dock/ship-dock.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggle,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    ShipComponent,
    ShipDockComponent,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rx-spaceport';
}
