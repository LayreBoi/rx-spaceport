import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgClass} from "@angular/common";
import {CargoComponent} from "../../shared/cargo/cargo.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {UnloadService} from "../../../service/unload.service";
import {Cargo} from "../../../model/ship";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-conveyor-belt',
  standalone: true,
  imports: [
    AsyncPipe,
    CargoComponent,
    MatSlideToggle,
    FormsModule,
    MatButton,
    NgClass
  ],
  templateUrl: './conveyor-belt.component.html',
  styleUrl: './conveyor-belt.component.scss'
})
export class ConveyorBeltComponent implements OnInit {

  connect = [false, false, false];
  storedCargo: Cargo[] = [];
  unloadService = inject(UnloadService);
  isBeltClosed = false;

  ngOnInit() {
    this.initConveyorBelt();
    this.toggled(0);
  }

  toggled(index: number) {
    this.connect[index] = !this.connect[index];
    this.unloadService.toggleDockingChannel(index, this.connect[index]);
  }

  initConveyorBelt() {
    this.unloadService.getConveyorBelt()
    .subscribe({
      next: cargo => this.storedCargo.push(cargo),
      error: () => 0, // do nothing
      complete: () => this.isBeltClosed = true
    });
  }

  close() {
    this.unloadService.close();
  }

  restart() {
    this.unloadService.restart();
    this.isBeltClosed = false;
    this.initConveyorBelt();
  }
}
