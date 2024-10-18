import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Cargo} from "../../../model/ship";
import {CargoComponent} from "../../cargo/cargo.component";

@Component({
  selector: 'app-cargo-protocol',
  standalone: true,
  imports: [
    CargoComponent
  ],
  templateUrl: './cargo-protocol.component.html',
  styleUrl: './cargo-protocol.component.scss'
})
export class CargoProtocolComponent implements OnInit {
  @Input() entries!: Observable<Cargo>;
  cargo: Cargo[] = [];
  error = false;
  completed = false;

  ngOnInit(): void {
    this.entries.subscribe({
      next: cargo => this.cargo.push(cargo),
      error: () => this.error = true,
      complete: () => this.completed = true
    });
  }


}
