import {Injectable} from '@angular/core';
import {filter, map, merge, Observable, Subject} from "rxjs";
import {Cargo} from "../model/ship";

@Injectable({
  providedIn: 'root'
})
export class UnloadService {

  private dockingChannel: Subject<{
    cargo: Cargo,
    index: number
  }> = new Subject();
  private dockingChannelActive = [false, false, false];

  getConveyorBelt(): Observable<Cargo> {
    return this.dockingChannel.asObservable().pipe(
      filter((v) => this.dockingChannelActive[v.index]),
      map((v) => v.cargo)
    );
  }

  toggleDockingChannel(toggles: number, toggle: boolean) {
    this.dockingChannelActive[toggles] = toggle;
  }

  addCargo(cargo: Cargo, index: number) {
    this.dockingChannel.next({cargo, index});
  }

  close() {
    this.dockingChannel.complete();
  }

  restart() {
    this.dockingChannel = new Subject();
  }
}
