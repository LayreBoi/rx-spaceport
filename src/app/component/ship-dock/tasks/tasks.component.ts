import {Component, inject} from '@angular/core';
import {MatCheckbox} from "@angular/material/checkbox";
import {LocalStorageService} from "../../../service/local-storage.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    MatCheckbox
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  ls = inject(LocalStorageService);

}
