import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {CargoComponent} from "../cargo/cargo.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {UnloadService} from "../../service/unload.service";
import {Cargo} from "../../model/ship";

@Component({
  selector: 'app-conveyor-belt',
  standalone: true,
  imports: [
    AsyncPipe,
    CargoComponent,
    MatSlideToggle,
    FormsModule
  ],
  templateUrl: './conveyor-belt.component.html',
  styleUrl: './conveyor-belt.component.scss'
})
export class ConveyorBeltComponent implements OnInit {

  connect = [false, false, false];

  storedCargo: Cargo[] = [];

  unloadService = inject(UnloadService);

  ngOnInit() {
    this.initConveyorBelt();
  }

  toggled(index: number) {
    this.connect[index] = !this.connect[index];
    this.unloadService.toggleDockingChannel(this.connect[index]);
  }

  initConveyorBelt() {
    this.unloadService.getConveyorBelt()
    .subscribe(cargo => {
      this.storedCargo.push(cargo);
    })
  }

}
