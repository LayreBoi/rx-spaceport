import {Component, inject} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {distinct, distinctUntilChanged, filter, flatMap, map, merge, mergeMap, Observable, of, repeat, scan, skip, skipLast, switchMap, take, takeLast, tap, throwError} from "rxjs";
import {CargoProtocolComponent} from "./protocol/cargo-protocol.component";
import {Cargo} from "../../../model/ship";
import {UnloadService} from "../../../service/unload.service";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatCheckbox} from "@angular/material/checkbox";
import {LocalStorageService} from "../../../service/local-storage.service";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-incoming-protocols',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    CargoProtocolComponent,
    MatIcon,
    MatTooltip,
    MatCheckbox
  ],
  templateUrl: './incoming-protocols.component.html',
  styleUrl: './incoming-protocols.component.scss'
})
export class IncomingProtocolsComponent {

  ls = inject(LocalStorageService);
  unloadService = inject(UnloadService);

  $allIncomingCargo: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $allPristineCargo: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    filter(cargo => !cargo.broken)
  );

  $firstFiveCargo: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    take(5)
  );

  $onlyNewCargo: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    distinct(cargo => cargo.type)
  );

  $everythingLikeNew: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    map(cargo => {
      if (cargo.broken) return {
        ...cargo,
        broken: false
      }
      return cargo;
    })
  );

  $threeMedsAndFoods: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    filter(cargo => cargo.type === 'Medicine' || cargo.type === 'Food'),
    take(6),
    map(cargo => {
      if (cargo.broken) return {
        ...cargo,
        broken: false
      }
      return cargo;
    })
  );

  $firstOfEachType: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    distinctUntilChanged((previousCargo, currentCargo) => previousCargo.type === currentCargo.type)
  );

  $ignoreFirstThree: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    skip(3)
  );

  $lastTwo: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    takeLast(2)
  );

  $ignoreLastThree: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    skipLast(3)
  );

  sum: number = 0;

  $firstTenTons: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    tap(cargo => this.sum += cargo.size),
    scan<Cargo, [number, Cargo | undefined]>((acc, cargo) => [acc[0] + cargo.size, cargo], [0, undefined]),
    filter(tuple => tuple[0] <= 10),
    map(tuple => tuple[1]!)
  );

  sum2: number = 0;

  $maximumThreeBroken: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    map(cargo => {
      if (cargo.broken && this.sum2 < 3) {
        this.sum2++;
        return cargo;
      }
      if (cargo.broken && this.sum2 >= 3) {
        return undefined;
      }
      return cargo;
    }),
    filter(cargo => cargo !== undefined),
  );

  $cheatOnFood: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // switchMap(cargo => of(merge(
    //   of(cargo),
    //   of({...cargo} as Cargo).pipe(
    //     repeat(2),
    //     filter(() => cargo.type === 'Food')
    //   )
    // )))
  );

  $smallCrates: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    switchMap(cargo => of({
      ...cargo,
      id: uuidv4(), // Avoid warning about duplicate keys
      size: 1
    } as Cargo).pipe(repeat(cargo.size)))
  );

  $errorOnBroken: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    mergeMap(cargo => {
      if (cargo.broken) {
        return throwError(() => new Error('Broken cargo found'));
      }
      return of(cargo);
    })
  );
}
