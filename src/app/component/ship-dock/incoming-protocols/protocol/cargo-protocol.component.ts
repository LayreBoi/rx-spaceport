import {Component, Input, OnInit} from '@angular/core';
import {interval, Observable, scan, takeWhile} from 'rxjs';
import {Cargo} from "../../../../model/ship";
import {CargoComponent} from "../../../shared/cargo/cargo.component";

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
  possibleDots = ['.', '..', '...'];
  dots = this.possibleDots[2];

  ngOnInit(): void {
    this.entries.subscribe({
      next: cargo => this.cargo.push(cargo),
      error: () => this.error = true,
      complete: () => this.completed = true
    });
    interval(800).pipe(
      takeWhile(() => !this.error && !this.completed),
      scan(i => i + 1)
    ).subscribe(i => {
      this.dots = this.possibleDots[i % 3];
    })
  }


}
