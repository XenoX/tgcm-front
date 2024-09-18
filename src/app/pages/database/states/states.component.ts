import {Component} from '@angular/core';
import {FeatherModule} from "angular-feather-icons";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {TableColumn, TableHydraComponent} from "../../../shared/components/table/table-hydra.component";

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [
    FeatherModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    TableHydraComponent
  ],
  templateUrl: './states.component.html',
})
export class StatesComponent {
  totalStates?: number;
  totalMoods?: number;
  stateSearch?: string;
  moodSearch?: string;

  stateColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', classes: 'uk-text-bold', sortable: true },
    { key: 'description', label: 'Description', classes: 'uk-table-expand uk-text-justify' },
  ];
  moodColumns: TableColumn[] = [
    { key: 'name', label: 'Nom', classes: 'uk-text-bold', sortable: true },
    { key: 'type', label: 'Type', classes: 'uk-text-capitalize', sortable: true },
    { key: 'description', label: 'Description', classes: 'uk-table-expand uk-text-justify' },
  ];
}
