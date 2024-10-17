import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {CargoComponent} from "../cargo/cargo.component";

@Component({
  selector: 'app-conveyor-belt',
  standalone: true,
  imports: [
    AsyncPipe,
    CargoComponent
  ],
  templateUrl: './conveyor-belt.component.html',
  styleUrl: './conveyor-belt.component.scss'
})
export class ConveyorBeltComponent {

}
