import {Component, inject} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {filter, map, merge, Observable, of, repeat, scan, switchMap, take, takeWhile, tap} from "rxjs";
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

  $allPristineCargo: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $firstFiveCargo: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $onlyNewCargo: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $everythingLikeNew: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $threeMedsAndFoods: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $firstOfEachType: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $ignoreFirstThree: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $lastTwo: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $ignoreLastThree: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $firstTenTons: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $maximumThreeBroken: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $cheatOnFood: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $smallCrates: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $errorOnBroken: Observable<Cargo> = this.unloadService.getConveyorBelt();

  // TODO WINTER three food and med gemerged hier

  // TODO WINTER first 10 (but fill)

}
