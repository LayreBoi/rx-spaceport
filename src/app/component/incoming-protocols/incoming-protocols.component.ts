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
import {Cargo} from "../../model/ship";
import {UnloadService} from "../../service/unload.service";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";

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
    MatTooltip
  ],
  templateUrl: './incoming-protocols.component.html',
  styleUrl: './incoming-protocols.component.scss'
})
export class IncomingProtocolsComponent {

  unloadService = inject(UnloadService);

  $allIncomingCargo: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $allPristineCargo: Observable<Cargo> = this.unloadService.getConveyorBelt();

  $firstFiveCargo: Observable<Cargo> = this.unloadService.getConveyorBelt();

}
