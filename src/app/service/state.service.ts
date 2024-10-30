import { EventEmitter, Injectable } from '@angular/core';
import { Ship } from '../model/ship';
import { generateShip } from '../../external/generator';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private dockedShips: Ship[] = [];
  private undockedShips: Ship[] = [];

  public updatedDockingEmitter = new EventEmitter<void>();

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.undockedShips.push(generateShip());
    }

    this.dockedShips.push(generateShip());
  }

  public get isDockingAllowed(): boolean {
    return this.dockedShips.length < 3;
  }

  public getDockedShips(): Ship[] {
    return this.dockedShips;
  }

  public getUndockedShips(): Ship[] {
    return this.undockedShips;
  }

  public dockShip(id: string): void {
    if (this.dockedShips.length >= 3) {
      return
    }

    const ship = this.undockedShips.find(ship => ship.id === id);
    if (!ship) {
      return;
    }

    this.dockedShips.push(ship);
    this.undockedShips = this.undockedShips.filter(s => s.id !== id);
    this.undockedShips.push(generateShip());
    this.updatedDockingEmitter.emit();
  }

  public undockShip(ship_id: string): void {
    const shipIndex = this.dockedShips.findIndex(ship => ship?.id === ship_id);
    if (shipIndex === -1) {
      return;
    }
    this.dockedShips.splice(shipIndex, 1);
    this.updatedDockingEmitter.emit();
  }
}
