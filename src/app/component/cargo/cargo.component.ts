import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Cargo} from "../../model/ship";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-cargo',
  standalone: true,
  imports: [
    MatIcon,
    NgClass
  ],
  templateUrl: './cargo.component.html',
  styleUrl: './cargo.component.scss'
})
export class CargoComponent {

  @Input() cargo!: Cargo;
  @Input() unloadingProgress = 0;

}
