import {Injectable} from '@angular/core';
import {filter, Observable, Subject} from "rxjs";
import {Cargo} from "../model/ship";

@Injectable({
  providedIn: 'root'
})
export class UnloadService {

  private dockingChannel: Subject<Cargo> = new Subject();
  private dockingChannelActive = false;

  getConveyorBelt(): Observable<Cargo> {
    return this.dockingChannel.asObservable().pipe(
      filter(() => this.dockingChannelActive)
    );
  }

  toggleDockingChannel(toggle: boolean) {
    this.dockingChannelActive = toggle;
  }

  addCargo(cargo: Cargo, index: number) {
    if (index === 0) {
      this.dockingChannel.next(cargo);
    }
  }


}
