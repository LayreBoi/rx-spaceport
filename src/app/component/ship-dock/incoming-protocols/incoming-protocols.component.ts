import {Component, inject} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {Observable} from "rxjs";
import {CargoProtocolComponent} from "./protocol/cargo-protocol.component";
import {Cargo} from "../../../model/ship";
import {UnloadService} from "../../../service/unload.service";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatCheckbox} from "@angular/material/checkbox";
import {LocalStorageService} from "../../../service/local-storage.service";

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
    // TODO implement here
  );

  $firstFiveCargo: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $onlyNewCargo: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $everythingLikeNew: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $threeMedsAndFoods: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $firstOfEachType: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $ignoreFirstThree: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $lastTwo: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $ignoreLastThree: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $firstTenTons: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $maximumThreeBroken: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $cheatOnFood: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $smallCrates: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

  $errorOnBroken: Observable<Cargo> = this.unloadService.getConveyorBelt().pipe(
    // TODO implement here
  );

}
